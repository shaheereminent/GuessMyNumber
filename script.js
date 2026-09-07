'use strict';

// generating number secret number
let randomSecretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomSecretNumber);

// selecting entire body background color
let backgroundColor = document.querySelector('body');

// selecting display message element
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

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
let highScore = 0;

// getting players name
// prompt('Enter your name: ');

// clicking check button to check user guessed value
document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(guessInputElement.value);

  // checking if user guess is not a number
  if (!userGuess) {
    displayMessage('⛔ No Number!');
    return;
  }

  // check if guess is out of range
  if (userGuess > 20 || userGuess < 1) {
    displayMessage('⚠️ Number must be between 1 and 20!');
    return;
  }

  // checking if user guess is correct
  if (userGuess === randomSecretNumber) {
    displayMessage('🎉 Correct Number!');
    secretNumberElement.textContent = randomSecretNumber;
    backgroundColor.style.backgroundColor = '#60b347';
    secretNumberElement.style.width = '30rem';
    // checking if user current score is higher than previous score
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
  } else if (userGuess !== randomSecretNumber) {
    if (score > 1) {
      displayMessage(
        userGuess > randomSecretNumber ? '📈 Too high!' : '📉 Too low!',
      );
      score--;
      scoreElement.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      score = 0;
      scoreElement.textContent = score;
    }
  }
});

// clicking again button to reset the game state
document.querySelector('.again').addEventListener('click', function () {
  guessInputElement.value = '';
  // resetting message for the user
  displayMessage('Start guessing...');
  // reset score state value and in dom as well
  score = 20;
  scoreElement.textContent = score;
  // re-initializing a new random number
  console.log((randomSecretNumber = Math.trunc(Math.random() * 20 + 1)));
  // resetting secret number back to a "question mark"
  secretNumberElement.textContent = '?';
  backgroundColor.style.backgroundColor = '#222';
});
