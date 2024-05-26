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
let guess = Number(document.querySelector('.guess').textContent);

const updateMessage = message => {
  document.querySelector('.message').textContent = message;
};
const updateScore = () => {
  document.querySelector('.score').textContent;
};

document.querySelector('click').addEventListener('.click', function () {
  let guess = 0;

  if (!guess) {
    updateMessage('No Number');
  } else if (guess === secretNumber) {
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
