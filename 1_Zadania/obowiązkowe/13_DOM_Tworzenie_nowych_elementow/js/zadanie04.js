document.addEventListener("DOMContentLoaded", function () {
    let removeButton = document.querySelector("#remove");
    removeButton.addEventListener("click", deleteChilds);

    function deleteChilds() {
        let list = document.querySelector("ul.list");
        list.innerHTML = "";
    }
});