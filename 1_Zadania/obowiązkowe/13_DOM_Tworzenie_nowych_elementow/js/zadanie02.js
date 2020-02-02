document.addEventListener("DOMContentLoaded", function () {
    var orders = document.querySelector("#orders");
    var addButton = document.querySelector("#addBtn");
    addButton.addEventListener("click", addNewOrder);


    function addNewOrder() {
        let getOrderNr = document.getElementById("orderId").value;
        let getItem = document.getElementById("item").value;
        let getQuantity = document.getElementById("quantity").value
        if (Number(getOrderNr) && Number(getQuantity)) {
            let tr = document.createElement("tr");
            let createOrderTd = document.createElement("td");
            createOrderTd.innerHTML = getOrderNr;
            let createItemTd = document.createElement("td");
            createItemTd.innerHTML = getItem;
            let createQuantityTd = document.createElement("td");
            createQuantityTd.innerHTML = getQuantity;
            tr.appendChild(createOrderTd);
            tr.appendChild(createItemTd);
            tr.appendChild(createQuantityTd);
            orders.appendChild(tr);
        } else {
            alert("Wartości w polach 'Numer zamówienia' i 'Liczba przedmiotów' muszą być lczbami!");
        }
    }
});