(function loadModules() {
  const files = ['config.js', 'menu.js', 'faq.js', 'whatsapp.js', 'animations.js'];
  let loaded = 0;
  files.forEach(file => {
    const script = document.createElement('script');
    script.src = `assets/js/${file}`;
    script.onload = () => {
      loaded += 1;
      if (loaded === files.length) {
        const modules = window.SiteModules || {};
        Object.values(modules).forEach(init => { if (typeof init === 'function') init(); });
        const year = document.getElementById('current-year');
        if (year) year.textContent = new Date().getFullYear();
      }
    };
    document.head.appendChild(script);
  });
})();
