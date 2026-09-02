# SEO inicial para GitHub Pages

## Objective

Mejorar la indexabilidad y la representación compartida de las páginas públicas de Diamond Publicidad durante la fase de despliegue en GitHub Pages, sin depender de un dominio de producción ni publicar información comercial no aprobada.

## Requirements

- Usar como URL pública temporal del sitio `https://diamond-publicidad.github.io/website` y respetar la subruta `/website` configurada para GitHub Pages en todas las URLs públicas generadas.
- Mantener títulos y descripciones únicos por página y cultura a partir de los recursos de texto aprobados existentes; no añadir claims, servicios, datos de contacto, cobertura, resultados ni otra información comercial no confirmada.
- Declarar una URL canónica absoluta para cada página pública indexable, construida desde la URL temporal del sitio, la subruta configurada y la ruta cultural correspondiente.
- Declarar los metadatos sociales básicos Open Graph que puedan resolverse con el título, la descripción, la URL canónica, el idioma y el nombre aprobado de la marca. No publicar una imagen social hasta contar con un recurso visual aprobado para ese uso.
- Mantener el idioma del documento y asociar las versiones públicas equivalentes `es-CO` y `en-US` mediante metadatos alternativos de idioma cuando ambas versiones estén aprobadas y publicadas.
- Generar y publicar un sitemap XML con las rutas públicas estáticas indexables, incluidas las variantes culturales que estén aprobadas para publicación, y con URLs que respeten la configuración de GitHub Pages.
- Publicar un archivo `robots.txt` que permita el rastreo de las páginas públicas y referencie el sitemap mediante su URL temporal absoluta.
- Excluir de los metadatos de indexación y del sitemap las rutas de error, redirección o cualquier ruta que no represente contenido público indexable.
- Mantener Astro estático y prerenderizado, TypeScript estricto y la configuración compatible con GitHub Pages. No introducir SSR, frameworks de interfaz ni datos de configuración alternativos para el dominio futuro.
- Centralizar la URL pública temporal de forma que su sustitución por el dominio de producción requiera actualizar un único dato de configuración cuando el propietario lo proporcione.

## Acceptance Criteria

- Cada página pública indexable declara un título, una descripción, una URL canónica absoluta y un idioma de documento consistentes con su cultura activa.
- Las URLs canónicas, alternativas de idioma, metadatos sociales, enlaces del sitemap y referencia al sitemap en `robots.txt` usan `https://diamond-publicidad.github.io/website` sin omitir ni duplicar la subruta `/website`.
- Las versiones equivalentes aprobadas de una página en `/es-co/` y `/en-us/` se vinculan mediante metadatos alternativos de idioma; las versiones que aún no estén aprobadas no se publican ni se incluyen en el sitemap.
- Los metadatos Open Graph publicados contienen únicamente nombre de marca, título, descripción, URL, tipo de contenido e idioma; no incluyen una imagen no aprobada ni datos comerciales no documentados.
- El sitemap XML incluye únicamente páginas públicas estáticas indexables y no contiene rutas de error, redirección ni URLs fuera de la base de GitHub Pages.
- El archivo `robots.txt` permite el rastreo de las páginas públicas y referencia la URL absoluta del sitemap dentro de la base de GitHub Pages.
- La URL pública temporal se define en un único punto de configuración y puede reemplazarse por un dominio de producción sin modificar las rutas públicas de las páginas, componentes o recursos de traducción.
- `npm run check` y `npm run build` finalizan correctamente, y los archivos generados conservan rutas válidas al publicarse bajo la configuración `base` de GitHub Pages.