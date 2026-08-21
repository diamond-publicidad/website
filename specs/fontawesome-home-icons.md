# Iconos Font Awesome para la página de inicio

## Objective

Incorporar Font Awesome Free como sistema de iconografía de la página de inicio y reemplazar los símbolos Unicode actuales por iconos consistentes, accesibles y subordinados al contenido, sin alterar la identidad visual ni publicar información comercial nueva.

## Requirements

- Instalar únicamente los paquetes oficiales de Font Awesome Free que sean necesarios para la implementación: el núcleo SVG, los iconos sólidos y los iconos de marca cuando se utilicen iconos de WhatsApp o Facebook.
- Importar de forma directa y tree-shakeable solo los iconos utilizados en la página; no cargar el catálogo completo ni incorporar otra librería de iconos.
- Mantener la identidad visual definida en `docs/product/visual-direction.md`: iconos simples, de peso consistente, con tamaño y contraste subordinados al texto y sin convertirlos en decoración dominante.
- Actualizar la home para utilizar iconos Font Awesome en las acciones y canales que ya existen:
  - flecha direccional para las llamadas a la acción que llevan a secciones internas y flecha de salida únicamente para enlaces externos;
  - WhatsApp en la acción de contacto;
  - teléfono, correo electrónico, Facebook y ubicación/mapa en la información de contacto;
  - volver al inicio en el control flotante correspondiente.
- Conservar las etiquetas de texto de los enlaces y botones. Un icono no debe ser el único indicador de una acción cuando su significado pueda ser ambiguo.
- Marcar como decorativos los iconos que acompañen a un texto ya visible y proporcionar un nombre accesible a los controles que funcionen únicamente como icono, especialmente el control de volver al inicio.
- Mantener los enlaces, destinos, números, dirección, mensaje exacto de WhatsApp y demás datos comerciales ya aprobados sin cambios.
- Los servicios ya confirmados pueden utilizar iconos concretos en la home, siempre que sean simples, coherentes y subordinados a los nombres y listas de servicios. No añadir iconos para servicios que no estén confirmados.
- Mantener navegación por teclado, foco visible, contraste suficiente y soporte de `prefers-reduced-motion` en los estados interactivos con iconos.
- Mantener el comportamiento responsive y evitar que los iconos provoquen saltos de layout, desborden el texto o reduzcan la legibilidad en pantallas pequeñas.

## Acceptance Criteria

- Font Awesome Free está disponible mediante dependencias oficiales y la home renderiza los iconos seleccionados sin errores de Astro, TypeScript o build.
- La home ya no utiliza los caracteres Unicode de flecha como iconografía de interfaz en las acciones actualizadas; esos usos se resuelven con iconos de Font Awesome.
- La llamada a la acción principal del hero, que lleva a la sección de contacto de la misma página, utiliza una flecha direccional y no un icono que indique salida a un sitio externo.
- Las acciones de contacto muestran iconos coherentes para WhatsApp, teléfono, correo, Facebook y ubicación/mapa, conservan sus textos visibles y mantienen exactamente sus destinos aprobados.
- El control flotante de volver al inicio conserva un nombre accesible y funciona con teclado aunque se presente visualmente como un control principalmente iconográfico.
- Los iconos decorativos están ocultos para tecnologías de asistencia y los iconos funcionales tienen un nombre accesible que describe su propósito.
- La implementación importa únicamente los iconos utilizados, no registra el catálogo completo y no añade una librería de iconos alternativa.
- El resultado respeta la dirección visual: no introduce colores, estilos, efectos o tamaños que compitan con el amarillo, el carbón, el logo o el contenido de la página.
- La home mantiene legibilidad y alineación en móvil, tablet y escritorio, incluidos los estados de foco y hover.
- `npm run check` y `npm run build` terminan correctamente después de la implementación.