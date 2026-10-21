import type { BookingSubmission } from './validation';

export async function submitBooking(booking: BookingSubmission): Promise<void> {
  void booking;
  await new Promise<void>((resolve) => setTimeout(resolve, 600));
}
