// script.js
document.addEventListener("DOMContentLoaded", () => {
  const gameBoard = document.getElementById("gameBoard");
  const resetButton = document.getElementById("resetButton");
  const player1Score = document.getElementById("score1");
  const player2Score = document.getElementById("score2");
  const player1Element = document.getElementById("player1");
  const player2Element = document.getElementById("player2");

  // Define the alphabet array
  const alphaArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    // "G",
    // "H",
    // "I",
    // "J",
    // "K",
    // "L",
    // "M",
    // "N",
    // "O",
    // "P",
    // "Q",
    // "R",
    // "S",
    // "T",
    // "U",
    // "V",
    // "W",
    // "X",
    // "Y",
    // "Z",
  ];

  // Create the cards array by duplicating the alphabet array
  const cardsArray = [...alphaArray, ...alphaArray];

  let shuffledCards = [];
  let firstCard, secondCard;
  let lockBoard = false;
  let playerTurn = 1;
  let scores = [0, 0];

  // Sound effects
  const flipSound = new Audio("sounds/flip.mp3");
  const matchSound = new Audio("sounds/match.mp3");
  const noMatchSound = new Audio("sounds/nomatch.mp3");

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createBoard() {
    shuffledCards = shuffle([...cardsArray]);
    shuffledCards.forEach((cardValue) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.dataset.value = cardValue;

      const front = document.createElement("div");
      front.classList.add("front");
      front.textContent = cardValue;

      const back = document.createElement("div");
      back.classList.add("back");
      back.textContent = "?";

      card.appendChild(front);
      card.appendChild(back);

      card.addEventListener("click", flipCard);
      gameBoard.appendChild(card);
    });
    updateActivePlayer();
  }

  function flipCard() {
    if (lockBoard || this === firstCard) return;
    this.classList.add("flip");
    flipSound.play();

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;
    checkForMatch();
  }

  function checkForMatch() {
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;
    if (isMatch) {
      matchSound.play();
      scores[playerTurn - 1]++;
      updateScore();
      resetBoard();
    } else {
      playerTurn = 3 - playerTurn; // Switch player turn immediately
      updateActivePlayer();
      noMatchSound.play();
      setTimeout(unflipCards, 1000);
    }
  }

  function updateScore() {
    player1Score.textContent = scores[0];
    player2Score.textContent = scores[1];
  }

  function unflipCards() {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    resetBoard();
  }

  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }

  function resetGame() {
    gameBoard.innerHTML = "";
    scores = [0, 0];
    playerTurn = 1;
    updateScore();
    updateActivePlayer();
    createBoard();
  }

  function updateActivePlayer() {
    if (playerTurn === 1) {
      player1Element.classList.add("active");
      player2Element.classList.remove("active");
    } else {
      player1Element.classList.remove("active");
      player2Element.classList.add("active");
    }
  }

  resetButton.addEventListener("click", resetGame);

  createBoard();
});
