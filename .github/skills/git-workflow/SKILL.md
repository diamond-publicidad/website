---
name: git-workflow
description: Flujo Git pequeno basado en main, feature y fix.
---

# Git workflow

- Fuentes principales: https://git-scm.com/docs/git-branch y la documentacion de Pull Requests de GitHub.
- Usa solo `main` como rama permanente y ramas temporales `feature/<nombre>` o `fix/<nombre>`.
- Flujo: `main -> feature/fix -> commit -> Pull Request -> verification -> merge -> main`.
- Mantén los commits pequenos, descriptivos y centrados en un unico cambio.
- No mezcles funcionalidades independientes en un commit.
- No hagas force push, reset destructivo ni elimines ramas importantes salvo peticion explicita.
- Ejecuta las verificaciones antes de abrir o aprobar un Pull Request.
- Durante el bootstrap del repositorio no hagas commits, pushes ni Pull Requests.

## Ajustes documentados del flujo de entrega

Durante la validación del proceso de documentación y entrega del repositorio, se consolidó la siguiente regla operativa:

- antes de hacer checkout, commit o push, el agente debe verificar si ya está en la rama correcta para la funcionalidad actual;
- debe confirmar la rama actual antes de continuar, porque la entrega debe corresponder exactamente al trabajo en curso;
- si la rama ya existe localmente o remotamente, debe sincronizarse antes de continuar con cambios adicionales;
- si la rama ya tiene un Pull Request abierto, no se debe crear otro; se deben seguir empujando commits a la misma rama;
- si no hay PR activo pero el trabajo ya está listo, se abre el PR; si no está listo, se conserva la rama y se espera;
- no se deben crear ramas nuevas si ya existe una rama funcional en curso y correcta para la tarea;
- con MCP activo, la validación sigue siendo local y operativa: rama correcta, sincronización remota, PR activo y entrega solo cuando aplica.

## Cambios verificados

Las decisiones documentadas quedaron respaldadas por la verificación del repositorio:

- el repositorio sigue siendo un proyecto Astro estático con TypeScript y Tailwind CSS 4;
- el README y el flujo de documentación están alineados con la estructura real del proyecto;
- la documentación del flujo de Git y MCP refleja la regla operativa para evitar ramas duplicadas, desalineaciones remotas y PRs innecesarios;
- la validación técnica del proyecto quedó confirmada con `npm run check` y `npm run build` sin errores relevantes;
- la validación del flujo quedó definida como un conjunto de comprobaciones operativas: rama actual, sincronización remota, PR activo y verificación mediante MCP.

Estas reglas deben aplicarse antes de cualquier entrega Git para mantener un flujo consistente, seguro y reutilizable.