
function switchLang(lang) {
  document.querySelectorAll('[lang]').forEach(el => {
    el.style.display = (el.lang === lang || !el.lang) ? '' : 'none';
  });
}
