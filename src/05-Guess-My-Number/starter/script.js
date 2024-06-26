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
const MAX_SCORE = 20; // Maximum score a player can start with
const MIN_SCORE = 1; // Minimum score, typically the losing condition
const MAX_NUMBER = 20; // Maximum number for the secret number range
const MIN_NUMBER = 1; // Minimum number for the secret number range

// Select DOM elements
const highScoreEl = document.querySelector('.highscore'); // Element to display the high score
const btnCheck = document.querySelector('.check'); // Button to check the guessed number
const btnAgain = document.querySelector('.again'); // Button to reset the game
const messageEl = document.querySelector('.message'); // Element to display messages
const scoreEl = document.querySelector('.score'); // Element to display the current score
const numberEl = document.querySelector('.number'); // Element to display the secret number or '?'
const guessEl = document.querySelector('.guess'); // Input element for user's guess

// Initialize high score to 0
highScoreEl.textContent = 0;

// Function to generate a secret number between 1 and MAX_NUMBER
const generateSecretNumber = () => Math.trunc(Math.random() * MAX_NUMBER) + 1;
let secretNumber = generateSecretNumber();
console.log(secretNumber); // For debugging: log the secret number

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
  document.querySelector('body').style.backgroundColor = '#60b347'; // Change background color to green
  numberEl.style.width = '30rem'; // Increase the width of the number display
  numberEl.textContent = secretNumber; // Display the secret number

  // Update high score if current score is higher
  if (Number(highScoreEl.textContent) < score) {
    highScoreEl.textContent = score;
  }

  btnCheck.disabled = true; // Disable the check button after winning
};

// Function to reset styles to default
const reset = function () {
  updateMessage('Start guessing...');
  guessEl.value = ''; // Clear the guess input
  document.querySelector('body').style.backgroundColor = '#222'; // Reset background color
  numberEl.style.width = '15rem'; // Reset number display width
  numberEl.textContent = '?'; // Reset number display to '?'
  btnCheck.disabled = false; // Enable the check button
  score = MAX_SCORE; // Reset score to maximum
  scoreEl.textContent = score; // Update score display
  secretNumber = generateSecretNumber(); // Generate a new secret number
  console.log(secretNumber); // For debugging: log the new secret number
};

// Event listener for 'Check' button click
btnCheck.addEventListener('click', function () {
  const guess = Number(guessEl.value); // Convert the guessed value to a number
  console.log(guess); // For debugging: log the guessed number

  // Check if the guess is valid
  if (!guess) {
    updateMessage('Enter A Number');
  } else if (guess === secretNumber) {
    determineWin(); // Handle the winning scenario
  } else if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    updateMessage(`Enter a number between ${MIN_NUMBER} and ${MAX_NUMBER}`);
    handleScore(); // Decrement the score for invalid guesses
  } else {
    // Handle incorrect guesses
    if (score > 1) {
      updateMessage(guess < secretNumber ? 'Too Low' : 'Too High');
      handleScore(); // Decrement the score for incorrect guesses
    } else {
      updateMessage('You Lost... Play again');
      btnCheck.disabled = true; // Disable the check button after losing
    }
  }
});

// Event listener for 'Again' button click
btnAgain.addEventListener('click', reset); // Reset the game when the 'Again' button is clicked
