// js/board.js
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('board-year');
  const grid   = document.querySelector('#board-members .board-grid');
  if (!yearEl || !grid || !boardConfig) return;

  // Render the year
  yearEl.textContent = `Our ${boardConfig.year} Board`;

  // Render the member cards
  boardConfig.members.forEach(m => {
    const card = document.createElement('div');
    card.className = 'board-card';
    card.innerHTML = `
      <img src="${m.img}" alt="${m.name}" />
      <h3>${m.name}</h3>
      <p class="role">${m.role}</p>
      <p class="bio">${m.bio}</p>
    `;
    grid.appendChild(card);
  });
});
