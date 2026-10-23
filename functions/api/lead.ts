import { siteConfig } from '../../src/config/site.config';
import { bookingSchema } from '../../src/lib/validation';

interface LeadEnvironment {
  APPS_SCRIPT_URL: string;
  APPS_SCRIPT_TOKEN: string;
  IP_HASH_SALT: string;
}

interface PagesRequestContext {
  request: Request;
  env: LeadEnvironment;
}

type LeadCode = 'OK' | 'INVALID' | 'RATE_LIMIT' | 'UNAUTHORIZED' | 'ERROR';

const allowedOrigins = new Set(['web', 'maps', 'instagram']);
const allowedCodes = new Set<LeadCode>(['OK', 'INVALID', 'RATE_LIMIT', 'UNAUTHORIZED', 'ERROR']);

function jsonResponse(code: LeadCode, status = 200): Response {
  return new Response(JSON.stringify({ code }), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

async function createIpHash(ipAddress: string, salt: string): Promise<string> {
  const input = new TextEncoder().encode(`${ipAddress}:${salt}`);
  const digest = await crypto.subtle.digest('SHA-256', input);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

async function sendToAppsScript(url: string, payload: object): Promise<LeadCode> {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8_000);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        redirect: 'follow',
        signal: controller.signal,
      });
      if (!response.ok) continue;

      const result: unknown = await response.json();
      if (typeof result !== 'object' || result === null || !('code' in result)) continue;
      const code = (result as { code: unknown }).code;
      if (typeof code === 'string' && allowedCodes.has(code as LeadCode)) return code as LeadCode;
    } catch {
      if (attempt === 1) return 'ERROR';
    } finally {
      clearTimeout(timeout);
    }
  }
  return 'ERROR';
}

export async function onRequest({ request, env }: PagesRequestContext): Promise<Response> {
  if (request.method !== 'POST') return jsonResponse('INVALID', 405);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse('INVALID', 400);
  }

  if (typeof body === 'object' && body !== null && 'website' in body) {
    const honeypot = (body as { website?: unknown }).website;
    if (typeof honeypot === 'string' && honeypot.length > 0) return jsonResponse('OK');
  }

  const parsed = bookingSchema.safeParse(body);
  if (!parsed.success || !allowedOrigins.has(parsed.data.origin)) return jsonResponse('INVALID', 400);

  const ipAddress = request.headers.get('CF-Connecting-IP');
  if (!ipAddress || !env.APPS_SCRIPT_URL || !env.APPS_SCRIPT_TOKEN || !env.IP_HASH_SALT) {
    return jsonResponse('ERROR', 500);
  }

  try {
    const booking = parsed.data;
    const service = siteConfig.services.find(({ id }) => id === booking.serviceId);
    if (!service) return jsonResponse('INVALID', 400);

    const code = await sendToAppsScript(env.APPS_SCRIPT_URL, {
      token: env.APPS_SCRIPT_TOKEN,
      submissionId: booking.submissionId,
      name: booking.name,
      phone: booking.phone,
      service: service.title,
      preferredDateTime: siteConfig.booking.fields.dateTime ? booking.dateTime : 'Sin preferencia',
      note: siteConfig.booking.fields.note ? booking.note ?? '' : '',
      honeypot: '',
      origin: booking.origin,
      ipHash: await createIpHash(ipAddress, env.IP_HASH_SALT),
    });
    const status = code === 'RATE_LIMIT' ? 429 : code === 'INVALID' ? 400 : code === 'UNAUTHORIZED' ? 401 : code === 'ERROR' ? 502 : 200;
    return jsonResponse(code, status);
  } catch {
    return jsonResponse('ERROR', 502);
  }
}
