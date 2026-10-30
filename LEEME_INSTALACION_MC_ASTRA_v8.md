# SimDron Docs · Mission Control — integración de recortes Astra (v8)

**Base del parche:** versión 4 + correcciones de rutas v6 previamente preparadas. Solo afecta archivos bajo `mission-control/` y agrega `assets/css/mc-figures.css`. No toca `simdron/`, trivia, catálogo, navegación, CSS general ni los originales WebP.

## Antes de copiar

1. **Hacé un backup del repo** o un commit de seguridad desde GitHub Desktop.
2. Abrí `C:\Users\mpiccoli\Documents\ChatGPT\Arte2D\output\MissionControl_recortes\PNG`. Allí Astra generó **178 PNG**.
3. Copiá los 178 PNG directamente a `SimDron-Docs/assets/figures/mission-control/`. No agregues una subcarpeta `PNG`; no renombres archivos ni reemplaces los `mc_fig_*.webp` antiguos.
4. Descomprimí este ZIP y copiá **su contenido**, no la carpeta contenedora, en `SimDron-Docs/`. Aceptá reemplazar los HTML correspondientes.
5. En GitHub Desktop > Changes, verificá que aparezcan los PNG, los capítulos `mission-control/*.html` y `assets/css/mc-figures.css`. Si no aparecen, **no hagas el Push**: revisá la ruta de copia.
6. Commit summary: `Integrate 178 Astra Mission Control figures`
7. `Commit to main` > `Push origin`. Revisá el despliegue de GitHub Pages y actualizá con Ctrl+F5.

## Validación rápida

En el Explorador activá *Ver > Mostrar > Extensiones de nombre de archivo*. Debe existir:

`SimDron-Docs/assets/figures/mission-control/MC_P002_F01_Insignia_Condor_Cave.png`

Esa misma imagen, publicada, debería abrir en:

`https://mpiccolidev.github.io/SimDron-Docs/assets/figures/mission-control/MC_P002_F01_Insignia_Condor_Cave.png`

El capítulo debe mostrarla en:

`https://mpiccolidev.github.io/SimDron-Docs/mission-control/introduccion.html#p2`

También verificar `mission-control/fx.html#p37` (24 imágenes) y `mission-control/c2.html#p56` (2 imágenes).

## Alcance, garantías y pendientes

- 178 rutas exactas tomadas del CSV de Astra, sin nombres adivinados, y 57 secciones; 32 HTML de Mission Control incluidos.
- Se elimina el `<script ...mc-image-loader.js>` de esos capítulos: el script v4 disparaba solicitudes no existentes. El archivo JS que quedó en el repositorio puede conservarse, ya no se referencia.
- Los `<figure>` antiguos se sustituyen **solo en las 57 páginas con recortes nuevos**. Se conservan párrafos, tablas, referencias y enlaces al PDF.
- En la página 59 no hay recorte nuevo: se conserva el emblema existente y se referencia en `assets/figures/mission-control/mc_fig_059.webp` como mostraban las capturas del Explorador.
- Los grupos se ubican junto al título de su página, antes de las explicaciones: es una integración segura por sección, **no un trabajo editorial para enlazar cada recorte con un párrafo individual**. Esto último puede revisarse posteriormente.
- El paquete contiene HTML + CSS, no los PNG pesados. El código todavía no está publicado por nosotros.
- Se tomó como base **v6**, no una clonación verificada del último commit publicado. Si editaste HTML de Mission Control después de esa versión, compará los cambios antes de reemplazar.

Se incluye `VALIDACION_MC_ASTRA_v8.json` con los conteos.
