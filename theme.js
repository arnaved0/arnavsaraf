// Light mode is selected each time the page opens.
(function () {
  const buttons = [...document.querySelectorAll('[data-theme-choice]')];
  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme));
    });
  }
  buttons.forEach(button => {
    button.addEventListener('click', () => setTheme(button.dataset.themeChoice));
  });
  setTheme('light');
})();
