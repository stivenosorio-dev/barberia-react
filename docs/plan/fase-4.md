# Fase 4 — Backend: Pages Function, Apps Script y hoja

Lee: `docs/lecciones.md`, `docs/plantilla-hoja.md`. Bloque A (implementador) → Bloque B (usuario) → Bloque C (implementador) → verificador.

## Bloque A — Función y cliente (1 implementador)
- [ ] **T4.1** Dependencias dev (requieren aprobación): `wrangler`, `@cloudflare/workers-types`. `wrangler.toml` con `pages_build_output_dir = "dist"`. Script `dev:cf` (build + `wrangler pages dev`).
- [ ] **T4.2** `functions/api/lead.ts` (solo POST): re-valida con `src/lib/validation.ts`; honeypot lleno → responde OK sin guardar; hash SHA-256 de `CF-Connecting-IP` + `IP_HASH_SALT` (Web Crypto, nunca la IP cruda); llama al Apps Script con `APPS_SCRIPT_TOKEN`, timeout de 8 s, siguiendo la redirección; devuelve `{ code }` controlado, sin detalles internos.
- [ ] **T4.3** `.dev.vars.example` con `APPS_SCRIPT_URL`, `APPS_SCRIPT_TOKEN`, `IP_HASH_SALT` sin valores. `src/lib/api.ts` pasa a llamar a `/api/lead`.

## Bloque B — Usuario
- [ ] Copiar `apps-script/Code.gs` probado. Crear la hoja de pruebas siguiendo `docs/plantilla-hoja.md`, definir Script Properties y desplegar **Nueva versión** (`/exec`). Rellenar `.dev.vars`.

## Contrato con el Apps Script
```
POST APPS_SCRIPT_URL  { token, submissionId, name, phone, service, preferredDateTime, note, honeypot:'', origin:'web'|'maps'|'instagram', ipHash }
Respuesta             { code: 'OK'|'INVALID'|'RATE_LIMIT'|'UNAUTHORIZED'|'ERROR', message, duplicate? }
```
Si la config desactiva fecha/hora, enviar `preferredDateTime: "Sin preferencia"`.

## Verificación (con la hoja de pruebas, `npm run dev:cf`)
- Un lead real aparece como fila nueva con enlace "Escribir".
- El 4.º envío en 10 min devuelve `RATE_LIMIT`; token incorrecto, `UNAUTHORIZED`.
- `=1+1` queda como texto; reenviar el mismo `submissionId` no duplica la fila.
- `dist/` sin URL, token ni salt; el navegador solo llama a `/api/lead`; ningún secreto con `VITE_`.
