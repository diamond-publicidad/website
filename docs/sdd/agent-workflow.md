# Orquestación de agentes

El repositorio usa cuatro agentes con responsabilidades separadas para que una solicitud no llegue a implementación o entrega sin revisar primero su contexto.

## Flujo

`SDD Preflight -> Implementation -> Documentation -> Git Delivery`

Los handoffs son sugerencias guiadas en VS Code. Cada cambio de rol requiere revisión humana del resultado anterior; no reemplazan las instrucciones del repositorio, las specs ni las aprobaciones necesarias.

## Roles

### SDD Preflight

Es la puerta de entrada para cualquier solicitud. Clasifica el trabajo, lee la documentación relevante, localiza la spec si aplica, identifica skills y criterios de aceptación, y detiene el flujo ante ambigüedades o información comercial pendiente.

No ejecuta comandos. Puede editar únicamente `specs/` mediante la skill `spec-creation`: si falta una spec para una funcionalidad significativa, la crea con los requisitos confirmados y la presenta para revisión. Una implementación significativa solo avanza cuando identifica una spec aprobada y un alcance claro.

### Implementation

Recibe el informe de `SDD Preflight` e implementa exclusivamente el alcance preparado. Debe leer las skills indicadas, verificar criterios de aceptación y ejecutar las comprobaciones necesarias.

No realiza commits, pushes ni Pull Requests. Cuando el cambio requiere documentación, usa el handoff a Documentation; cuando el resultado está validado, usa el handoff a Git Delivery.

### Documentation

Mantiene specs, contextos, guías, skills, README e instrucciones cuando un cambio validado o una decisión aprobada lo requiere. No altera código ni realiza operaciones Git de entrega.

No usa una spec para justificar cambios que no estaban aprobados. Después de documentar, deriva la entrega a Git Delivery.

### Git Delivery

Gestiona ramas, commits, Pull Requests y push según la skill Git. Comprueba que el cambio está validado y que no mezcla propósitos antes de preparar la entrega.

No modifica archivos. No hace push directo a `main`; para ramas relevantes utiliza `feature/<nombre>` o `fix/<nombre>`, Pull Request y el proceso de revisión correspondiente.

## Uso

1. Inicia una solicitud con `SDD Preflight`, incluso cuando la petición parezca pequeña si puede afectar producto, documentación o entrega.
2. Revisa sus fuentes, bloqueos y alcance antes de elegir el handoff propuesto.
3. Usa `Implementation` solo con una solicitud lista para implementar y `Documentation` solo con decisiones o cambios ya validados.
4. Usa `Git Delivery` al final, después de las validaciones, para evitar commits que mezclen trabajo no relacionado.

Para cambios significativos, este flujo complementa el ciclo definido en [workflow.md](workflow.md): `Idea -> Spec -> Implementacion -> Verificacion`.
