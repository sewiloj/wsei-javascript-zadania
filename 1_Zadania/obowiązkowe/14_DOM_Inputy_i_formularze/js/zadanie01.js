document.addEventListener("DOMContentLoaded", function () {
    let invoiceCheckbox = document.querySelector("#invoice");
    invoiceCheckbox.addEventListener("click", showInvoiceFields);
    showInvoiceFields();
    function showInvoiceFields() {
    var invoiceFields = document.querySelector("#invoiceData");
        if (invoiceCheckbox.checked == true) {
            invoiceFields.style.display = "block";
        } else {
            invoiceFields.style.display = "none";
        }
    }
});