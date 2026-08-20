# Versionado del sitio

## Objective

Definir un sistema simple y verificable de versionado para el sitio web de Diamond Publicidad, mostrando la versión actual y la fecha de publicación en la interfaz sin inventar información comercial ni complicar el flujo de trabajo.

## Requirements

- El proyecto debe mantener un único dato de versión para el sitio, con un valor inicial de 0.1.0.
- La fecha de versión debe usarse en formato dd-mm-aaaa y, en la primera edición, debe ser 20-08-2026.
- La versión y la fecha deben tratarse como metadatos del proyecto, no como contenido comercial o información promocional.
- El valor de versión debe actualizarse de forma centralizada y verificarse en el flujo de entrega antes de publicarse una actualización.
- La versión debe mostrarse de manera discreta y elegante en el pie de página del sitio, respetando la identidad visual y el diseño del producto.
- En pantallas móviles, la información de versión puede mostrarse dentro del menú desplegable como un bloque breve de metadatos, preferiblemente junto a una referencia de “Sobre el sitio” o un texto equivalente.
- La presentación debe seguir la estructura de internacionalización del proyecto y usar traducciones equivalentes para cada idioma disponible.
- La versión debe tener un tratamiento accesible: texto claro, foco visible, icono decorativo cuando aplique y no depender únicamente del color para comprender su significado.
- La actualización del dato de versión debe quedar explicada en el flujo de trabajo del repositorio para que se revise y actualice siempre antes del cierre de entrega.

## Acceptance Criteria

- Existe un dato centralizado de versión del sitio con el valor inicial 0.1.0.
- Existe un dato centralizado de fecha de versión en formato dd-mm-aaaa con el valor inicial 20-08-2026.
- La versión y la fecha se usan como metadatos del proyecto y no se interpretan como datos comerciales reales inventados.
- El pie de página muestra la versión del sitio en una presentación discreta y visualmente coherente con la identidad del producto.
- En dispositivos móviles, la versión aparece dentro del menú desplegable como un bloque de metadatos o información de “about/sobre el sitio” sin romper la navegación.
- La presentación usa traducciones del archivo de internacionalización y mantiene los textos locales en español y inglés.
- El flujo de trabajo del repositorio incluye una comprobación de la versión antes de la entrega final, de modo que el dato se revise y actualice cuando se prepare una nueva versión.
- La interfaz conserva legibilidad, contraste y accesibilidad en desktop, tablet y móvil.
