# Auditoría de regresiones de estilos globales

## Objective

Revisar y corregir las reglas base de `src/styles/global.css` que puedan sobrescribir estilos necesarios de enlaces, botones y controles, conservando una experiencia visual consistente, accesible y sin regresiones en los componentes y rutas públicas actuales.

## Requirements

- Auditar las reglas globales que afectan enlaces y controles, incluyendo `a { color: inherit; }` y `font: inherit` aplicado a `button`, `input`, `select` y `textarea`, junto con cualquier interacción demostrable con Tailwind, los tokens de tema o estilos scoped existentes.
- No asumir que una regla debe eliminarse solo por ser global. Conservarla, modificarla o retirarla según el efecto observado en los elementos que la consumen y la responsabilidad definida para los estilos globales y scoped.
- Mantener en `src/styles/global.css` únicamente los tokens, estilos base y reglas globales justificadas. Los estilos propios de un componente deben permanecer encapsulados en su componente propietario.
- Preservar en tema claro y oscuro el contraste, la jerarquía y los estados `hover` y `focus-visible` de enlaces, botones y controles de formulario existentes.
- Mantener la tipografía Manrope definida por la dirección visual en el texto y los controles de interfaz, sin introducir nuevas familias ni valores de identidad visual.
- Conservar rutas, destinos, contenido comercial aprobado, estructura semántica, navegación por teclado y comportamiento responsive existentes.
- No añadir dependencias, frameworks, JavaScript de cliente ni cambios funcionales ajenos a la corrección de estilos.

## Acceptance Criteria

- La revisión identifica para cada regla global modificada o retirada el elemento afectado, el comportamiento regresivo comprobado y la ubicación responsable de su corrección.
- Los enlaces existentes conservan un color y tratamiento visual legibles y coherentes con su contexto en tema claro y oscuro, incluidos sus estados de interacción y foco visible.
- Los botones y controles de formulario existentes conservan la tipografía prevista, contraste suficiente, foco visible y apariencia estable en móvil y escritorio.
- Ningún estilo exclusivo de cabecera, navegación, pie de página, inicio o controles interactivos se incorpora a `src/styles/global.css` como solución de la regresión.
- La navegación con teclado permite recorrer enlaces, botones y controles sin perder el foco visible ni el significado de las acciones.
- `npm run check` y `npm run build` finalizan correctamente después de la implementación.

## Implemented outcome and verified decisions

La implementación quedo validada con estas decisiones finales confirmadas en el código y la verificación actual:

- La regla global de enlaces se ajustó para usar un color base del tema, evitando que `a { color: inherit; }` heredara un valor opaco o inconsistentes del contenedor y arrastrara visualmente la lectura de enlaces en diferentes secciones.
- La regla global de formularios y controles conserva `font: inherit`, pero además mantiene `color: inherit` como valor base para evitar que la herencia de texto se rompa al reutilizar controles con estilos puntuales en componentes.
- La causa principal no fue `font: inherit` por sí solo, sino la herencia del color y la prioridad de reglas definidas por componente sobre el reset global. El ajuste se mantiene en la capa base y no se delega a correcciones ad hoc en cada botón o enlace.
- Los componentes de navegación, hero, acciones y controles siguen definiendo sus colores específicos en el bloque propietario donde corresponden, conservando la jerarquía visual y la accesibilidad del tema claro y oscuro.
- La validación final se ejecutó con `npm run check && npm run build`, con resultado verificado: 0 errores, 0 warnings y 4 páginas generadas correctamente.