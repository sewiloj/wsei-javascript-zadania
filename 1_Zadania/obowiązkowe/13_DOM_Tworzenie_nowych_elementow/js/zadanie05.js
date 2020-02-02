document.addEventListener("DOMContentLoaded", function () {
    var moveButtons = document.querySelectorAll(".moveBtn");
    for (let i = 0; i < moveButtons.length; i++) {
        moveButtons[i].addEventListener("click", changeList);
    }

    function changeList() {
        let list1 = document.querySelector("#list1");
        let list2 = document.querySelector("#list2");
        if (this.parentElement.parentElement.id != "list1") {
            list1.appendChild(this.parentElement);
        } else {
            list2.appendChild(this.parentElement);
        }

    }
});