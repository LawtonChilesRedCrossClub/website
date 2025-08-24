// js/activities.js
document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('activities-description');
  if (!listEl || !activitiesConfig || !Array.isArray(activitiesConfig.blurbs)) return;

  // clear any old content
  listEl.innerHTML = '';

  // insert each blurb as a list item
  activitiesConfig.blurbs.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    listEl.appendChild(li);
  });
});
