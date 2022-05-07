import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector(".feedback-form"),
}

const STORAGE_KEY = "feedback-form-state";
const feedback = {};

populeteForm();

refs.form.addEventListener('submit', onFormSabmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

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
    const savedFeedback = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedFeedback) { 
        refs.form.elements.message.value = savedFeedback.message;
        refs.form.elements.email.value = savedFeedback.email;
    }
}
