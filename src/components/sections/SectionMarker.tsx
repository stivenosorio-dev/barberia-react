import type { SectionId } from '../../config/types';
import { siteConfig } from '../../config/site.config';

const sectionTitles: Record<SectionId, string> = {
  hero: siteConfig.copy.hero.title,
  trust: siteConfig.copy.trust.title,
  services: siteConfig.copy.labels.chooseService,
  howItWorks: siteConfig.copy.howItWorks.title,
  gallery: siteConfig.copy.gallery.title,
  testimonials: siteConfig.copy.testimonials.title,
  booking: siteConfig.copy.labels.submitBooking,
  faq: siteConfig.copy.faq.title,
  location: siteConfig.copy.location.title,
};

export function SectionMarker({ sectionId }: { sectionId: SectionId }) {
  return (
    <section
      id={sectionId === 'booking' ? 'reservar' : sectionId}
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20"
      aria-labelledby={`${sectionId}-title`}
    >
      <h2 id={`${sectionId}-title`} className="font-heading text-3xl font-semibold text-fg">
        {sectionTitles[sectionId]}
      </h2>
    </section>
  );
}
