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

const MAX_SCORE = 100;
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const handleSwitchPlayer = function () {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnNew.addEventListener('click', function () {
  console.log(`New Game Button Was clicked`);
});

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    handleSwitchPlayer();
  }
});

btnhold.addEventListener('click', function () {
  //  1.) Add the current score to active players Score
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    score[activePlayer];
  //  2.) Check if Player's score is >= 100
  if (score[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('play--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('play--active');
  } else {
    //  Switch to the next Player
    handleSwitchPlayer();
  }

  //  Finish Game
});
