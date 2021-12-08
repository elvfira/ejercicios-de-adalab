'use strict';

const inputName = document.querySelector('.name');
const button = document.querySelector('.button');

function printMessage() {
    if (inputName.value === '') {
        console.error('Error: input vacío');
    } else {
        console.log(`Hola, ${inputName.value}`);
    }
}

button.addEventListener('click', printMessage);