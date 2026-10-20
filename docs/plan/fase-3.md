# Fase 3 — Formulario (envío simulado)

Lee: `docs/proyecto.md` (RF-03). Un solo bloque (1 implementador) → verificador.

- [ ] **T3.1** `src/lib/validation.ts`: esquema Zod compartido (cliente y función). Nombre obligatorio; teléfono `^3\d{9}$`; servicio dentro de los ids de config; fecha/hora futura según `business.timezone` y `booking.minAdvanceMinutes` (solo si `fields.dateTime`); nota ≤500 (solo si `fields.note`); honeypot vacío; `submissionId` UUID; `origin` desde `?origen=` (`web` por defecto).
- [ ] **T3.2** `BookingForm.tsx`: campos según `booking.fields`, errores por campo en español, estados idle / enviando / error / éxito, botón deshabilitado al enviar, `inputMode="numeric"` en teléfono, servicio preseleccionado desde `bookingContext`, honeypot fuera de pantalla (`tabIndex=-1`, `autoComplete="off"`), `privacyNote` informativa desde config. Un `submissionId` por intento, reutilizado en el reintento.
- [ ] **T3.3** `src/lib/api.ts` con envío simulado (promesa con retardo) para sustituir en la Fase 4.

## Criterios
- No se envía con campos vacíos, teléfono inválido ni fecha pasada; mensajes claros.
- Funciona en claro y oscuro a 390px. `npm run verify` pasa.
