# Fase 5 — WhatsApp, confirmación y casos de falla

Lee: `docs/lecciones.md`. Requiere resuelta la decisión 1 del índice. Un bloque (1 implementador) → verificador.

- [ ] **T5.1** `src/lib/whatsapp.ts`: `https://wa.me/<contact.whatsapp>?text=` con `booking.whatsappTemplate` ({negocio} {nombre} {servicio} {fecha}) y `encodeURIComponent`.
- [ ] **T5.2** Pantalla de confirmación en `BookingForm`: mensaje desde config, botón grande **Abrir WhatsApp** (respaldo permanente) y botón llamar (`tel:`).
- [ ] **T5.3** Tras guardar, intento de apertura automática de WhatsApp (puede bloquearse; el botón de T5.2 cubre ese caso).
- [ ] **T5.4** CU-04: si WhatsApp no abre o no hay conexión tras guardar, "Te contactaremos" + llamar.
- [ ] **T5.5** Fallo o lentitud al guardar (>8 s o error): mensaje claro, **un reintento** con el mismo `submissionId` y alternativa visible, según la decisión 1.

## Criterios
- Flujo completo en celular real; el mensaje conserva tildes y ñ.
- Simulaciones manuales de red caída y de respuesta lenta.
