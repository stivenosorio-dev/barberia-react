# MEMORY.md — Agenda Local (React)

Estado vivo. Reescríbelo en cada cierre, no acumules: máx. 30 líneas. El detalle de fases cerradas va a `docs/historial.md`.

## Estado
- Fase actual: 5 (despliegue y producción).
- Último cierre: Fase 4, integración Apps Script/Pages probada con hoja de pruebas; usuario confirmó fila y enlace.
- Fases 1–4 cerradas; Fase 4 archivada y marcada en `docs/plan/fase-4.md`.

## Decisiones vigentes
- React + Vite (SPA), Tailwind 4, Zod. Backend en Cloudflare Pages Functions. Datos en Google Sheets vía Apps Script.
- Config única `src/config/site.config.ts`: datos, paleta clara/oscura, fuentes y secciones. Tema por variables CSS.
- Commits solo del coordinador tras la confirmación de cierre de fase; nunca push.
- Ahorro de tokens: un implementador por bloque, verificador al cerrar fase, `npm run verify` único chequeo.

## Errores a evitar
- Ver `docs/lecciones.md` antes de tocar Apps Script, Cloudflare o WhatsApp.
- Mantener un solo proceso Wrangler durante pruebas locales.

## Próximo paso
- Ejecutar Fase 5 según `docs/plan/fase-5.md`.
