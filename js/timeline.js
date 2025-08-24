// Vertical "month-card" timeline WITHOUT ISO parsing.
// Always shows a .time line: either a formatted range or "TBD".

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#activities-timeline .timeline');
  if (!container || !Array.isArray(timelineData)) return;

  // Convert "HH:MM" (24h) -> "H:MM A.M./P.M."
  const fmt12h = (hhmm) => {
    if (!hhmm) return '';
    const [hStr, mStr] = String(hhmm).split(':');
    const h = Number(hStr), m = Number(mStr);
    if (Number.isNaN(h) || Number.isNaN(m)) return '';
    const h12 = ((h + 11) % 12) + 1;
    const ampm = h < 12 ? 'A.M.' : 'P.M.';
    return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
  };

  const isTBD = v => !v || String(v).trim().toUpperCase() === 'TBD';

  // Build a time string from start/end; return "TBD" if neither is a valid time
  const fmtTimeRange = (p) => {
    const s = p?.startTime, e = p?.endTime;
    const sValid = s && !isTBD(s) && fmt12h(s);
    const eValid = e && !isTBD(e) && fmt12h(e);
    if (sValid && eValid) return `${fmt12h(s)} – ${fmt12h(e)}`;
    if (sValid) return fmt12h(s);
    if (eValid) return fmt12h(e);
    return 'TBD';
  };

  container.innerHTML = '';

  timelineData.forEach(yearBlock => {
    // Year header
    const yearHeader = document.createElement('div');
    yearHeader.className = 'timeline-year';
    yearHeader.textContent = yearBlock.year;
    container.appendChild(yearHeader);

    // Months (keep your original order)
    (yearBlock.months || []).forEach(({ month, projects = [] }) => {
      const card = document.createElement('div');
      card.className = 'month-card';

      // Header (month + count)
      card.innerHTML = `
        <div class="month-header">
          <span class="month-badge">${month}</span>
          <span class="count">${projects.length} ${projects.length === 1 ? 'activity' : 'activities'}</span>
        </div>
      `;

      // Events (always render a .time line)
      const eventsHTML = projects.map(p => {
        const timeStr = fmtTimeRange(p);
        const dateText = p?.date ? String(p.date) : 'TBD';
        return `
          <div class="event${isTBD(p?.date) ? ' tbd' : ''}">
            <span class="date">${dateText}</span>
            <span class="title">${p?.title ?? ''}</span>${p?.desc ? `<span class="desc">: ${p.desc}</span>` : ''}
            <span class="time">${timeStr}</span>
          </div>
        `;
      }).join('');

      card.insertAdjacentHTML('beforeend', eventsHTML);
      container.appendChild(card);
    });
  });
});
