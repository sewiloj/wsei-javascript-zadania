// Zadanie 0
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.querySelectorAll(".deleteBtn");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", removeElement);
    }

    function removeElement() {
        let element = this.parentElement.parentElement;
        element.parentElement.removeChild(element);
    }
});