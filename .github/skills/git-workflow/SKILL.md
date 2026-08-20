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