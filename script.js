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
// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// FLIP CARD LISTINO SOLO SU MOBILE
if (window.innerWidth <= 768) {
    document.querySelectorAll('.listino-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });
    });
}
