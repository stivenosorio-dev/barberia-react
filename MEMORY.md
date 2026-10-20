# MEMORY.md — Agenda Local (React)

Estado vivo. Reescríbelo en cada cierre, no acumules: máx. 30 líneas. El detalle de fases cerradas va a `docs/historial.md`.

## Estado
- Fase actual: 3 (flujo de reserva).
- Último cierre: Fase 2, revisión manual aprobada por el usuario; `npm run verify` aprobado.
- Fases 1 y 2 cerradas; Fase 2 archivada en `docs/historial.md` y marcada en `docs/plan/fase-2.md`.

## Decisiones vigentes
- React + Vite (SPA), Tailwind 4, Zod. Backend en Cloudflare Pages Functions. Datos en Google Sheets vía Apps Script.
- Config única `src/config/site.config.ts`: datos, paleta clara/oscura, fuentes y secciones. Tema por variables CSS.
- Commits solo del coordinador tras la confirmación de cierre de fase; nunca push.
- Ahorro de tokens: un implementador por bloque, verificador al cerrar fase, `npm run verify` único chequeo.

## Errores a evitar
- Ver `docs/lecciones.md` antes de tocar Apps Script, Cloudflare o WhatsApp.

## Próximo paso
- Ejecutar Fase 3 según `docs/plan/fase-3.md`.
