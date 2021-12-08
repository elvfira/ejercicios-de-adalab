'use strict';

const firstClick = document.querySelector ('.text');
const button = document.querySelector ('.button');

function changeText () {
    firstClick.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!'
}



button.addEventListener ('click', changeText)




