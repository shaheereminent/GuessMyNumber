'use strict';

// generating number secret number
const randomSecretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomSecretNumber);

// selecting start guessing element
let messageElement = document.querySelector('.message');

// selecting highScore element
let highScoreElement = document.querySelector('.highscore');

// selecting secret number
let secretNumberElement = document.querySelector('.number');

// selecting score element
let scoreElement = document.querySelector('.score');

// selecting guess input element
let guessInputElement = document.querySelector('.guess');

// clicking check button check
document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(guessInputElement.value);

  if (!userGuess) {
    messageElement.textContent = '⛔ No Number!';
  }

  if (userGuess === randomSecretNumber) {
    messageElement.textContent = '🎉 Correct Number!';
    secretNumberElement.textContent = randomSecretNumber;
    if (
      Number(scoreElement.textContent) > Number(highScoreElement.textContent)
    ) {
      highScoreElement.textContent = scoreElement.textContent;
    }
  } else if (userGuess !== randomSecretNumber) {
    scoreElement.textContent -= 1;
  }
});
