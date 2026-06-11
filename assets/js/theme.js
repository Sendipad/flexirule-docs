(() => {
  const key = 'flexirule-theme';
  const stored = () => localStorage.getItem(key);
  const preferred = () => stored() || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  window.setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(key, theme);
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
  };

  const initialTheme = preferred();
  document.documentElement.setAttribute('data-theme', initialTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!stored()) {
      const newTheme = event.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));
    }
  });
})();
