// Regular Expression (Regex)

// It is a pattern of characters used to do pattern matching
// Or we can say for "Data Validation"

// Implementation of password validation

// Length At least = 8
// At least contain One Upper case letter
// At least contain One Lower case letter
// At least contain One digit 0 to 9

let form = document.querySelector('.sign-up-form')
let email = document.querySelector('#email')
let password = document.querySelector('#password')

let passwordPattern = "^(?=.*?[A-Z]) (?=.*?[a-z]) (?=.*?[0-9]).{8,16}$"

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let passwordValue = password.ariaValueMax;
    console.log(passwordValue);

    let result = passwordValue.match(passwordPattern)
    if (result == true) {
        console.log("Your password is strong");
    } else {
        console.log("Password is too weak");
    }
})