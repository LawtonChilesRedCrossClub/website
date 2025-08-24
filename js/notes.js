// js/notes.js
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#notes-next-steps .notes-list');
  if (!list || !Array.isArray(notesData)) return;

  // clear any placeholder
  list.innerHTML = '';

  notesData.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item.text;
    list.appendChild(li);
  });
});
