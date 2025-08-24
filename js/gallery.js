// js/gallery.js
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#collage .collage');
  if (!container) return;

  galleryImages.forEach(({ src, alt }) => {
    const img = document.createElement('img');
    img.src     = src;
    img.alt     = alt;
    img.loading = 'lazy';          // optional: lazy‐load offscreen images
    container.appendChild(img);
  });
});
