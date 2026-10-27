import { siteConfig } from '../../config/site.config';

export function Location() {
  return (
    <section id="location" className="scroll-mt-24 bg-surface-alt/60 py-14 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-fg sm:text-4xl">{siteConfig.copy.location.title}</h2>
          <p className="mt-4 max-w-lg leading-relaxed text-fg-muted">{siteConfig.copy.location.directions}</p>
          {siteConfig.contact.addressIsPrototype && (
            <p className="mt-4 rounded-[var(--radius)] border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-fg">
              {siteConfig.copy.location.prototypeNotice}
            </p>
          )}
          <address className="mt-6 not-italic leading-relaxed text-fg">
            {siteConfig.contact.address}<br />
            {!siteConfig.contact.addressIsPrototype && siteConfig.business.neighborhood && <>{siteConfig.business.neighborhood}, </>}{siteConfig.business.city}
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
          <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
            <iframe
              className="h-72 w-full"
              src={siteConfig.contact.mapsEmbedUrl}
              title={siteConfig.copy.location.prototypeNotice}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </section>
  );
}
