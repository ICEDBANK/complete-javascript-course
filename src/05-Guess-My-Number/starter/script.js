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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`Secret Number : ${secretNumber}`);
document.querySelector('.number').textContent = '?';

let score = MAX_SCORE;

const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const updateScore = score => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessage('No Number');
  } else if (guess > MAX_NUMBER || guess < MIN_NUMBER) {
    setMessage('Enter A number Between 1 and 20');
    score--;
    updateScore();
  } else if (guess === secretNumber) {
    setMessage('Correct');
    document.querySelector('.number').textContent = secretNumber;
  } else {
    if (score > 1) {
      setMessage(guess < secretNumber ? 'To Low' : 'To High');
      score--;
      updateScore();
    } else {
      setMessage('You Lost Click The "Again" Button to try again');
      score = 0;
      updateScore();
    }
  }
});
