# Visibilidad del creador en el footer

## Objective

Dar visibilidad discreta al creador del sitio exclusivamente en el pie de página, conservando el crédito actual y facilitando el acceso a sus perfiles profesionales y a la información confirmada sobre sus servicios.

## Requirements

- Mostrar el crédito de autoría como `Julian Ospina`, sin convertir el nombre en enlace, dentro del footer.
- Incluir junto al crédito, con jerarquía visual secundaria, la información aprobada: `Sitios web y software a medida`.
- Añadir enlaces independientes, representados por iconos, a GitHub y LinkedIn dentro del mismo bloque de crédito del footer, con destino respectivamente a `https://github.com/xhate83` y `https://www.linkedin.com/in/jeyson-julian-ospina-leon-14b4aa1aa/`.
- Representar los enlaces a GitHub y LinkedIn con los iconos correspondientes de Font Awesome Free, importando únicamente los iconos de marca utilizados y sin incorporar otra librería ni cargar el catálogo completo.
- Los enlaces compuestos solo por icono deben tener un nombre accesible que identifique el perfil y su destino; los iconos decorativos deben quedar ocultos para tecnologías de asistencia.
- Conservar el comportamiento de enlaces externos seguro ya utilizado por el sitio y mantener el bloque navegable por teclado, con foco visible y contraste suficiente.
- Mantener el tratamiento sobrio del footer definido por la dirección visual: el crédito, la descripción y los iconos deben ser secundarios respecto a la información de Diamond Publicidad, sin colores, tamaños, animaciones ni efectos llamativos nuevos. Los iconos sociales deben usar un cambio de color amarillo en hover como única señal visual adicional.
- Integrar los textos nuevos en la estructura de internacionalización existente, con equivalentes en español e inglés, sin modificar contenido comercial de Diamond Publicidad.
- Mantener la legibilidad, el orden y los destinos de los enlaces en móvil, tablet y escritorio, sin solapamientos ni desbordes.

## Acceptance Criteria

- El footer muestra el crédito `Julian Ospina` sin enlace en el nombre.
- El footer comunica de forma discreta `Sitios web y software a medida` y muestra un equivalente localizado en la ruta en inglés.
- El bloque de crédito contiene enlaces funcionales e independientes, representados por iconos, para GitHub y LinkedIn con exactamente los destinos proporcionados.
- Los enlaces de GitHub y LinkedIn muestran los iconos de marca de Font Awesome Free y los iconos no son el único nombre expuesto a tecnologías de asistencia.
- Los enlaces externos conservan protección mediante `target="_blank"` y `rel="noreferrer"`, son operables con teclado y muestran un foco visible.
- La atribución del creador sigue apareciendo únicamente en el footer y conserva una jerarquía visual subordinada a la marca y al contenido de Diamond Publicidad en pantallas móviles, tablet y de escritorio; la descripción se presenta antes de los enlaces sociales.
- Los iconos sociales cambian a amarillo al recibir hover y conservan foco visible al navegar con teclado.
- La implementación no añade dependencias ni bibliotecas de iconos, e importa únicamente los iconos de Font Awesome necesarios.
- `npm run check` y `npm run build` terminan correctamente después de la implementación.
- `npm run check` y `npm run build` terminan correctamente después de la implementación.