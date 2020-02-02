// Zadanie 5
document.addEventListener("DOMContentLoaded", function () {
    let box1 = document.querySelector("#box1");
    let box2 = document.querySelector("#box2");
    let box3 = document.querySelector("#box3");
    let boxes = [box1, box2, box3];
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function () {
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = randomColor;
        });
    }

});