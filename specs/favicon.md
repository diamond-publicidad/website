# Favicon del sitio

## Objective

Definir la adición del favicon de Diamond Publicidad para que el sitio cuente con una identidad visual consistente en pestañas del navegador, marcadores y dispositivos, siguiendo la forma correcta de Astro para archivos estáticos.

## Requirements

- Crear un archivo favicon en formato `.ico` para la marca Diamond Publicidad.
- Colocar el archivo en la carpeta pública de Astro, que es la ubicación correcta para assets estáticos que deben servirse tal cual en la raíz del sitio.
- Usar la ruta recomendada: `public/favicon.ico`.
- Diseñar un favicon mínimo, legible y reconocible, inspirado en la geometría del diamante y la identidad visual del proyecto.
- Mantener el favicon simple, con fondo transparente o compatible, para que funcione bien en navegadores y sobre fondos claros/oscuro.
- Registrar el favicon en el layout principal del sitio dentro del bloque `<head>` para que Astro lo sirva correctamente.
- Evitar introducir librerías adicionales o generación compleja; el archivo debe ser un recurso estático listo para cargar.
- Asegurar que el favicon no rompa la configuración de GitHub Pages ni la estructura de rutas del sitio.

## Astro Implementation Guidance

En Astro, los archivos en `public/` se sirven desde la raíz del sitio sin procesamiento. Por eso, para un favicon `.ico` se usa:

- Ruta del archivo: `public/favicon.ico`
- Enlace dentro del layout: `<link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />`

Esto asegura que la URL final sea `/favicon.ico` y que el navegador lo cargue correctamente.

## Content and Visual Direction

- El favicon debe tener un enfoque minimalista y profesional.
- Debe reflejar la marca sin copiar el logo completo; puede ser una versión simplificada de la geometría del diamante o su monograma.
- No debe emplear colores fuera de la identidad visual aprobada.
- Debe verse bien a tamaños pequeños y en la pestaña del navegador.
- Si el proyecto decide complementar con SVG más adelante, puede agregarse adicionalmente, pero la versión requerida por esta spec es `.ico`.

## Acceptance Criteria

- Existe un archivo `public/favicon.ico` en el proyecto.
- El archivo se genera como favicon real y no como un placeholder.
- El favicon está enlazado correctamente desde el layout principal del sitio en la sección `<head>`.
- La ruta del recurso funciona en el sitio raíz y no depende de rutas relativas complejas.
- El favicon conserva la identidad visual de Diamond Publicidad y se ve claramente en tamaño pequeño.
- La vista del navegador muestra el favicon sin errores ni 404.
- La integración no rompe el resto de la estructura del sitio ni la navegación.
- El cambio es compatible con la configuración de despliegue estático del proyecto.
