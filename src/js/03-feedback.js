import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
}

const STORAGE_KEY = "feedback-form-state";
let feedback = {};

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
populeteForm();


function onFormInput(event) { 
    feedback[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(feedback));
}

function onFormSabmit(event) { 
    event.preventDefault();
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
        console.log(feedback);
}

function populeteForm() {
    let savedJson = localStorage.getItem(STORAGE_KEY);

    if (savedJson) {
        let savedMessage = JSON.parse(savedJson);
        if (savedMessage.email) {
            refs.form.email.value = savedMessage.email;
        }
        if (savedMessage.message) {
            refs.form.message.value = savedMessage.message;
        }
        feedback = savedMessage;
    }
}