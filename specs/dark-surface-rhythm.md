# Ritmo visual de superficies en modo oscuro

## Objective

Establecer una convención coherente para el uso de los tokens de superficie en modo oscuro, con el fin de conservar la continuidad visual de la página, mantener una jerarquía clara y alinearse con la dirección visual oficial del proyecto.

## Requirements

- Adoptar la regla de uso siguiente en modo oscuro:
  - `background` será la base general de la página.
  - `surface` se reservará para bloques destacados o secciones con énfasis visual.
  - `card` se reservará únicamente para contenido agrupado dentro de un bloque, no como fondo de una sección completa.
- Mantener la lectura, el contraste y la jerarquía visual de hero, servicios, portafolio, clientes y contacto en ambos temas.
- Evitar que el modo oscuro genere una sensación de fragmentación excesiva o de alternancia visual sin propósito.
- Alinear la decisión final con la identidad visual definida en la documentación oficial del proyecto, especialmente en la dirección visual y en el principio de usar fondos oscuros como bloques puntuales y deliberados.
- Documentar esta regla en la documentación visual del producto para que la convención quede registrada y no dependa solo del código.
- No implementar una alternativa distinta a la aprobada antes de confirmar la convención final.

## Acceptance Criteria

- Existe una sola regla de uso de superficies en modo oscuro, documentada y aplicada de forma consistente en todas las secciones relevantes.
- La decisión aprobada deja explícito que `background` es la base, `surface` se usa solo para bloques destacados y `card` se reserva para contenido agrupado.
- La página mantiene un ritmo visual claro y legible, sin que las secciones parezcan inconexas ni excesivamente fragmentadas.
- El patrón final no reutiliza `card` como fondo de una sección completa.
- La implementación conserva accesibilidad, contraste y consistencia con la dirección visual del proyecto.
- La documentación oficial del producto refleja la decisión adoptada y se actualiza junto con la implementación o en el siguiente paso documental correspondiente.

## Implemented outcome and verified decisions

La implementación quedó validada con estas decisiones confirmadas en código y verificación:

- La base de la experiencia en modo oscuro usa `background` para la mayoría de secciones del home, manteniendo continuidad y evitando un ritmo demasiado fragmentado.
- `surface` queda reservado para bloques destacados o con énfasis visual, sin convertirlo en el fondo general de cada sección.
- `card` se usa para contenido agrupado dentro de un bloque, no como fondo de una sección completa.
- El ajuste se aplicó en la estructura de [src/components/HomePage.astro](src/components/HomePage.astro), preservando el resto de tokens y la jerarquía funcional del layout.
- La validación final se ejecutó con `npm run check && npm run build`, con resultado: 0 errores, 0 warnings, 0 hints, y 4 páginas generadas correctamente.
