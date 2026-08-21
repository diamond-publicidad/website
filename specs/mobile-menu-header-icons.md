# Menú móvil e iconos de cabecera

## Objective

Reorganizar el menú móvil para priorizar la navegación y configuración, dejar la información del sitio al final y mejorar la identidad y claridad de los controles iconográficos de la cabecera.

## Requirements

- Mantener navegación y configuración como bloques consecutivos, con separación visual moderada y sin espacios verticales excesivos.
- Colocar `Sobre el sitio` al final del menú móvil, después de navegación y configuración, conservando la versión y fecha de la fuente central existente.
- Añadir junto al nombre de marca un icono de diamante de Font Awesome Free, subordinado visualmente y sin alterar el logo oficial.
- Sustituir el engranaje del control de configuración por otro icono de Font Awesome Free que se distinga de los iconos de sol y luna del tema.
- Revisar el control hamburguesa usando Font Awesome Free instalado. Mantener el icono de barras si sigue siendo la opción más reconocible; conservar también el icono de cierre y sus nombres accesibles dinámicos.
- Los iconos que acompañen títulos visibles deben ser decorativos y quedar ocultos para tecnologías de asistencia.
- Importar directamente solo los iconos utilizados, sin cargar el catálogo completo ni añadir otra biblioteca.
- Mantener navegación por teclado, foco visible, contraste suficiente, responsive y soporte de `prefers-reduced-motion`.

## Acceptance Criteria

- El menú móvil presenta navegación y configuración de forma consecutiva y compacta, y `Sobre el sitio` aparece como el último bloque.
- La versión y fecha permanecen visibles en `Sobre el sitio` y proceden de la fuente central existente.
- La cabecera muestra un icono de diamante junto al nombre de marca sin modificar el logo oficial.
- El control de configuración ya no utiliza un engranaje y su icono no se confunde con los iconos de tema.
- El control hamburguesa utiliza un icono de Font Awesome Free claro; el estado abierto conserva un control de cierre funcional y accesible.
- Los controles iconográficos tienen nombres accesibles, los iconos decorativos no se anuncian y todos los controles funcionan con teclado.
- La organización no produce solapamientos, desbordes ni densidad ilegible en móvil, tablet o escritorio.
- Solo se importan los iconos Font Awesome Free utilizados y no se añaden dependencias de iconografía.
- `npm run check` y `npm run build` terminan correctamente después de la implementación.

## Implemented outcome and verified decisions

La implementación quedó validada con estas decisiones finales confirmadas en código y verificación:

- El menú móvil quedó reorganizado con navegación, control de tema y el bloque de `Sobre el sitio` al final, manteniendo la versión y la fecha del origen central existente.
- La marca conserva el icono de diamante de Font Awesome junto al nombre de Diamond Publicidad, sin alterar ni reemplazar el logo oficial.
- El control de configuración usa un icono de `faSliders` para diferenciarlo del tema y evitar la confusión con los iconos de sol/luna.
- El control hamburguesa usa `faBars` y el cierre usa `faXmark`, conservando un comportamiento accesible con nombres dinámicos para lectores de pantalla.
- Los iconos de sección y decorativos quedan ocultos para tecnologías de asistencia y se importan solo los necesarios para la cabecera y la card del creador.
- La card de `Sobre el sitio` incluye un detalle decorativo con `faCode` en opacidad sutil, sin competir con el contenido ni romper la legibilidad en modo oscuro.
- Los enlaces de GitHub y LinkedIn del menú móvil siguen el mismo patrón del footer: icono sin botón, sin fondo redondeado, color neutro base y amarillo en hover, ajustado con variables del tema para mantener contraste en dark mode.
- La verificación final se ejecutó con `npm run check && npm run build`, y el resultado fue: 0 errores, 0 warnings y 4 páginas generadas correctamente.