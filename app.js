var uName = document.querySelector("#username");
var eMail = document.querySelector("#email");
var pass1 = document.querySelector("#password");
var pass2 = document.querySelector("#password2");

var submit = document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();

    checkRequired([uName, eMail, pass1, pass2]);
    checkLength(uName, 3, 15);
    checkLength(pass1, 6, 25);
    checkEmail(eMail);
    matchPassword(pass1, pass2);


})






function success(input) {
    var formControl = input.parentElement;
    formControl.className = "form-control success";
}

function error(input, message) {
    var formControl = input.parentElement;
    formControl.className = "form-control error";
    formControl.querySelector("small").innerHTML = message;
}

function checkRequired(inputArr) {

    inputArr.forEach(function (el) {

        if (el.value.trim() === '') {
            error(el, `${makecapital(el)} cannot be empty`)
        }
        else {
            success(el);
        }
    })
}

function makecapital(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {

    if (input.value.length < min) {
        error(input, `${makecapital(input)} should have atleast 3 characters`)
    }
    else if (input.value.length > max) {
        error(input, `${makecapital(input)} should not be more than 15 characters`)
    } else {
        success(input);
    }

}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        success(input)
    }
    else {
        error(input, 'e-Mail is not valid')
    }
}

function matchPassword(p1, p2) {
    if (p1.value === p2.value) {
        success(p2);
    } else {
        error(p2, 'Password does not match')
    }
}