'use strict';

// selecting start guessing element
let messageElement = document.querySelector('.message');
console.log(messageElement.textContent);

// selecting secret number
let secretNumberElement = document.querySelector('.number');
console.log(secretNumberElement.textContent);

// selecting score element
let scoreElement = document.querySelector('.score');
console.log(scoreElement.textContent);

// generating number secret number
const randomSecretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomSecretNumber);
