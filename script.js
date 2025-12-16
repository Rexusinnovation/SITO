// reveal on scroll robusto e leggero
document.addEventListener('DOMContentLoaded', () => {

    const revealItems = document.querySelectorAll('.reveal, .reveal-child, .slide-up, .fade-in');

    const handleReveal = () => {
        const triggerBottom = window.innerHeight - (window.innerHeight * 0.12);

        revealItems.forEach((el, i) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                if (el.classList.contains('reveal-child') && !el.classList.contains('has-js-delay')) {
                    el.style.transitionDelay = `${0.12 * (i % 6)}s`;
                    el.classList.add('has-js-delay');
                }
                el.classList.add('visible');
            }
        });
    };

    handleReveal();                      // ← QUESTA
    window.addEventListener('scroll', handleReveal); // ← E QUESTA
});
