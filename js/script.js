//Disable Right Click
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
}, false);

//Disable Ctrl Keys
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.keyCode==123 || e.keyCode==19 || e.keyCode==115) {
        e.stopPropagation();
        e.preventDefault();
    }
});