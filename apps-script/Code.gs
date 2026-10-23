const LEADS_HEADERS_ = [
  'Fecha',
  'Nombre',
  'Teléfono',
  'Servicio',
  'Fecha/hora preferida',
  'Nota',
  'Estado',
  'Origen',
  'Escribir',
];
const IP_RATE_WINDOW_MS_ = 10 * 60 * 1000;
const IP_RATE_LIMIT_ = 3;
const IDEMPOTENCY_RETENTION_MS_ = 24 * 60 * 60 * 1000;

function doPost(e) {
  let payload;
  try {
    payload = JSON.parse(e && e.postData ? e.postData.contents : '');
  } catch (_) {
    return jsonOutput_('INVALID', 'Solicitud inválida.');
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return jsonOutput_('INVALID', 'Solicitud inválida.');
  }
  if (payload.honeypot !== undefined && payload.honeypot !== null && String(payload.honeypot).trim() !== '') {
    return jsonOutput_('OK', 'Solicitud aceptada.');
  }

  const properties = PropertiesService.getScriptProperties();
  const expectedToken = properties.getProperty('APPS_SCRIPT_TOKEN');
  if (!expectedToken || typeof payload.token !== 'string' || payload.token !== expectedToken) {
    return jsonOutput_('UNAUTHORIZED', 'No autorizado.');
  }

  const lead = validateLead_(payload);
  if (!lead) return jsonOutput_('INVALID', 'Solicitud inválida.');

  const spreadsheetId = properties.getProperty('SPREADSHEET_ID');
  if (!spreadsheetId) {
    logLeadDiagnostic_('LEAD_ERROR_SPREADSHEET_ID_MISSING');
    return jsonOutput_('ERROR', 'No fue posible guardar la solicitud.');
  }

  const lock = LockService.getScriptLock();
  let stage = 'LOCK_WAIT';
  try {
    lock.waitLock(10000);
    stage = 'SPREADSHEET_OPEN';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    stage = 'TAB_LOOKUP';
    const sheet = spreadsheet.getSheetByName('Leads');
    if (!sheet) {
      logLeadDiagnostic_('LEAD_ERROR_TAB_MISSING');
      return jsonOutput_('ERROR', 'No fue posible guardar la solicitud.');
    }
    stage = 'HEADERS_CHECK';
    if (!hasExpectedHeaders_(sheet)) {
      logLeadDiagnostic_('LEAD_ERROR_HEADERS_MISMATCH');
      return jsonOutput_('ERROR', 'No fue posible guardar la solicitud.');
    }

    const now = Date.now();
    stage = 'IDEMPOTENCY_CLEANUP';
    cleanupIdempotencyProperties_(properties, now);
    const submissionKey = `lead_${lead.submissionId}`;
    const priorState = properties.getProperty(submissionKey);
    if (priorState && priorState.indexOf('DONE:') === 0) {
      logLeadDiagnostic_('LEAD_RESULT_DUPLICATE');
      return jsonOutput_('OK', 'Solicitud ya registrada.', true);
    }
    if (priorState && priorState.indexOf('PENDING:') === 0) {
      stage = 'PENDING_ROW_CHECK';
      if (findSubmissionRow_(sheet, lead.submissionId)) {
        properties.setProperty(submissionKey, `DONE:${now}`);
        logLeadDiagnostic_('LEAD_RESULT_DUPLICATE');
        return jsonOutput_('OK', 'Solicitud ya registrada.', true);
      }
      logLeadDiagnostic_('LEAD_ERROR_PENDING_NO_ROW');
      return jsonOutput_('ERROR', 'No fue posible confirmar la solicitud.');
    }
    stage = 'SUBMISSION_ROW_CHECK';
    if (findSubmissionRow_(sheet, lead.submissionId)) {
      properties.setProperty(submissionKey, `DONE:${now}`);
      logLeadDiagnostic_('LEAD_RESULT_DUPLICATE');
      return jsonOutput_('OK', 'Solicitud ya registrada.', true);
    }

    const rateKey = `rate_${lead.ipHash}`;
    stage = 'RATE_LIMIT_CHECK';
    const recentAttempts = readRecentAttempts_(properties, rateKey, now);
    if (recentAttempts.length >= IP_RATE_LIMIT_) {
      logLeadDiagnostic_('LEAD_RESULT_RATE_LIMIT');
      return jsonOutput_('RATE_LIMIT', 'Se alcanzó el límite de solicitudes.');
    }
    recentAttempts.push(now);
    properties.setProperty(rateKey, JSON.stringify(recentAttempts));
    properties.setProperty(submissionKey, `PENDING:${now}`);

    stage = 'ROW_WRITE';
    appendLead_(sheet, lead, now);
    const row = sheet.getLastRow();
    stage = 'ROW_NOTE_WRITE';
    sheet.getRange(row, 1).setNote(`submissionId:${lead.submissionId}`);
    stage = 'IDEMPOTENCY_DONE_WRITE';
    properties.setProperty(submissionKey, `DONE:${now}`);
    logLeadDiagnostic_('LEAD_RESULT_OK');
    return jsonOutput_('OK', 'Solicitud registrada.', false);
  } catch (_) {
    logLeadDiagnostic_(`LEAD_FAILURE_STAGE_${stage}`);
    return jsonOutput_('ERROR', 'No fue posible guardar la solicitud.');
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function logLeadDiagnostic_(code) {
  try {
    Logger.log(code);
  } catch (_) {}
}

function validateLead_(payload) {
  if (
    typeof payload.submissionId !== 'string' ||
    !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(payload.submissionId) ||
    typeof payload.name !== 'string' ||
    typeof payload.phone !== 'string' ||
    typeof payload.service !== 'string' ||
    typeof payload.preferredDateTime !== 'string' ||
    (payload.note !== undefined && typeof payload.note !== 'string') ||
    !['web', 'maps', 'instagram'].includes(payload.origin) ||
    typeof payload.ipHash !== 'string' ||
    !/^[a-f0-9]{64}$/i.test(payload.ipHash)
  ) {
    return null;
  }

  const name = payload.name.trim();
  const service = payload.service.trim();
  const preferredDateTime = payload.preferredDateTime.trim();
  const note = (payload.note || '').trim();
  if (
    !name || name.length > 120 ||
    !/^3\d{9}$/.test(payload.phone) ||
    !service || service.length > 120 ||
    !preferredDateTime || preferredDateTime.length > 64 ||
    note.length > 500
  ) {
    return null;
  }

  return {
    submissionId: payload.submissionId.toLowerCase(),
    name,
    phone: payload.phone,
    service,
    preferredDateTime,
    note,
    origin: payload.origin,
    ipHash: payload.ipHash.toLowerCase(),
  };
}

function appendLead_(sheet, lead, timestamp) {
  const row = sheet.getLastRow() + 1;
  const date = Utilities.formatDate(new Date(timestamp), 'America/Bogota', 'yyyy-MM-dd HH:mm:ss');
  const values = [
    date,
    lead.name,
    lead.phone,
    lead.service,
    lead.preferredDateTime,
    lead.note,
    'nuevo',
    lead.origin,
  ].map(safeCellText_);

  sheet.getRange(row, 1, 1, 8).setNumberFormat('@');
  sheet.getRange(row, 1, 1, 8).setValues([values]);
  sheet.getRange(row, 9).setRichTextValue(createWhatsAppLink_(lead.name, lead.phone, lead.service));
}

function createWhatsAppLink_(name, phone, service) {
  const message = `Hola ${name}, recibimos tu solicitud para ${service}. ¿Te gustaría confirmar?`;
  const url = `https://wa.me/57${phone}?text=${encodeURIComponent(message)}`;
  return SpreadsheetApp.newRichTextValue().setText('Escribir').setLinkUrl(url).build();
}

function safeCellText_(value) {
  const text = String(value == null ? '' : value);
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function readRecentAttempts_(properties, key, now) {
  const stored = properties.getProperty(key);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((timestamp) => Number.isFinite(timestamp) && now - timestamp < IP_RATE_WINDOW_MS_);
  } catch (_) {
    return [];
  }
}

function cleanupIdempotencyProperties_(properties, now) {
  const all = properties.getProperties();
  Object.keys(all).forEach((key) => {
    if (key.indexOf('lead_') !== 0 || all[key].indexOf('DONE:') !== 0) return;
    const completedAt = Number(all[key].slice(5));
    if (Number.isFinite(completedAt) && now - completedAt > IDEMPOTENCY_RETENTION_MS_) {
      properties.deleteProperty(key);
    }
  });
}

function findSubmissionRow_(sheet, submissionId) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  const notes = sheet.getRange(2, 1, lastRow - 1, 1).getNotes();
  return notes.some(([note]) => note === `submissionId:${submissionId}`);
}

function hasExpectedHeaders_(sheet) {
  const headers = sheet.getRange(1, 1, 1, LEADS_HEADERS_.length).getDisplayValues()[0];
  return LEADS_HEADERS_.every((header, index) => headers[index] === header);
}

function jsonOutput_(code, message, duplicate) {
  const body = { code, message };
  if (duplicate !== undefined) body.duplicate = duplicate;
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON);
}

function repararEnlaces() {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
  if (!spreadsheetId) throw new Error('Falta la propiedad de configuración SPREADSHEET_ID.');

  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  const sheet = spreadsheet.getSheetByName('Leads');
  if (!sheet || !hasExpectedHeaders_(sheet)) throw new Error('La pestaña Leads no tiene los encabezados requeridos.');

  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return;
  const values = sheet.getRange(2, 2, lastRow - 1, 3).getDisplayValues();
  values.forEach(([name, phoneValue, service], index) => {
    const phone = phoneValue.replace(/\D/g, '');
    if (!name.trim() || !service.trim() || !/^3\d{9}$/.test(phone)) return;
    sheet.getRange(index + 2, 9).setRichTextValue(createWhatsAppLink_(name.trim(), phone, service.trim()));
  });
}
