# Fase 3 â€” Formulario (envÃ­o simulado)

Lee: `docs/proyecto.md` (RF-03). Un solo bloque (1 implementador) â†’ verificador.

- [x] **T3.1** `src/lib/validation.ts`: esquema Zod compartido (cliente y funciÃ³n). Nombre obligatorio; telÃ©fono `^3\d{9}$`; servicio dentro de los ids de config; fecha/hora futura segÃºn `business.timezone` y `booking.minAdvanceMinutes` (solo si `fields.dateTime`); nota â‰¤500 (solo si `fields.note`); honeypot vacÃ­o; `submissionId` UUID; `origin` desde `?origen=` (`web` por defecto).
- [x] **T3.2** `BookingForm.tsx`: campos segÃºn `booking.fields`, errores por campo en espaÃ±ol, estados idle / enviando / error / Ã©xito, botÃ³n deshabilitado al enviar, `inputMode="numeric"` en telÃ©fono, servicio preseleccionado desde `bookingContext`, honeypot fuera de pantalla (`tabIndex=-1`, `autoComplete="off"`), `privacyNote` informativa desde config. Un `submissionId` por intento, reutilizado en el reintento.
- [x] **T3.3** `src/lib/api.ts` con envÃ­o simulado (promesa con retardo) para sustituir en la Fase 4.

## Criterios
- No se envÃ­a con campos vacÃ­os, telÃ©fono invÃ¡lido ni fecha pasada; mensajes claros.
- Funciona en claro y oscuro a 390px. `npm run verify` pasa.

