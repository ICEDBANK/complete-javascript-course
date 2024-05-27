'use strict';
/*!SECTION

    Needs:
        3 click events
            - for each modal needs to open up the modal and overlay to be viewed
            = x button within the modal needs to close modal and overlay
            = when the user clicks on the overlay to exit out of viewing the modal and overlay
        1 global Event listener
            - captures the keystroke "keydown" to close the modal and overlay
        2 functions to centralize potentially redudant code
            - openModal
                displays modal and overlay
            - closeModal
                hides modal and overlay



*/

// Selecting DOM elements
const modalEl = document.querySelector('.modal');
const modelOverlayEl = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modalEl.classList.remove('hidden');
  modelOverlayEl.classList.remove('hidden');
};

btnOpenModal.forEach(button => {
  button.addEventListener('click', openModal);
});

const closeModal = function () {
  modalEl.classList.add('hidden');
  modelOverlayEl.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
