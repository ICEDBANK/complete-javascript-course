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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const setScore = score => {
  score--;
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  let score = 20;

  if (!guess) {
    setMessage('No Number');
  } else if (guess > 20 || guess < 1) {
    setMessage('Enter a Number between 1 and 20');
    setScore(score);
  } else if (guess === secretNumber) {
    setMessage('Correct Number');
    setScore(score);
  } else if (guess < secretNumber) {
    setMessage('Too Low');
    setScore(score);
  } else {
    setMessage('Too High');
    setScore(score);
  }
});
