# Historial de fases cerradas

Archivo de consulta humana. Los agentes no lo leen (está en `.ignore` y denegado en `opencode.json`). El coordinador mueve aquí el detalle de cada fase al cerrarla.

# Fase 1 — Proyecto base, config y tema

Estado: cerrada tras revisión manual del usuario y verificación aprobada (`npm run verify`). Línea base JS gzip: 71.50 kB.

## Bloque A — Scaffold y config
- [x] T1.1 Vite + React + TypeScript estricto + Tailwind 4 (`@tailwindcss/vite`); scripts `dev`, `build`, `verify`.
- [x] T1.2 `src/config/types.ts` y `src/config/site.config.ts` completos con datos ficticios, paletas clara/oscura y dos fuentes.
- [x] T1.3 `src/styles/index.css`: Tailwind, variante dark y tokens/fuentes semánticos.

## Bloque B — Tema, head y esqueleto
- [x] T1.4 `plugins/site-head.ts`: metadatos, Open Graph, JSON-LD, temas, fuentes y script anti-parpadeo.
- [x] T1.5 `src/theme/useTheme.ts` y `ThemeToggle.tsx`; respeta `allowToggle` y maneja `localStorage` con `try/catch`.
- [x] T1.6 `src/main.tsx`, `src/App.tsx` y registro dinámico de secciones habilitadas en orden.

## Criterios
- [x] `npm run verify` pasa.
- [x] Configuración y orden de secciones controlan la presentación sin cambios en componentes.
- [x] `dist/index.html` incluye metadatos y JSON-LD; anti-parpadeo revisado.
- [x] Revisión manual del usuario aprobada.

# Fase 2 — Landing estática completa

Estado: cerrada tras revisión manual del usuario; `npm run verify` aprobado. Se incorporaron seis imágenes genéricas de Pexels con licencia gratuita.

## Bloque A — Estructura superior
- [x] T2.1 `src/lib/bookingContext.tsx`: servicio seleccionado compartido.
- [x] T2.2 Header sticky, Hero y TrustBar con horario y zona horaria.
- [x] T2.3 Services y ServiceCard con imagen, precio, duración y selección hacia `#reservar`.

## Bloque B — Resto de secciones
- [x] T2.4 HowItWorks, Gallery, Testimonials y FAQ nativo.
- [x] T2.5 Location con mapa bajo demanda, Footer, WhatsAppFloat y barra móvil sticky.
- [x] T2.6 Marcador del formulario `id="reservar"`.

## Criterios
- [x] Contenido y estilo según config/tokens; imágenes con dimensiones y carga apropiada; SVG inline.
- [x] `npm run verify` pasa y la revisión manual a 360/390 px, claro/oscuro, fue aprobada.
- [x] El orden y activación de secciones responden a la configuración.
- Imágenes prototipo: `corte-clasico.jpg`, `perfilado-barba.jpg`, `corte-y-barba.jpg`, `galeria-01.jpg`, `galeria-02.jpg`, `galeria-03.jpg` (`public/images/`). Fuentes: Pexels; licencia gratuita sin atribución requerida.
