/*! Functional Requirements

        User Rolls Dice:

            -   The user can initiate a dice roll.
            -   The system generates a random dice roll value between 1 and 6.
            -   The dice roll value is displayed to the user.

        Dice Roll Handling:

            -   If the dice roll is not 1, the rolled value is added to the current score.
            -   The new current score is displayed.
            -   If the dice roll is 1, the current score is not added to the total score, and the player is switched.

        User Holds Score:

            -   The user can choose to hold their score, adding the current score to their total score.
            -   If the total score is 100 or more, the current player wins, and a winning message is displayed.
            -   If the total score is less than 100, the player is switched.

        Player Switching:

            -   When switching players, the current score is reset to 0.
            -   The next player takes their turn.

        User Resets Game:

            -   The user can reset the game at any time.
            -   All scores (current and total) are set to 0.
            -   Player 1 is set as the starting player.
        
    Non-Functional Requirements:

        User Interface:

            -   The user interface should be clear and intuitive, displaying all necessary information (current score, total score, dice roll).
            -   Visual indicators should be provided for whose turn it is and when the game is won.

        Performance:

            -   The game should respond immediately to user actions (rolling dice, holding score, resetting game).
            -   Random number generation for dice rolls should be secure and efficient.

        Scalability:

            -   The game should be easily extendable to support more features, such as different winning conditions or additional players.

    Additional Details:

        Dice Roll Generation:

            -   Implement a function to generate a random number between 1 and 6.
            -   Display the dice roll value in the UI.

        Score Management:

            -   Maintain separate scores for the current turn and the total score.
            -   Implement functions to update the current score, total score, and display these values in the UI.
            
        Player Management:

            -   Implement logic to switch players after each turn or when the dice roll is 1.
            -   Ensure the UI reflects the current player.

        Game Reset:

            -   Provide a reset button that clears all scores and sets the starting player.
            -   Update the UI to reflect the reset state.

*/

'use strict';

// Constants and DOM element selections
const MAX_SCORE = 100; // Maximum score to win the game
const playerEls = [document.querySelector('.player--0'), document.querySelector('.player--1')];// Player sections
const scoreEls =  [document.getElementById('score--0'), document.getElementById('score--1')];// Total scores
const currentEls = [document.getElementById('current--0'), document.getElementById('current--1')]; // Current scores
const diceEl =  document.querySelector('.dice')// Dice image element
const btnNew =  // New game button
const btnRoll =  // Roll dice button
const btnHold =  // Hold score button

// Initial setup for scores and game state
const init = function () {
  // Reset total scores
   // Reset current scores
   // Hide the dice image
   // Remove winner and active classes
    // Set Player 1 as active
};

// Initialize game variables


// Function to initialize the game
const initializeGame = function () {
   // Reset all scores and states
   // Array to keep track of scores for both players
  // Current score for the active player
   // Start with Player 1
   // Game state to track if the game is still playing
};

// Function to switch the active player
const switchPlayer = function () {
   // Update UI for current player's score
   // Reset current score
   // Switch active player
  // Toggle active class for both players
};

// Event listener for the "New Game" button


// Event listener for the "Roll Dice" button

    // Generate a random dice roll between 1 and 6

    // Display the dice image based on the roll


    // If the roll is not 1, add the roll to the current score

      // If the roll is 1, switch to the next player


// Event listener for the "Hold Score" button

    // Add the current score to the active player's total score


    // Check if the player's total score is >= MAX_SCORE

      // Switch to the next player if no one has won


// Initialize the game on load


/*!SECTION

'use strict';

// Constants and DOM element selections
const MAX_SCORE = 100; // Maximum score to win the game
const playerEls = [document.querySelector('.player--0'), document.querySelector('.player--1')]; // Player sections
const scoreEls = [document.getElementById('score--0'), document.getElementById('score--1')]; // Total scores
const currentEls = [document.getElementById('current--0'), document.getElementById('current--1')]; // Current scores
const diceEl = document.querySelector('.dice'); // Dice image element
const btnNew = document.querySelector('.btn--new'); // New game button
const btnRoll = document.querySelector('.btn--roll'); // Roll dice button
const btnHold = document.querySelector('.btn--hold'); // Hold score button

// Initial setup for scores and game state
const initializeGame = function() {
  scoreEls.forEach(scoreEl => scoreEl.textContent = 0); // Reset total scores
  currentEls.forEach(currentEl => currentEl.textContent = 0); // Reset current scores
  diceEl.classList.add('hidden'); // Hide the dice image
  playerEls.forEach(playerEl => playerEl.classList.remove('player--winner', 'player--active')); // Remove winner and active classes
  playerEls[0].classList.add('player--active'); // Set Player 1 as active
};

// Initialize game variables
let scores, currentScore, activePlayer, playing;

// Function to initialize the game
const init = function () {
  initializeGame(); // Reset all scores and states
  scores = [0, 0]; // Array to keep track of scores for both players
  currentScore = 0; // Current score for the active player
  activePlayer = 0; // Start with Player 1
  playing = true; // Game state to track if the game is still playing
};

// Function to switch the active player
const switchPlayer = function () {
  currentEls[activePlayer].textContent = currentScore; // Update UI for current player's score
  currentScore = 0; // Reset current score
  activePlayer = activePlayer === 0 ? 1 : 0; // Switch active player
  playerEls.forEach(playerEl => playerEl.classList.toggle('player--active')); // Toggle active class for both players
};

// Event listener for the "New Game" button
btnNew.addEventListener('click', init);

// Event listener for the "Roll Dice" button
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate a random dice roll between 1 and 6
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display the dice image based on the roll
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    // If the roll is not 1, add the roll to the current score
    if (dice !== 1) {
      currentScore += dice;
      currentEls[activePlayer].textContent = currentScore;
    } else {
      // If the roll is 1, switch to the next player
      switchPlayer();
    }
  }
});

// Event listener for the "Hold Score" button
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add the current score to the active player's total score
    scores[activePlayer] += currentScore;
    scoreEls[activePlayer].textContent = scores[activePlayer];

    // Check if the player's total score is >= MAX_SCORE
    if (scores[activePlayer] >= MAX_SCORE) {
      playing = false; // End the game
      playerEls[activePlayer].classList.add('player--winner');
      playerEls[activePlayer].classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      // Switch to the next player if no one has won
      switchPlayer();
    }
  }
});

// Initialize the game on load
init();


*/
