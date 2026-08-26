# Ajuste visual de home y nuestra historia

## Objective

Actualizar la presentación visual de la página de inicio y de "Nuestra Historia" para que compartan el mismo sistema de cards, iconografía y tratamiento de imagen, sin romper la identidad establecida por el proyecto ni publicar contenido no aprobado.

## Requirements

- Reemplazar la ilustración SVG de la hero de "Nuestra Historia" por una imagen real local en formato JPG, en una carpeta de assets del proyecto.
- Usar la práctica recomendada de Astro para imágenes locales: preferir un asset dentro de `src/assets` y renderizarlo con el componente `Image` de Astro para optimizar tamaño, formato y carga, en lugar de mantener un SVG con `role="img"` como sustituto de imagen real.
- Asegurar que la nueva imagen tenga texto alternativo útil, proporciones adecuadas y comportamiento responsive.
- Mantener la coherencia visual con la dirección visual del proyecto: fondo claro, bordes finos, acentos amarillos controlados, texto oscuro y una composición ordenada.
- Homologar las cards de servicios de la página de inicio con la misma lógica visual que las cards de valores de "Nuestra Historia": estructura, iconografía, bordes, superficie, jerarquía tipográfica, espaciado y estados visuales.
- Mantener los elementos de la interfaz accesibles: foco visible, contrastes adecuados, headings semánticos y lectura clara en móvil, tablet y escritorio.
- Evitar contenido ficticio, placeholders o material de stock que se presente como trabajo real de Diamond Publicidad.
- Si la imagen final o el material visual no está aprobado, dejar la implementación bloqueada hasta contar con un recurso real y validado.

## Acceptance Criteria

- La hero de "Nuestra Historia" ya no usa un SVG como imagen principal ni un elemento con `role="img"` que sustituya una imagen real.
- La imagen principal se sirve desde un archivo JPG local y se renderiza con la solución recomendada por Astro para activos locales.
- La imagen debes crearla y ubicarla en una carpeta de assets del proyecto y puede cargarse de forma optimizada sin afectar el rendimiento.
- La paginación y el comportamiento responsive de la imagen se mantienen correctos en dispositivos pequeños y grandes.
- Las cards de servicios de la homepage siguen la misma estructura visual y la misma sensación de bloque que las cards de valores de "Nuestra Historia".
- Las cards de servicios y de valores comparten tonalidad, contornos, iconografía y ritmo espaciado definidos por la dirección visual.
- La interfaz conserva la paleta, tipografía y composición presentes en el sitio y no incorpora colores ni estilos fuera del sistema visual del proyecto.
- La página mantiene navegación correcta, foco visible y legibilidad sin depender solo del color.
- La implementación no publica contenido no confirmado ni material que no pertenezca a Diamond Publicidad.

## Notes

- Se mantiene la implementación bloqueada hasta aprobación explícita del recurso visual final y del resultado visual de las cards.
- La referencia base para el ajuste visual es la documentación del producto y la dirección visual ya definidas en `docs/product/context.md`, `docs/product/visual-direction.md` y la estructura actual de las componentes `HomePage.astro` y `StoryPage.astro`.
