# SimDron Docs — Trivia de 200 preguntas (v9)

## Instalación

Paquete incremental para el repositorio independiente `SimDron-Docs`.
Copiar el contenido de esta carpeta a la **raíz** del repositorio desde GitHub Desktop → Repository → Show in Explorer. Aceptar reemplazar únicamente estos tres archivos:

- `assets/js/quiz-bank.js`
- `assets/js/quiz.js`
- `trivia.html`

No sustituir `index.html`, el CSS, los capítulos, los PNG ni ningún archivo de Mission Control.

Commit sugerido: `Expand SimDron trivia to 200 questions`
Luego `Push origin` y actualizar `https://mpiccolidev.github.io/SimDron-Docs/trivia.html` con Ctrl+F5.

## Contenido

- 200 preguntas diferentes: 130 de SimDron VR + 70 de Mission Control.
- 10 preguntas aleatorias por ronda: 7 de SimDron VR y 3 de Mission Control.
- Tres niveles internos de dificultad: intermedio, avanzado y experto.
- Cuatro opciones mezcladas independientemente en cada pregunta.
- Explicación y acceso a capítulo + página original tras responder.
- Puntaje de 0 a 100 y revisión final, con opción de impresión en PDF.
- Evita repetir preguntas entre rondas hasta agotar las preguntas del producto en la sesión abierta.
- No guarda ni transmite respuestas a servidores.

## Bases documentales y alcance

Preguntas elaboradas con base en los PDFs originales:
- `SimDron - User Manual (ES) - build220+.pdf` (194 páginas)
- `SimDron - Mission Control - v1.22.0.pdf` (60 páginas)

La versión actual mostrada en la web continúa siendo SimDron v1.0.280. El banco está documentado contra los manuales indicados, por lo que cualquier cambio posterior debe revisarse editorialmente. Esta actualización no reescribe los manuales ni altera el sitio comercial.

## Validación

- 200 IDs únicos y 200 enunciados distintos.
- Todos con cuatro respuestas distintas, índice de solución válido y explicación.
- 200 enlaces HTML verificados contra el capítulo y ancla de la página correcta en la estructura del manual.
- Simulación automatizada de 18 rondas consecutivas: 180 preguntas presentadas sin repetición, siempre 7 VR y 3 MC.
- JavaScript analizado sintácticamente con Node.js.

No se publicó nada en GitHub; el commit y push son manuales.
