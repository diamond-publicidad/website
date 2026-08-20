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

Tras las verificaciones, `Documentation` actualiza los documentos que correspondan y `Git Delivery` prepara la rama, commit y Pull Request según la skill Git. Ninguno sustituye la revisión humana de las decisiones o del Pull Request.

No se crean ADRs, planes complejos, sistemas de tickets artificiales ni estados adicionales.