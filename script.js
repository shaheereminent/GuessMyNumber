'use strict';

const DOM = {
  body: document.querySelector('body'),
  message: document.querySelector('.message'),
  number: document.querySelector('.number'),
  highscore: document.querySelector('.highscore'),
  score: document.querySelector('.score'),
  guess: document.querySelector('.guess'),
  checkBtn: document.querySelector('.check'),
  againBtn: document.querySelector('.again'),
  player1: document.querySelector('.player1'),
  player2: document.querySelector('.player2'),
}

// configuration object

const CONFIG = {
  MIN: 1,
  MAX: 20,
  INITIAL_SCORE: 20,
  WIN_COLOR: '#60b347',
  LOSE_COLOR: '#222',
  WIN_WIDTH: '30rem',
  LOSE_WIDTH: '15rem'
}

// default players name
const cuteGameNames = [
  "Sprout",
  "Mochi",
  "Pippin",
  "Glimmer",
  "Cozy",
  "Fable",
  "Noodle",
  "Bubbles",
  "Chirpy",
  "Snug"
];

// default names
const playerNames = [] 

// assigning random names to player from built-in game
for (let i = 0; i < 2; i++) {
  let randomName = Math.trunc(Math.random() * cuteGameNames.length);
  playerNames[i] = cuteGameNames[randomName]
  console.log(randomName)
}

for (let i = 0; i < 2; i++) {
  // get players name
  const getPlayersName = prompt('Please write your name: ')

  // update players name if user give name
  if (getPlayersName) {
    playerNames[i] = getPlayersName
  }
  
  console.log(getPlayersName)
}

console.log(playerNames)

// creating score variable to keep track of it
let score = CONFIG.INITIAL_SCORE;
let highScore = 0;

// styling functions
const setGameStyle = function(isWin) {
  DOM.body.style.backgroundColor = isWin ? CONFIG.WIN_COLOR : CONFIG.LOSE_COLOR
  DOM.number.style.width = isWin ? CONFIG.WIN_WIDTH : CONFIG.LOSE_WIDTH
}

// generating number secret number
const generateRandomNumber = function () {
  return Math.trunc(Math.random() * CONFIG.MAX + CONFIG.MIN);
};

let randomSecretNumber = generateRandomNumber();
console.log(randomSecretNumber);

// selecting display message element
const displayMessage = function (message) {
  DOM.message.textContent = message
};

// selecting secret number
const showSecretNumber = function (value) {
  DOM.number.textContent = value
};

// selecting score element
const updateScoreDisplay = function (value) {
  DOM.score.textContent = value
};

const updateHighScore = function(value) {
  DOM.highscore.textContent = value
}

// single function for resetting game

const resetGame = function() {
  // reset game state
  score = CONFIG.INITIAL_SCORE;
  randomSecretNumber = generateRandomNumber();

  // reset game ui
  DOM.guess.value = '';
  displayMessage('Start guessing...');
  updateScoreDisplay(score);
  console.log(randomSecretNumber);
  showSecretNumber('?');
  setGameStyle(false)
}

// Separate win/lose functions

const handleWin = function() {
  displayMessage('🎉 Correct Number!');
  showSecretNumber(randomSecretNumber);
  setGameStyle(true)

  // update high score
  if (score > highScore) {
      highScore = score;
      updateHighScore(highScore)
    }
}

const handleLose = function(userGuess) {
  if (score > 1) {
    displayMessage(
      userGuess > randomSecretNumber ? '📈 Too high!' : '📉 Too low!',
    );
    score --
    updateScoreDisplay(score)
  } else {
    displayMessage('💥 You lost the game!');
    score = 0
    updateScoreDisplay(score)
  }
}

// clicking check button to check user guessed value
DOM.checkBtn.addEventListener('click', function () {
    const userGuess = Number(DOM.guess.value);
    
    // Validate: No number
    if (!userGuess) {
        displayMessage('⛔ No Number!');
        return;
    }
    
    // Validate: Out of range
    if (userGuess > CONFIG.MAX || userGuess < CONFIG.MIN) {
        displayMessage(`⚠️ Number must be between ${CONFIG.MIN} and ${CONFIG.MAX}!`);
        return;
    }
    
    // Check guess
    if (userGuess === randomSecretNumber) {
        handleWin();
    } else {
      handleLose(userGuess)
    }
});

// clicking again button to reset the game state
DOM.againBtn.addEventListener('click', resetGame)
