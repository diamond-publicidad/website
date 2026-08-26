# Estado activo en enlaces del header

## Objective

Definir el comportamiento visual del estado activo en los enlaces de navegación del header para que, cuando el usuario se encuentre en la página o sección correspondiente, el item muestre un estado visual equivalente o muy cercano al hover, manteniendo consistencia con la identidad visual del sitio.

## Requirements

- Detectar la ruta o sección activa cuando el usuario está en una página o ancla correspondiente al enlace del header.
- Aplicar un estado visual activo a los enlaces del header que coincidan con la ubicación actual del usuario.
- El estado activo debe verse como una variante del hover, con color de texto, línea decorativa, fondo suave o combinación de estas propiedades, sin romper la jerarquía visual general.
- El comportamiento debe funcionar tanto en desktop como en mobile menu.
- El estado activo debe mantenerse accesible y visible para teclado y mouse.
- No debe depender únicamente del color para comunicar la navegación activa; debe incluir una señal adicional visual clara.
- El item activo debe seguir la estructura visual del proyecto: texto oscuro, acento amarillo, borde o línea inferior, y consistencia con el lenguaje de cards y superficies.
- Si se usa el hover para subrayado o fondo, el estado activo debe compartir la misma intensidad visual o ser ligeramente más marcado.
- La lógica debe respetar la navegación entre páginas y secciones del sitio, incluyendo URLs con base path y locales (`/es-co/`, `/en-us/`).

## Behavior

- En el header, el enlace de la página actual o la sección activa debe recibir una clase de estado activo.
- Cuando el usuario navega a una ruta equivalente al enlace, la clase activa debe aplicarse automáticamente.
- Si el usuario está en una sección del mismo documento (por ejemplo `#servicios` o `#contacto`), el estado debe reflejar la sección activa en la navegación principal correspondiente.
- La clase activa no debe desactivar la interacción normal del hover ni reemplazar la funcionalidad del foco.
- En mobile, el mismo estado debe verse en el menú desplegable y debe conservar espaciado, icono y texto visibles.

## Acceptance Criteria

- Los enlaces del header muestran un estado activo cuando la URL o sección actual coincide con la navegación.
- El estado activo se parece al hover visual, con una pista clara adicional además del color.
- El comportamiento se mantiene en desktop y en el menú mobile.
- El estado activo es visible con teclado y con ratón.
- La navegación sigue funcionando sin romper las rutas ni los locales del sitio.
- El estilo activo respeta la paleta del proyecto y la dirección visual definida para Diamond Publicidad.
- No se introduce un patrón visual inconsistente con el resto del sitio.
- La implementación se mantiene simple, reutilizable y compatible con Astro y el componente actual del header.

## Implementation Notes

### Cambios realizados

- Se añadió una detección del estado activo basada en la ruta actual y el hash vigente para cada enlace del header.
- Los enlaces coincidentes reciben un estado visual `data-active` y un valor `aria-current` para comunicar la ubicación actual de forma accesible.
- El estado activo comparte la intensidad visual del hover y añade una segunda señal clara: fondo suave en la opción y línea decorativa inferior en desktop.
- La misma lógica se aplica al menú móvil para mantener consistencia entre navegación principal y menú desplegable.
- Se mantuvo el comportamiento del foco y del hover sin reemplazar la interacción normal del usuario.

### Decisiones verificadas

- La comparación usa la ruta normalizada y el hash actual para manejar páginas y anclas dentro del mismo documento.
- El estado activo se mantiene para rutas con base path y locales (`/es-co/`, `/en-us/`), sin romper las redirecciones ni la navegación del sitio.
- La implementación sigue los tokens visuales del proyecto: texto oscuro, acento amarillo, separadores y superficies suaves, sin introducir una identidad visual nueva.
- Se validó con comprobaciones formales del proyecto: `npm run check` y `npm run build`, ambas con resultado exitoso.

### Resultado de validación

- Astro check: 0 errores, 0 warnings, 0 hints.
- Astro build: 6 páginas generadas correctamente y compilación exitosa.
