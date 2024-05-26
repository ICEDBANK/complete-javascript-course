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

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  let message = document.querySelector('.message').textContent;

  if (!guess) {
    message = 'Nu Number';
  } else if (guess > 20 || guess < 1) {
    message = 'Enter a Number between 1 and 20';
  } else if (guess === secretNumber) {
    message = 'Correct Number';
  } else if (guess !== secretNumber) {
    message = 'Incorrect, Try Again';
  }
});
