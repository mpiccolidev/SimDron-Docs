# Integración de los recortes Astra v2 a SimDron Docs

**Origen:** Entrega del 29/10/2026, 426 PNG originales de SimDron VR.
**Alcance:** únicamente las secciones de SimDron VR; no modifica `mission-control/`, `index.html`, `trivia.html`, ni la web comercial.

## Antes de publicar

1. Confirmá que tu copia local de **SimDron-Docs** tenga aplicada la actualización v3 (logo, trivia, exportación).
2. **Hacé una copia de seguridad o creá una rama de prueba** en GitHub Desktop. No borres nada del sitio existente.
3. En tu carpeta local `SimDron-Docs`, creá `assets/figures/simdron/` y copiá allí **los 426 PNG tal cual**, desde `C:\Users\mpiccoli\Documents\ChatGPT\Arte2D\output\SimDron_recortes_v2\PNG`. Verificá que no haya una carpeta anidada `PNG` (la ruta final debe terminar en `.../simdron/SD_P003_F01_Dron_Carga.png`).
4. Copiá el contenido de este paquete sobre tu repositorio `SimDron-Docs`, aceptando sobrescribir **sólo** las páginas HTML de `simdron/` y `assets/css/style.css` incluidas. No copies el directorio exterior como subcarpeta.
5. Probá localmente varias páginas (Meta Quest, controles, escenarios, OSD, configuración) y comprobá que todas las imágenes abran correctamente; después Commit → Push origin.

## Cómo se muestra

- Se incorporan los recortes nuevos junto al texto correspondiente a la página de origen.
- Los diagramas anchos aparecen a ancho completo; figuras pequeñas pueden verse en dos columnas.
- El recorte antiguo de cada página queda dentro de un desplegable **«Ver recorte anterior de la página (referencia)»** para cotejar información sin perderla durante la revisión editorial. Está oculto por defecto y no aparece en impresión.
- No se cambia el texto ni se eliminan tablas o contenidos originales; queda pendiente la corrección editorial de la extracción OCR/texto.
- Se conservan los títulos, índice, buscador, panel lateral, modo claro/oscuro y exportaciones ya implementadas.

## Comprobación

El archivo `REPORTE_INTEGRACION.json` documenta la cantidad de figuras insertadas y la ausencia de rutas HTML faltantes. Los 426 archivos PNG **no están incluidos en este ZIP** porque ya están en tu PC y en Google Drive. Si no los copiás al repositorio, las imágenes no se cargarán.

No se modificó el repositorio remoto desde este paquete.
