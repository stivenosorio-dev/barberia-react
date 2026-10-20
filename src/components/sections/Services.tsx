import { siteConfig } from '../../config/site.config';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
      <h2 className="mb-8 font-heading text-3xl font-semibold text-fg">{siteConfig.copy.labels.chooseService}</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>
    </section>
  );
}
