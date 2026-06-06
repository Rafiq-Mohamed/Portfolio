const toggle = document.getElementById("menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-list a");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        nav.classList.remove("active");
        toggle.classList.remove("active");
    });
});