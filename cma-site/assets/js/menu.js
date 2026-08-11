window.SiteModules = window.SiteModules || {};
window.SiteModules.initMenu = function () {
  const button = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.main-nav');
  if (!button || !menu) return;
  const close = () => { button.setAttribute('aria-expanded', 'false'); menu.classList.remove('is-open'); document.body.classList.remove('menu-open'); };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open)); menu.classList.toggle('is-open', open); document.body.classList.toggle('menu-open', open);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
};
