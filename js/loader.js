document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden");
        setTimeout(() => {
            loader.remove();
        }, 500);
    }, 500);
});