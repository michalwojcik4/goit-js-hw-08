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

function savedLocalStorage(){
    try{
        const savedData = JSON.parse(localStorage.getItem(keyDataForm));
        const emailForm = document.querySelector('.feedback-form input');
        const messageForm = document.querySelector('.feedback-form textarea');
    
        if(savedData){
            emailForm.value = savedData.email;
            messageForm.value = savedData.message;
        }

    }catch (error) {
        console.log(error.message);
    }
};

function submitForm(e){
    e.preventDefault();
    const {elements: {email, message}} = e.currentTarget;

    if(email.value === ''){
        return alert('Podaj email!');
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
};