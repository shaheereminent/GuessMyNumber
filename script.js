'use strict';

const DOM = {
  body: document.querySelector('body'),
  message: document.querySelector('.message'),
  number: document.querySelector('.number'),
  highscore: document.querySelector('.highscore'),
  score: document.querySelector('.score'),
  guess: document.querySelector('.guess'),
  checkBtn: document.querySelector('.check'),
  againBtn: document.querySelector('.again')
}

// styling functions
const setGameStyle = function(isWin) {
  DOM.body.style.backgroundColor = isWin ? '#60b347' : '#222'
  DOM.number.style.width = isWin ? '30rem' : '15rem'
}

// generating number secret number

const generateRandomNumber = function () {
  return Math.trunc(Math.random() * 20 + 1);
};

let randomSecretNumber = generateRandomNumber();
console.log(randomSecretNumber);

// selecting display message element
const displayMessage = function (message) {
  DOM.message.textContent = message
};

// selecting secret number
const highestScore = function (highScore) {
  DOM.number.textContent = highScore
};

// selecting score element
const gameScore = function (score) {
  DOM.score.textContent = score
};


// creating score variable to keep track of it
let score = 20;
let highScore = 0;

// clicking check button to check user guessed value
document.querySelector('.check').addEventListener('click', function () {
  const userGuess = Number(DOM.guess.value);

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
    highestScore(randomSecretNumber);
    DOM.number.textContent = randomSecretNumber
    setGameStyle(true)
    // checking if user current score is higher than previous score
    if (score > highScore) {
      highScore = score;
      DOM.highscore.textContent = highScore
    }
  } else if (userGuess !== randomSecretNumber) {
    if (score > 1) {
      displayMessage(
        userGuess > randomSecretNumber ? '📈 Too high!' : '📉 Too low!',
      );
      score--;
      gameScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      score = 0;
      gameScore(score);
    }
  }
});

// clicking again button to reset the game state
document.querySelector('.again').addEventListener('click', function () {
  DOM.guess.value = '';
  // resetting message for the user
  displayMessage('Start guessing...');
  // reset score state value and in dom as well
  score = 20;
  gameScore(score);
  // re-initializing a new random number
  randomSecretNumber = generateRandomNumber();
  console.log(randomSecretNumber);
  // resetting secret number back to a "question mark"
  highestScore('?');
  setGameStyle(false)
});
