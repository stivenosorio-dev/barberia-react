import { siteConfig } from '../../config/site.config';

export function StickyBookBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 px-4 pb-[env(safe-area-inset-bottom)] pt-3 backdrop-blur md:hidden">
      <a
        className="mx-auto flex min-h-12 max-w-xl items-center justify-center rounded-[var(--radius)] bg-primary px-5 font-semibold text-primary-fg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        href="#reservar"
      >
        {siteConfig.copy.labels.book}
      </a>
    </div>
  );
}
