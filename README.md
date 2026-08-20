# Diamond Publicidad Website

Sitio web oficial de Diamond Publicidad, preparado como un sitio Astro estático para presentar la empresa, sus servicios, portafolio y canales de contacto cuando la información esté confirmada.

## Stack

- Astro
- TypeScript
- Tailwind CSS

## Architecture

El sitio usa un layout Astro reutilizable en `src/layouts/BaseLayout.astro`. El layout define el documento HTML, los metadatos básicos mediante props tipadas, la carga de estilos globales y el punto de inserción del contenido de cada ruta.

Los elementos compartidos de la interfaz se encuentran en `src/components/`:

- `SiteHeader.astro`: cabecera, navegación, selector de tema y menú móvil.
- `SiteFooter.astro`: pie de página común.
- `BackToTop.astro`: control para volver al inicio y su comportamiento asociado.

Las páginas conservan solamente su contenido, datos y estilos exclusivos. `src/styles/global.css` contiene la importación de Tailwind, fuente, tokens de tema y reglas base globales; los estilos de cada elemento reutilizable se mantienen scoped en su componente Astro.

La estructura conserva la generación estática, la configuración de GitHub Pages y no añade dependencias ni frameworks de interfaz.

## Development

```bash
npm install
npm run dev
npm run check
npm run build
```

La reorganización de la estructura compartida se verificó con `npm run check` y `npm run build` sin errores ni advertencias.

## SDD

Las funcionalidades significativas siguen el ciclo:

**Idea -> Spec -> Implementacion -> Verificacion**

Las specs viven en `specs/`. Consulta [docs/sdd/workflow.md](docs/sdd/workflow.md) para el flujo completo.

Las solicitudes asistidas por IA comienzan con el agente `SDD Preflight`, que crea una spec mediante la skill `spec-creation` cuando una funcionalidad significativa aún no la tiene. El flujo de roles está documentado en [docs/sdd/agent-workflow.md](docs/sdd/agent-workflow.md).
