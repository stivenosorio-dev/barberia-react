# Fase 4 â€” Backend: Pages Function, Apps Script y hoja

Lee: `docs/lecciones.md`, `docs/plantilla-hoja.md`. Bloque A (implementador) â†’ Bloque B (usuario) â†’ Bloque C (implementador) â†’ verificador.

## Bloque A â€” FunciÃ³n y cliente (1 implementador)
- [x] **T4.1** Dependencias dev (requieren aprobaciÃ³n): `wrangler`, `@cloudflare/workers-types`. `wrangler.toml` con `pages_build_output_dir = "dist"`. Script `dev:cf` (build + `wrangler pages dev`). Wrangler lee `.env` en local; si `wrangler pages dev` no ve las variables, plan B: mismo contenido en `.dev.vars` (usar solo uno de los dos archivos).
- [x] **T4.2** `functions/api/lead.ts` (solo POST): re-valida con `src/lib/validation.ts`; honeypot lleno â†’ responde OK sin guardar; hash SHA-256 de `CF-Connecting-IP` + `IP_HASH_SALT` (Web Crypto, nunca la IP cruda); llama al Apps Script con `APPS_SCRIPT_TOKEN`, timeout de 8 s, siguiendo la redirecciÃ³n; devuelve `{ code }` controlado, sin detalles internos.
- [x] **T4.3** Usar las variables `APPS_SCRIPT_URL`, `APPS_SCRIPT_TOKEN` e `IP_HASH_SALT` de `.env.example` (ya existe, sin valores). `src/lib/api.ts` pasa a llamar a `/api/lead`.

## Bloque B â€” Usuario
- [x] Copiar `apps-script/Code.gs` probado. Crear la hoja de pruebas siguiendo `docs/plantilla-hoja.md`, definir Script Properties y desplegar **Nueva versiÃ³n** (`/exec`). Rellenar `.env` (el token debe coincidir con el de Script Properties; `SPREADSHEET_ID` vive solo en Script Properties).

## Contrato con el Apps Script
```
POST APPS_SCRIPT_URL  { token, submissionId, name, phone, service, preferredDateTime, note, honeypot:'', origin:'web'|'maps'|'instagram', ipHash }
Respuesta             { code: 'OK'|'INVALID'|'RATE_LIMIT'|'UNAUTHORIZED'|'ERROR', message, duplicate? }
```
Si la config desactiva fecha/hora, enviar `preferredDateTime: "Sin preferencia"`.

## VerificaciÃ³n (con la hoja de pruebas, `npm run dev:cf`)
- [x] Un lead real aparece como fila nueva con enlace "Escribir".
- El 4.Âº envÃ­o en 10 min devuelve `RATE_LIMIT`; token incorrecto, `UNAUTHORIZED`.
- [x] `=1+1` queda como texto; reenviar el mismo `submissionId` no duplica la fila.
- [x] `dist/` sin URL, token ni salt; el navegador solo llama a `/api/lead`; ningÃºn secreto con `VITE_`.

