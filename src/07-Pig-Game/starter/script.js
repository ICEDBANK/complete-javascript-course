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

//  The system generates a random dice roll value between 1 and 6.
const diceEl = document.querySelector('.dice');
const MAX_SCORE = 100;

let score0El = (document.querySelector('#score--0').textContent = 0);
let score1El = (document.getElementById('score--1').textContent = 0);
diceEl.classList.add('hidden');

let diceRollRandom = function () {};

document.querySelector('.btn--new').addEventListener('click', function () {
  console.log(`New Game Button Clicked`);
});

//  The user can initiate a dice roll.
document.querySelector('.btn--roll').addEventListener('click', function () {
  console.log(`Roll Dice Button Clicked`);
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  console.log(`Hold Score Button Clicked`);
});
