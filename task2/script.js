'use strict';

const   consoleLog = document.querySelector('#consoleLog'),
        getAlertInfo = document.querySelector('#alert'),
        getPromptInfo = document.querySelector('#prompt');

consoleLog.addEventListener('click', () => {
    alert('Метод console.log() позволяет вывыести сообщение в консоль');
});

getAlertInfo.addEventListener('click', () => {
    alert('Метод alert() выводит диалоговое окно с соответствующим сообщением');
});

getPromptInfo.addEventListener('click', () => {
    alert('Метод prompt() выводит диалоговое окно с соответствующим сообщением и возможность ввода текста');
});