window.SiteModules = window.SiteModules || {};
window.SiteModules.initWhatsapp = function () {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    const key = link.dataset.whatsapp;
    const message = cfg.whatsappMessages[key] || cfg.whatsappMessages.contato;
    link.href = `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(message)}`;
  });
};
