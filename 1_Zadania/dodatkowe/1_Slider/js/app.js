document.addEventListener('DOMContentLoaded', function() {
console.log("działa");
let prevButton = document.querySelector('#prevPicture');
let nextButton = document.querySelector('#nextPicture');
let listContent = document.querySelectorAll('li');
let index = 0;
console.log(prevButton);
console.log(nextButton);
console.log(listContent);

listContent[index].classList.add('visible');


nextButton.addEventListener('click', function(){
    console.log('click next button');

    listContent[index].classList.remove('visible');
    if(index == listContent.length - 1)
        index = 0;
    else
        index++;
    listContent[index].classList.add('visible');
});
prevButton.addEventListener('click', function(){
    console.log('click prev button');

    listContent[index].classList.remove('visible');
    if(index == 0)
        index = listContent.length - 1;
    else
        index--;
    listContent[index].classList.add('visible');
});

//Występuje problem ponieważ możemy wejść na liczbe ujemna lub na index zdjęcia którego nie ma

});