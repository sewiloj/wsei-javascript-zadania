document.addEventListener("DOMContentLoaded", function () {
    let element = document.getElementsByClassName('title');
    function getDataAnimation(element)
    {
        let newElement = element[0].dataset.animation;
        return newElement;
    }

    console.log(getDataAnimation(element));

    let home = document.getElementById('home');
    let homeTwo = document.querySelector('#home');
    let firstLi = document.querySelector('li[data-direction]');
    let firstBlock = document.querySelector('.block');

    console.log(home);
    console.log(homeTwo);
    console.log(firstLi);
    console.log(firstBlock);
    
    let allLi = document.querySelector('nav').querySelectorAll('li');
    
    console.log(allLi);

    // zad2
    const nav = document.getElementsByTagName('nav')[0];
    const li = nav.getElementsByTagName('li');
    console.log(li);

    //zad3 
    const article = document.querySelector('article.first');
    console.log("article > h2", article.getElementsByTagName('h2').length);

});
