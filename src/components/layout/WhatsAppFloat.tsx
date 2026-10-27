import { siteConfig } from '../../config/site.config';

export function WhatsAppFloat() {
  return (
    <a
      className="fixed bottom-20 right-4 z-50 inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-fg shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:bottom-6 md:right-6"
      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label={siteConfig.copy.labels.openWhatsApp}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-8 w-8 brightness-0 invert" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-4.9a8.2 8.2 0 1 1 16-3.4Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 8.2c.2-.5.5-.6.8-.6h.5c.2 0 .3.1.4.4l.8 1.8c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.6 1 1.4 1.7 2.4 2.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.7.8c.2.1.4.2.4.4 0 .3-.2 1.2-.8 1.7-.5.5-1.3.7-2.2.4-1-.3-2.3-.9-3.6-2.1-1-.9-1.7-2-2-2.9-.4-1.1-.1-2.2.3-2.9Z" />
      </svg>
    </a>
  );
}
