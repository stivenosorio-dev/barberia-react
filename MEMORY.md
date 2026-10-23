# MEMORY.md — Agenda Local (React)

Estado vivo. Reescríbelo en cada cierre, no acumules: máx. 30 líneas. El detalle de fases cerradas va a `docs/historial.md`.

## Estado
- Fase actual: 6 (SEO, rendimiento y accesibilidad).
- Último cierre: Fase 5, revisión de flujo WhatsApp/errores aprobada por el usuario; `npm run verify` aprobado.
- Fases 1–5 cerradas; decisión 1 resuelta: tras fallo final, avisar que no se guardó y ofrecer WhatsApp y llamada.

## Decisiones vigentes
- React + Vite (SPA), Tailwind 4, Zod. Backend en Cloudflare Pages Functions. Datos en Google Sheets vía Apps Script.
- Config única `src/config/site.config.ts`: datos, paleta clara/oscura, fuentes y secciones. Tema por variables CSS.
- Commits solo del coordinador tras la confirmación de cierre de fase; nunca push.
- Ahorro de tokens: un implementador por bloque, verificador al cerrar fase, `npm run verify` único chequeo.

## Errores a evitar
- Ver `docs/lecciones.md` antes de tocar Apps Script, Cloudflare o WhatsApp.
- Mantener un solo proceso Wrangler durante pruebas locales.

## Próximo paso
- Ejecutar Fase 6 según `docs/plan/fase-6.md`.
