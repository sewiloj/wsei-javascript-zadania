document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    //Zadanie 0
    function getDatasInfo(elements) {
        let newArraydata = [];
        for (let i = 0; i < elements.length; i++) {
            newArraydata.push(elements[i].dataset.color);
        }
        return newArraydata;
    };
    console.log(getDatasInfo(links));

    //Zadanie 1

    console.log(homeElement, "homeElement");
    console.log(childElements, "childELements");
    console.log(banner, "banner");
    console.log(blocks, "blocks");
    console.log(links, "links");

    [homeElement, childElements, banner, blocks, links].forEach(function (element, index) {
        if (element instanceof HTMLCollection || element instanceof NodeList) {
            for (let i = 0; i < element.length; i++) {
                console.log(element[i].tagName, " - tag name");
                console.log(element[i].className, " - class name");
            }
            console.log("----------------------");
            console.log("Koniec" + index + "iteracji");
            console.log("----------------------");
        }
    });


    // Zadanie 2
    for (let i = 0; i < blocks.length; i++) {
        let innerContent = blocks[i].innerHTML;
        let outerContent = blocks[i].outerHTML;
        console.log(innerContent, 'innerHTML');
        console.log(outerContent, 'outerHTML');
        console.log('==Nowa wartość==');
        innerContent = "Nowa wartość diva o klasie blocks";
        console.log(innerContent, 'innerHTML');
        console.log(outerContent, 'outerHTML');
    }

    // Zadanie 3
    const mainFooter = document.getElementById("mainFooter");
    console.log(getId(mainFooter));
    function getId(element) {
        return element.id;
    };

    // Zadanie 4
    console.log(getTags(childElements));
    function getTags(elements) {
        let tagsArray = [];
        for (let i = 0; i < elements.length; i++) {
            tagsArray.push(elements[i].tagName);
        }
        return tagsArray;
    };


    // Zadanie 5
    console.log(getClassInfo(banner));
    function getClassInfo(element) {
        const classArray = [];
        for (let i = 0; i < element.classList.length; i++) {
            classArray.push(element.classList[i]);
        }
        return classArray;
    }

    // Zadanie 6
    var liElements = document.querySelectorAll("nav li");
    setDataDirection(liElements);
    function setDataDirection(elements) {
        for (let i = 0; i < elements.length; i++) {
            if (!elements[i].dataset.hasOwnProperty("direction")) {
                elements[i].dataset.direction = "top";
            }
        }
    }
});
