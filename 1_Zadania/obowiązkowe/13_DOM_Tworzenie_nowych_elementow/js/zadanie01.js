document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('click', function(){
        let menu = document.querySelector('.menu');
        let allLi = document.querySelectorAll('.menu li');
        let li = document.createElement('li');
        li.appendChild(document.createTextNode("Element " + (allLi.length +1)  + " - w chwili dodania było " + allLi.length + " elementów"));
        menu.appendChild(li);
    });
});