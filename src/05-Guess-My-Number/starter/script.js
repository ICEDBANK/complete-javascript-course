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

'use strict';

const MAX_SCORE = 20;
const MAX_NUMBER = 20;

const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + 1;
let score = MAX_SCORE;

const setMessage = message => {
  document.querySelector('.message').textContent = message;
};

const updateScore = () => {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.number').textContent = '?'; // Hide the secret number initially

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setMessage('No Number');
  } else if (guess > MAX_NUMBER || guess < 1) {
    setMessage('Enter a Number between 1 and 20');
  } else if (guess === secretNumber) {
    setMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
  } else {
    if (score > 1) {
      setMessage(guess < secretNumber ? 'Too Low' : 'Too High');
      score--;
      updateScore();
    } else {
      setMessage('You lost the game!');
      score = 0;
      updateScore();
    }
  }
});
