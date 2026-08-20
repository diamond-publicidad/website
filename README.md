# Diamond Publicidad Website

Sitio web oficial de Diamond Publicidad, desarrollado como proyecto Astro estático y prerenderizado para presentar la marca, la actividad empresarial y los canales de contacto cuando la información está confirmada y aprobada.

## Introducción

Este repositorio es la base técnica del sitio web oficial de Diamond Publicidad. Su objetivo es mantener una presencia digital clara, moderna y profesional, con una arquitectura simple, legible y fácil de mantener por equipo y por agentes de IA.

No se trata de un proyecto genérico. El contexto del negocio y del producto está definido por los documentos de origen del repositorio y debe respetarse siempre. Cuando algo no esté confirmado, se deja pendiente o se solicita decisión del propietario; nunca se inventa.

## Propósito general

El proyecto busca:

- presentar a Diamond Publicidad de forma clara y profesional,
- comunicar sus servicios y actividades confirmadas,
- mantener una identidad visual consistente con la marca,
- generar una experiencia web accesible y responsive,
- facilitar el mantenimiento y la colaboración técnica,
- apoyar un flujo de trabajo con agentes de IA sin romper la calidad ni la integridad del contenido.

## Stack y arquitectura

### Tecnologías

- Astro
- TypeScript
- Tailwind CSS 4
- GitHub Pages para despliegue estático

### Principios de arquitectura

El sitio se mantiene en un modelo estático y prerenderizado:

- sin SSR salvo que una futura especificación lo requiera explícitamente,
- con JavaScript mínimo y solo cuando hace falta,
- usando HTML y CSS para la mayor parte de la lógica de UI,
- favoreciendo componentes reutilizables sobre abstracciones complejas,
- manteniendo compatibilidad con la configuración de GitHub Pages.

La arquitectura del proyecto sigue una lógica simple:

- `src/pages/` para páginas públicas,
- `src/layouts/` para la estructura base del documento,
- `src/components/` para bloques reutilizables,
- `src/i18n/` para internacionalización,
- `src/styles/` para tokens y estilos globales.

## Requisitos de entorno

Necesitarás lo siguiente para trabajar localmente:

- Node.js compatible con la versión del proyecto
- npm
- Git
- VS Code (recomendado para trabajar con el flujo de agentes y MCP)

## Inicio rápido

```bash
npm install
npm run dev
```

Para validar el proyecto:

```bash
npm run check
npm run build
```

Y opcionalmente:

```bash
npm run preview
```

## Estructura del repositorio

```text
.
├── .github/
│   ├── copilot-instructions.md
│   ├── MCP-GITHUB.md
│   ├── agents/
│   ├── skills/
│   └── workflows/
├── docs/
│   ├── business/
│   ├── product/
│   └── sdd/
├── specs/
├── src/
│   ├── components/
│   ├── i18n/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── ...
```

### Qué encontrar en cada parte

- `src/pages/`: rutas y contenido visible del sitio.
- `src/layouts/`: layout general con cabecera, metadatos y estructura base.
- `src/components/`: componentes reutilizables como navegación o footer.
- `src/i18n/`: lógica de locales y textos internacionalizados.
- `src/styles/`: estilos globales, tokens y base visual.
- `docs/`: documentación de producto, negocio, identidad visual y SDD.
- `specs/`: especificaciones de funcionalidades significativas antes de implementar.
- `.github/`: instrucciones, skills, workflow de agentes y configuración del entorno.

## Documentación clave del proyecto

Antes de tomar decisiones de diseño, contenido o implementación, siempre revisa la documentación base:

- [docs/product/context.md](docs/product/context.md)
- [docs/product/visual-direction.md](docs/product/visual-direction.md)
- [docs/business/context.md](docs/business/context.md)
- [docs/sdd/workflow.md](docs/sdd/workflow.md)
- [docs/sdd/agent-workflow.md](docs/sdd/agent-workflow.md)
- [.github/copilot-instructions.md](.github/copilot-instructions.md)

