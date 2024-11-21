
const myForm = document.forms[0];
const formElements = myForm.elements;

const userName = document.getElementById('username');
const usernameError = document.getElementById('usernameError');
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');
const age = document.getElementById('age');
const ageError = document.getElementById('ageError');
let checkbox1 = document.getElementById('maleOption');
let checkbox2 = document.getElementById('femaleOption');
const genderError = document.getElementById('genderError');
const job = document.getElementById('select');
const jobError = document.getElementById('jobError');
const password = document.getElementById('password');
const passwordError = document.getElementById('passwordError');
const agreeTerms = document.getElementById('agreeTerms');
const termsError = document.getElementById('termsError');
const button = document.getElementById('submitButton');

const nameRegex = /^[a-zA-Zа-яёА-ЯЁ ]/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

button.setAttribute('disabled', true);

let gender
const inputFields = document.querySelectorAll('.input-field');
inputFields.forEach(function (input) {
    input.addEventListener('focus', function () {
        input.style.border = '2px solid black'; //Изменение границы при фокусе
    });
    input.addEventListener('blur', function () {
        input.style.border = ''; //Восстановление стандартной границы после потери фокуса
    });
});


myForm.addEventListener('change', function formValidation() {

    let hasEmptyFields = false;

    let userNameValue = userName.value;
    //проверка имени: 
    if (userNameValue.trim() !== '' && nameRegex.test(userNameValue)) {
        usernameError.textContent = '';
    }
    else {
        usernameError.textContent = 'Пожалуйста, введите ваше Имя.';
        hasEmptyFields = true;
    };

    let emailValue = email.value;
    //проверка имейл:
    if (emailRegex.test(emailValue) && (emailValue.trim() != '')) {
        emailError.textContent = '';
    } else {
        emailError.textContent = 'Пожалуйста, введите корректный Email.';
        hasEmptyFields = true;
    };

    //проверка чекбоксов:
    if (checkbox1.checked == true || checkbox2.checked == true) {
        genderError.textContent = '';
        if (checkbox1.checked == true) {gender = "мужской"} else {gender = "женский" }
    } else {
        genderError.textContent = 'Пожалуйста, укажите пол.';
        hasEmptyFields = true;
    };

    //проверка возраста
    if (age.value.trim() != '' && age.value > 0) {
        ageError.textContent = '';
    }
    else {
        ageError.textContent = "Введите ваш возраст";
        hasEmptyFields = true;
    };

    //проверка селекта:
    if (job.selectedIndex > 0 && job.selectedIndex <= 7) {
        jobError.textContent = '';
    }
    else {
        jobError.textContent = 'Выберете профессию из списка';
        hasEmptyFields = true;
    };

    //проверка пароля password
    if (passRegex.test(password.value)) {
        passwordError.textContent = '';
    }
    else {
        passwordError.textContent = 'Пароль должен сожержать не менее 8 символов, как минимум одну заглавную букву, одну строчную букву и одну цифру.';
        hasEmptyFields = true;
    };

    //проверка согласия
    if (!agreeTerms.checked) {
        termsError.textContent = "Подтвердите согласие";
        hasEmptyFields = true;
    }
    else {
        termsError.textContent = '';
    }
    //активация кнопки
    if (hasEmptyFields == true) {
        button.setAttribute('disabled', true)
    } else {
        button.removeAttribute('disabled')
    }
});


document.myForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log(`Имя: ${userName.value},
        почта: ${email.value}, 
        возраст: ${age.value}, 
        пол: ${gender}, 
        возраст: ${age.value}, 
        профессия: ${job.selectedIndex.value}`)
    myForm.reset()
    button.setAttribute('disabled', true);
    }
);