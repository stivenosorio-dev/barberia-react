# Fase 5 â€” WhatsApp, confirmaciÃ³n y casos de falla

Lee: `docs/lecciones.md`. Requiere resuelta la decisiÃ³n 1 del Ã­ndice. Un bloque (1 implementador) â†’ verificador.

- [x] **T5.1** `src/lib/whatsapp.ts`: `https://wa.me/<contact.whatsapp>?text=` con `booking.whatsappTemplate` ({negocio} {nombre} {servicio} {fecha}) y `encodeURIComponent`.
- [x] **T5.2** Pantalla de confirmaciÃ³n en `BookingForm`: mensaje desde config, botÃ³n grande **Abrir WhatsApp** (respaldo permanente) y botÃ³n llamar (`tel:`).
- [x] **T5.3** Tras guardar, intento de apertura automÃ¡tica de WhatsApp (puede bloquearse; el botÃ³n de T5.2 cubre ese caso).
- [x] **T5.4** CU-04: si WhatsApp no abre o no hay conexiÃ³n tras guardar, "Te contactaremos" + llamar.
- [x] **T5.5** Fallo o lentitud al guardar (>8 s o error): mensaje claro, **un reintento** con el mismo `submissionId` y alternativa visible, segÃºn la decisiÃ³n 1.

## Criterios
- [x] Flujo completo en celular real; el mensaje conserva tildes y Ã±.
- Simulaciones manuales de red caÃ­da y de respuesta lenta.

