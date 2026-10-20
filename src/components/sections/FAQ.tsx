import { siteConfig } from '../../config/site.config';

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-fg sm:text-4xl">{siteConfig.copy.faq.title}</h2>
          {siteConfig.copy.faq.subtitle && <p className="mt-3 max-w-md leading-relaxed text-fg-muted">{siteConfig.copy.faq.subtitle}</p>}
        </div>
        <div className="divide-y divide-border border-y border-border">
          {siteConfig.faq.map((item, index) => (
            <details key={`${item.q}-${index}`} className="group py-5">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-fg marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                {item.q}
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-45" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-2xl pt-3 leading-relaxed text-fg-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
