# GitHub MCP y PR del agente de delivery

## Objective

Preparar el repositorio para soportar una configuración local de GitHub MCP y permitir que el agente de entrega pueda abrir un Pull Request desde la rama actual hacia la rama base elegida por el usuario, sin perder el flujo seguro definido por el repositorio.

## Requirements

- El repositorio debe incluir una forma documentada y segura de declarar la configuración del MCP de GitHub, sin guardar secrets reales ni tokens en archivos versionados.
- La configuración del MCP debe ser compatible con el uso de GitHub desde un agente o herramienta con acceso autenticado, y debe quedar registrada en un punto del repositorio que el equipo pueda revisar y ajustar localmente.
- Cuando el MCP de GitHub esté disponible y autenticado, el agente `Git Delivery` debe validar que la rama actual ya está lista para la entrega antes de abrir un PR.
- La creación del PR debe requerir una decisión explícita del usuario sobre la rama base destino, sin asumir que el destino es `main`.
- El flujo no debe hacer push directo a `main`; si se trabaja desde una rama temporal, debe generar un PR hacia la rama destino elegida.
- Si falta autenticación, acceso o configuración del MCP, el agente debe detenerse y informar claramente el bloqueo en lugar de inventar un PR.
- La configuración y el flujo deben respetar la política del repositorio: no mezclar cambios no relacionados, mantener ramas temporales y preparar PRs desde una rama lista y validada.

## Acceptance Criteria

- Existe una referencia en el repositorio para la configuración local del MCP de GitHub, con placeholders o variables de entorno según corresponda, sin secretos committed.
- La documentación del repositorio explica que el MCP es opcional y que se activa solo cuando el entorno local o la sesión lo tenga configurado.
- El agente `Git Delivery` pregunta explícitamente a qué rama base debe dirigirse el PR antes de abrirlo.
- El flujo verifica que la rama actual existe, está preparada y no es `main` salvo que el usuario lo indique explícitamente.
- El PR se genera desde la rama actual hacia la rama base elegida por el usuario y no hacia una rama predeterminada no autorizada.
- Cuando no hay MCP configurado o la autenticación no está disponible, el proceso informa el bloqueo y no intenta continuar con una entrega ficticia.
- Los cambios de entrega siguen el patrón del repositorio: `main -> feature/fix -> commit -> PR -> verification -> merge -> main`.

## Notes

- Esta spec no autoriza la implementación aún. La configuración real del MCP y la lógica del agente deberán validarse después de revisar esta especificación.
- La información comercial del repositorio se mantiene controlada y no se incorporan datos no confirmados.
