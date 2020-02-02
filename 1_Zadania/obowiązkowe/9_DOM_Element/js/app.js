document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    //Zadanie 0
    function getDatasInfo(elements) {
        let newArray = [];
        for (let i = 0; i < elements.length; i++) {
            newArray.push(elements[i].dataset.color);
        }
        return newArray;
    }
    console.log(getDatasInfo(links));

    //Zadanie 1
    console.log(homeElement);
    console.log(childElements, "childELements");
    console.log(banner, "banner");
    console.log(blocks, "blocks");
    console.log(links, "links");

    [homeElement, childElements, banner, blocks, links].forEach(function (element) {
        if (element instanceof HTMLCollection || element instanceof NodeList) {
            for (let i = 0; i < element.length; i++) {
                console.log(element[i].tagName, " - tag name");
                console.log(element[i].className, " - class name");
            }
            console.log("----------------------");
        }
    })


    // Zadanie 2
    // InnerHTML to to co jest w środku elementu, a outerHTML co cały element wraz z jego tagami
    for (let i = 0; i < blocks.length; i++) {
        console.log('====== INNER HTML ======');
        console.log(blocks[i].innerHTML);
        console.log('====== OUTER HTML ======');
        console.log(blocks[i].outerHTML);
        console.log('====== Nowa wartość ======');
        blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";
        console.log('====== INNER HTML ======');
        console.log(blocks[i].innerHTML);
        console.log('====== OUTER HTML ======');
        console.log(blocks[i].outerHTML);
    }

    // Zadanie 3
    const mainFooter = document.querySelector("#mainFooter");
    function getId(element) {
        return element.id;
    }
    console.log(getId(mainFooter));

    // Zadanie 4
    function getTags(elements) {
        let array = [];
        for (let i = 0; i < elements.length; i++) {
            array.push(elements[i].tagName);
        }
        return array;
    }
    console.log(getTags(childElements));


    // Zadanie 5
    function getClassInfo(element) {
        const array = [];
        for (let i = 0; i < element.classList.length; i++) {
            array.push(element.classList[i]);
        }
        return array;
    }
    console.log(getClassInfo(banner));

    // Zadanie 6
    let allLis = document.querySelectorAll("nav li");
    console.log(allLis);
    setDataDirection(allLis);
    console.log(allLis);
    function setDataDirection(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (!elements[i].dataset.hasOwnProperty("direction")) {
                elements[i].dataset.direction = "top";
            }
        }
    }
});
