"use strict";const modal=document.querySelector(".modal"),overlay=document.querySelector(".overlay"),btnCloseModal=document.querySelector(".close-modal"),btnsOpenModal=document.querySelectorAll(".show-modal"),openModal=function(){modal.classList.remove("hidden"),overlay.classList.remove("hidden")},closeModal=function(){modal.classList.add("hidden"),overlay.classList.add("hidden")};for(let e=0;e<btnsOpenModal.length;e++)btnsOpenModal[e].addEventListener("click",openModal);btnCloseModal.addEventListener("click",closeModal),overlay.addEventListener("click",closeModal),document.addEventListener("keydown",function(e){"Escape"!==e.key||modal.classList.contains("hidden")||closeModal()});