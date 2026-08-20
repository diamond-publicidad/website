---
name: tailwind
description: Uso practico de Tailwind CSS 4 en este proyecto Astro.
---

# Tailwind CSS

- Fuente principal: https://tailwindcss.com/docs/installation/framework-guides/astro
- Existe una skill comunitaria de Tailwind 4 de Lombiq: https://github.com/Lombiq/Tailwind-Agent-Skills. No se incorpora porque requiere sincronizar un snapshot local de la documentacion con una licencia especifica y seria excesivo para este repositorio pequeno.
- Este proyecto usa Tailwind CSS 4 con `@tailwindcss/vite` y `@import "tailwindcss"`; no uses APIs de Tailwind 3 salvo que se justifique una migracion.
- Prefiere utility classes directamente en el markup y elimina CSS duplicado.
- Diseña mobile-first con utilities sin prefijo y variantes `sm`, `md`, `lg` solo para cambios desde esos breakpoints.
- Usa variantes para `hover`, `focus-visible`, `disabled`, `aria-*` y `motion-reduce` cuando mejoren el comportamiento accesible.
- Mantén consistencia en espaciado, tipografia y estados sin crear una configuracion de tema compleja prematuramente.
- Evita `@apply` y CSS global adicional cuando unas utilities claras sean suficientes.