Estas fuentes son la referencia principal. El contenido comercial solo es válido si ya está aprobado allí o si el propietario lo ha dado explícitamente.

## Flujo SDD y desarrollo guiado por specs

Este repositorio usa el siguiente ciclo de trabajo:

Idea -> Spec -> Implementación -> Verificación

### Regla principal

Cada funcionalidad significativa debe tener una spec en `specs/` antes de implementarse.

### Roles del flujo

- `SDD Preflight`: identifica alcance, documentos relevantes, skills, bloqueos y la spec necesaria.
- `Implementation`: implementa solo lo aprobado por la spec y por la revisión previa.
- `Documentation`: actualiza documentación resultante de decisiones ya validadas.
- `Git Delivery`: prepara rama, commit y pull request cuando el cambio ya está validado.

### Recomendaciones prácticas

- leer primero la documentación relevante y la spec si existe,
- no asumir requisitos no confirmados,
- no mezclar cambios no relacionados,
- validar antes de cerrar una tarea,
- llevar la entrega a revisión humana antes de abrir PR o cerrar trabajo.

### Validación del flujo de entrega

Antes de cualquier operación de entrega Git, el flujo debe verificarse explícitamente en este orden:

- confirmar que la rama actual corresponde a la tarea en curso;
- sincronizar la rama con el remoto antes de continuar si ya existe o si se está trabajando sobre una rama compartida;
- comprobar si hay un Pull Request activo para reutilizarlo en lugar de crear otro;
- validar con MCP o con la evidencia operativa disponible que el contexto de entrega está listo antes de push, PR o merge;
- solo entonces preparar la entrega final y mantener la rama alineada con la revisión humana y el estado real del repositorio.

La validación del flujo no es solo una comprobación local de cambios: incluye la rama activa, la sincronización remota y la existencia de un PR activo o su apertura solo cuando el trabajo está listo.

### Versionado del sitio

El proyecto mantiene un dato centralizado de versión para el sitio en [src/i18n/index.ts](src/i18n/index.ts). El valor inicial aprobado es `0.1.0`, con fecha de publicación inicial `20-08-2026` en formato `dd-mm-aaaa`.

La versión se usa como metadato del proyecto y no como contenido comercial. Se refleja de forma discreta en el pie de página y, en móvil, dentro del menú desplegable como bloque de información de sitio. El dato debe revisarse siempre antes de cerrar una entrega o publicar una actualización, y cualquiera de sus cambios debe validarse junto con la UI para asegurar que el valor nuevamente aparece en la interfaz.

## Guía de onboarding para un nuevo desarrollador

Si eres una persona nueva en este proyecto, esta sección te ayuda a entrar al repositorio sin perderte en la documentación ni en el flujo de trabajo.

### 1. Empieza por la documentación de contexto

Antes de tocar código, revisa estas fuentes en este orden:

1. [docs/business/context.md](docs/business/context.md)
2. [docs/product/context.md](docs/product/context.md)
3. [docs/product/visual-direction.md](docs/product/visual-direction.md)
4. [docs/sdd/workflow.md](docs/sdd/workflow.md)
5. [.github/copilot-instructions.md](.github/copilot-instructions.md)

Esto te permite entender qué es el proyecto, qué información está aprobada y cuáles son las reglas del negocio antes de escribir código o proponer cambios.

### 2. Configura el entorno local

Ejecuta estos comandos desde la raíz del repositorio:

```bash
npm install
npm run dev
```

Si quieres validar antes de cerrar una tarea:

```bash
npm run check
npm run build
```

### 3. Entiende la estructura del repo

- `src/pages/`: rutas del sitio.
- `src/layouts/`: estructura HTML y metadatos compartidos.
- `src/components/`: partes reutilizables de la interfaz.
- `src/i18n/`: textos y locales.
- `src/styles/`: estilos globales y tokens de diseño.
- `docs/`: decisiones de negocio, producto y SDD.
- `specs/`: especificaciones que definen cambios importantes.
- `.github/`: instrucciones, skills y flujo de agentes.

