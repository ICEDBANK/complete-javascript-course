'use strict';
/*! SECTION

    Functional Requirements:
        1. Click Events:
            - When the user clicks a button to open a modal, the modal and overlay should be displayed.
            - Clicking the 'X' button within the modal should close both the modal and overlay.
            - Clicking on the overlay outside the modal should also close both the modal and overlay.
        
        2. Global Event Listener:
            - Implement a global event listener for the 'keydown' event to allow users to close the modal and overlay by pressing the 'Escape' key.

        3. Centralized Functions:
            - Implement an 'openModal' function to display the modal and overlay when called.
            - Implement a 'closeModal' function to hide the modal and overlay when called.

    Additional Notes:
        - Ensure consistent styling and visual feedback for modal interactions.
        - Document any specific behavior or animations associated with modal opening and closing.
        - Test modal functionality across different browsers and devices to ensure compatibility.
*/

// Selecting DOM elements
const modalEl = document.querySelector('.modal');
const modelOverlayEl = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Function to close the modal
const closeModal = function () {
  modelOverlayEl.classList.toggle('hidden');
  modalEl.classList.toggle('hidden');
};

// Function to open the modal
const openModal = function () {
  modalEl.classList.toggle('hidden');
  modelOverlayEl.classList.toggle('hidden');
};

// Adding event listeners to open the modal when buttons are clicked
btnOpenModal.forEach(button => {
  button.addEventListener('click', openModal);
});

// Adding event listener to close the modal when the close button is clicked
btnCloseModal.addEventListener('click', closeModal());

// Adding event listener to close the modal when the overlay is clicked

// Adding event listener to detect keydown events on the whole document
