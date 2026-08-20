---
name: deployment
description: Mantenimiento del despliegue estatico de Astro en GitHub Pages.
---

# Deployment

- Fuentes principales: https://docs.astro.build/en/guides/deploy/github/ y https://github.com/withastro/action
- El destino es Astro estatico -> GitHub Actions -> GitHub Pages. No agregues SSR, servidor, Docker ni infraestructura cloud.
- Mantén `output: 'static'` y configura `site` con la URL publicada.
- Usa `base` cuando el sitio se publique bajo el nombre del repositorio. Los enlaces y assets internos deben respetar ese base.
- Conserva `package-lock.json` para que CI use `npm ci` de forma reproducible.
- El workflow debe ejecutarse en `main`, validar con `npm run check`, construir y publicar el resultado en Pages.
- Usa permisos minimos `contents: read`, `pages: write` e `id-token: write` y las acciones oficiales versionadas.
- Antes de cambiar el workflow, revisa la documentacion vigente y comprueba localmente `npm run check` y `npm run build`.