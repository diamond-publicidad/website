---
name: spec-creation
description: "Crea o actualiza una spec pequeña antes de implementar una funcionalidad significativa. Úsala cuando SDD Preflight no encuentre una spec para una solicitud de producto, código o experiencia."
user-invocable: false
---

# Creación de specs

Usa esta skill desde `SDD Preflight` cuando una solicitud requiera una funcionalidad significativa y no exista una spec aplicable en `specs/`.

## Fuentes obligatorias

1. Lee `.github/copilot-instructions.md` y `docs/sdd/workflow.md`.
2. Lee los documentos de negocio, producto y dirección visual que apliquen a la solicitud.
3. Revisa las specs existentes para evitar duplicar o contradecir una decisión.
4. Usa solamente información aprobada en esas fuentes o proporcionada explícitamente por el propietario.

## Procedimiento

1. Identifica un nombre breve, descriptivo y en kebab-case para `specs/<nombre>.md`.
2. Crea o actualiza la spec con la estructura definida en `specs/README.md`:

```markdown
# Nombre de la funcionalidad

## Objective

...

## Requirements

- ...

## Acceptance Criteria

- ...
```

3. Escribe un objetivo que describa el resultado, no la solución técnica.
4. Incluye requisitos y criterios de aceptación concretos, comprobables y trazables a las fuentes consultadas.
5. Omite cualquier dato, promesa comercial, decisión visual, integración o comportamiento que no esté confirmado. Registra esa ausencia como bloqueo en el informe de preflight, no como un requisito inventado.
6. Mantén la spec pequeña y centrada en una funcionalidad. No agregues ADRs, planes extensos, estados artificiales ni detalles de implementación prematuros.
7. Presenta la spec para revisión. Crear o actualizar una spec no autoriza a implementar; espera autorización explícita antes de ofrecer el handoff a `Implementation`.

## Resultado obligatorio

El informe de `SDD Preflight` debe indicar:

- ruta de la spec creada o actualizada;
- fuentes que respaldan cada requisito;
- criterios de aceptación verificables;
- ambigüedades, información pendiente o contradicciones;
- que la implementación permanece bloqueada hasta recibir aprobación explícita.
