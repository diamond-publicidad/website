# Nuestra Historia

## Objective

Definir la nueva página "Nuestra Historia" para Diamond Publicidad, con una narrativa honesta y cercana que explique su origen como microempresa creativa y operativa, sin exagerar ni inventar datos comerciales. La página debe reforzar la identidad de marca, mostrar el enfoque práctico del negocio y ofrecer una entrada clara desde el header y el menú móvil.

## Requirements

- Crear una página dedicada a "Nuestra Historia" con estructura semántica y diseño consistente con la dirección visual del proyecto.
- Incluir un enlace a la página desde el header de escritorio y desde el menú móvil.
- Mantener la navegación coherente con la estructura de locales del sitio y con la lógica de i18n existente.
- Presentar una historia realista y sobria, escrita para una microempresa colombiana dedicada a la publicidad, la impresión digital y las soluciones gráficas.
- Comunicar que la empresa nació desde la necesidad de resolver comunicación visual de manera clara, funcional y cercana, con atención a detalles del proceso y a la forma en que se trabaja con clientes y marcas pequeñas o medianas.
- Evitar lenguaje grandilocuente, promesas exageradas, cifras, premios, clientes ficticios, años exactos no confirmados o mensajes de marca inventados.
- Usar un tono corporal, moderno y profesional, cercano al cliente sin perder seriedad.
- Incluir una imagen original y propia: una composición editorial o gráfica creada para la página, inspirada en geometría, material impreso, corte de papel, el diamante de la marca y las superficies minerales del proyecto.
- Incorporar iconos de Font Awesome para reforzar conceptos visuales: creatividad, material gráfico, detalle, producción, comunicación y acompañamiento.
- Añadir una sección de valores o forma de trabajo con bloques visuales que expliquen cómo se desarrolla la labor de la empresa.
- Incluir un cierre con llamada a la acción hacia contacto o servicios, sin depender de contenido comercial no verificado.
- Asegurar que la página responda bien en móvil, tablet y escritorio, con foco visible, contraste adecuado y una lectura clara.
- Mantener la misma paleta, tipografía, ritmo espacial y sistema de cards/bordes definido en la dirección visual del proyecto.

## Content Direction

La historia debe sonar así:

- Diamond Publicidad nace como una respuesta práctica a la necesidad de comunicar ideas con claridad y buen acabado.
- No habla de un gran nacimiento ni de una empresa millonaria; habla de una microempresa que trabaja de cerca, entiende procesos y valora la relación con cada cliente.
- La narrativa debe resaltar que el trabajo se hace con criterio visual, atención al detalle y disposición para acompañar necesidades reales de impresión, identidad y comunicación gráfica.
- El texto debe sugerir que la empresa combina creatividad, ejecución y adaptación a clientes con necesidades concretas.
- La historia puede estar organizada en tres momentos: origen, forma de trabajo y enfoque actual.

Ejemplo de tono sugerido:

"Diamond Publicidad nació de la necesidad de ayudar a negocios y marcas a comunicar mejor su idea, con piezas que se entienden rápido y se sienten bien hechas. Empezó como una alternativa práctica, cercana y visualmente cuidada para quienes necesitaban diseño, impresión y soluciones gráficas sin perder claridad ni tiempo. Hoy, el trabajo sigue guiándose por la misma idea: escuchar bien, proponer soluciones útiles y entregar piezas que funcionen en la realidad del negocio."

## Visual Requirements

- Hero con título principal, introducción breve y una imagen editorial original a la derecha o bajo el texto.
- Diseño con base blanca, superficies suaves, negro, grises y acento amarillo de marca.
- Uso moderado de amarillo como señal visual, nunca como fondo dominante de grandes bloques.
- Sección de narrativa con columnas o bloques de texto con buen ritmo vertical y separación clara.
- Bloques de valores o proceso con iconos y texto corto, alineados con el lenguaje visual del proyecto.
- La imagen debe sentirse auténtica y no como un stock genérico: puede ser un collage geométrico, una composición abstracta de elementos impresos, papel, recortes, textura y formas de diamante.
- La imagen debe incluir texto alternativo útil y ser accesible.
- La página debe respetar `prefers-reduced-motion` y evitar animaciones innecesarias.

## Acceptance Criteria

- La nueva página está disponible en el sitio y es accesible desde el header y desde el menú móvil.
- El nombre de la navegación es claramente "Nuestra historia" o su equivalente acorde a la estrategia de i18n del sitio.
- La página incluye una introducción narrativa honesta, moderna y corporativa, sin exagerar ni inventar información comercial.
- La historia comunica el origen de la microempresa como un negocio práctico, cercano y creativo, sin promesas ni datos no confirmados.
- La composición incluye al menos: hero, narrativa, imagen original y una sección de valores o proceso.
- Los iconos utilizados son del catálogo de Font Awesome Free y se importan de manera específica y eficiente.
- La página usa la paleta, tipografía y ritmo visual definidos por la dirección visual del proyecto.
- La imagen es original y no se usa material de stock para simular trabajo real de Diamond Publicidad.
- La página es responsive y mantiene legibilidad en móvil, tablet y escritorio.
- La estructura semántica de headings y enlaces es correcta y accesible para teclado.
- La página se integra sin romper la navegación ni la identidad general del sitio.

## Implementación validada y decisiones verificadas

La implementación realizada para esta página quedó validada conforme a la spec y a la arquitectura del sitio:

- Se creó la página de "Nuestra historia" con estructura semántica de hero, narrativa, imagen original y sección de valores.
- Se integró el acceso desde el header y desde la navegación móvil, respetando la lógica de locales y la base del despliegue en GitHub Pages.
- Se corrigió la construcción de enlaces para que use la ruta base real del sitio y no generen URLs rotas en local o en producción.
- Se unificó el tratamiento visual de los CTA con un componente compartido para evitar inconsistencias entre botones primarios, secundarios y el botón de WhatsApp.
- Se restauró la variante secundaria para que coincida con el estilo previo del botón "Conoce más" del hero, sin romper la identidad visual del sitio.
- Se estandarizó el patrón de títulos de ventana para las páginas con el formato "Página | Diamond Publicidad" y se verificó la versión en inglés.

### Verificación ejecutada

Se validó con comprobaciones reales del proyecto:

- `npm run check` → 0 errores, 0 warnings, 0 hints.
- `npm run build` → compilación exitosa con 6 páginas generadas, incluyendo las rutas de la página de historia en español e inglés.

Estas decisiones se consideran confirmadas por la implementación y la validación de compilación del sitio.
