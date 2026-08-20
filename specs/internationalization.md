# Internacionalización del sitio

## Objective

Permitir que el sitio estático de Diamond Publicidad se consulte en español de Colombia e inglés de Estados Unidos mediante URLs estables por cultura, con una selección de idioma clara, accesible y persistente, sin contenido textual codificado directamente en las páginas o componentes.

## Requirements

- Publicar una versión estática para las culturas `es-CO` y `en-US`, identificadas en las rutas públicas como `/es-co/` y `/en-us/` respectivamente. La ruta debe ser la fuente de verdad del idioma para que cada versión sea indexable, compartible y renderizable sin depender de JavaScript.
- Mantener una entrada raíz compatible con GitHub Pages que dirija a una de las rutas culturales. Cuando el navegador permita usar almacenamiento local, debe respetar la última cultura elegida; sin preferencia guardada o sin acceso a almacenamiento, debe usar `es-CO` como cultura predeterminada. La ruta cultural visitada explícitamente debe prevalecer para su renderizado.
- Guardar en `localStorage` únicamente la preferencia de cultura elegida por la persona visitante. La interfaz debe seguir siendo utilizable cuando dicho almacenamiento esté bloqueado o no disponible.
- Mostrar un selector de idioma accesible en la cabecera de escritorio y dentro del menú de navegación móvil. Debe indicar la cultura actual, permitir cambiar a la versión equivalente de la ruta actual y conservar la navegación por teclado, el foco visible y la adaptación responsive existentes.
- Centralizar los recursos de texto por cultura dentro del proyecto, con contratos TypeScript que aseguren que `es-CO` y `en-US` exponen el mismo conjunto de claves.
- Obtener mediante claves de recursos todos los textos visibles y no visibles dependientes de cultura: contenido de página, navegación, controles, etiquetas accesibles, títulos, descripciones y otros metadatos. Los nombres de marca, valores dinámicos aprobados y datos de contacto pueden mantenerse como datos estructurados cuando no requieran traducción, pero no deben mezclarse como texto de interfaz codificado en páginas o componentes.
- Mantener los enlaces, datos de contacto, servicios, identidad visual, temas, iconos, navegación móvil y retorno al inicio existentes, salvo los cambios necesarios para que funcionen correctamente por cultura y ruta.
- Mantener Astro estático y prerenderizado, TypeScript estricto, JavaScript de cliente mínimo y sin frameworks, SSR ni dependencias nuevas.
- Definir correctamente el idioma del documento y los metadatos de cada versión cultural, sin inventar información comercial, promesas ni contenido de portafolio.
- Las traducciones al inglés de textos comerciales, de servicios, de contacto y de metadatos deben ser aprobadas por el propietario antes de publicarse.

## Acceptance Criteria

- Las rutas `/es-co/` y `/en-us/` generan versiones estáticas del inicio y cada una declara el idioma de documento correspondiente (`es-CO` y `en-US`).
- Visitar una ruta cultural muestra la cultura representada por esa ruta sin requerir JavaScript; la URL se puede compartir y conserva la cultura al cargarla en un navegador nuevo.
- La entrada raíz dirige a `/es-co/` cuando no existe una preferencia válida y, con una preferencia válida almacenada, dirige a la ruta de esa cultura. Un error o bloqueo de `localStorage` no impide acceder al sitio.
- El selector de idioma está disponible en la cabecera de escritorio y en el menú móvil, informa su estado mediante un nombre accesible y permite llegar con teclado a la misma sección de la otra cultura.
- Tras cambiar la cultura desde el selector, la preferencia se conserva entre visitas cuando `localStorage` está disponible; visitar directamente una ruta cultural sigue mostrando la cultura de esa ruta.
- Las páginas, layout y componentes no contienen literales de texto de interfaz o de contenido dependientes de cultura; los recursos locales de `es-CO` y `en-US` usan claves equivalentes verificadas por TypeScript.
- Los títulos, descripciones y etiquetas accesibles se resuelven desde los recursos de la cultura activa y no quedan textos de interfaz sin traducir en la versión `en-US`.
- Los datos comerciales publicados en ambas culturas proceden exclusivamente de información aprobada. No se publica la versión inglesa hasta que sus recursos comerciales y metadatos estén aprobados por el propietario.
- La navegación, enlaces internos por ancla, menú móvil, selector de tema, foco visible, contraste y responsive se conservan en ambas culturas.
- `npm run check` y `npm run build` finalizan correctamente y las rutas generadas respetan la configuración `base` de GitHub Pages.