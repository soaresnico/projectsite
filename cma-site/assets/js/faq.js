window.SiteModules = window.SiteModules || {};
window.SiteModules.initFaq = function () {
  document.querySelectorAll('.accordion-item button').forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const panel = button.closest('.accordion-item').querySelector('.accordion-panel');
      button.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });
};
