# Historial de fases cerradas

Archivo de consulta humana. Los agentes no lo leen (está en `.ignore` y denegado en `opencode.json`). El coordinador mueve aquí el detalle de cada fase al cerrarla.

# Fase 1 — Proyecto base, config y tema

Estado: cerrada tras revisión manual del usuario y verificación aprobada (`npm run verify`). Línea base JS gzip: 71.50 kB.

## Bloque A — Scaffold y config
- [x] T1.1 Vite + React + TypeScript estricto + Tailwind 4 (`@tailwindcss/vite`); scripts `dev`, `build`, `verify`.
- [x] T1.2 `src/config/types.ts` y `src/config/site.config.ts` completos con datos ficticios, paletas clara/oscura y dos fuentes.
- [x] T1.3 `src/styles/index.css`: Tailwind, variante dark y tokens/fuentes semánticos.

## Bloque B — Tema, head y esqueleto
- [x] T1.4 `plugins/site-head.ts`: metadatos, Open Graph, JSON-LD, temas, fuentes y script anti-parpadeo.
- [x] T1.5 `src/theme/useTheme.ts` y `ThemeToggle.tsx`; respeta `allowToggle` y maneja `localStorage` con `try/catch`.
- [x] T1.6 `src/main.tsx`, `src/App.tsx` y registro dinámico de secciones habilitadas en orden.

## Criterios
- [x] `npm run verify` pasa.
- [x] Configuración y orden de secciones controlan la presentación sin cambios en componentes.
- [x] `dist/index.html` incluye metadatos y JSON-LD; anti-parpadeo revisado.
- [x] Revisión manual del usuario aprobada.

# Fase 2 — Landing estática completa

Estado: cerrada tras revisión manual del usuario; `npm run verify` aprobado. Se incorporaron seis imágenes genéricas de Pexels con licencia gratuita.

## Bloque A — Estructura superior
- [x] T2.1 `src/lib/bookingContext.tsx`: servicio seleccionado compartido.
- [x] T2.2 Header sticky, Hero y TrustBar con horario y zona horaria.
- [x] T2.3 Services y ServiceCard con imagen, precio, duración y selección hacia `#reservar`.

## Bloque B — Resto de secciones
- [x] T2.4 HowItWorks, Gallery, Testimonials y FAQ nativo.
- [x] T2.5 Location con mapa bajo demanda, Footer, WhatsAppFloat y barra móvil sticky.
- [x] T2.6 Marcador del formulario `id="reservar"`.

## Criterios
- [x] Contenido y estilo según config/tokens; imágenes con dimensiones y carga apropiada; SVG inline.
- [x] `npm run verify` pasa y la revisión manual a 360/390 px, claro/oscuro, fue aprobada.
- [x] El orden y activación de secciones responden a la configuración.
- Imágenes prototipo: `corte-clasico.jpg`, `perfilado-barba.jpg`, `corte-y-barba.jpg`, `galeria-01.jpg`, `galeria-02.jpg`, `galeria-03.jpg` (`public/images/`). Fuentes: Pexels; licencia gratuita sin atribución requerida.

# Fase 3 — Formulario (envío simulado)

Estado: cerrada tras validación manual del usuario (PC y celular); `npm run verify` aprobado.

- [x] T3.1 `src/lib/validation.ts`: esquema Zod; nombre, teléfono, servicio, fecha/hora con zona horaria y anticipación, nota opcional, honeypot, UUID y `origin`.
- [x] T3.2 `BookingForm.tsx`: campos según config, errores en español, estados de envío, servicio preseleccionado, honeypot y privacidad informativa; reintento reutiliza UUID.
- [x] T3.3 `src/lib/api.ts`: envío simulado con retardo para sustituir en Fase 4.
- [x] No se envía con datos inválidos; estados y validación revisados.
- [x] Formulario revisado en claro y oscuro a 390px; `npm run verify` pasa.

# Fase 4 — Backend: Pages Function, Apps Script y hoja

Estado: cerrada tras pruebas integradas en la hoja de pruebas; `npm run verify` aprobado.

## Bloque A — Función y cliente
- [x] T4.1 Wrangler, `wrangler.toml` con `dist` y script `dev:cf`.
- [x] T4.2 Function POST-only con revalidación, honeypot, hash IP con salt, llamada Apps Script autenticada, timeout y códigos controlados.
- [x] T4.3 Cliente usa `/api/lead`; variables nombradas en `.env.example`, sin valores.

## Bloque B — Usuario
- [x] Apps Script ligado a la hoja de pruebas, Script Properties y Web App `/exec` configuradas.

