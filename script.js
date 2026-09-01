'use strict';

// generating number secret number
const randomSecretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomSecretNumber);

// selecting start guessing element
let messageElement = document.querySelector('.message');

// selecting secret number
let secretNumberElement = document.querySelector('.number');

// selecting highScore element
let highScoreElement = document.querySelector('.highscore');

// selecting score element
let scoreElement = document.querySelector('.score');

// selecting guess input element
let guessInputElement = document.querySelector('.guess');

// creating score variable to keep track of it
let score = 20;

// clicking check button check
document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(guessInputElement.value);

  // checking if user guess is not a number
  if (!userGuess) {
    messageElement.textContent = '⛔ No Number!';
  }

  // checking if user guess is correct
  if (userGuess === randomSecretNumber) {
    messageElement.textContent = '🎉 Correct Number!';
    secretNumberElement.textContent = randomSecretNumber;
    // checking if user current score is higher than previous score
    if (
      Number(scoreElement.textContent) > Number(highScoreElement.textContent)
    ) {
      highScoreElement.textContent = scoreElement.textContent;
    }
  } else if (userGuess > randomSecretNumber) {
    messageElement.textContent = '📈 Too high!';
    score--;
    scoreElement.textContent = score;
  } else if (userGuess < randomSecretNumber) {
    messageElement.textContent = '📉 Too low!';
    score--;
    scoreElement.textContent = score;
  } else if (userGuess !== randomSecretNumber) {
    score--;
    scoreElement.textContent = score;
  }
});
