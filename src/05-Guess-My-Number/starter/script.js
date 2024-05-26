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

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessage('No Number');
  } else if (guess > 20 || guess < 1) {
    setMessage('Enter a Number between 1 and 20');
  } else if (guess === secretNumber) {
    setMessage('Correct Number');
  } else if (guess < secretNumber) {
    setMessage('To Low');
  } else if (guess > secretNumber) {
    setMessage('To High');
  }
});
