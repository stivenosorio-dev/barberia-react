import { useEffect, useState } from 'react';
import { siteConfig } from '../../config/site.config';
import { useBookingContext } from '../../lib/bookingContext';
import { submitBooking } from '../../lib/api';
import { bookingSchema } from '../../lib/validation';

type BookingFields = {
  name: string;
  phone: string;
  serviceId: string;
  dateTime: string;
  note: string;
  website: string;
};

type FormStatus = 'idle' | 'enviando' | 'error' | 'éxito';
type FormSubmitEvent = { preventDefault: () => void };
type InputChangeEvent = { target: { value: string } };

const initialFields: BookingFields = {
  name: '',
  phone: '',
  serviceId: '',
  dateTime: '',
  note: '',
  website: '',
};

export function BookingForm() {
  const { selectedServiceId } = useBookingContext();
  const [fields, setFields] = useState<BookingFields>(initialFields);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    if (selectedServiceId && siteConfig.services.some(({ id }) => id === selectedServiceId)) {
      setFields((current) => ({ ...current, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  function updateField(field: keyof BookingFields, value: string) {
    setFields((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (status === 'error' || status === 'éxito') setStatus('idle');
    if (status === 'éxito') setWhatsappUrl('');
  }

  async function handleSubmit(event: FormSubmitEvent) {
    event.preventDefault();
    if (status === 'enviando') return;

    const attemptId = submissionId ?? crypto.randomUUID();
    setSubmissionId(attemptId);
    const origin = new URLSearchParams(window.location.search).get('origen') || 'web';
    const result = bookingSchema.safeParse({ ...fields, submissionId: attemptId, origin });

    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (field) nextErrors[String(field)] ??= issue.message;
      });
      setErrors(nextErrors);
      setStatus('error');
      return;
    }

    setErrors({});
    setStatus('enviando');
    try {
      await submitBooking(result.data);
      const service = siteConfig.services.find(({ id }) => id === result.data.serviceId);
      const message = siteConfig.booking.whatsappTemplate
        .split('{nombre}').join(result.data.name)
        .split('{servicio}').join(service?.title ?? '')
        .split('{fecha}').join(siteConfig.booking.fields.dateTime ? result.data.dateTime ?? '' : 'Sin preferencia')
        .split('{negocio}').join(siteConfig.business.name);
      const url = new URL(`https://wa.me/${siteConfig.contact.whatsapp}`);
      url.searchParams.set('text', message);
      setWhatsappUrl(url.toString());
      setStatus('éxito');
      setSubmissionId(null);
      try {
        window.open(url.toString(), '_blank', 'noopener,noreferrer');
      } catch {}
    } catch {
      setStatus('error');
    }
  }

  function fieldError(field: keyof BookingFields) {
    return errors[field] && <p id={`${field}-error`} className="mt-1 text-sm text-danger">{errors[field]}</p>;
  }

  return (
    <section id="reservar" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20" aria-labelledby="booking-title">
      <h2 id="booking-title" className="font-heading text-3xl font-semibold text-fg">
        {siteConfig.copy.labels.submitBooking}
      </h2>
      <form className="relative mt-8 grid max-w-2xl gap-5" onSubmit={handleSubmit} noValidate>
        <div className="absolute -left-[9999px] top-0" aria-hidden="true">
          <input
            id="booking-website"
            name="website"
            type="text"
            value={fields.website}
            tabIndex={-1}
            autoComplete="off"
            onChange={(event: InputChangeEvent) => updateField('website', event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="booking-name" className="mb-2 block text-sm font-medium text-fg">{siteConfig.copy.labels.name}</label>
          <input
            id="booking-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={fields.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-4 text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onChange={(event: InputChangeEvent) => updateField('name', event.target.value)}
          />
          {fieldError('name')}
        </div>

        <div>
          <label htmlFor="booking-phone" className="mb-2 block text-sm font-medium text-fg">{siteConfig.copy.labels.phone}</label>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            required
            value={fields.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-4 text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onChange={(event: InputChangeEvent) => updateField('phone', event.target.value)}
          />
          {fieldError('phone')}
        </div>

        <div>
          <label htmlFor="booking-service" className="mb-2 block text-sm font-medium text-fg">{siteConfig.copy.labels.chooseService}</label>
          <select
            id="booking-service"
            name="serviceId"
            required
            value={fields.serviceId}
            aria-invalid={Boolean(errors.serviceId)}
            aria-describedby={errors.serviceId ? 'serviceId-error' : undefined}
            className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-4 text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onChange={(event: InputChangeEvent) => updateField('serviceId', event.target.value)}
          >
            <option value="">{siteConfig.copy.labels.chooseService}</option>
            {siteConfig.services.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}
          </select>
          {fieldError('serviceId')}
        </div>

        {siteConfig.booking.fields.dateTime && (
          <div>
            <label htmlFor="booking-dateTime" className="mb-2 block text-sm font-medium text-fg">{siteConfig.copy.labels.dateTime}</label>
            <input
              id="booking-dateTime"
              name="dateTime"
              type="datetime-local"
              required
              value={fields.dateTime}
              aria-invalid={Boolean(errors.dateTime)}
              aria-describedby={errors.dateTime ? 'dateTime-error' : undefined}
              className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-4 text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onChange={(event: InputChangeEvent) => updateField('dateTime', event.target.value)}
            />
            {fieldError('dateTime')}
          </div>
        )}

        {siteConfig.booking.fields.note && (
          <div>
            <label htmlFor="booking-note" className="mb-2 block text-sm font-medium text-fg">{siteConfig.copy.labels.note}</label>
            <textarea
              id="booking-note"
              name="note"
              rows={4}
              maxLength={500}
              value={fields.note}
              aria-invalid={Boolean(errors.note)}
              aria-describedby={errors.note ? 'note-error' : undefined}
              className="w-full rounded-[var(--radius)] border border-border bg-surface px-4 py-3 text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onChange={(event: InputChangeEvent) => updateField('note', event.target.value)}
            />
            {fieldError('note')}
          </div>
        )}

        {siteConfig.booking.privacyNote && <p className="text-sm leading-relaxed text-fg-muted">{siteConfig.booking.privacyNote}</p>}

        {status === 'error' && (
          <div className="text-sm text-danger" role="alert">
            <p className="font-semibold">{siteConfig.booking.messages.errorTitle}</p>
            <p>{Object.values(errors)[0] ?? siteConfig.booking.messages.errorBody}</p>
          </div>
        )}
        {status === 'éxito' && (
          <div className="text-sm text-success" role="status">
            <p className="font-semibold">{siteConfig.booking.messages.successTitle}</p>
            <p>{siteConfig.booking.messages.successBody}</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={siteConfig.copy.labels.openWhatsApp}
              className="mt-3 inline-flex min-h-12 items-center justify-center rounded-[var(--radius)] bg-primary px-5 font-semibold text-primary-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {siteConfig.copy.labels.openWhatsApp}
            </a>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'enviando'}
          className="min-h-12 rounded-[var(--radius)] bg-primary px-5 font-semibold text-primary-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {siteConfig.copy.labels.submitBooking}
        </button>
      </form>
    </section>
  );
}
