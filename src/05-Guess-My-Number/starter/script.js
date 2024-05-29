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

// Define constants for game settings
const MAX_SCORE = 20;
const MIN_SCORE = 1;
const MAX_NUMBER = 20;
const highScore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
let secretNumber = 0;

// Initialize high score to 0
highScore.textContent = 0;
// Generate a secret number between 1 and 20
const generateNumber = function (secretNumber) {
  let number = Math.trunc(Math.random() * 6) + 1;
  secretNumber = number;
  console.log(secretNumber);
};

// Display '?' as the initial number in the UI

// Initialize score to maximum score
let score = MAX_SCORE;
// Function to update message displayed in UI
const updateMessage = message => {
  document.querySelector('.message').textContent = message;
};

// Function to update score displayed in UI

// Function to update and display high score

// Function to handle winning scenario

// Function to reset styles to default

// Event listener for 'Check' button click
btnCheck.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    updateMessage('Enter a number');
  } else if (guess === secretNumber) {
    updateMessage('Correct Answer');
  }
});

// Check if guess is empty or not a number

// Check if guess is correct

// Handle incorrect guess

// If score reaches 0, display message and reset score

// Event listener for 'Again' button click

// Update and display high score

// Reset guess input field

// Reset score to maximum score

// Reset displayed number to '?'

// Reset styles to default

// Generate new secret number

// Display initial message
