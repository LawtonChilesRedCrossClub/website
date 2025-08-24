// Keep ALL editable settings here (one place).
window.ConstitutionConfig = {
  pdfUrl: 'files/rcc-constitution-public.pdf', // <- keep this filename stable if you can
  viewerOptions: '#toolbar=0&navpanes=0',
  // Set to true to load the PDF only when the section is visible
  lazyLoad: true,
  // Add a version query using ETag/Last-Modified so updates bypass browser cache
  cacheBust: true,
  // Fill the "Last updated" and "size" fields when possible
  updateMeta: true,
};
