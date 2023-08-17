import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const keyDataForm = "feedback-form-state";

savedLocalStorage();
form.addEventListener('input', throttle(dataForm), 500);
form.addEventListener('submit', submitForm);

function dataForm(e) {
    e.preventDefault();
    const {elements: {email, message}} = e.currentTarget;

    const user = {
        email: email.value,
        message: message.value
    }

    localStorage.setItem(keyDataForm, JSON.stringify(user));
};

function savedLocalStorage(e){
    try{
        const savedData = JSON.parse(localStorage.getItem(keyDataForm));
        const {elements: {email, message}} = form;
    
        if(savedData){
            email.value = savedData.email;
            message.value = savedData.message;
        }

    }catch (error) {
        console.log(error.message);
    }
};

function submitForm(e){
    e.preventDefault();
    const {elements: {email, message}} = e.currentTarget;

    if(email.value === ''){
        return alert('Podaj email!')
    }else if(message.value === ''){
        return alert('Uzupełnij pole message!')
    }

    try{
        const savedData = JSON.parse(localStorage.getItem(keyDataForm));
        console.log(savedData);
    }catch{
        console.log(error.message);
    }

    email.value = '';
    message.value = '';
    localStorage.removeItem(keyDataForm);
    alert('Formularz wysłamy z sukcesem :)');
};