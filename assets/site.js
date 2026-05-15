// theme toggle with localStorage persistence + system-preference fallback
(function () {
  const root = document.documentElement;
  const KEY = 'sa-theme';

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀ light' : '☾ dark';
  }

  // initial theme: stored > system
  const stored = localStorage.getItem(KEY);
  const sysDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  apply(stored || (sysDark ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    apply(root.getAttribute('data-theme'));
    btn.addEventListener('click', function () {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      localStorage.setItem(KEY, next);
      apply(next);
    });
  });
})();
