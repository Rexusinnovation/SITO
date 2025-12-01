document.addEventListener('DOMContentLoaded', () => {
  // footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => {
    if (!nav) return;
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.background = 'rgba(5,6,12,0.95)';
      nav.style.padding = '12px';
      nav.style.position = 'absolute';
      nav.style.right = '24px';
      nav.style.top = '68px';
      nav.style.borderRadius = '8px';
    }
  });

  // contact form mock
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Richiesta inviata (demo). Integra il form con Formspree, Netlify o un endpoint backend).');
    form.reset();
  });
});
