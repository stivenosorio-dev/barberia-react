import { siteConfig } from '../../config/site.config';

export function HowItWorks() {
  return (
    <section id="howItWorks" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <h2 className="max-w-md font-heading text-3xl font-semibold leading-tight text-fg sm:text-4xl">
          {siteConfig.copy.howItWorks.title}
        </h2>
        <ol className="divide-y divide-border border-y border-border">
          {siteConfig.copy.howItWorks.steps.map((step, index) => (
            <li key={`${step.title}-${index}`} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
              <span className="font-heading text-2xl text-primary" aria-hidden="true">{index + 1}</span>
              <div>
                <h3 className="text-lg font-semibold text-fg">{step.title}</h3>
                <p className="mt-2 max-w-2xl leading-relaxed text-fg-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
