# Project Context

Este repositorio contiene el sitio web de Diamond Publicidad, una microempresa colombiana dedicada a publicidad, impresion digital y soluciones graficas.

La informacion comercial es informacion controlada. Nunca inventes datos sobre el negocio, sus servicios, clientes, resultados, ubicacion, contacto, precios o cobertura. Si falta informacion, dejala pendiente o solicita una decision del propietario.

Consulta estos documentos antes de tomar decisiones:

- Identidad visual: `docs/product/visual-direction.md`
- Contexto del producto: `docs/product/context.md`
- Contexto empresarial: `docs/business/context.md`
- Proceso SDD: `docs/sdd/workflow.md`

# Architecture

- Usa Astro en la version estable actual disponible en el proyecto.
- Usa TypeScript y Tailwind CSS 4.
- El sitio es estatico y prerenderizado.
- No uses SSR salvo que una futura spec lo requiera explicitamente.
- No introduzcas React, Vue, Svelte u otro framework salvo que una futura decision arquitectonica lo apruebe.
- Mantén JavaScript al minimo necesario.
- Prefiere HTML y CSS cuando una interaccion no requiera JavaScript.
- Evita dependencias innecesarias.

No modifiques estas decisiones por iniciativa propia.

# Design

- Consulta primero `docs/product/visual-direction.md` para toda implementacion visual.
- Usa los tokens y decisiones visuales definidos por el proyecto.
- No inventes colores, tipografias ni una identidad visual alternativa.
- No redefinas la identidad visual dentro de una feature individual sin una nueva decision de diseño aprobada.

# Iconography

El proyecto utilizara Font Awesome Free para iconos de interfaz cuando sea necesario.

Reglas:

- Utiliza unicamente los iconos disponibles en Font Awesome Free.
- Importa unicamente los iconos concretos que realmente se utilicen.
- No cargues ni registres el catalogo completo de iconos.
- No utilices una importacion global que incluya miles de iconos.
- Mantén los iconos tree-shakeable y minimiza su impacto en el bundle.
- Prefiere imports directos desde los paquetes oficiales de Font Awesome.
- No instales paquetes de Font Awesome que no sean necesarios.
- Antes de añadir un nuevo icono, comprueba si ya existe uno adecuado dentro de los iconos instalados.
- No utilices iconos como sustituto de texto cuando el significado de la accion pueda resultar ambiguo.
- Los botones y enlaces que utilicen unicamente un icono deben tener un nombre accesible.
- Los iconos decorativos deben ocultarse correctamente de las tecnologias de asistencia.
- Mantén un estilo de iconografia consistente en toda la interfaz.
- No introduzcas otra libreria de iconos sin una decision explicita.

La seleccion concreta de iconos pertenece a cada feature y debe responder a la necesidad de esa interfaz.

# Accessibility

Todas las interfaces deben:

- usar HTML semantico y una jerarquia correcta de headings;
- ser navegables mediante teclado y tener foco visible;
- mantener contraste suficiente;
- proporcionar nombres accesibles a los controles;
- usar texto alternativo apropiado en imagenes;
- respetar `prefers-reduced-motion`;
- funcionar correctamente en distintos tamaños de pantalla.

# Responsive Design

- Diseña mobile-first.
- Comprueba el funcionamiento en movil, tablet y escritorio.
- No ocultes informacion esencial unicamente para resolver problemas de layout.

# Performance

- Prioriza HTML estatico, CSS eficiente y el minimo JavaScript necesario.
- Optimiza las imagenes y usa lazy loading cuando sea apropiado.
- Evita dependencias innecesarias.
- No conviertas componentes estaticos de Astro en componentes interactivos sin una razon concreta.
- Prefiere HTML y CSS para interacciones que puedan resolverse sin JavaScript.

# SEO

Aplica buenas practicas basicas de SEO a las paginas:

- titulo;
- meta description cuando corresponda;
- idioma correcto;
- estructura semantica;
- canonical cuando corresponda;
- Open Graph cuando corresponda.

No inventes metadatos comerciales.

# Code Quality

- Mantén los componentes pequeños y comprensibles.
- Evita abstracciones prematuras y sistemas complejos para problemas simples.
- Reutiliza componentes cuando exista una necesidad real.
- Evita duplicacion significativa.
- Mantén TypeScript estricto y claro.
- Prefiere soluciones simples y consistentes con el codigo existente.

# SDD

El proyecto utiliza Specification-Driven Development. Para cualquier feature significativa:

1. Lee la spec correspondiente en `specs/`.
2. Consulta la documentacion relevante y las skills aplicables.
3. Implementa unicamente lo definido.
4. No inventes requisitos.
5. Verifica la implementacion y sus criterios de aceptacion.
6. Informa cualquier ambiguedad antes de tomar una decision importante.

Si se solicita definir una funcionalidad, crea o actualiza una spec pequeña en `specs/` y presentala para revision; no la implementes hasta recibir una instruccion explicita. Si existe una contradiccion entre documentacion, spec y codigo, deten el trabajo y reportala. No modifiques una spec para justificar una implementacion incorrecta.

# Validation

Antes de considerar terminada una implementacion:

- ejecuta `npm run check`;
- ejecuta `npm run build`;
- corrige los errores relevantes;
- comprueba que no se rompan rutas ni assets con la configuracion de GitHub Pages;
- revisa responsive y accesibilidad basica.

No hagas commit ni push automaticamente salvo que se solicite explicitamente.

# Git Workflow

- Usa ramas para features y cambios relevantes.
- Prefiere nombres como `feature/home`, `feature/contact` y `fix/navigation`.
- Lleva los cambios a `main` mediante Pull Request cuando sea posible.
- No hagas push directo a `main` salvo que el usuario lo solicite explicitamente.
- Mantén los commits pequeños, claros y relacionados con un unico proposito.
- No mezcles cambios no relacionados.

# Scope

Mantén cada cambio pequeño y limitado a la tarea. No introduzcas nuevas librerias, frameworks, servicios externos, backend, CMS, base de datos ni APIs sin una necesidad explicita y la decision correspondiente.

# Agent Behavior

Antes de implementar:

- inspecciona el repositorio y el codigo existente;
- lee la documentacion, spec y skill relevantes;
- identifica la abstraccion responsable del comportamiento;
- reutiliza lo existente cuando sea apropiado.

No crees archivos ni abstracciones innecesarias. Si una decision requiere informacion del propietario, indicarlo claramente. No hagas cambios fuera del alcance de la tarea.

Al finalizar, informa que se modifico, que se verifico, que queda pendiente y cualquier decision que requiera revision.

# Content Integrity

Todo contenido comercial debe considerarse aprobado únicamente si está presente
en la documentación del proyecto, una spec aprobada o ha sido proporcionado
explícitamente por el propietario.

Nunca utilices placeholders que puedan terminar publicados como si fueran datos
reales.

No utilices contenido ficticio para completar diseños.

Cuando una interfaz necesite contenido que todavía no existe, utiliza una
estructura que pueda recibirlo posteriormente o deja el bloque fuera de la
versión pública.

Nunca presentes datos de ejemplo como información real de Diamond Publicidad.