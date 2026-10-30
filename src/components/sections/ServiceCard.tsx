import { siteConfig } from '../../config/site.config';
import { useBookingContext } from '../../lib/bookingContext';
import { ConfigImage } from '../ui/ConfigImage';

type Service = (typeof siteConfig.services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const { selectedServiceId, setSelectedServiceId } = useBookingContext();
  const price = new Intl.NumberFormat(siteConfig.business.locale, {
    style: 'currency',
    currency: siteConfig.business.currency,
    maximumFractionDigits: 0,
  }).format(service.price);
  const duration = new Intl.NumberFormat(siteConfig.business.locale, {
    style: 'unit',
    unit: 'minute',
    unitDisplay: 'short',
  }).format(service.durationMin);
  const isSelected = selectedServiceId === service.id;

  const chooseService = () => {
    setSelectedServiceId(service.id);
    const target = document.getElementById('reservar') ?? document.getElementById('booking');
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
    target?.scrollIntoView({ behavior, block: 'start' });
  };

  return (
    <article className={`overflow-hidden rounded-[var(--radius)] border bg-surface ${isSelected ? 'border-primary' : 'border-border'}`}>
      <ConfigImage className="aspect-[4/3] w-full" src={service.image} width={640} height={480} alt={service.title} />
      <div className="flex h-full flex-col p-5">
        <h3 className="font-heading text-xl font-semibold text-fg">{service.title}</h3>
        {service.description && <p className="mt-2 text-sm leading-relaxed text-fg-muted">{service.description}</p>}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-fg-muted">
          <span>{price}</span>
          <span>{duration}</span>
        </div>
        <button
          className="mt-5 min-h-11 w-full rounded-[var(--radius)] bg-primary px-4 font-semibold text-primary-fg"
          type="button"
          aria-pressed={isSelected}
          onClick={chooseService}
        >
          {siteConfig.copy.labels.chooseService}
        </button>
      </div>
    </article>
  );
}
