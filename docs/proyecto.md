# Agenda Local — Especificación

**Producto:** plantilla de landing mobile-first para negocios locales (barberías, salones, talleres, clínicas, o cualquiera que solo necesite agendar o recibir contactos). Convierte visitas en solicitudes de cita por WhatsApp en menos de 60 segundos.
**Usuario final:** cliente desde celular, internet promedio, con prisa. **Operador:** tú (freelance), clonando el repo por cliente en ≤30 min.

## Requerimientos funcionales
- **RF-01** Landing con secciones configurables (hero, confianza, servicios, cómo funciona, galería, testimonios, formulario, FAQ, ubicación) más header sticky, footer, botón flotante de WhatsApp y botón "Reservar" sticky en móvil.
- **RF-02** Catálogo de servicios editable desde config (título, duración, precio, imagen).
- **RF-03** Formulario: nombre, teléfono (10 dígitos, empieza con 3), servicio, fecha/hora futura según `business.timezone`, nota opcional. Fecha/hora y nota se activan por config.
- **RF-04** Cada envío es una fila en la hoja de Google del cliente: fecha, origen y estado (nuevo/contactado/confirmado/cancelado).
- **RF-05** Tras guardar, abrir `wa.me` con mensaje de plantilla (config). Respaldo permanente: botón "Abrir WhatsApp".
- **RF-06** Panel del dueño = la hoja: estado desplegable, enlace "Escribir" por fila, exportación nativa.
- **RF-07** Personalización total vía `site.config.ts` (datos, textos, imágenes, secciones, paleta, fuentes), sin tocar componentes.
- **RF-08** Tema claro y oscuro: respeta el sistema, toggle persistente, sin parpadeo, paleta propia por modo en config.
- **RF-09** Reutilizable para otros rubros: etiquetas, secciones y campos del formulario configurables.

## Requerimientos no funcionales
- **RNF-01** Rendimiento: carga <2 s en 4G, Lighthouse móvil >90 (rendimiento, SEO, accesibilidad). SPA React: JS mínimo, sin librerías pesadas, imágenes optimizadas.
- **RNF-02** Mobile-first 360–390px.
- **RNF-03** SEO local: title, description, Open Graph, JSON-LD LocalBusiness desde config, enlace a Maps, sitemap y robots.
- **RNF-04** Hosting en Cloudflare Pages; meta de uptime >99%, sin prometerlo como SLA.
- **RNF-05** Seguridad: validación en cliente y servidor, honeypot, límite de envíos, secretos fuera del cliente, neutralización de fórmulas.
- **RNF-06** Costo: $0 de infraestructura por cliente (dominio propio aparte).
- **RNF-07** Accesibilidad: contraste AA en ambos temas, etiquetas, foco visible, objetivos ≥44px, `prefers-reduced-motion`.

## Casos de uso
- **CU-01** Reservar: entra → elige servicio → llena formulario → Reservar → se guarda → se abre WhatsApp → ve confirmación.
- **CU-02** Dueño: abre la hoja → ve lead nuevo → cambia a contactado → escribe por WhatsApp.
- **CU-03** Clonar: clonas repo → editas config e imágenes → hoja y script del cliente → proyecto en Cloudflare → en 30 min.
- **CU-04** Falla WhatsApp o red tras guardar: el lead queda guardado; la pantalla muestra "Te contactaremos" + botón llamar.

## Flujo de datos
1. `BookingForm` valida con Zod (esquema compartido).
2. `POST /api/lead` (Pages Function): re-valida, calcula hash de IP, llama al Apps Script con token.
3. Apps Script valida token, neutraliza fórmulas, aplica límite e idempotencia y escribe la fila.
4. La función responde un código controlado; el cliente muestra la confirmación y abre `wa.me`.

## Modelo de datos
Hoja `Leads`: Fecha, Nombre, Teléfono, Servicio, Fecha/hora preferida, Nota, Estado, Origen (web/maps/instagram), Escribir. Detalle: `docs/plantilla-hoja.md`. Config del cliente: `docs/config.md`.

## Fuera de alcance
Login, pagos online, calendario con disponibilidad, app nativa, estado global tipo Redux, tests automatizados pesados, panel propio.