### 4. Hazlo con el flujo correcto

No empieces a modificar componentes sin revisar primero:

- si hay una spec relacionada,
- si la funcionalidad es significativa,
- si la documentación ya lo define,
- si el cambio está dentro del alcance.

Si algo no está claro, no inventes. Lo correcto es pedir confirmación o dejar la situación pendiente.

### 5. Revisa antes de entregar

Antes de cerrar una tarea, confirma:

- que la documentación relevante se sigue cumpliendo,
- que no se mezclan cambios no relacionados,
- que la funcionalidad está validada con `npm run check` y `npm run build`,
- que el contenido sigue siendo real y aprobado.

## Agentica y uso de IA en el proyecto

El proyecto está pensado para trabajar bien con agentes de desarrollo dentro de VS Code, siempre que se respeten las reglas del repositorio.

### Flujo recomendado con IA

- empezar por `SDD Preflight` cuando haya una solicitud relevante,
- revisar la documentación antes de sugerir cambios,
- crear o actualizar spec si la tarea es significativa,
- implementar solo el alcance claro,
- validar antes de cerrar,
- documentar si hubo una decisión relevante.

### Regla de oro

La IA debe tratar la documentación del repositorio como la fuente de verdad. Si una información no está aprobada, no debe asumirla ni reutilizarla como si fuera real.

## MCP y GitHub

Cuando sea necesario preparar una entrega o abrir un pull request, se usa GitHub MCP en el entorno local del editor.

### Checklist práctico de MCP

1. activar el servidor GitHub MCP desde la configuración del editor;
2. completar la autenticación en navegador;
3. comprobar que la conexión esté activa;
4. validar con `git status --short --branch` si ya estás en la rama correcta de la funcionalidad;
5. si ya estás en la rama adecuada, no crear otra rama; solo seguir con commits y push;
6. si la rama no existe localmente o remotamente, crearla o hacer tracking antes de continuar;
7. si ya existe un PR para esa rama, actualizar la misma rama y no abrir otro PR;
8. solo abrir PR cuando no exista uno activo para la rama y el trabajo esté listo para revisión;
9. si aún no está listo, dejar la rama en progreso y esperar a crear el PR más adelante.

### Flujo correcto de rama y PR

Antes de crear una rama o un PR, el agente debe responder estas preguntas:

- ¿ya estoy en la rama correcta de la funcionalidad?
- ¿esa rama ya existe en remoto?
- ¿ya hay un PR abierto para esa rama?
- si sí, ¿solo necesito hacer push de commits y actualizar el PR existente?
- si no, ¿el trabajo ya está listo para abrir PR o conviene esperar?

### Regla de decisión

- si ya estás en la rama correcta y la rama ya tiene PR, solo subes commits;
- si ya estás en la rama correcta y no hay PR, puedes crear el PR cuando el trabajo esté listo;
- si no estás en la rama correcta, cambia a la rama correcta o créala solo si no existe;
- si el trabajo todavía no está listo para revisión, no abras PR aún;
- nunca abras PR duplicado para la misma rama.

### Qué no hacer

- no dejar tokens en el repositorio,
- no asumir que el MCP está activo sin comprobarlo,
- no abrir PRs si la autenticación falló,
- no inventar una entrega cuando la conexión o permisos no existen,
- no crear ramas nuevas cuando ya se está trabajando en la rama correcta de la funcionalidad.

## Lineamientos de producto y diseño

### Contenido comercial

La información comercial es controlada. Solo es válida si existe en la documentación oficial o fue proporcionada explícitamente por el propietario.

No se deben inventar:

- servicios,
- precios,
- clientes,
- cobertura,
- resultados,
- testimonios,
- horarios,
- contactos,
- ubicaciones,
- promesas comerciales.

