import { siteConfig } from '../../config/site.config';

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 md:items-end">
        <div>
          <a href="#hero" className="font-heading text-xl font-semibold text-fg">{siteConfig.brand.logoText ?? siteConfig.business.name}</a>
          <p className="mt-2 max-w-md leading-relaxed text-fg-muted">{siteConfig.copy.footer.tagline}</p>
          {siteConfig.copy.footer.madeWith && <p className="mt-4 text-sm text-fg-muted">{siteConfig.copy.footer.madeWith}</p>}
        </div>
        <div className="flex flex-col gap-3 text-sm text-fg-muted md:items-end">
          <a className="min-h-11 content-center hover:text-fg" href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
          <p>{siteConfig.contact.address}</p>
          <div className="flex items-center gap-4">
            {siteConfig.contact.instagram && (
              <a className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius)] border border-border text-fg" href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" aria-label={siteConfig.business.name}>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
                </svg>
              </a>
            )}
            {siteConfig.contact.facebook && (
              <a className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius)] border border-border text-fg" href={siteConfig.contact.facebook} target="_blank" rel="noreferrer" aria-label={siteConfig.business.name}>
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z" />
                </svg>
              </a>
            )}
          </div>
          <p className="mt-2">© {siteConfig.business.name}. {siteConfig.copy.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
