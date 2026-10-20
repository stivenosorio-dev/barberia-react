# Lecciones del proyecto Astro (ya resueltas; no repetir)

**Apps Script**
- El editor ejecuta el código *guardado*; la web app usa la versión *desplegada*. Tras cambiar: Implementar → Administrar implementaciones → ✏️ → **Nueva versión**. Usa la URL `/exec`; "Nueva implementación" cambia la URL.
- `setFormula` depende del idioma/región de la hoja y falló (`#NAME?`). El enlace `Escribir` se escribe como texto enriquecido (`newRichTextValue().setLinkUrl`). No volver a fórmulas.
- Las funciones que terminan en `_` son privadas: para ejecutarlas desde **Run** hace falta un wrapper público (`repararEnlaces`).
- Valores que empiezan con `=`, `+`, `-`, `@` se ejecutan como fórmula: `safeCellText_` los neutraliza. Mantener formato texto en teléfono y campos libres.
- `CacheService.put` puede fallar tras guardar la fila y un reintento duplicaría el lead (riesgo abierto: decidir en Fase 4).
- `Code.gs` exige `service` y `preferredDateTime` no vacíos: si la config desactiva fecha/hora, enviar "Sin preferencia".
- Apps Script responde con redirección (el `fetch` debe seguirla) y en frío tarda 1–3 s o más: timeout de 8 s y un único reintento con el mismo `submissionId`.

**Cliente y flujo**
- `window.open` tras una petición asíncrona puede bloquearse en móvil: el botón "Abrir WhatsApp" de la confirmación es obligatorio.
- Fecha/hora: una sola fecha/hora futura en `America/Bogota`, validada con el esquema compartido en cliente y función; no confiar en los controles del navegador.
- Imágenes: `<img>` con `width`/`height`, hero con `fetchpriority="high"` y sin lazy; las demás con `loading="lazy"`.

**Seguridad y despliegue**
- Nada con prefijo `VITE_` es secreto. Tras construir, buscar en `dist/` con `rg --no-ignore`.
- Cloudflare: secretos en el panel del proyecto Pages; en local, `.dev.vars` (no versionado). `functions/api/lead.ts` sirve `/api/lead`. Confirmar con Context7 si Cloudflare recomienda hoy Pages o Workers con assets.
- Entorno Windows/PowerShell: los scripts de `package.json` deben funcionar sin sintaxis bash.
