'use strict'

const btnEl = document.querySelector('.btn');
const inputLoginEl = document.querySelector('.login');
const inputPasswordEl = document.querySelector('.password');

btnEl.addEventListener('click', () => {
    addUsers(inputLoginEl.value, inputPasswordEl.value)
    window.location.href = 'login.html';
});
