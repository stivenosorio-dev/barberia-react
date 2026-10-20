# Fase 6 — SEO, rendimiento y accesibilidad

Mide primero (Lighthouse móvil sobre `npm run build` + vista previa), corrige solo lo que baje de la meta. Un bloque → verificador.

- [ ] **T6.1** Verificar metadatos, Open Graph y JSON-LD válidos; generar `sitemap.xml` y `robots.txt` desde `seo.canonicalUrl` en `plugins/site-head.ts`.
- [ ] **T6.2** Imágenes: AVIF/WebP, dimensiones explícitas, lazy salvo hero.
- [ ] **T6.3** Fuentes: ≤2 familias, `display=swap`, precarga de la crítica; valorar autoalojar si penaliza.
- [ ] **T6.4** Carga diferida (`React.lazy` + `Suspense`) de secciones bajo el pliegue **solo si la medición lo justifica**.
- [ ] **T6.5** Accesibilidad: contraste AA **en ambos temas**, `label` en cada campo, foco visible, objetivos ≥44px, `prefers-reduced-motion`.

## Criterios
- Lighthouse móvil >90 en rendimiento, SEO y accesibilidad; carga <2 s en 4G simulado.
- Si SEO o LCP no alcanzan la meta con la SPA, proponer prerender estático y pedir mi aprobación (decisión 5).
