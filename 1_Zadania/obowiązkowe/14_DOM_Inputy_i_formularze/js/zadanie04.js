document.addEventListener("DOMContentLoaded", function () {
    const type = document.querySelector("#type");
    const input = document.querySelector("#name");

    input.addEventListener("input", function () {
        const cardName = getCardName(event.target.value);
        validate(event.target.value, cardName);
        type.innerText = cardName;
    });

    function getCardName(value) {
        if (value[0] == 4) {
            return "Visa";
        }
        else if (value[0] == 5) {
            return "Mastercard";
        }
        else if (value[0] == 3 && (value[1] == 4 || value[1] == 7)) {
            return "American Express";
        } else {
            input.style = "border: 1px solid red";
            return "";
        }
    };

    function validate(number, cardName) {

        if (isCardValid(number, cardName)) {
            input.style.border = "1px solid green";
        }
        else if (number.length == 0) {
            input.style.border = "1px solid #ccc";
        }
        else {
            input.style.border = "1px solid red";
        }
    };

    let isVisa = number => number.length >= 13 && number.length <= 16;
    let isMastercard = number => number.length === 16;
    let isAmericanExpress = number => number.length === 15;

    function isCardValid(number, cardName) {
        if (
            (cardName === 'Visa' && isVisa(number)) ||
            (cardName === 'Mastercard' && isMastercard(number)) ||
            (cardName === 'American Express' && isAmericanExpress(number))
        ) {
            return true;
        } else {
            return false;
        }
    };




});