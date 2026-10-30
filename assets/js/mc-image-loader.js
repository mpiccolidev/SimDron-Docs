/* SimDron Docs · Mission Control image resolver
 * Prioriza PNG existentes, sin renombrar ni reemplazar recursos originales.
 * No altera el contenido del manual ni las imágenes de SimDron VR.
 * Mantiene .webp si no existe ningún PNG para esa página.
 */
(() => {
  'use strict';
  const doc = document.documentElement;
  if (doc.dataset.group !== 'mission-control') return;

  // Todos los archivos se resuelven desde la raíz de SimDron-Docs.
  const root = new URL(doc.dataset.root || '../', document.baseURI);
  const absolute = (path) => new URL(path, root).href;
  const exists = (url) => new Promise((resolve) => {
    const probe = new Image();
    probe.onload = () => resolve(true);
    probe.onerror = () => resolve(false);
    probe.src = url;
  });

  // Evitar comprobar dos veces la misma ruta en una sola página.
  const probes = new Map();
  function available(url) {
    if (!probes.has(url)) probes.set(url, exists(url));
    return probes.get(url);
  }

  function pngCandidates(img) {
    const section = img.closest('.page-section[id^="p"]');
    if (!section) return [];
    const page = Number(section.id.slice(1));
    if (!Number.isInteger(page) || page < 1 || page > 999) return [];
    const n = String(page).padStart(3, '0');
    const original = new URL(img.getAttribute('src'), document.baseURI);
    const out = [];
    const add = (url) => { if (!out.includes(url)) out.push(url); };

    // A) Figura PNG del mismo nombre que el recurso WebP anterior.
    //    Ej.: mc_fig_019.webp -> mc_fig_019.png.
    if (/\.webp$/i.test(original.pathname)) {
      add(original.href.replace(/\.webp(?=$|[?#])/i, '.png'));
    }
    // B) Página PNG original, con ambas capitalizaciones posibles.
    //    Ej.: assets/pages/mc_019.png (sin distinguir por Windows).
    for (const base of [
      `assets/pages/mc_${n}.png`,
      `assets/pages/MC_${n}.png`,
      `assets/figures/mc_${n}.png`,
      `assets/figures/MC_${n}.png`,
      `assets/figures/mission-control/mc_${n}.png`,
      `assets/figures/mission-control/MC_${n}.png`
    ]) add(absolute(base));
    return out;
  }

  async function upgrade(img) {
    const original = img.getAttribute('src');
    if (!original) return;
    for (const url of pngCandidates(img)) {
      // Sólo cambiar cuando el PNG realmente existe y el navegador puede abrirlo.
      if (await available(url)) {
        const link = img.closest('a.figure-ext');
        img.src = url;
        if (link) link.href = url;
        img.dataset.mcImageSource = 'png';
        return;
      }
    }
    // El WebP se conserva como recurso de respaldo, sin cambiar el HTML.
    img.dataset.mcImageSource = 'webp-original';
  }

  document.querySelectorAll('.page-section figure.imagepanel img[src]').forEach((img) => {
    upgrade(img).catch(() => { img.dataset.mcImageSource = 'webp-original'; });
  });
})();
