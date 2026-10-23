export type SectionId =
  | 'hero'
  | 'trust'
  | 'services'
  | 'howItWorks'
  | 'gallery'
  | 'testimonials'
  | 'booking'
  | 'faq'
  | 'location';

export type Palette = {
  bg: `#${string}`;
  surface: `#${string}`;
  surfaceAlt: `#${string}`;
  fg: `#${string}`;
  fgMuted: `#${string}`;
  border: `#${string}`;
  primary: `#${string}`;
  primaryFg: `#${string}`;
  accent: `#${string}`;
  accentFg: `#${string}`;
  success: `#${string}`;
  danger: `#${string}`;
};

export type FontSpec = {
  family: string;
  weights: number[];
  fallback: string;
};

export interface SiteConfig {
  business: {
    name: string;
    type: string;
    city: string;
    neighborhood?: string;
    locale: 'es-CO';
    timezone: string;
    currency: string;
  };
  brand: {
    logoText?: string;
    logoImage?: string;
    logoImageDark?: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email?: string;
    instagram?: string;
    facebook?: string;
    address: string;
    mapsUrl: string;
    mapsEmbedUrl?: string;
  };
  schedule: {
    weekly: { day: 0 | 1 | 2 | 3 | 4 | 5 | 6; open: string; close: string }[];
    note?: string;
  };
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    ogImage: string;
    schemaType: string;
    priceRange?: string;
    geo?: { latitude: number; longitude: number };
  };
  theme: {
    defaultMode: 'light' | 'dark' | 'system';
    allowToggle: boolean;
    radius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    colors: { light: Palette; dark: Palette };
  };
  fonts: { display: FontSpec; body: FontSpec };
  sections: { id: SectionId; enabled: boolean }[];
  copy: {
    labels: {
      book: string;
      call: string;
      chooseService: string;
      openWhatsApp: string;
      submitBooking: string;
      name: string;
      phone: string;
      dateTime: string;
      note: string;
      required: string;
    };
    hero: { title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; socialProof?: string };
    trust: { title: string; items: string[] };
    howItWorks: { title: string; steps: { title: string; text: string }[] };
    gallery: { title: string; subtitle?: string };
    testimonials: { title: string; subtitle?: string };
    faq: { title: string; subtitle?: string };
    location: { title: string; directions: string };
    footer: { tagline: string; rights: string; madeWith?: string };
  };
  services: { id: string; title: string; description?: string; durationMin: number; price: number; image: string }[];
  gallery: { src: string; alt: string }[];
  testimonials: { name: string; text: string; rating?: number }[];
  faq: { q: string; a: string }[];
  booking: {
    fields: { dateTime: boolean; note: boolean };
    minAdvanceMinutes: number;
    whatsappTemplate: string;
    noDatePreference: string;
    privacyNote?: string;
    messages: { successTitle: string; successBody: string; errorTitle: string; errorBody: string };
  };
}
