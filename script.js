// reveal on scroll robusto e leggero
document.addEventListener('DOMContentLoaded', () => {

    // selezioniamo tutti gli elementi che vogliamo revealare
    const revealItems = document.querySelectorAll('.reveal, .reveal-child, .slide-up, .fade-in');

    // funzione che aggiunge la classe .visible quando l'elemento entra nel viewport
    const handleReveal = () => {
        const triggerBottom = window.innerHeight - (window.innerHeight * 0.12); // trigger poco sopra il fondo

        revealItems.forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                // applichiamo un delay progressivo per .reveal-child se non già presente
                if (el.classList.contains('reveal-child') && !el.classList.contains('has-js-delay')) {
                    el.style.transitionDelay = `${0.12 * (i % 6)}s`;
                    el.classList.add('has-js-delay');
                }
                el.classList.add('visible');
            }
        });
    };

    // chiamata iniziale e bind scroll + resize
    handleReveal();
    window.addEventListener('scroll', handleReveal, { passive: true });
    window.addEventListener('resize', handleReveal);
});
