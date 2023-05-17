import throttle from 'lodash.throttle'



const STORAGE_KEY = `feedback-form-state`;

const refs={
    form: document.querySelector(`.feedback-form`)
}

refs.form.addEventListener(`submit`, onFormSubmit);
refs.form.addEventListener(`input`,throttle(onFormInput, 500))

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const { email, message } = refs.form.elements;
fillTextarea()


function onFormInput(evt) {
    formData = { email: email.value, message: message.value };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log({ email: email.value, message: message.value })

    if (email.value === `` || message.value === ``) {
        return alert('Please fill in all fields')
    }
    formData = {};
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function fillTextarea(evt) {    
    if (formData) {
        email.value = formData.email || ``;
        message.value = formData.message || ``;
    }
}