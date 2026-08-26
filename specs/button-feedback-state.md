# Feedback visual para botones de acción

## Objective

Mejorar la respuesta táctil y de teclado de los botones reales del sitio para que transmitan un estado activo claro, elegante y compatible con la identidad visual de Diamond Publicidad, sin convertir la interfaz en un conjunto de elementos sobrecargados ni afectar a enlaces o iconos no interactivos.

## Requirements

- Aplicar un feedback visual consistente a todos los elementos que funcionen como botones reales o como enlaces con estilo de botón, especialmente en la sección de inicio y en el pie de página.
- El estado interactivo debe mostrar una respuesta sutil al presionar o enfocar el control, con una sensación de profundidad ligera: desplazamiento vertical mínimo, aumento del borde o sombra y acento de marca más evidente.
- La respuesta debe ser visible tanto con mouse como con teclado, priorizando `focus-visible` para accesibilidad.
- Mantener la estética sobria y profesional de la marca: fondo claro, bordes finos, contraste suficiente y amarillo solo como acento de énfasis controlado.
- Asegurar que el efecto de feedback no dependa solo del color, sino también de sombra, elevación o cambio de borde para que sea perceptible con buen contraste.
- No aplicar este tratamiento a enlaces icono, enlaces de texto simples, controles decorativos ni elementos no accionables.
- Mantener el comportamiento consistente en hover, focus-visible, active y estados no interactivos para que la interfaz se sienta estable y legible.
- Respetar el lenguaje visual definido para el sitio: neutros como base, amarillo para énfasis puntual, y una composición limpia sin elementos excesivamente voluminosos.

## Acceptance Criteria

- Los botones reales del sitio muestran un cambio visual perceptible al hacer click o al recibir foco con teclado.
- El efecto incluye, como mínimo, una ligera elevación o empuje del control junto con un reforzamiento del borde o sombra, manteniendo la sensación de elegancia y no de saturación visual.
- El amarillo se usa como acento de estado activo y de foco, pero sin transformar el botón completo en un bloque amarillo sólido.
- Los estados hover, focus-visible y active son distinguibles entre sí y no comprometen la legibilidad ni el contraste.
- Los controles de acción siguen siendo claros, operables y accesibles en móvil, tablet y escritorio.
- Los iconos o enlaces que no son botones no reciben el mismo tratamiento visual del botón de acción.
- El cambio no introduce contenido ficticio ni rompe la dirección visual aprobada del proyecto.

## Implemented outcome and verified decisions

La implementación quedó validada con estas decisiones finales confirmadas en código y verificación:

- Los botones reales de la home y el CTA de WhatsApp muestran un feedback visual consistente con una elevación mínima, sombra más marcada y reforzamiento del borde, sin convertir el control en un bloque amarillo sólido.
- El estado interactivo mantiene el lenguaje visual de la marca: fondo claro, bordes finos, contraste suficiente y amarillo como acento puntual en el foco y la acción activa.
- Los estados hover, focus-visible y active están diferenciados entre sí para que el control se sienta estable, legible y operable en móvil, tablet y escritorio.
- El tratamiento no se aplicó a enlaces textuales, iconos decorativos ni elementos no accionables, preservando la jerarquía visual del sitio.
- La verificación final se ejecutó con `npm run check` y `npm run build`, y el resultado fue: 0 errores, 0 warnings y 4 páginas generadas correctamente en la build estática.
