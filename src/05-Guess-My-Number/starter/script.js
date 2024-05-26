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

document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  console.log(`The Value of Guess : ${guess}`);

  if (guess > 20 && guess < 1) {
    alert('Enter a Valid Number Between 1 and 20');
  }
});
