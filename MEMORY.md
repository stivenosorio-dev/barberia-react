# MEMORY.md — Agenda Local (React)

Estado vivo. Reescríbelo en cada cierre, no acumules: máx. 30 líneas. El detalle de fases cerradas va a `docs/historial.md`.

## Estado
- Fase 6 (SEO, rendimiento y accesibilidad) cerrada con aprobación manual del usuario; detalle en `docs/historial.md`.
- Fases 1–5 y 6.1 también cerradas; decisión 1 resuelta: tras fallo final, avisar que no se guardó y ofrecer WhatsApp y llamada.

## Decisiones vigentes
- React + Vite (SPA), Tailwind 4, Zod. Backend en Cloudflare Pages Functions. Datos en Google Sheets vía Apps Script.
- Config única `src/config/site.config.ts`: datos, paleta clara/oscura, fuentes y secciones. Tema por variables CSS.
- Commits solo del coordinador tras la confirmación de cierre de fase; nunca push.
- Ahorro de tokens: un implementador por bloque, verificador al cerrar fase, `npm run verify` único chequeo.

## Errores a evitar
- Ver `docs/lecciones.md` antes de tocar Apps Script, Cloudflare o WhatsApp.
- Mantener un solo proceso Wrangler durante pruebas locales.

## Próximo paso
- Preparación para Netlify: próximo trabajo aprobado por el usuario.
