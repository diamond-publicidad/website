---
name: typescript
description: Practicas de TypeScript moderno y legible para el sitio.
---

# TypeScript

- Fuentes principales: https://www.typescriptlang.org/docs/handbook/ y https://www.typescriptlang.org/tsconfig/
- Conserva el `strict` mode heredado por `astro/tsconfigs/strict`.
- Prefiere inferencia cuando el tipo sea obvio y usa interfaces o type aliases cuando aclaren un contrato.
- Evita `any`; usa tipos concretos, unions sencillas o `unknown` con una comprobacion.
- Mantén los tipos pequenos y legibles. No introduzcas genericos o utilidades complejas sin una necesidad concreta.
- Usa imports de tipo cuando corresponda y evita duplicar definiciones que puedan derivarse del modelo existente.
- Ejecuta `npm run check` despues de cambios en codigo Astro o TypeScript.