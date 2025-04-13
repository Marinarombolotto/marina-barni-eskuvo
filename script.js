
function switchLang(lang) {
  document.querySelectorAll('[lang]').forEach(e =>
    e.style.display = e.lang === lang ? '' : 'none'
  );
}

window.addEventListener('DOMContentLoaded', () => {
  switchLang('it');
});
