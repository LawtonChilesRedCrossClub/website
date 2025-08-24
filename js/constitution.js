(function (cfg) {
  const section = document.getElementById('club-constitution');
  if (!section) return;

  const obj = section.querySelector('object');
  const links = section.querySelectorAll('a[href*=".pdf"]');
  const meta = section.querySelector('#constitution-meta');

  function withV(url, v) {
    if (!v) return url;
    const [base, hash = ''] = url.split('#');
    const sep = base.includes('?') ? '&' : '?';
    return `${base}${sep}v=${encodeURIComponent(v)}${hash ? '#' + hash : ''}`;
  }

  async function headInfo(url) {
    try {
      const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
      return res;
    } catch (_) {
      return null; // some hosts block HEAD—gracefully skip
    }
  }

  function setObjectAndLinks(version) {
    const viewer = cfg.viewerOptions || '';
    const objSrc = cfg.cacheBust ? withV(cfg.pdfUrl + viewer, version) : (cfg.pdfUrl + viewer);
    const linkHref = cfg.cacheBust ? withV(cfg.pdfUrl, version) : cfg.pdfUrl;

    if (obj) {
      if (cfg.lazyLoad && 'IntersectionObserver' in window) {
        obj.removeAttribute('data'); // pause loading
        const io = new IntersectionObserver((entries) => {
          if (entries.some(e => e.isIntersecting)) {
            obj.setAttribute('data', objSrc);
            io.disconnect();
          }
        });
        io.observe(obj);
      } else {
        obj.setAttribute('data', objSrc);
      }
    }
    links.forEach(a => a.href = linkHref);
  }

  function updateMeta(res) {
    if (!res || !meta || !cfg.updateMeta) return;
    const lastEl = meta.querySelector('[data-lastmod]');
    const sizeEl = meta.querySelector('[data-filesize]');

    const lastMod = res.headers.get('Last-Modified');
    if (lastMod && lastEl) {
      const d = new Date(lastMod);
      lastEl.textContent = new Intl.DateTimeFormat(undefined, {
        year: 'numeric', month: 'long', day: 'numeric'
      }).format(d);
    }

    const len = res.headers.get('Content-Length');
    if (len && sizeEl) {
      const bytes = Number(len), kb = 1024, mb = kb * 1024;
      sizeEl.textContent = bytes >= mb ? (bytes / mb).toFixed(1) + ' MB'
                        : bytes >= kb ? Math.ceil(bytes / kb) + ' KB'
                        : bytes + ' B';
    }
  }

  (async function init() {
    let version = null;
    let res = null;

    if (cfg.cacheBust) {
      res = await headInfo(cfg.pdfUrl);
      if (res) {
        const etag = res.headers.get('ETag');
        const lm = res.headers.get('Last-Modified');
        version = etag ? etag.replace(/"/g, '') : (lm ? new Date(lm).getTime() : null);
      } else {
        // Fallback: force-fresh every load (disable if you prefer caching)
        version = Date.now();
      }
    }

    setObjectAndLinks(version);
    updateMeta(res);
  })();
})(window.ConstitutionConfig || {});
