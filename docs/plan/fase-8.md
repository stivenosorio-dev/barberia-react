# Fase 8 — Despliegue en Cloudflare Pages

Lee: `docs/lecciones.md`. Mayormente manual, guiado por el coordinador. Verificador al final.

- [ ] **T8.0** Antes de cotizar: confirmar en páginas oficiales los términos de uso comercial del plan gratuito de Cloudflare y las cuotas de Apps Script y Sheets. Confirmar con Context7 el flujo vigente (Pages o Workers con assets).
- [ ] **T8.1** Repo en GitHub (privado) y proyecto de Cloudflare conectado: build `npm run build`, salida `dist`, funciones detectadas en `functions/`.
- [ ] **T8.2** Secretos `APPS_SCRIPT_URL`, `APPS_SCRIPT_TOKEN`, `IP_HASH_SALT` cargados en el panel, nunca en el repo.
- [ ] **T8.3** Despliegue de vista previa y flujo completo en celular real con red móvil.
- [ ] **T8.4** Revisión de seguridad del verificador: sin secretos en repo ni `dist/`, token validado, fórmulas neutralizadas, honeypot y límite efectivos, hoja compartida solo con el dueño y contigo.
- [ ] **T8.5** Dominio o subdominio del cliente y monitoreo gratuito de disponibilidad. No prometer SLA por contrato.
- [ ] **T8.6** Lighthouse sobre producción.
