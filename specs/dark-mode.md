# Modo oscuro

## Objective

Incorporar un modo oscuro completo, coherente y accesible para la página pública de Diamond Publicidad, conservando la identidad visual, la legibilidad del contenido y el funcionamiento estático del sitio.

## Requirements

- Ofrecer dos temas explícitos: claro y oscuro.
- Añadir un control accesible y visible para cambiar de tema desde la navegación principal, con nombre comprensible, estado actual comunicable y operación completa mediante teclado.
- Respetar la preferencia del sistema (`prefers-color-scheme`) cuando la persona no haya elegido un tema manualmente.
- Persistir la elección manual del tema entre visitas mediante un mecanismo local del navegador. La preferencia manual debe prevalecer sobre la preferencia del sistema hasta que se cambie nuevamente.
- Aplicar el tema antes de mostrar la interfaz para evitar un destello perceptible del tema incorrecto durante la carga inicial.
- Centralizar los colores dependientes del tema en tokens o variables semánticas reutilizables. No duplicar reglas de color específicas por componente salvo que exista una necesidad visual justificada.
- Definir para ambos temas las superficies, texto principal, texto secundario, bordes, enlaces, foco, estados interactivos y superficies de contenido agrupado.
- Mantener el amarillo de marca como acento controlado. El tema oscuro no debe convertirlo en un fondo dominante ni usarlo como texto cuando el contraste sea insuficiente.
- Mantener el logo oficial y sus variantes sin recolorearlos, filtrarlos ni alterar sus proporciones. Elegir la variante adecuada para conservar su contraste en cada tema.
- Revisar todos los estados `hover`, `focus-visible`, `disabled` y cualquier estado informativo para que sean perceptibles sin depender únicamente del color.
- Mantener una relación de contraste suficiente para texto, controles, enlaces, foco y elementos gráficos esenciales en ambos temas, de acuerdo con WCAG 2.2.
- Conservar la legibilidad y la jerarquía de las secciones existentes, incluidos servicios, portafolio pendiente, contacto, mapa, navegación y pie de página.
- Evitar que el modo oscuro convierta automáticamente en oscuras las imágenes o recursos de marca mediante filtros o efectos no aprobados.
- Mantener la solución compatible con Astro estático, con JavaScript mínimo y sin introducir React, Vue, Svelte, SSR ni dependencias nuevas.
- Respetar `prefers-reduced-motion` y evitar transiciones de tema que dificulten la lectura o provoquen movimiento innecesario.
- Mantener la experiencia responsive, el orden de tabulación, los enlaces y las rutas actuales sin cambios funcionales no relacionados.

## Acceptance Criteria

- La página puede cambiarse entre tema claro y tema oscuro desde un control identificable, con teclado y con un nombre accesible que refleja la acción o el estado actual.
- En una visita sin preferencia manual, el tema inicial coincide con `prefers-color-scheme` cuando el navegador lo expone.
- Tras elegir manualmente un tema, recargar la página conserva esa elección y no muestra un destello evidente del otro tema durante la carga.
- Al eliminar o reiniciar la preferencia manual, la página vuelve a seguir la preferencia del sistema.
- En ambos temas, el contenido de inicio, servicios, portafolio, contacto, mapa, navegación y pie de página conserva contraste, lectura y jerarquía visual suficientes.
- Los estados de enlaces, botones, control de tema y foco visible se distinguen en ambos temas mediante contraste y/o cambios de forma, borde o subrayado.
- La identidad visual se mantiene reconocible: el amarillo funciona como acento, las superficies oscuras no dominan sin propósito y el logo conserva una variante legible sin alteraciones.
- La solución funciona en viewport móvil y de escritorio, y la navegación por teclado no pierde ningún control ni enlace.
- Con `prefers-reduced-motion: reduce`, el cambio de tema y la navegación siguen siendo comprensibles sin depender de animaciones.
- `npm run check` y `npm run build` finalizan correctamente después de la implementación, sin añadir una dependencia de framework o servidor.
