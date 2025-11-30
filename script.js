document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  const toggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");

  toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    nav.style.flexDirection = "column";
    nav.style.background = "#000";
    nav.style.padding = "20px";
  });
});
