import {Question} from './question';
import {createModal, isValid} from './utils';
import {authWithEmailAndPassword, getAuthForm} from './auth';
import './styles.css';

const form = document.getElementById('form'),
      modalBtn = document.getElementById('modal-btn'),
      input = form.querySelector('#question-input'),
      submitBtn = form.querySelector('#submit');


window.addEventListener('load', Question.renderList);
form.addEventListener('submit', submitFormHandler);
modalBtn.addEventListener('click', openModal);
input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value)
});

// Backend---------------------------
function submitFormHandler(event) {
    event.preventDefault()

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        };

        submitBtn.disabled = true;
        // Async request to server to save question
        Question.create(question).then(() => {
            input.value = '';
            input.className = '';
            submitBtn.disabled = false;
        });
    }
}

// Auth-------------------------
function openModal() {
    createModal('Authentication', getAuthForm())
    document
        .getElementById('auth-form')
        .addEventListener('submit', authFormHandler, {once: true})
}

function authFormHandler(event) {
    event.preventDefault()

    const btn = event.target.querySelector('button'),
        email = event.target.querySelector('#email').value,
        password = event.target.querySelector('#password').value;

    btn.disabled = true;
    authWithEmailAndPassword(email, password)
        .then(Question.fetch)
        .then(renderModalAfterAuth)
        .then(() => btn.disabled = false)
}

function renderModalAfterAuth(content) {
    if (typeof content === 'string') {
        createModal('Mistake!', content)
    } else {
        createModal('A list of questions', Question.listToHTML(content))
    }
}