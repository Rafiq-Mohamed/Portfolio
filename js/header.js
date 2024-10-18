window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("fix",window.scrollY > 0);
});
function hoverMenu(){
    var menuToggle = document.querySelector(".hover");
    var menu = document.querySelector(".headermenu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}