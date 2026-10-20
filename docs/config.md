# Configuración del cliente — `src/config/site.config.ts`

Único archivo que se edita por cliente (más `public/images/`). Si falta un campo, añádelo primero a `types.ts` y pregunta antes de ampliar el esquema.

## Esquema (resumen)

```ts
interface SiteConfig {
  business: { name; type; city; neighborhood?; locale: 'es-CO'; timezone: string; currency: string }
  brand: { logoText?; logoImage?; logoImageDark? }
  contact: { phone /*10 dígitos, tel:*/; whatsapp /*57XXXXXXXXXX*/; email?; instagram?; facebook?;
             address; mapsUrl; mapsEmbedUrl? }
  schedule: { weekly: { day: 0..6; open: 'HH:mm'; close: 'HH:mm' }[] /*día ausente = cerrado*/; note? }
  seo: { title; description; canonicalUrl; ogImage; schemaType /*p. ej. 'HairSalon'*/; priceRange?; geo? }
  theme: { defaultMode: 'light'|'dark'|'system'; allowToggle: boolean;
           radius: 'none'|'sm'|'md'|'lg'|'xl'; colors: { light: Palette; dark: Palette } }
  fonts: { display: FontSpec; body: FontSpec }          // FontSpec = { family; weights: number[]; fallback }
  sections: { id: SectionId; enabled: boolean }[]       // el orden del array es el orden en la página
  copy: { labels: { book; call; chooseService; ... }; hero: { title; subtitle; ctaPrimary; ctaSecondary; socialProof? };
          trust; howItWorks: { title; steps: { title; text }[] }; gallery; testimonials; faq; location; footer }
  services: { id; title; description?; durationMin; price; image }[]
  gallery: { src; alt }[]
  testimonials: { name; text; rating? }[]
  faq: { q; a }[]
  booking: { fields: { dateTime: boolean; note: boolean }; minAdvanceMinutes: number;
             whatsappTemplate /*{negocio} {nombre} {servicio} {fecha}*/; privacyNote?; messages: { ... } }
}
type SectionId = 'hero'|'trust'|'services'|'howItWorks'|'gallery'|'testimonials'|'booking'|'faq'|'location'
type Palette = { bg; surface; surfaceAlt; fg; fgMuted; border; primary; primaryFg; accent; accentFg; success; danger }  // hex
```

Header, footer, botón flotante de WhatsApp y barra "Reservar" sticky son fijos; sus textos salen de `copy`.

## Tema (cómo funciona)
- `plugins/site-head.ts` genera en `index.html`: `:root{--color-*}` (claro), `.dark{--color-*}` (oscuro), `--radius`, `--font-display`, `--font-body`.
- `index.css` mapea esas variables con `@theme inline`, de modo que existen clases `bg-bg`, `bg-surface`, `text-fg`, `text-fg-muted`, `border-border`, `bg-primary`, `text-primary-fg`, `bg-accent`…
- Un script inline en `<head>` aplica la clase `dark` **antes de pintar**: usa `localStorage['theme']` si existe, si no `defaultMode` (`system` → `matchMedia`). Actualiza `color-scheme` y `<meta name="theme-color">`.
- `ThemeToggle` guarda la elección en `localStorage` (con `try/catch`). Con `allowToggle: false` se fija `defaultMode` y no se guarda nada.
- Los componentes usan solo clases semánticas; el cambio de tema no requiere ninguna clase `dark:`.

## Fuentes
- `fonts` define familia, pesos y fallback. El plugin añade `preconnect` y un único `<link>` de Google Fonts con `display=swap`, solo con los pesos pedidos. Máximo 2 familias.

## Otros rubros
Cambia `business.type`, `copy.labels` (p. ej. "Agendar" en vez de "Reservar"), `services`, `sections` (activar/ordenar) y `booking.fields`. No debe requerir cambios en componentes.
