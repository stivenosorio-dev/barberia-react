import { siteConfig } from '../../config/site.config';
import { ConfigImage } from '../ui/ConfigImage';

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-surface-alt/60 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-fg sm:text-4xl">{siteConfig.copy.gallery.title}</h2>
          {siteConfig.copy.gallery.subtitle && <p className="mt-3 leading-relaxed text-fg-muted">{siteConfig.copy.gallery.subtitle}</p>}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.gallery.map((image, index) => (
            <figure key={`${image.src}-${index}`} className="overflow-hidden rounded-[var(--radius)] bg-surface">
              <ConfigImage className="aspect-[4/3] h-full w-full" src={image.src} alt={image.alt} width={800} height={600} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
