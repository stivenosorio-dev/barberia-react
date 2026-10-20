# Fase 2 — Landing estática completa

Lee: `docs/config.md`, sección 4 de requisitos en `docs/proyecto.md` (RF-01, RF-02). Orden: Bloque A → Bloque B → verificador.

## Bloque A — Estructura superior (1 implementador)
- [ ] **T2.1** `src/lib/bookingContext.tsx`: servicio seleccionado compartido entre tarjetas y formulario.
- [ ] **T2.2** `Header` (sticky: logo desde config, Reservar, llamar, `ThemeToggle`), `Hero`, `TrustBar` (abierto/cerrado calculado con `schedule` y `business.timezone`).
- [ ] **T2.3** `Services` con `ServiceCard` (imagen, precio, duración, botón "Elegir" que selecciona y desplaza a `#reservar`).

## Bloque B — Resto de secciones (1 implementador)
- [ ] **T2.4** `HowItWorks`, `Gallery`, `Testimonials`, `FAQ` (`<details>` nativo).
- [ ] **T2.5** `Location` (enlace "Cómo llegar"; mapa embebido solo al tocar), `Footer`, `WhatsAppFloat`, barra "Reservar" sticky en móvil.
- [ ] **T2.6** Marcador del formulario con `id="reservar"` (el real llega en la Fase 3).

## Reglas
- Todo texto, imagen, color y dato sale de config; solo tokens semánticos.
- `<img>` con `width`/`height`; hero con `fetchpriority="high"` sin lazy; el resto `loading="lazy"`.
- Iconos como SVG inline; sin librerías de iconos.

## Criterios
- `npm run verify` pasa. Revisión manual a 360 y 390px en **claro y oscuro**, sin scroll horizontal.
- Desactivar o reordenar una sección en config se refleja sin tocar código.
