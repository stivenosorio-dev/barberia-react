# Fase 2 â€” Landing estÃ¡tica completa

Lee: `docs/config.md`, secciÃ³n 4 de requisitos en `docs/proyecto.md` (RF-01, RF-02). Orden: Bloque A â†’ Bloque B â†’ verificador.

## Bloque A â€” Estructura superior (1 implementador)
- [x] **T2.1** `src/lib/bookingContext.tsx`: servicio seleccionado compartido entre tarjetas y formulario.
- [x] **T2.2** `Header` (sticky: logo desde config, Reservar, llamar, `ThemeToggle`), `Hero`, `TrustBar` (abierto/cerrado calculado con `schedule` y `business.timezone`).
- [x] **T2.3** `Services` con `ServiceCard` (imagen, precio, duraciÃ³n, botÃ³n "Elegir" que selecciona y desplaza a `#reservar`).

## Bloque B â€” Resto de secciones (1 implementador)
- [x] **T2.4** `HowItWorks`, `Gallery`, `Testimonials`, `FAQ` (`<details>` nativo).
- [x] **T2.5** `Location` (enlace "CÃ³mo llegar"; mapa embebido solo al tocar), `Footer`, `WhatsAppFloat`, barra "Reservar" sticky en mÃ³vil.
- [x] **T2.6** Marcador del formulario con `id="reservar"` (el real llega en la Fase 3).

## Reglas
- Todo texto, imagen, color y dato sale de config; solo tokens semÃ¡nticos.
- `<img>` con `width`/`height`; hero con `fetchpriority="high"` sin lazy; el resto `loading="lazy"`.
- Iconos como SVG inline; sin librerÃ­as de iconos.

## Criterios
- `npm run verify` pasa. RevisiÃ³n manual a 360 y 390px en **claro y oscuro**, sin scroll horizontal.
- Desactivar o reordenar una secciÃ³n en config se refleja sin tocar cÃ³digo.