## Verificación integrada
- [x] Lead de prueba guardado; fila y enlace «Escribir» confirmados por el usuario.
- [x] Token incorrecto devuelve `UNAUTHORIZED`; cuarto envío devuelve `RATE_LIMIT`.
- [x] `=1+1` queda como texto; repetición del mismo `submissionId` no duplica la fila.
- [x] `dist/` sin secretos; navegador envía solo a `/api/lead`.
- [x] Prueba real local: HTTP 200, `{code: "OK"}` en 4.65 s; problemas previos debidos a procesos Wrangler simultáneos.

# Fase 5 — WhatsApp, confirmación y casos de falla

Estado: cerrada tras validación del usuario en el formulario y teléfono; `npm run verify` y revisión de código aprobados.

- [x] T5.1 Enlace `wa.me` con mensaje configurado y codificado.
- [x] T5.2 Confirmación, respaldo permanente Abrir WhatsApp y botón llamar.
- [x] T5.3 Intento de apertura de WhatsApp solo después del guardado confirmado.
- [x] T5.4 Si WhatsApp no abre tras guardar, mensaje de contacto y llamada.
- [x] T5.5 Máximo dos POST total con el mismo `submissionId`; ante fallo final, indicar que no se guardó y ofrecer WhatsApp directo y llamada.
- [x] Decisión 1 resuelta por el usuario: WhatsApp directo más llamada tras fallo definitivo, con aviso claro.
- [x] Envío local integrado probado con Wrangler; 200/OK y registro en Sheets confirmado por el usuario.
- [x] Reintento total acotado; la repetición usa el mismo `submissionId`.
- [x] Revisión manual del usuario aprobada.

## Fase 6.1 — Ajustes del formulario, WhatsApp y mapa (cerrada)

**Cierre:** revisión manual confirmada por el usuario.

### Alcance

- Ajustar la presentación del formulario para que quede centrado en pantallas amplias, conservando su comportamiento y disposición mobile-first en móvil.
- Cuando el guardado del formulario en Sheets esté confirmado, abrir WhatsApp automáticamente con un mensaje de solicitud personalizado a partir de los datos enviados y de la configuración existente. Si el navegador bloquea la apertura, mostrar una alternativa visible para abrir WhatsApp manualmente.
- Integrar un mapa con una dirección aleatoria de Medellín únicamente como prototipo. La dirección debe ser configurable, quedar explícitamente identificada como prototipo y no presentarse como ubicación real del negocio. No publicar el prototipo como dirección real.

No se añadirán datos reales del negocio ni funciones ajenas a estos ajustes. Los textos, dirección y demás datos variables deben proceder de la configuración del sitio; no se fijarán datos de cliente en componentes.

### Orden de ejecución

1. Revisar el flujo actual del formulario y el origen de los datos configurables necesarios; conservar la condición de éxito que confirma el guardado en Sheets.
2. Centrar el formulario solo en pantallas amplias y comprobar que el diseño móvil no se altera.
3. Después de confirmar el guardado, preparar el mensaje personalizado y abrir WhatsApp automáticamente. Mantener una alternativa manual visible cuando la apertura automática no se complete o sea bloqueada; nunca abrir WhatsApp antes de confirmar el guardado.
4. Añadir el mapa con la dirección prototipo configurable de Medellín e indicar claramente en la interfaz y en la configuración que es una dirección aleatoria de prototipo, no una ubicación confirmada.
5. Ejecutar las verificaciones de aceptación; sustituir o retirar la dirección prototipo antes de cualquier uso público como ubicación del negocio.

### Criterios de aceptación

- En una pantalla amplia, el formulario se percibe centrado; en móvil conserva su disposición usable, sin desbordamiento ni cambios que dificulten completarlo.
- Ante un guardado confirmado en Sheets, se intenta abrir WhatsApp con un mensaje asociado a la solicitud y personalizado con la información disponible/configurada. No se abre si el guardado falla.
- Si la apertura automática es bloqueada, el usuario ve y puede activar una alternativa manual para continuar a WhatsApp.
- El mapa muestra la dirección configurable de Medellín marcada claramente como prototipo. No se insinúa que sea la dirección real del negocio y no se incorporan datos reales supuestos.
- El mapa, el formulario y el flujo de reserva existentes siguen siendo utilizables en móvil y escritorio; no se amplía el alcance a disponibilidad, calendario u otras funciones.

### Verificaciones

- Probar el formulario en anchos móvil y amplio: disposición, centrado, campos y acciones.
- Verificar el flujo con guardado confirmado y con fallo: WhatsApp solo se intenta tras el éxito.
- Simular o comprobar bloqueo del navegador y confirmar que la alternativa manual permanece visible y funciona.
- Comprobar que el texto de WhatsApp corresponde a la solicitud y que la dirección del mapa proviene de configuración y está identificada como prototipo.
- Ejecutar `npm run verify` al terminar el bloque.