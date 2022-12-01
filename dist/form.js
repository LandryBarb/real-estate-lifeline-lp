// custom form validation for testing

function showMessage(input, message, type) {
    //get the small element and set the message
    const msg = input.parentNode.querySelector("small");
    msg.innerText = message;
    //update the class for the input
    input.className = type ? "success" : "error";
    return type;
}

function showError(input, message) {
    return showMessage(input, message, false);
}

function showSuccess(input) {
    return showMessage(input, "", true);
}
function hasValue(input, message) {
    if (input.value.trim()==="") {
        return showError(input, message);
    }
    return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
    //check if the value is not empty
    if (!hasValue(input, requiredMsg)) {
        return false;
    }
    //validate email format
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const email = input.value.trim();
    if (!emailRegex.test(email)) {
        return showError(input, invalidMsg);
    }
    return true;

    
}

const form = document.querySelector("#signup");
const NAME_REQUIRED = "Please enter your name";
const EMAIL_REQUIRED = " Please enter your email";
const EMAIL_INVALID = "Please enter a valid email address";

form.addEventListener("submit", function (event) {
    //stop from submissoion
    event.preventDefault();

    //validate the form

    let nameValid = hasValue(form.elements["name"], NAME_REQUIRED);
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
    //if valid, submit the form

    if (nameValid && emailValid) {
        alert('demo test. the form works');
    }
});