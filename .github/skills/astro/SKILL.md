---
name: astro
description: Practicas para construir y mantener este sitio Astro estatico.
---

# Astro

- Consulta primero la documentacion oficial de Astro: https://docs.astro.build/
- Para dudas sobre APIs recientes, prioriza el Astro Docs MCP oficial: `https://mcp.docs.astro.build/mcp`. La skill publicada en el repositorio oficial de Astro esta orientada al monorepo de Astro, por lo que no se copia aqui.
- Usa la estructura estandar: `src/pages`, `src/layouts`, `src/components`, `src/content` y `public` solo cuando corresponda.
- Prefiere componentes `.astro`, HTML semantico y datos tipados.
- Mantén `output: 'static'`; no agregues adapters ni SSR.
- Usa prerenderizado por defecto. Introduce una Island solo si una interaccion real lo requiere y evita frameworks de UI sin necesidad explicita.
- Usa `astro:assets` para imagenes locales cuando deban optimizarse; incluye siempre `alt`.
- Reutiliza layouts y componentes solo cuando reduzcan duplicacion real.
- Incluye metadatos SEO basicos y  avanzados, titulos descriptivos, enlaces validos y estructura de encabezados coherente.
- Verifica accesibilidad, build y enlaces internos, especialmente cuando exista `base` en GitHub Pages.