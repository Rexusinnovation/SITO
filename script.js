document.addEventListener('DOMContentLoaded', () => {
  // anno footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  toggle?.addEventListener('click', () => {
    if (!nav) return;
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '10px';
  });

  // contact form — demo (sostituire action con endpoint reale)
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Messaggio inviato (demo). Sostituisci l\'action del form con il tuo endpoint o integrazione.');
    form.reset();
  });
});
