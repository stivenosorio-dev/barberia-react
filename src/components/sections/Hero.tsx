import { siteConfig } from '../../config/site.config';

export function Hero() {
  return (
    <section id="hero" className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-12 lg:py-20">
      <div className="order-2 lg:order-1">
        <p className="mb-3 font-semibold text-primary">{siteConfig.business.name}</p>
        <h1 className="max-w-2xl font-heading text-4xl font-semibold leading-tight text-fg sm:text-5xl">
          {siteConfig.copy.hero.title}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted">{siteConfig.copy.hero.subtitle}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a className="inline-flex min-h-12 items-center rounded-[var(--radius)] bg-primary px-5 font-semibold text-primary-fg" href="#reservar">
            {siteConfig.copy.hero.ctaPrimary}
          </a>
          <a className="inline-flex min-h-12 items-center rounded-[var(--radius)] border border-border px-5 font-semibold text-fg" href="#services">
            {siteConfig.copy.hero.ctaSecondary}
          </a>
        </div>
        {siteConfig.copy.hero.socialProof && <p className="mt-6 text-sm text-fg-muted">{siteConfig.copy.hero.socialProof}</p>}
      </div>
      <div className="order-1 overflow-hidden rounded-[var(--radius)] bg-surface-alt lg:order-2">
        <img
          className="aspect-[4/3] h-full w-full object-cover"
          src={siteConfig.seo.ogImage.replace(/\.png$/, '.webp')}
          width={1200}
          height={900}
          fetchPriority="high"
          alt={siteConfig.seo.description}
        />
      </div>
    </section>
  );
}
