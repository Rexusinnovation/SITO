document.addEventListener('DOMContentLoaded', () => {
  // anno nel footer
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // menu toggle mobile
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => {
    if (!nav) return;
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'rgba(0,0,0,0.9)';
      nav.style.padding = '12px';
    }
  });

  // form demo (sostituire action con endpoint reale)
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Richiesta inviata (demo). Integra un endpoint o usa Formspree/Netlify Forms per ricevere email).');
    form.reset();
  });
});
