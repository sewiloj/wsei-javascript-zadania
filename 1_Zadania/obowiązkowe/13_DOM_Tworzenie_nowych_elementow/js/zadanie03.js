document.addEventListener("DOMContentLoaded", function () {

    let removeButton = document.querySelector("#remove");
    removeButton.addEventListener("click", deleteButton);
    
    function deleteButton() {
        removeButton.parentNode.removeChild(removeButton);
    }
});