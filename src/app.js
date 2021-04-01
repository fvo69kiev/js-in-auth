import {isValid} from './utils';
import './styles.css';

const form = document.getElementById('form'),
      input = form.querySelector('#question-input'),
      submitBtn = form.querySelector('#submit');



form.addEventListener('submit', submitFormHandler);
input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value)
});

function submitFormHandler(event) {
    event.preventDefault()

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        };

        console.log(question);
        // Async request to server to save question

    }
}