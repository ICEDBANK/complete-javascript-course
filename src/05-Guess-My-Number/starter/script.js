'use strict';

/*!SECTION
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const MAX_SCORE = 20;
const MAX_NUMBER = 20;
const MIN_NUMBER = 1;
let highScore = 0;
let score = MAX_SCORE;
let secretNumber = generateSecretNumber();

console.log(`Secret Number: ${secretNumber}`);
document.querySelector('.number').textContent = '?';

const updateMessage = message => {
  document.querySelector('.message').textContent = message;
};

const updateScore = () => {
  document.querySelector('.score').textContent = score;
};

const updateHighScore = () => {
  if (score > highScore) {
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }
};

const youWon = () => {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};

const resetStyle = () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const generateSecretNumber = () => {
  return Math.trunc(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
};

document.querySelector('.check').addEventListener('click', function () {
  console.log(`class .check clicked`);
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    updateMessage('No Number');
  } else if (guess === secretNumber) {
    youWon();
    updateMessage('Correct Answer');
    document.querySelector('.number').textContent = secretNumber;
    updateHighScore();
  } else {
    if (score > 1) {
      updateMessage(guess < secretNumber ? 'Too Low' : 'Too High');
      score--;
      updateScore();
    } else {
      updateMessage('You Lost! Click "Again" Button To Restart');
      score = 0;
      updateScore();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = MAX_SCORE;
  secretNumber = generateSecretNumber();
  console.log(`Secret Number: ${secretNumber}`);

  updateScore();
  updateMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  resetStyle();
});
