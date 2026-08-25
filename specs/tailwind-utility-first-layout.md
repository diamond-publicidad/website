# Maquetación utility-first con Tailwind

## Objective

Establecer Tailwind CSS como el medio principal para maquetar y estilizar los componentes visuales del sitio, conservando la identidad visual, la accesibilidad y el comportamiento público actual.

## Requirements

- Usar clases utility de Tailwind directamente en el marcado de los componentes y páginas para las decisiones visuales de layout, espaciado, tipografía, color, bordes, superficies, responsive y estados interactivos.
- Migrar los estilos visuales existentes definidos en bloques `<style>` scoped de componentes o páginas a utilities y variantes de Tailwind cuando Tailwind CSS 4 pueda expresarlos.
- Usar variantes de Tailwind para los breakpoints mobile-first, `hover`, `focus-visible`, estados `aria-*` y `motion-reduce` cuando correspondan.
- Mantener `src/styles/global.css` limitado a la importación y tema de Tailwind, tokens aprobados, tipografía, reglas base y estilos globales indispensables.
- No añadir estilos scoped para resolver decisiones visuales que puedan expresarse de forma clara con clases de Tailwind.
- Cuando una capacidad no pueda expresarse razonablemente con Tailwind CSS 4, documentar y justificar antes de conservar una regla CSS local mínima; no usar CSS local como alternativa por preferencia.
- Conservar el contenido comercial aprobado, la identidad visual, la estructura semántica, los enlaces, las rutas, el comportamiento de tema, la navegación móvil y la accesibilidad existentes.
- No incorporar dependencias, frameworks de interfaz ni JavaScript de cliente adicional para realizar la migración.

## Acceptance Criteria

- Los componentes y páginas afectados expresan sus estilos visuales mediante clases y variantes de Tailwind CSS 4, sin duplicar reglas locales que Tailwind pueda representar.
- Los bloques `<style>` scoped que contengan estilos visuales migrables se eliminan; cualquier regla CSS local que permanezca tiene una justificación técnica concreta y no sustituye utilities disponibles.
- `src/styles/global.css` no incorpora estilos exclusivos de componentes o páginas como consecuencia de la migración y conserva únicamente sus responsabilidades globales justificadas.
- El tema claro y oscuro, los estados hover y focus-visible, y la preferencia de movimiento reducido conservan contraste, foco visible y comportamiento perceptible.
- El sitio mantiene su jerarquía semántica, navegación por teclado, adaptación móvil y de escritorio, rutas, enlaces y contenido aprobado sin regresiones observables.
- `npm run check` y `npm run build` finalizan correctamente después de la implementación.

## Implemented outcome and verified decisions

La implementación quedó consolidada con estas decisiones confirmadas en el código actual y en la documentación del repositorio:

- La base del proyecto se configuró con Tailwind CSS 4 mediante `@import "tailwindcss"` y un tema centralizado en `src/styles/global.css`, manteniendo los tokens de color, tipografía y variantes explícitas para el tema oscuro.
- Los componentes principales de navegación y pie de página usan utilities de Tailwind para layout, espaciado, borde, contrastes, estados hover y focus-visible, en lugar de bloques de estilo visual local redundantes.
- La capa global quedó reducida a lo estrictamente necesario: importación de Tailwind, variables del tema, tipografía base, reglas semánticas y keyframes esenciales; no se incorporaron reglas exclusivas de componentes ni páginas a ese archivo.
- La navegación móvil, el menú desplegable, el modo oscuro y los controles de interfaz mantienen la estructura semántica y la accesibilidad esperadas, reforzando `focus-visible`, `motion-reduce` y la jerarquía visual del sitio sin introducir JavaScript de cliente adicional.
- La solución respeta la identidad visual aprobada del proyecto, con amarillo como acento, superficies claras y oscuras consistentes y un tratamiento de tipografía y contraste alineado con la dirección visual del sitio.
- La documentación del repositorio y los criterios del proyecto quedaron alineados con una arquitectura estática compatible con Astro y con una estrategia de estilos utility-first, evitando dependencias extra y reduciendo el riesgo de regresiones visuales.
- La verificación técnica del proyecto quedó documentada como parte del flujo de validación del repositorio: revisar y mantener `npm run check` y `npm run build` como gate final antes de cerrar la implementación.