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

## Implementación validada

La implementación previa quedó documentada en función de los cambios verificados en el código y en la validación del proyecto:

- Se centralizó la internacionalización en `src/i18n/index.ts` con dos culturas: `es-co` y `en-us`, un locale por defecto y recursos con la misma estructura de claves para ambas versiones.
- Las rutas públicas se generan estáticamente en `/es-co/` y `/en-us/`; la raíz redirige según la preferencia guardada en `localStorage` o, si no existe, a la cultura por defecto. La ruta cultural visitada explícitamente mantiene prioridad.
- La cabecera comparte un selector de idioma usable en escritorio y móvil, con estado accesible mediante `aria-label`, `aria-pressed` y enlaces por ruta para evitar contenido textual codificado en componentes.
- El layout aplica el tema inicial antes del render para evitar el parpadeo de color y persiste la preferencia con `localStorage`, manteniendo el tema claro/oscuro sin introducir dependencias adicionales.
- Los metadatos y el atributo `lang` del documento se resuelven por cultura, y la experiencia mantiene la navegación, el menú móvil, la accesibilidad y la generación estática del sitio.
- La decisión de uso de rutas por cultura se verificó como la estrategia adecuada para Astro estático y GitHub Pages, porque mantiene el contenido indexable, compartible y compatible con la configuración `base` del despliegue.

> La verificación técnica actual confirma la lógica de i18n, rutas y tema; queda pendiente un ajuste CSS en `src/styles/global.css` relacionado con `@theme`, que debe corregirse para dejar el proyecto completamente libre de errores del compilador y del análisis del editor.

## SDD

Las funcionalidades significativas siguen el ciclo:

**Idea -> Spec -> Implementacion -> Verificacion**

Las specs viven en `specs/`. Consulta [docs/sdd/workflow.md](docs/sdd/workflow.md) para el flujo completo.

Las solicitudes asistidas por IA comienzan con el agente `SDD Preflight`, que crea una spec mediante la skill `spec-creation` cuando una funcionalidad significativa aún no la tiene. El flujo de roles está documentado en [docs/sdd/agent-workflow.md](docs/sdd/agent-workflow.md).
