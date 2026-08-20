# README para desarrollo y agentica

## Objective

Actualizar la documentación principal del repositorio para que desarrolladores y agentes puedan entender el propósito del proyecto, configurar el entorno local, seguir el flujo de trabajo de especificación y mantener las decisiones de negocio, diseño y cumplimiento de calidad sin inventar información comercial ni requisitos no aprobados.

## Requirements

- El README debe explicar el propósito del proyecto como sitio web oficial de Diamond Publicidad, desarrollado con Astro, TypeScript y Tailwind CSS 4.
- Debe incluir instrucciones claras para instalar dependencias y ejecutar el proyecto localmente, incluyendo al menos los comandos `npm install`, `npm run dev`, `npm run check` y `npm run build`.
- Debe documentar la estructura principal del repositorio, incluyendo al menos `src/`, `docs/`, `specs/`, `.github/`, `astro.config.mjs` y `package.json`.
- Debe describir la arquitectura del sitio: estático, prerenderizado, sin SSR salvo decisión explícita futura, configuración de GitHub Pages y uso de layout y componentes compartidos.
- Debe resumir el flujo SDD del repositorio: `Idea -> Spec -> Implementacion -> Verificacion`, con referencia a `docs/sdd/workflow.md` y `docs/sdd/agent-workflow.md`.
- Debe definir el rol de cada agente en el flujo: `SDD Preflight`, `Implementation`, `Documentation` y `Git Delivery`, y dejar claro que la creación o actualización de specs es obligatoria para funcionalidades significativas.
- Debe indicar que la documentación y el código deben basarse en información aprobada en `docs/` y `specs/`, y que no se deben inventar datos comerciales, precios, horarios, cobertura, clientes, ubicaciones, contactos o resultados.
- Debe incluir los lineamientos clave del proyecto: identidad visual, contenido controlado, accesibilidad, diseño responsive, performance, SEO, calidad de código y uso de iconografía con Font Awesome Free solo cuando sea necesario.
- Debe señalar que el trabajo debe mantenerse acotado al alcance solicitado y que no se deben agregar dependencias ni frameworks sin decisión explícita.
- Debe dejar claro que las validaciones técnicas deben ejecutarse antes de considerar un cambio terminado y que los cambios de documentación o entrega requieren revisión humana.
- Debe mantener una orientación útil para desarrolladores y asistentes de IA, sin convertir el README en una pieza de marketing ni en contenido no validado.

## Acceptance Criteria

- El README incluye una sección de propósito y stack del proyecto con la tecnología y el modelo de despliegue adecuados.
- El README contiene una sección de inicio rápido con pasos ejecutables para preparar el entorno local y validar el proyecto.
- El README describe la estructura del repositorio y los archivos principales que un desarrollador o agente debe conocer.
- El README explica el flujo de trabajo SDD y los roles de agentes con una precisión consistente con la documentación del repositorio.
- El README deja explícito el principio de no inventar información comercial y la obligación de usar solo contenido aprobado por la documentación o por el propietario.
- El README incluye los lineamientos principales de diseño, accesibilidad, responsive, rendimiento, SEO, calidad y iconografía aplicables al proyecto.
- El README no presenta contenido ficticio ni información comercial no confirmada.
- El README sirve como punto de entrada operativo para un desarrollador nuevo y para un agente que deba entender el proyecto sin asumir criterios no documentados.
