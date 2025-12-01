document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(".slide-up, .fade-in");

    const revealOnScroll = () => {
        for (let el of revealElements) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("visible");
            }
        }
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
});
