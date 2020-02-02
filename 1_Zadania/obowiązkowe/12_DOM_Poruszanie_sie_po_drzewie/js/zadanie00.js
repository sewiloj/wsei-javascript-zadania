// Zadanie 0
document.addEventListener("DOMContentLoaded", function () {
    let firstElement = document.querySelector(".first :nth-child(1)").children[2];

    console.log(firstElement);

    let secondElement = document.getElementById("second").parentElement.children[3];

    console.log(secondElement);

    const thirdElement = document.querySelector("[data-ex=third]").parentElement.parentElement.lastElementChild.children[0];

    const thirdElementMiddle = thirdElement.children[Math.floor(thirdElement.childElementCount / 2)];

    console.log(thirdElementMiddle);

    const forthElement = document.querySelector("div.forth").parentElement.querySelectorAll("article:first-of-type p")[1];

    console.log(forthElement);

});