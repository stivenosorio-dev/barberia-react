import { siteConfig } from '../../config/site.config';
import { useTheme } from '../../theme/useTheme';
import { ThemeToggle } from '../../theme/ThemeToggle';

export function Header() {
  const { mode } = useTheme();
  const logoImage = mode === 'dark' ? siteConfig.brand.logoImageDark ?? siteConfig.brand.logoImage : siteConfig.brand.logoImage;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <a className="min-w-0 text-fg" href="#hero" aria-label={siteConfig.business.name}>
          {logoImage ? (
            <img
              className="h-10 w-auto max-w-36 object-contain"
              src={logoImage}
              width={144}
              height={40}
              alt={siteConfig.brand.logoText ?? siteConfig.business.name}
            />
          ) : (
            <span className="font-heading text-lg font-semibold">{siteConfig.brand.logoText ?? siteConfig.business.name}</span>
          )}
        </a>
        <nav className="flex shrink-0 items-center gap-2 sm:gap-3" aria-label={siteConfig.business.name}>
          <a className="inline-flex min-h-11 items-center rounded-[var(--radius)] bg-primary px-4 text-sm font-semibold text-primary-fg" href="#reservar">
            {siteConfig.copy.labels.book}
          </a>
          <a
            className="inline-flex min-h-11 w-11 items-center justify-center rounded-[var(--radius)] border border-border text-fg"
            href={`tel:${siteConfig.contact.phone}`}
            aria-label={siteConfig.copy.labels.call}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 3.75h3.3l1.65 4.1-2.1 1.7a15.4 15.4 0 0 0 7.1 7.1l1.7-2.1 4.1 1.65v3.3a1.5 1.5 0 0 1-1.65 1.5C10.4 20.2 3.8 13.6 3 5.4a1.5 1.5 0 0 1 1.5-1.65Z" />
            </svg>
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
