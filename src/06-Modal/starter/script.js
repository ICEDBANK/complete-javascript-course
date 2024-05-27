'use strict';

// Selecting DOM elements
const modalEl = document.querySelector('.modal');
const modelOverlayEl = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Function to close the modal

// Function to open the modal
const openModal = function () {
  modalEl.classList.remove('hidden');
  modelOverlayEl.classList.remove('hidden');
};

// Adding event listeners to open the modal when buttons are clicked
btnOpenModal.forEach(button => {
  button.addEventListener('click', openModal);
});

// Adding event listener to close the modal when the close button is clicked

// Adding event listener to close the modal when the overlay is clicked

// Adding event listener to detect keydown events on the whole document

// Checking if the pressed key is the 'Escape' key and if the modal is not hidden

// If conditions are met, call the closeModal function to close the modal
