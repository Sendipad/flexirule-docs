(() => {
  const key = 'flexirule-theme';
  const stored = () => localStorage.getItem(key);
  const preferred = () => stored() || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  window.setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(key, theme);
  };
  document.documentElement.setAttribute('data-theme', preferred());
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!stored()) document.documentElement.setAttribute('data-theme', event.matches ? 'dark' : 'light');
  });
})();
