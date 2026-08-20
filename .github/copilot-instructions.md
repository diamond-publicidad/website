# Diamond Publicidad Website

Este repositorio contiene el sitio web oficial de Diamond Publicidad, una empresa colombiana de publicidad, impresion digital y soluciones graficas.

- Stack: Astro, TypeScript y Tailwind CSS.
- El sitio es estatico y prerenderizado. No uses SSR.
- Consulta `docs/business/` y `docs/product/` antes de tomar decisiones de contenido o producto.
- Consulta `specs/` para funcionalidades y sigue `docs/sdd/workflow.md`.
- Para trabajo especializado, consulta la skill relevante en `.github/skills/`.
- No inventes informacion comercial. Usa placeholders claros o deja el dato pendiente.
- Mantén la arquitectura simple: componentes Astro, HTML semantico, accesibilidad, SEO y rendimiento.
- Evita dependencias y frameworks de UI innecesarios.
- Verifica los cambios con las comprobaciones disponibles antes de resumir el trabajo.

## Flujo de trabajo

- Si se solicita definir una funcionalidad, revisa el contexto y las skills relevantes, crea o actualiza una spec pequena en `specs/` y presentala para revision. No la implementes hasta recibir una instruccion explicita.
- Si se solicita implementar una spec, leela primero, revisa el codigo existente y las skills relevantes, implementa solo lo necesario, ejecuta las verificaciones y comprueba sus criterios de aceptacion.
- Si se solicita una modificacion directa, evalua si requiere una spec. Los cambios pequenos y puramente tecnicos pueden hacerse directamente.