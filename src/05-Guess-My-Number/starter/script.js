'use strict';

/*!SECTION

  Functional Requirements:
    Game Initialization:

      The game initializes with a maximum score of 50.
      The game initializes with a maximum number of 50 and a minimum number of 1.
      The initial high score is set to 0.

    Secret Number Generation:

      The game generates a secret number between 1 and 20 upon initialization.
      The secret number remains hidden from the user.

    User Interaction:

      The user can input a guess in the provided input field.
      The user can click the "Check" button to submit their guess.
      The user can click the "Again" button to reset the game and start guessing again.

    Guess Evaluation:

      If the guess is empty or not a number, the game displays a message indicating no number was entered.
      If the guess matches the secret number, the game:
      Reveals the secret number.
      Updates the background color of the page to indicate a correct guess.
      Displays a message indicating the correct answer.
      If the guess is incorrect, the game:
      Displays a message indicating whether the guess is too low or too high.
      Decrements the score by 1.
      Updates the score display.
      If the score reaches 0:
      Displays a message indicating the user lost and prompts them to click the "Again" button to restart the game.

    Game State Updates:

      The game updates the high score whenever the current score surpasses the previous high score.
      The game resets the background color and number display width when restarting.
      Non-Functional Requirements:

    User Interface:

      The user interface should be visually appealing and intuitive.
      Messages and feedback should be clear and easy to understand.
      The game should provide a seamless and responsive user experience across different devices and screen sizes.

*/

'use strict';

// Define constants for game settings
const MAX_SCORE = 20;
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;

// Select DOM elements
const highScoreEl = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const guessEl = document.querySelector('.guess');

// Initialize high score to 0
highScoreEl.textContent = 0;

// Function to generate a secret number between 1 and MAX_NUMBER
const generateSecretNumber = () => Math.trunc(Math.random() * MAX_NUMBER) + 1;
let secretNumber = generateSecretNumber();
console.log(secretNumber);

// Initialize score to maximum score
let score = MAX_SCORE;

// Function to update message displayed in UI
const updateMessage = message => {
  messageEl.textContent = message;
};

// Function to update score displayed in UI
const handleScore = () => {
  score--;
  scoreEl.textContent = score;
};

// Function to handle winning scenario
const determineWin = function () {
  updateMessage('Correct Answer');
  document.querySelector('body').style.backgroundColor = '#60b347';
  numberEl.style.width = '30rem';
  numberEl.textContent = secretNumber;

  if (Number(highScoreEl.textContent) < score) {
    highScoreEl.textContent = score;
  }

  btnCheck.disabled = true;
};

// Function to reset styles to default
const reset = function () {
  updateMessage('Start guessing...');
  guessEl.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
  numberEl.textContent = '?';
  btnCheck.disabled = false;
  score = MAX_SCORE;
  scoreEl.textContent = score;
  secretNumber = generateSecretNumber();
  console.log(secretNumber);
};

// Event listener for 'Check' button click
btnCheck.addEventListener('click', function () {
  const guess = Number(guessEl.value);
  console.log(guess);

  if (!guess) {
    updateMessage('Enter A Number');
  } else if (guess === secretNumber) {
    determineWin();
  } else if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    updateMessage(`Enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}`);
    handleScore();
  } else {
    if (score > 1) {
      updateMessage(guess < secretNumber ? 'Too Low' : 'Too High');
      handleScore();
    } else {
      updateMessage('You Lost... Play again');
      btnCheck.disabled = true;
    }
  }
});

// Event listener for 'Again' button click
btnAgain.addEventListener('click', reset);
