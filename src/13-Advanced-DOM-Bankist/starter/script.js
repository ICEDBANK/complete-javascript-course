'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/* 

  Review What Is The DOM

    ALLOWS US TO MAKE JS INTERACT WITH THE BROWSER,

    We can write js to create modify and delet HTML elements and styles classes and attributes and listen and respond to events

    DOM Tree is generated from an HTML document which can then interact with

    DOM is a very complex API that contains lots of methods properties.

  How the DOM API IS ORGANIZED BEHIND THE SCENES

    Represensted by Javascript object

    EventTarget
      Window
      Node -> 
        Element ->
          HTMLElement ->
            HTMLButtonElement
            HTMLDivElement
        Text
        Comment
        Document
    
    InHERITANCE OF METHODS AND PROPERTIES - Any HTMLELEMENT will have access to addEventListener().cloneNode() or .closest() methods

*/

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
