document.addEventListener("DOMContentLoaded", function () {

    let getForm = document.forms[0];
    getForm.addEventListener("submit", validateForm);

    function validateForm() {
        let email = document.querySelector("#email").value;
        let name = document.querySelector("#name").value;
        let surname = document.querySelector("#surname").value;
        let password = document.querySelector("#pass1").value;
        let passwordRepeat = document.querySelector("#pass2").value;
        let errorMessage = document.querySelector(".error-message");
        if (email.indexOf('@') != -1) {
            if (name.length > 6) {
                if (surname.length > 6) {
                    if ((password != "" || passwordRepeat != "") && (password == passwordRepeat)) {
                        if (document.querySelector("#agree").checked == true) {
                            return true;
                        } else {
                            errorMessage.innerHTML = "Musisz zaakceptować warunki";
                            event.preventDefault();
                        }
                    } else {
                        errorMessage.innerHTML = "Hasła nie są takie same lub puste";
                        event.preventDefault();
                    }
                } else {
                    errorMessage.innerHTML = "Twoje nazwisko jest za krótkie";
                    event.preventDefault();
                }
            } else {
                errorMessage.innerHTML = "Twoje imię jest za krótkie";
                event.preventDefault();
            }
        } else {
            errorMessage.innerHTML = "Email musi posiadać znak @";
            event.preventDefault();
        }
    }
});