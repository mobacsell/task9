'use strict';

const   textInput = document.querySelector('#text_input'),
        textParagraph = document.querySelector('#duplicateField'),
        btn = document.querySelector('#btn');


textInput.addEventListener('input', () => {
    textParagraph.textContent = textInput.value;
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(textInput.value);
    textInput.value = '';
    textParagraph.textContent = '';
});