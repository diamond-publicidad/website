# Flujo SDD

El repositorio utiliza un ciclo simple de Spec-Driven Development:

**IDEA -> SPEC -> IMPLEMENTACION -> VERIFICACION**

## Idea

Una nueva necesidad o funcionalidad.

## Spec

Antes de implementar una funcionalidad significativa debe existir una especificacion pequena en `specs/`. Cada spec contiene solamente:

- objetivo;
- requisitos;
- criterios de aceptacion.

La spec se presenta para revision. Definir una funcionalidad no autoriza a implementarla.

## Implementacion

Cuando se solicite implementar una spec, se lee la spec, se revisa el codigo existente y se implementa lo necesario respetando las instrucciones y skills relevantes.

La entrada operativa para una solicitud es `SDD Preflight`: revisa la documentacion, identifica las skills aplicables y detiene el flujo cuando falten decisiones. Si falta una spec para una funcionalidad significativa, usa la skill `spec-creation` para crearla y presentarla para revision; esa creacion no autoriza la implementacion. La implementacion se realiza con `Implementation` solo después de revisar su informe y aprobar la spec. Consulta [agent-workflow.md](agent-workflow.md) para las responsabilidades y handoffs.

## Verificacion

Se ejecutan las comprobaciones disponibles y se revisan los criterios de aceptacion. Si la implementacion revela que la spec estaba incompleta o equivocada, se actualiza la spec.

### Versionado del sitio

Antes de cerrar una entrega o publicar una actualizacion, se debe verificar que el dato de version del sitio siga actualizado en `src/i18n/index.ts`.

- El valor inicial es `0.1.0`.
- La fecha de publicacion debe mantenerse en formato `dd-mm-aaaa`.
- La fecha inicial aprobada es `20-08-2026`.
- Cuando se prepare una nueva version, se actualiza el dato central y se valida que la UI lo refleje en footer y, en mobile, dentro del menu desplegable.
- El control del dato puede realizarse desde `Documentation` o `Git Delivery`, pero siempre debe revisarse antes de cerrar la entrega.

Tras las verificaciones, `Documentation` actualiza los documentos que correspondan y `Git Delivery` prepara la rama, commit y Pull Request según la skill Git. Ninguno sustituye la revisión humana de las decisiones o del Pull Request.

No se crean ADRs, planes complejos, sistemas de tickets artificiales ni estados adicionales.