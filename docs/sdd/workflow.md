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

## Verificacion

Se ejecutan las comprobaciones disponibles y se revisan los criterios de aceptacion. Si la implementacion revela que la spec estaba incompleta o equivocada, se actualiza la spec.

No se crean ADRs, planes complejos, sistemas de tickets artificiales ni estados adicionales.