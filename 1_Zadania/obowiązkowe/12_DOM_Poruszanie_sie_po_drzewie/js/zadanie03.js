// Zadanie 3
document.addEventListener("DOMContentLoaded", function () {
    const lists = document.querySelectorAll(".listContainer");
    for (let i = 0; i < lists.length; i++) {
        lists[i].addEventListener("mouseover", function () {
            let list = this.querySelector("ul.list");
            list.style.color = "green";
            list.lastElementChild.style.color = "blue";
            list.children[0].style.color = "red";
        });
        lists[i].addEventListener("mouseleave", function () {
            let list = this.querySelector("ul.list");
            list.style.color = "";
            list.lastElementChild.style.color = "";
            list.children[0].style.color = "";
        });
    }
});