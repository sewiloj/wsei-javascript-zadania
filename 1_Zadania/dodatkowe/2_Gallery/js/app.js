/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener('DOMContentLoaded', function(){
    console.log('Działa');

    let listContent = document.querySelectorAll('li');
    let body = document.querySelector('body');

    console.log(body);
    console.log(listContent);

    listContent.forEach(el => {
        el.addEventListener('click', function(){
            console.log('dziala');
            let src = this.firstChild.src;
            console.log(this.firstChild.src);
            fullScreenPicture(src);
        });
    });

    function fullScreenPicture(src)
    {
        console.log('fullScreen');
        const html = ` <div class="fullScreen">
        <img src="${src}">
        <button class="close">Close</button>
        </div>`;

      body.innerHTML += html;

      const closeButton = document.querySelector('.close');
      closeButton.addEventListener('click', function(){
        removeFullScreen();
      });
    }

    function removeFullScreen()
    {
        let removeHtml = document.querySelector('.fullScreen');
        body.removeChild(removeHtml);
    }


    // Problem jest to, że funkcja działa tylko raz

});
