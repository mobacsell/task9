'use strict';

const link = document.querySelector('#link');


link.addEventListener('click', function (event) {
    event.preventDefault();
    let getNewLinkName = prompt('Введите новый текст ссылки');
    this.textContent = getNewLinkName;
});