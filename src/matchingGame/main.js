document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const resetButton = document.getElementById("resetButton");
  const player1Score = document.getElementById("score1");
  const player2Score = document.getElementById("score2");
  const player1Element = document.getElementById("player1");
  const player2Element = document.getElementById("player2");

  const imgArray = [
    "images/space-kitty.jpg",
    "images/diver-kitty.jpg",
    "images/adventure-kitty.jpg",
    "images/pilot-kitty.jpg",
    "images/programmer-kitty.jpg",
    "images/sailor-kitty.jpg",
    "images/pharmacist-kitty.jpg",
    "images/machinist-kitty.jpg",
    "images/school-kitty.jpg",
    "images/hunter-kitty.jpg",
    "images/firefighter-kitty.jpg",
    "images/engineer-kitty.jpg",
    "images/chemist-kitty.jpg",
    "images/unicorn-kitty.jpg",
    "images/family-kitty.jpg",
  ];

  const cardsArray = [...imgArray, ...imgArray];

  let shuffledCards = [];
  let firstCard, secondCard;
  let lockBoard = false;
  let playerTurn = 1;
  let scores = [0, 0];

  const flipSound = new Audio("sounds/flip.mp3");
  const matchSound = new Audio("sounds/match.mp3");
  const noMatchSound = new Audio("sounds/nomatch.mp3");

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor
