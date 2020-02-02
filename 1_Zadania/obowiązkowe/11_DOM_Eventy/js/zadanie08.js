// Zadanie 8
window.addEventListener("DOMContentLoaded", event => {
    const windowWidth = document.querySelector("#windowWidth");
    const windowHeight = document.querySelector("#windowHeight");

    windowWidth.innerText = window.innerWidth;
    windowHeight.innerText = window.innerHeight;

    window.addEventListener("resize", () => {
        windowWidth.innerText = window.innerWidth;
        windowHeight.innerText = window.innerHeight;
    });
});