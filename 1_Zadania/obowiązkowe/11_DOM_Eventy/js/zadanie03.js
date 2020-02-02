//Zadanie 3
document.addEventListener("DOMContentLoaded", function () {
    let button1 = document.querySelector("#button1");
    let button2 = document.querySelector("#button2");
    let button3 = document.querySelector("#button3");
    let butons = [button1, button2, button3];
    for (let i = 0; i < butons.length; i++) {
        butons[i].addEventListener("click", function () {
            let getCounter = this.nextElementSibling.querySelector("span.counter");
            let getTextCounter = getCounter.textContent;
            getCounter.textContent = parseInt(getTextCounter) + 1;

        });
    }
});