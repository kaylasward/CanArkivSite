// Shared site interactions: color-theme preference and accessible mobile navigation.
(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

  function getStoredTheme() {
    try { return localStorage.getItem('canarkiv-theme'); } catch { return null; }
  }
  function storeTheme(theme) {
    try { localStorage.setItem('canarkiv-theme', theme); } catch { /* optional */ }
  }
  function getEffectiveTheme() { return root.dataset.theme || (systemDark.matches ? 'dark' : 'light'); }
  function syncThemeLabel() {
    if (themeButton) themeButton.setAttribute('aria-label', `Switch to ${getEffectiveTheme() === 'dark' ? 'light' : 'dark'} theme`);
  }

  const savedTheme = getStoredTheme();
  root.dataset.theme = savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : (systemDark.matches ? 'dark' : 'light');
  syncThemeLabel();
  themeButton?.addEventListener('click', () => {
    const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    storeTheme(next);
    syncThemeLabel();
  });
  systemDark.addEventListener?.('change', () => {
    if (!getStoredTheme()) root.dataset.theme = systemDark.matches ? 'dark' : 'light';
    syncThemeLabel();
  });

  const menu = document.querySelector('[data-site-menu]');
  const menuButton = document.querySelector('[data-menu-toggle]');
  function closeMenu() { menu?.removeAttribute('data-open'); menuButton?.setAttribute('aria-expanded', 'false'); }
  menuButton?.addEventListener('click', () => {
    const expanded = menu?.getAttribute('data-open') === 'true';
    if (expanded) closeMenu();
    else { menu?.setAttribute('data-open', 'true'); menuButton.setAttribute('aria-expanded', 'true'); }
  });
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (menu && menuButton && !menu.contains(event.target) && !menuButton.contains(event.target)) closeMenu(); });
})();
