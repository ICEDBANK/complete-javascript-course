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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret Number : ${secretNumber}`);
document.querySelector('.number').textContent = '?';

let score = MAX_SCORE;

const updateMessage = message => {
  document.querySelector('.message').textContent = message;
};
const updateScore = () => {
  document.querySelector('.score').textContent = score;
};

const updateHighScore = () => {
  let newHighScore = 0;

  if (score > highScore) {
    newHighScore = score;
  } else {
    newHighScore = highScore;
  }
  document.querySelector('.highscore').textContent = newHighScore;
};

const youWon = () => {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
};

const resetStyle = () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.check').addEventListener('click', function () {
  console.log(`class .check clicked`);
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    updateMessage('No Number');
  } else if (guess === secretNumber) {
    youWon();
    updateMessage('Correct Answer');
    document.querySelector('.number').textContent = secretNumber;
  } else {
    if (score >= 1) {
      updateMessage(guess < secretNumber ? 'To Low' : 'To High');
      score--;
      updateScore();
    } else {
      updateMessage('You Lost Click "Again" Button To Restart');
      score = 0;
      updateScore();
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  updateHighScore();
  document.querySelector('.guess').value = '';
  score = MAX_SCORE;
  updateScore();
  document.querySelector('.number').textContent = '?';
  resetStyle();
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  updateMessage('Start guessing...');
});