Cuando falte información aprobada, debe dejarse pendiente o solicitarse decisión del propietario.

### Diseño visual

La identidad visual está definida en `docs/product/visual-direction.md`.

Reglas clave:

- respetar el logo oficial y la referencia de marca,
- mantener una paleta limpia y clara,
- usar amarillo como acento puntual y controlado,
- no introducir colores o estilos ajenos a la identidad,
- priorizar legibilidad, orden visual y jerarquía clara.

### Accesibilidad

- usar HTML semántico y buena jerarquía de headings,
- mantener foco visible,
- respetar contraste suficiente,
- ofrecer navegación por teclado,
- cuidar texto alternativo en imágenes,
- respetar `prefers-reduced-motion`.

### Responsive y UX

- diseñar mobile-first,
- revisar contenido en pantallas pequeñas y grandes,
- no ocultar información esencial solo por el layout,
- mantener navegación clara y usable.

### Rendimiento y calidad

- mantener el sitio estático,
- evitar dependencias innecesarias,
- mantener CSS y JS mínimos,
- usar componentes simples y reutilizables,
- seguir buenas prácticas de TypeScript,
- priorizar legibilidad y mantenibilidad.

### SEO básico

- usar títulos y meta descriptions cuando corresponda,
- mantener estructura semántica adecuada,
- cuidar la indexabilidad del contenido,
- respetar idioma y configuración de despliegue.

### Iconografía

Cuando se requieran iconos, se usa Font Awesome Free y solo se importan los iconos estrictamente necesarios.

Reglas:

- no cargar catálogos completos,
- importar solo lo que se usa,
- preferir iconos con significado claro,
- mantener accesibilidad para acciones icon-only.

## Comandos útiles

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Recomendaciones para colaboradores y agentes

- lee primero la documentación del repositorio antes de cambiar código,
- verifica si existe spec para una tarea significativa,
- evita cambios fuera del alcance,
- reutiliza patrones y componentes existentes,
- mantiene cambios pequeños y enfocados,
- documenta decisiones importantes,
- valida con `npm run check` y `npm run build` antes de cerrar trabajo,
- no inventes contenido ni información comercial.

## Estado de la documentación

Este README funciona como guía general del proyecto, nivel técnico y de colaboración con agentes. Es una referencia de trabajo para desarrolladores nuevos, para mantenimiento del sitio y para uso correcto de la agentica y el MCP, siempre alineado con la documentación oficial del repositorio y con la política de contenido controlado.

## Cambios documentados y decisiones verificadas

La documentación del repositorio quedó ajustada para reflejar el estado actual del proyecto y el flujo de trabajo que debe seguirse:

- se consolidó la guía de onboarding como punto de entrada técnico del repositorio,
- se documentó la estructura del proyecto y la separación entre código, documentación y specs,
- se reforzó el flujo SDD con la obligación de validar cambios significativos antes de cerrar una tarea,
- se precisó el uso responsable de agentes de IA y la política de contenido controlado,
- se mantuvo la orientación del sitio hacia una arquitectura estática y compatible con GitHub Pages,
- se ajustó el flujo de entrega Git para evitar crear ramas nuevas sin verificar la rama correcta ni duplicar PRs existentes.

Las decisiones verificadas en esta base documental son:

- la estructura del proyecto corresponde al modelo Astro estático con TypeScript y Tailwind CSS 4,
- la documentación se mantiene alineada con la estrategia de contenido aprobado y sin información comercial inventada,
- el README funciona como referencia operativa para colaboradores y agentes sin desbordar el alcance del proyecto,
- el proceso de entrega exige verificar rama actual, sincronización remota, existencia de PR y uso correcto de MCP antes de crear o abrir entregas,
- los requisitos de diseño, accesibilidad, rendimiento y SEO quedan consistentes con la documentación oficial del repositorio,
- la validación técnica del proyecto quedó confirmada con `npm run check` y `npm run build` sin errores relevantes.

