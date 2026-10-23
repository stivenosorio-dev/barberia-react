import type { BookingSubmission } from './validation';

export async function submitBooking(booking: BookingSubmission): Promise<void> {
  const response = await fetch('/api/lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(booking),
  });

  let result: { code?: unknown };
  try {
    result = await response.json() as { code?: unknown };
  } catch {
    throw new Error();
  }

  if (!response.ok || result.code !== 'OK') {
    throw new Error();
  }
}
