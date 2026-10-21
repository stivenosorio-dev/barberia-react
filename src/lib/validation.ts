import { z } from 'zod';
import { siteConfig } from '../config/site.config';

function dateTimeInTimezone(value: string, timezone: string): number | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/.exec(value);
  if (!match) return null;

  const target = match.slice(1).map(Number);
  const [year, month, day, hour, minute] = target;
  const targetAsUtc = Date.UTC(year, month - 1, day, hour, minute);
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23',
  });

  let timestamp = targetAsUtc;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const parts = formatter.formatToParts(new Date(timestamp));
    const values = Object.fromEntries(parts.map(({ type, value: part }) => [type, part]));
    const representedAsUtc = Date.UTC(
      Number(values.year),
      Number(values.month) - 1,
      Number(values.day),
      Number(values.hour),
      Number(values.minute),
      Number(values.second),
    );
    timestamp += targetAsUtc - representedAsUtc;
  }

  const parts = formatter.formatToParts(new Date(timestamp));
  const values = Object.fromEntries(parts.map(({ type, value: part }) => [type, part]));
  const actual = ['year', 'month', 'day', 'hour', 'minute'].map((part) => Number(values[part]));
  if (actual.some((part, index) => part !== target[index])) return null;
  return timestamp;
}

export const bookingSchema = z.object({
  name: z.string().trim().min(1, siteConfig.copy.labels.required),
  phone: z.string().regex(/^3\d{9}$/, 'Ingresa un celular de 10 dígitos que empiece por 3.'),
  serviceId: z.string().refine(
    (serviceId) => siteConfig.services.some(({ id }) => id === serviceId),
    'Elige un servicio válido.',
  ),
  dateTime: z.string().optional(),
  note: z.string().optional(),
  website: z.string().max(0, 'No se pudo validar la solicitud.'),
  submissionId: z.string().uuid('La solicitud no tiene un identificador válido.'),
  origin: z.string().min(1, 'No se pudo identificar el origen de la solicitud.'),
}).superRefine((booking, context) => {
  if (siteConfig.booking.fields.dateTime) {
    if (!booking.dateTime) {
      context.addIssue({ code: 'custom', path: ['dateTime'], message: siteConfig.copy.labels.required });
    } else {
      let timestamp: number | null = null;
      try {
        timestamp = dateTimeInTimezone(booking.dateTime, siteConfig.business.timezone);
      } catch {
        timestamp = null;
      }

      const earliest = Date.now() + siteConfig.booking.minAdvanceMinutes * 60_000;
      if (timestamp === null || timestamp < earliest) {
        context.addIssue({
          code: 'custom',
          path: ['dateTime'],
          message: 'Elige una fecha y hora futura, respetando el tiempo mínimo de anticipación.',
        });
      }
    }
  }

  if (siteConfig.booking.fields.note && (booking.note?.length ?? 0) > 500) {
    context.addIssue({ code: 'custom', path: ['note'], message: 'La nota no puede superar los 500 caracteres.' });
  }
});

export type BookingSubmission = z.infer<typeof bookingSchema>;
