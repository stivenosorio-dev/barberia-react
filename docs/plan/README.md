# Plan de desarrollo — índice

Cada fase vive en su propio archivo para que los agentes lean **solo la fase en curso**. El estado (fase actual, último cierre) vive en `MEMORY.md`.

**Cómo se ejecuta una fase:** `Ejecuta la Fase N` → el coordinador lee `MEMORY.md` + `fase-N.md`, propone plan corto, esperas tu OK → 1 implementador por bloque (en secuencia) → verificador una vez al cerrar → tu revisión manual a 390px en claro y oscuro → confirmas cierre → commit y memoria actualizada.

| Fase | Resultado | Cubre |
|---|---|---|
| 1 | Proyecto base, config completa y tema claro/oscuro | RF-07, RF-08 |
| 2 | Landing estática completa desde config | RF-01, RF-02, RF-09 |
| 3 | Formulario con validación (envío simulado) | RF-03 |
| 4 | Backend: Pages Function + Apps Script + hoja | RF-04, RNF-05 |
| 5 | WhatsApp, confirmación y casos de falla | RF-05, CU-01, CU-04 |
| 6 | SEO, rendimiento y accesibilidad | RNF-01, RNF-03, RNF-07 |
| 7 | Hoja del dueño y guía | RF-06, CU-02 |
| 8 | Despliegue en Cloudflare Pages | RNF-04, RNF-06 |
| 9 | Clonación y plantilla reutilizable | CU-03, RF-09 |

## Fase 0 — Harness (checklist del usuario)

- [ ] Carpeta nueva del proyecto con este harness; `git init` y primer commit.
- [ ] Copiar del proyecto Astro: `apps-script/Code.gs` (probado) y, si se reutilizan, las fotos a `public/images/`.
- [ ] Dejar en `.agents/skills/` solo `frontend-design` y `webapp-testing`; actualizar `skills-lock.json`. Cada skill instalada añade su descripción al contexto de cada sesión.
- [ ] `CONTEXT7_API_KEY` definida como variable de entorno; `opencode mcp list` la muestra conectada.
- [ ] Cuenta de Cloudflare y hoja de Google de pruebas listas.
- [ ] Opcional: descomentar `model:` en los archivos de `.opencode/agents/` (coordinador y verificador con modelo intermedio; implementador con tu mejor modelo de código).

## Decisiones pendientes

1. **Fallo al guardar** (bloquea Fase 5): ¿qué muestra la pantalla y se ofrece WhatsApp directo aunque el lead no se haya guardado?
2. **Aviso de privacidad** (Ley 1581 de 2012): ¿línea informativa o consentimiento obligatorio? Confirmar con abogado; no es asesoría legal.
3. **Propiedad de hoja y script** (antes de Fase 7): ¿en la cuenta del cliente o en la tuya, compartida por correo?
4. **Idempotencia ante fallo de `CacheService.put`** (Fase 4): aceptar el riesgo o mitigarlo.
5. **Prerender estático** (Fase 6): solo si SEO o LCP no alcanzan la meta con la SPA.
6. **Notificación por correo al dueño** (opcional, Fase 7).

## Fuera de alcance

Login, pagos online, calendario con disponibilidad, app nativa, estado global tipo Redux, tests pesados, panel propio.
