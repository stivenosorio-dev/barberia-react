# Agenda Local — Plantilla de landing (React)

Plantilla web mobile-first para negocios locales (barberías, salones, talleres, clínicas) que convierte visitas en solicitudes de cita por WhatsApp. Se clona y edita por cliente: todo lo variable vive en `src/config/site.config.ts`.

## Stack
- TypeScript estricto · React + Vite (SPA estática) · Tailwind CSS 4 (`@tailwindcss/vite`) · Zod
- Backend: Cloudflare Pages Functions (`functions/api/lead.ts`)
- Datos: Google Sheets + Google Apps Script (`apps-script/Code.gs`)
- Hosting: Cloudflare Pages · Tests: ninguno en el MVP (verificación manual en móvil)
- Versiones exactas: las fija el implementador al crear el proyecto, con Context7.

## Comandos
- `npm run dev` — UI local (envío simulado hasta la Fase 4)
- `npm run verify` — typecheck + build. **Único chequeo antes de reportar o commitear.**
- `npm run dev:cf` — build + Pages Functions locales con wrangler (desde la Fase 4)

## Estructura
```
src/config/       site.config.ts (datos del cliente) · types.ts
src/styles/       index.css (tokens de tema y fuentes)
src/theme/        useTheme.ts · ThemeToggle.tsx
src/components/   sections/ (secciones de la landing) · ui/ (piezas reutilizables)
src/lib/          validation.ts · whatsapp.ts · api.ts · bookingContext.tsx
plugins/          site-head.ts (Vite: SEO, JSON-LD, tema, fuentes y anti-parpadeo en el HTML)
functions/api/    lead.ts
apps-script/      Code.gs (sin secretos)
public/images/    fotos del cliente
```

## Convenciones
- **Config = única fuente de verdad:** textos, colores, fuentes, imágenes, contacto, horarios, servicios, y orden/activación de secciones. Ningún dato de cliente hardcodeado en componentes.
- **Tema claro/oscuro:** variables CSS semánticas (`--color-bg`, `--color-fg`, `--color-primary`…) por paleta en config. Los componentes usan solo clases semánticas (`bg-bg`, `text-fg`, `bg-primary`); nunca hex ni colores literales con `dark:`.
- Mobile-first 360–390px; botón "Reservar" sticky en móvil; contraste AA en ambos temas.
- Teléfono: 10 dígitos, empieza con 3. Fecha/hora: futura según `business.timezone`.
- Flujo: validar (Zod) → `/api/lead` re-valida → Apps Script guarda → solo entonces abrir `wa.me`. El botón "Abrir WhatsApp" de la confirmación es respaldo permanente.
- Anti-spam: honeypot + 3 envíos / 10 min por hash de IP (lo aplica el Apps Script).
- Componentes funcionales en PascalCase, uno por archivo; tipos desde `types.ts`. Interfaz en español de Colombia.

## No hagas
- Secretos solo en variables de Cloudflare, `.dev.vars` y Script Properties. Nunca con prefijo `VITE_`, ni en el repo, ni en `MEMORY.md`.
- Ninguna llamada a Google desde el navegador: todo pasa por `/api/lead`.
- No quites la neutralización de fórmulas (`=`, `+`, `-`, `@`) del Apps Script.
- No instales dependencias sin preguntar. Permitidas: react, react-dom, vite, @vitejs/plugin-react, typescript, tailwindcss, @tailwindcss/vite, zod; dev: wrangler, @cloudflare/workers-types.
- Fuera del MVP: login, pagos, calendario con disponibilidad, app nativa, estado global tipo Redux, tests pesados, panel propio.
- No añadas funcionalidades no pedidas ni reescribas lo que funciona.

## Eficiencia de tokens (todos los agentes)
- Lee solo lo que la tarea necesita: grep/glob y rangos de líneas; no releas lo ya leído; no listes el repo entero.
- No leas `docs/` salvo el archivo citado en el encargo.
- Un solo chequeo por bloque: `npm run verify`. Sin servidor de desarrollo salvo prueba visual pedida.
- Edita con reemplazos puntuales; no reescribas archivos completos.
- Reportes cortos con formato fijo: sin repetir código, diffs ni planes, sin preámbulos.
- No generes docs, tests ni explicaciones no pedidas.

## Flujo de trabajo
- Tarea no trivial: plan corto y espera mi OK. Trivial: hazla directo.
- Al empezar lee `MEMORY.md` y solo el archivo de fase indicado. Si no estás seguro al 80%, pregunta.
- Commits: solo el coordinador, cuando yo confirme el cierre de una fase. Nunca push.

## Documentación (leer solo lo que la tarea pida)
- `docs/proyecto.md` requisitos · `docs/config.md` esquema de config y tema · `docs/plan/` fases · `docs/lecciones.md` errores ya resueltos (Apps Script, Cloudflare)
- React https://react.dev · Vite https://vite.dev · Tailwind https://tailwindcss.com/docs · Pages Functions https://developers.cloudflare.com/pages/functions/
