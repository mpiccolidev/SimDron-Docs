# SimDron Docs · Corrección MC v6 (30/10/2026)

Este paquete corrige ÚNICAMENTE los enlaces de 23 capítulos de Mission Control y desactiva las búsquedas de nombres inexistentes del parche v4. No cambia SimDron VR, el estilo, la navegación, los PDF ni las capturas originales.

## Qué cambió

- Cada figura que antes decía `../assets/figures/mc_fig_019.webp` ahora apunta a `../assets/figures/mission-control/mc_fig_019.webp`.
- **No** modifica las referencias a `../assets/pages/mc_019.webp`: deben continuar en `assets/pages/`.
- `assets/js/mc-image-loader.js` se desactiva, para que no dispare solicitudes 404 de PNG que no existan.
- Los archivos PNG de SimDron en `assets/figures/simdron/` quedan sin cambios.

## Condición imprescindible: extensión real

En el Explorador de Windows habilitá **Ver → Mostrar → Extensiones de nombre de archivo** y comprobá que, por ejemplo, el archivo sea `mc_fig_019.webp`. Las capturas ocultan las extensiones y los nombres coinciden con los WebP originales de v2. Si los tuyos fueran `.png`, este paquete de `.webp` NO resolverá sus rutas: no renombres ni conviertas archivos solo para disimularlo.

## Instalación

1. Comprobar que los archivos `mc_fig_*.webp`, `mc_topologia_p004.webp`, etc. estén directamente en `SimDron-Docs/assets/figures/mission-control/`.
2. Copiar **el contenido de este ZIP** en la raíz local `SimDron-Docs/` y reemplazar los 24 archivos incluidos.
3. En GitHub Desktop, comprobar que se incluyan los archivos modificados y la carpeta `assets/figures/mission-control/`; hacer **Commit to main** y **Push origin**.
4. Esperar el despliegue Pages y recargar con Ctrl+F5.
5. Prueba puntual: `https://mpiccolidev.github.io/SimDron-Docs/assets/figures/mission-control/mc_fig_019.webp` y la página `mission-control/contactos.html`.

**No aplicar el v5.** No mezclar los tres parches. No mover más carpetas.

Nota: estos archivos coinciden en nombre con los WebP de la base v2; no constituyen por sí mismos un nuevo conjunto de capturas PNG de Mission Control.
