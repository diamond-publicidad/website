# Validación de URL pública para GitHub Pages

## Objective

Confirmar la URL pública correcta de Diamond Publicidad en GitHub Pages y determinar si la subruta `/website` debe mantenerse o puede eliminarse según el tipo de sitio configurado en la organización `diamond-publicidad`.

## Requirements

- El despliegue actual se publica como sitio de proyecto del repositorio `website`, mediante el workflow de GitHub Pages ejecutado desde `main`.
- Mantener `https://diamond-publicidad.github.io/website` y la subruta `/website` en la configuración de Astro cuando Pages publique el repositorio `website` como sitio de proyecto.
- Considerar una URL sin `/website` únicamente si Pages se configura como sitio de organización en el repositorio `diamond-publicidad.github.io`, o si el propietario aprueba y configura un dominio personalizado que publique el sitio en su raíz.
- Mantener el origen público y la subruta de GitHub Pages centralizados en `src/config/site.ts`; `astro.config.mjs`, las URLs canónicas, el sitemap y `robots.txt` deben consumir esa configuración.
- Antes de cambiar el origen o la subruta centralizados, confirmar la URL pública definitiva con el propietario y actualizar en conjunto las URLs canónicas, sitemap, `robots.txt`, enlaces internos y recursos que dependan de esa configuración.
- Mantener el sitio estático y compatible con GitHub Pages; no añadir infraestructura, SSR ni servicios externos para resolver la ruta pública.

## Acceptance Criteria

- La configuración de GitHub Pages, el nombre del repositorio y el workflow de despliegue confirman que aplica el sitio de proyecto `website`; no hay configuración aprobada para un sitio de organización ni para un dominio personalizado.
- Si se mantiene el repositorio `website` como sitio de proyecto, la URL publicada es `https://diamond-publicidad.github.io/website` y Astro conserva `base: '/website'` sin rutas duplicadas ni recursos rotos.
- Si se aprueba una publicación en raíz, la configuración de Pages y de Astro corresponde al destino aprobado, sin conservar `/website` en URLs públicas, canónicas, sitemap, `robots.txt`, enlaces internos ni recursos generados.
- El origen público y la subruta se definen en `src/config/site.ts`, y `astro.config.mjs`, las URLs canónicas, el sitemap y `robots.txt` generan la URL pública completa sin omitir ni duplicar `/website`.
- Con el sitio de proyecto vigente, `robots.txt` referencia `https://diamond-publicidad.github.io/website/sitemap.xml` y el sitemap contiene únicamente las seis rutas culturales indexables vigentes: inicio, servicios e historia para `es-CO` y `en-US`.
- Tras un cambio de configuración aprobado, `npm run check` y `npm run build` finalizan correctamente y el resultado generado usa rutas válidas para el destino de Pages confirmado.