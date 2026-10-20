import { siteConfig } from '../../config/site.config';

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <div className="mb-8 max-w-2xl">
        <h2 className="font-heading text-3xl font-semibold text-fg sm:text-4xl">{siteConfig.copy.testimonials.title}</h2>
        {siteConfig.copy.testimonials.subtitle && <p className="mt-3 leading-relaxed text-fg-muted">{siteConfig.copy.testimonials.subtitle}</p>}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {siteConfig.testimonials.map((testimonial, index) => (
          <figure key={`${testimonial.name}-${index}`} className="flex flex-col justify-between rounded-[var(--radius)] border border-border bg-surface p-6 sm:p-8">
            <blockquote className="font-heading text-xl leading-relaxed text-fg">{testimonial.text}</blockquote>
            <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4">
              <span className="font-semibold text-fg">{testimonial.name}</span>
              {testimonial.rating !== undefined && (
                <span className="flex items-center gap-2 text-sm text-fg-muted" aria-label={`${testimonial.rating}`}>
                  <span className="flex text-primary" aria-hidden="true">
                    {Array.from({ length: Math.max(0, Math.min(5, testimonial.rating)) }, (_, star) => (
                      <svg key={star} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path d="m10 1.7 2.5 5.1 5.6.8-4 3.9.9 5.6-5-2.6-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.7Z" />
                      </svg>
                    ))}
                  </span>
                  {testimonial.rating}
                </span>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
