'use strict';

// Selecting DOM elements
const modalEl = document.querySelector('.modal');
const modelOverlayEl = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Function to close the modal
const closeModal = function () {
  modalEl.classList.add('hidden');
  modelOverlayEl.classList.add('hidden');
};

// Function to open the modal
const openModal = function () {
  modalEl.classList.remove('hidden');
  modelOverlayEl.classList.remove('hidden');
};

// Adding event listeners to open the modal when buttons are clicked
btnOpenModal.forEach(button => {
  button.addEventListener('click', openModal);
});

// Adding event listener to close the modal when the x button is clicked
btnCloseModal.addEventListener('click', closeModal);

// Adding event listener to close the modal when the overlay is clicked
modelOverlayEl.addEventListener('click', closeModal);

// Adding event listener to detect keydown events on the whole document
document.addEventListener('click', function (event) {
  console.log(event.key);
  // Checking if the pressed key is the 'Escape' key and if the modal is not hidden
  if (event.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    // If conditions are met, call the closeModal function to close the modal
    closeModal();
  }
});
