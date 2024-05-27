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
  console.log(btnOpenModal);
  modalEl.classList.remove('hidden');
  modelOverlayEl.classList.remove('hidden');
};

// Adding event listeners to open the modal when buttons are clicked
btnOpenModal.forEach(button => {
  button.addEventListener('click', openModal);
});

// Adding event listener to close the modal when the close button is clicked
btnCloseModal.addEventListener('click', closeModal);

// Adding event listener to close the modal when the overlay is clicked
document.addEventListener('click', function () {
  closeModal();
});

// Adding event listener to detect keydown events on the whole document
