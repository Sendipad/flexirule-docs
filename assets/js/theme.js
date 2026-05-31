(function() {
  const themeKey = 'flexirule-theme';
  const getStoredTheme = () => localStorage.getItem(themeKey);
  const setStoredTheme = (theme) => localStorage.setItem(themeKey, theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  window.setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    setStoredTheme(theme);
  };

  const currentTheme = getPreferredTheme();
  setTheme(currentTheme);

  // Listen for system changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
