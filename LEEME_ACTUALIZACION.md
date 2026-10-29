# SimDron-Docs — Actualización v3 (28/10/2026)

**Este paquete es un parche, no un sitio completo.** Está preparado para colocarse **sobre tu repositorio existente** `SimDron-Docs` (la versión 2 ya publicada). No borra ni reemplaza el repositorio `SimDron` de la web comercial.

## Instalación en GitHub Desktop

1. **Clonar / abrir** el repositorio `mpiccolidev/SimDron-Docs` (NO `mpiccolidev/SimDron`).
2. En GitHub Desktop, pulsar **Fetch origin**, y si aparecen novedades, **Pull origin**.
3. En **Repository > Show in Explorer**, abrir la carpeta local `SimDron-Docs`.
4. **Abrir este ZIP y copiar su contenido**, NO la carpeta contenedora del ZIP, en la raíz de `SimDron-Docs`, donde ya está `index.html`. Elegir **combinar carpetas** y **reemplazar los archivos existentes** cuando Windows lo solicite. **NO borrar** las carpetas existentes: este ZIP solo incluye los cambios.
5. En GitHub Desktop, revisar **Changes**. Debe haber cambios en los HTML, `assets/css/style.css`, imágenes `assets/brand/`, `assets/js/quiz.js`, `assets/js/quiz-bank.js`, `assets/js/export.js` y `trivia.html`. Los assets de los PDF quedan intactos.
6. Commit: `Add brand, trivia and chapter export tools`.
7. Pulsar **Push origin**, esperar el despliegue verde de GitHub Actions, y recargar con `Ctrl+F5`.

## Cambios

- Logotipo original **blanco y negro** según tema. Se respetaron archivos originales y transparencias; solo se recortaron márgenes vacíos y se redimensionaron proporcionalmente para la cabecera.
- Favicon oficial de 512×512 px.
- Enlace `Trivia` en la navegación y tarjeta de acceso en la página de inicio.
- Banco de **43 preguntas** preparado a partir de las fuentes PDF. Cada partida selecciona 7 SimDron VR + 3 Mission Control, reordena las respuestas, ofrece explicación con referencia a la página del manual y puntúa de 0 a 100.
- Capítulos: herramientas **Guardar contenido como PDF** (diálogo de impresión del navegador → destino «Guardar como PDF») y **Guardar contenido como imagen PNG** (genera una imagen del texto y figuras del contenido central, sin capturar menús). Para capítulos excesivamente largos pide seleccionar una sección. La imagen es una composición exportable del contenido del capítulo, no una captura exacta de todos los estilos del navegador.
- Nuevo crédito en pie de página: **Mauro Iván Piccoli - Comunicación y Sistemas S.A.**
- Versión actual de aplicación: **SimDron v1.0.280**. **No se alteró el hecho de que el manual fuente es build 220+** ni la versión 1.22+ del manual Mission Control, porque aún deben revisarse las diferencias documentales.

## Importante

- Los PDF de Google Drive asociados a la documentación pueden necesitar permisos de acceso. Esta actualización no cambia su configuración.
- El contenido de los capítulos (textos, figuras del PDF, capturas existentes) se conserva; estas mejoras **no sustituyen la revisión editorial y visual** que tenemos pendiente.
- Si no aparecen estilos tras el push, comprobá que los archivos estén en la raíz correcta y recargá con `Ctrl+F5`.
