# Estructura compartida de Astro

## Objective

Organizar la estructura común y los estilos del sitio Astro de Diamond Publicidad para que las páginas actuales y futuras reutilicen el armazón visual sin duplicar marcado, comportamiento o reglas de estilos, conservando la experiencia pública existente.

## Requirements

- Separar el armazón documental y visual común de las páginas en un layout Astro reutilizable que reciba el contenido específico mediante un slot.
- Extraer en componentes Astro reutilizables los elementos que se compartan entre páginas, incluyendo la cabecera, la navegación y el pie de página, sin crear componentes para secciones que aún solo se usan una vez.
- Mantener en las páginas únicamente el contenido y las decisiones propias de cada ruta.
- Conservar la estructura semántica, los metadatos básicos de la página, la accesibilidad por teclado, las rutas y los enlaces públicos existentes.
- Mantener el sitio estático y prerenderizado, sin añadir frameworks de interfaz, SSR ni dependencias.
- Mantener una única hoja de estilos globales para la importación de Tailwind, tokens de tema, tipografía, reglas base y utilidades que deban afectar a todo el sitio.
- Ubicar los estilos propios de cada componente en estilos scoped de su archivo `.astro`; ubicar los estilos exclusivos de una página en esa página o en una hoja local importada solo por ella cuando su volumen justifique separarla.
- Evitar reglas globales que apunten a detalles internos de componentes o páginas. Los componentes que participen en el tema deben consumir los tokens semánticos existentes, sin duplicar la definición de colores por componente.
- Conservar el comportamiento de tema, navegación móvil y retorno al inicio, situando cada script junto al componente o layout responsable y sin aumentar el JavaScript de cliente salvo lo estrictamente necesario para el comportamiento ya publicado.
- Usar TypeScript para las props de layouts y componentes cuando reciban datos.

## Acceptance Criteria

- El proyecto cuenta con un layout Astro reutilizable que contiene el documento HTML, la importación de estilos globales y un slot para el contenido de cada página.
- La cabecera con navegación y el pie de página se renderizan desde componentes reutilizables y no se repite su marcado en las páginas que adopten el layout.
- La página de inicio conserva sus secciones, contenido aprobado, enlaces, tema, menú móvil y control para volver al inicio sin regresiones observables.
- `src/styles/global.css` contiene solamente Tailwind, tokens, fuentes, estilos base y reglas globales justificadas; no contiene estilos exclusivos de una página o de elementos internos de componentes extraídos.
- Los estilos de cabecera, navegación, pie, controles de tema y otras piezas reutilizables quedan encapsulados en el componente que los renderiza, salvo reglas globales imprescindibles y documentadas por su propósito.
- Los estilos exclusivos de inicio no se cargan por páginas futuras que no los necesiten.
- Las páginas que se creen posteriormente pueden reutilizar el layout y los componentes comunes sin copiar marcado de cabecera, navegación, pie ni configuración base del documento.
- El resultado funciona con `output: 'static'` y conserva la compatibilidad con la configuración `base` de GitHub Pages.
- `npm run check` y `npm run build` finalizan correctamente; en viewport móvil y escritorio, la navegación y los controles compartidos siguen siendo navegables mediante teclado y conservan foco visible.