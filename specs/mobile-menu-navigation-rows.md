# Navegación móvil de filas completas

## Objective

Definir una navegación móvil clara y operable que mantenga la identidad visual del sitio sin convertir el menú en un conjunto de botones amarillos, y que permita acceder a las secciones principales con mayor facilidad táctil en pantallas pequeñas.

## Requirements

- El menú móvil debe presentar las rutas principales como elementos de ancho completo, separados por un borde fino y con un tratamiento visual más sobrio que la versión actual.
- Cada enlace de navegación debe incluir un icono identificativo a la izquierda, texto visible y una indicación direccional a la derecha para reforzar la acción de entrada.
- La composición debe priorizar una superficie clara, bordes finos y contraste suficiente antes que un relleno amarillo dominante.
- El amarillo debe reservarse para foco, hover y estado activo, sin convertir la navegación completa en una colección de botones de ese color.
- La navegación debe seguir siendo fácil de tocar en móvil y conservar legibilidad, jerarquía y acceso con teclado.
- El diseño debe respetar la identidad visual definida para Diamond Publicidad: fondo claro, grises y carbón, acento amarillo controlado y composición ordenada.
- La nueva disposición debe mantener la intención del contenido principal, sin ocultar información esencial ni aumentar la densidad visual de forma innecesaria.

## Acceptance Criteria

- En vista móvil, la navegación principal se presenta como una lista de enlaces de ancho completo y no como una serie de elementos laterales o compactos.
- Cada elemento de navegación incluye icono, texto visible y una señal direccional clara en el extremo derecho.
- Los bordes, espaciado y contraste de los elementos mantienen una apariencia fina y ordenada, sin superficies amarillas predominantes.
- El estado hover, focus y activo usa amarillo como énfasis visual, pero no convierte toda la navegación en color amarillo sólido.
- Los enlaces de navegación son fácilmente seleccionables con puntero y cumplen criterios básicos de accesibilidad en foco y lectura.
- La navegación móvil continúa siendo clara y usable en tamaño pequeño y sin romper la jerarquía visual general del sitio.
- El cambio no introduce contenido ficticio, promesas comerciales ni elementos que contradigan la dirección visual aprobada.

## Implementation notes and verified decisions

### Ajuste entregado

- El menú móvil se consolidó como una lista de enlaces de ancho completo, con un estilo sobrio basado en fondo claro, borde fino y separación clara entre filas.
- Cada enlace conserva icono identificativo, nombre visible y una flecha de entrada en el extremo derecho, sin reforzar visualmente toda la navegación con amarillo sólido.
- La apariencia en escritorio se ajustó para que el énfasis visual quede ligado al enlace y no a la estructura completa del header; el hover y la subrayado solo se aplican al item activo o enfocado.
- La propuesta mantiene la identidad visual del proyecto: texto carbón/gris, fondo claro y amarillo usado como acento controlado, con foco visible en accesibilidad.

### Decisiones verificadas

- La navegación móvil sigue siendo operable y legible en pantallas pequeñas, preservando el contenido principal y sin ocultar información esencial.
- El amarillo queda reservado para estados de interacción y foco, en lugar de ocupar el relleno general del menú.
- El comportamiento visual del desktop se corrigió para evitar underlines globales del header y respetar la jerarquía de la navegación.
- La implementación fue validada con comprobaciones del proyecto: `npm run check` y `npm run build` completados correctamente, sin errores ni advertencias relevantes.

### Estado final

La implementación cumple con la intención de la especificación y con la revisión visual aplicada en el sitio: navegación móvil más clara, más táctil y más consistente con la identidad de Diamond Publicidad.
