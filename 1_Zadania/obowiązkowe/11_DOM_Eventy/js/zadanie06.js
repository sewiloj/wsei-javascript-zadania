window.addEventListener('DOMContentLoaded', (event) => {
    let box = document.querySelector("#box");
    let getGlobalX = document.querySelector("#globalX");
    let getGlobalY = document.querySelector("#globalY");
    let getLocalX = document.querySelector("#localX");
    let getLocalY = document.querySelector("#localY");

    box.addEventListener("mousemove" , function(e){
        let rect = box.getBoundingClientRect();
        getGlobalX.innerHTML = e.pageX;
        getGlobalY.innerHTML = e.pageY;
        getLocalX.innerHTML = e.pageX - rect.left;
        getLocalY.innerHTML = e.pageY - rect.top;
    })
    
});

