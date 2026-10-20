import { useState } from 'react';
import { siteConfig } from '../../config/site.config';

export function Location() {
  const [mapOpen, setMapOpen] = useState(false);

  return (
    <section id="location" className="scroll-mt-24 bg-surface-alt/60 py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-fg sm:text-4xl">{siteConfig.copy.location.title}</h2>
          <p className="mt-4 max-w-lg leading-relaxed text-fg-muted">{siteConfig.copy.location.directions}</p>
          <address className="mt-6 not-italic leading-relaxed text-fg">
            {siteConfig.contact.address}<br />
            {siteConfig.business.neighborhood && <>{siteConfig.business.neighborhood}, </>}{siteConfig.business.city}
          </address>
          <a
            className="mt-6 inline-flex min-h-11 items-center rounded-[var(--radius)] bg-primary px-5 font-semibold text-primary-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            href={siteConfig.contact.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            {siteConfig.copy.location.directions}
          </a>
        </div>
        {siteConfig.contact.mapsEmbedUrl && (
          <details className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface" onToggle={(event: { currentTarget: HTMLDetailsElement }) => setMapOpen(event.currentTarget.open)}>
            <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 px-5 font-semibold text-fg focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary">
              {siteConfig.copy.location.directions}
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.2" />
              </svg>
            </summary>
            {mapOpen && (
              <iframe
                className="h-72 w-full border-t border-border"
                src={siteConfig.contact.mapsEmbedUrl}
                title={siteConfig.business.name}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            )}
          </details>
        )}
      </div>
    </section>
  );
}
