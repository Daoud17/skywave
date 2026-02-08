const form = document.querySelector(".contact-form");
const successMsg = document.getElementById("formSuccess");

form.addEventListener("submit", function (e) {
    e.preventDefault();   // stop page reload

    // check browser validation
    if (form.checkValidity()) {
        successMsg.style.display = "block";   // show success message
        form.reset();                         // clear fields
    }
});
