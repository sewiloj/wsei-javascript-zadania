document.addEventListener("DOMContentLoaded", function () {

    // zadanie 0
    let element = document.getElementsByClassName('title');
    function getDataAnimation(element)
    {
        let newElement = element[0].dataset.animation;
        return newElement;
    }
    console.log(getDataAnimation(element));

    //zadanie 1
    let home = document.getElementById('home');
    let homeTwo = document.querySelector('#home');
    let firstLi = document.querySelector('li[data-direction]');
    let firstBlock = document.querySelector('.block');

    console.log(home);
    console.log(homeTwo);
    console.log(firstLi);
    console.log(firstBlock);
    

    // Zadanie 2
    let navLiElements = document.querySelectorAll('nav li');
    console.log(navLiElements);
    console.log(navLiElements.length);
    let allPDiv = document.querySelectorAll('div p');
    console.log(allPDiv);
    console.log(allPDiv.length);
    let allDivArticle = document.querySelectorAll('article div');
    console.log(allDivArticle);
    console.log(allDivArticle.length);

    // Zadanie 3 
    let firstArticle = document.querySelectorAll("article.first");
    console.log(firstArticle);
    console.log(firstArticle.length);
    let h1Elements = firstArticle[0].querySelectorAll('h1');
    console.log(h1Elements);
    console.log(h1Elements.length);
});
