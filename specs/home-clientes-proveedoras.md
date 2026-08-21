# Sección de clientes y proveedor para publicistas

## Objective

Definir una sección del home que presente a los clientes de Diamond Publicidad y comunique de forma discreta que la empresa actúa como proveedora para otros publicistas en impresión digital de gran formato, sin introducir elementos de navegación ni contenido comercial no confirmado.

## Requirements

- Presentar los clientes confirmados por el propietario en el siguiente orden: Ecoplaza Centro Comercial, Mi centro y Colegio Bicentenario.
- Usar una presentación tipo carrusel o movimiento continuo, sin controles visibles, con una lógica que favorezca la lectura y no distraiga del contenido principal.
- El carrusel debe mantener un movimiento continuo y lento, sin pausa por hover ni by focus; la lectura debe seguir siendo clara y la experiencia debe respetar `prefers-reduced-motion`.
- La sección debe permitir una estructura de datos simple para cada cliente, con los campos mínimos: nombre, logo y descripción.
- Si un cliente no tiene logo aprobado, mostrar solo su nombre y, si aplica, la descripción; no inventar un logo ni un placeholder visual que simule ser real.
- Cuando no hay un logo real, puede usarse un icono gráfico discreto y diferenciado por cliente como marca visual auxiliar, siempre sin convertirlo en una tarjeta o fondo de bloque.
- La información de clientes debe poder gestionarse en un archivo Markdown o JSON, sin requerir componentes complejos ni dependencias adicionales.
- Incluir una referencia breve a la relación comercial de Diamond Publicidad como proveedora para otros publicistas en impresión digital de gran formato, integrándola dentro del contenido del home sin convertirse en una sección completa de servicios.
- Mantener el texto y la presentación sobrios, sin exagerar la animación ni convertir la sección en un elemento dominante de la interfaz.

## Decisions verified and implemented

- La sección se resolvió como una franja de texto continuo, sin cajas, sin tarjeta, sin fondo de bloque y sin pseudo-elementos visuales para cada item.
- La fuente de datos se mantiene en `src/data/clients.json`, con los tres clientes confirmados y en el orden aprobado: Ecoplaza Centro Comercial, Mi centro y Colegio Bicentenario.
- El movimiento se mantiene en un bucle CSS continuo, lento y pasivo de 56 segundos, sin pausa por hover ni por focus.
- El track repite seis grupos idénticos y cada grupo incluye su espacio de separación final; esto garantiza contenido suficiente en el viewport y permite desplazar exactamente el 50% del track sin salto visible al reiniciar la animación.
- Las copias posteriores al primer grupo se marcan con `aria-hidden` para que la repetición visual no duplique el contenido para tecnologías de asistencia.
- La animación se desactiva con `prefers-reduced-motion`, dejando el contenido estático y legible.
- El carrusel utiliza una máscara lateral discreta para suavizar la entrada y salida de los nombres sin agregar controles visibles.
- El icono usado como referencia por cliente queda mínimo y transparente, con amarillo sutil como acento, sin fondo ni badge que alteren la lectura del nombre.
- Las entradas en dark mode mantienen un fade compatible con el fondo para evitar una diferencia visible entre la zona del carrusel y el resto del bloque.
- La data de clientes se conserva en JSON con estructura simple (`name`, `logo`, `description` y `icon` opcional para la marca visual auxiliar cuando no hay logo aprobado).
- La solución no incorpora dependencias nuevas ni JavaScript de cliente para el movimiento.
- La información actualizada quedó validada mediante comprobación de Astro y compilación estática del proyecto.

## Acceptance Criteria

- La página de inicio incluye una sección dedicada a clientes y su presencia es visible sin requerir navegación desde el header.
- No existe un enlace del header ni un ancla que lleve a la sección de clientes.
- La sección presenta los tres nombres confirmados por el propietario, con el orden de aparición solicitado: Ecoplaza Centro Comercial, Mi centro y Colegio Bicentenario.
- Cada cliente puede definirse con nombre, logo y descripción; cuando no hay logo aprobado, solo se muestra el nombre y la descripción si existe.
- La presentación usa un movimiento continuo sutil y sin controles visibles, sin interrupción por hover o foco del usuario.
- La experiencia cumple con `prefers-reduced-motion`, ofreciendo una lectura clara sin movimiento obligatorio.
- La información de clientes puede almacenarse en Markdown o JSON, con una estructura simple y reutilizable.
- El contenido del home comunica que Diamond Publicidad es proveedora para otros publicistas en impresión digital de gran formato, sin introducir datos, precios, cobertura ni promesas adicionales no aprobadas.
- La sección mantiene coherencia con la identidad visual, la tipografía y la composición establecidas para el proyecto.

## Verification

- `npm run check` → 0 errores, 0 warnings, 0 hints.
- `npm run build` → compilación exitosa, 4 páginas generadas en `dist/`.
