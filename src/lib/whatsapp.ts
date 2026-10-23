import { siteConfig } from '../config/site.config';
import type { BookingSubmission } from './validation';

type WhatsAppBooking = Pick<BookingSubmission, 'name' | 'serviceId' | 'dateTime'>;

export function createWhatsAppUrl(booking: WhatsAppBooking): string {
  const service = siteConfig.services.find(({ id }) => id === booking.serviceId);
  const date = siteConfig.booking.fields.dateTime
    ? booking.dateTime?.replace('T', ' ') ?? ''
    : siteConfig.booking.noDatePreference;
  const message = siteConfig.booking.whatsappTemplate
    .split('{negocio}').join(siteConfig.business.name)
    .split('{nombre}').join(booking.name)
    .split('{servicio}').join(service?.title ?? booking.serviceId)
    .split('{fecha}').join(date);

  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
