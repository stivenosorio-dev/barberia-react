# Fase 1 — Proyecto base, config y tema

Lee: `docs/config.md`. Orden: Bloque A → Bloque B → verificador.

## Bloque A — Scaffold y config (1 implementador)
- [ ] **T1.1** Vite + React + TypeScript estricto + Tailwind 4 (`@tailwindcss/vite`) en la raíz, sin borrar archivos existentes. Versiones exactas vía Context7. Scripts: `dev`, `build`, `verify` (`tsc --noEmit && vite build`).
- [ ] **T1.2** `src/config/types.ts` y `src/config/site.config.ts` completos según `docs/config.md`, con datos ficticios de una barbería (teléfono falso, paletas clara y oscura, dos fuentes).
- [ ] **T1.3** `src/styles/index.css`: import de Tailwind, `@custom-variant dark`, `@theme inline` con los tokens semánticos y las fuentes.

## Bloque B — Tema, head y esqueleto (1 implementador)
- [ ] **T1.4** `plugins/site-head.ts` (Vite `transformIndexHtml`): title, description, canonical, Open Graph, `theme-color`, JSON-LD desde config, variables CSS de ambos temas, fuentes (preconnect + `display=swap`) y script anti-parpadeo.
- [ ] **T1.5** `src/theme/useTheme.ts` y `ThemeToggle.tsx` (respeta `allowToggle`; `localStorage` con `try/catch`).
- [ ] **T1.6** `src/main.tsx`, `src/App.tsx` y registro de secciones: renderiza `config.sections` en orden (solo `enabled`) con componentes marcador.

## Criterios
- `npm run verify` pasa.
- Cambiar paleta, fuente, modo por defecto o el orden de secciones en config se refleja sin tocar componentes.
- Recargar en modo oscuro no parpadea. `dist/index.html` contiene meta tags y JSON-LD.
- Anotar el tamaño de JS gzip como línea base.
