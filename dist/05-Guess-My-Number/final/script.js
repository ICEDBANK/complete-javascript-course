"use strict";let secretNumber=Math.trunc(20*Math.random())+1,score=20,highscore=0;const displayMessage=function(e){document.querySelector(".message").textContent=e};document.querySelector(".check").addEventListener("click",function(){var e=Number(document.querySelector(".guess").value);console.log(e,typeof e),e?e===secretNumber?(displayMessage("🎉 Correct Number!"),document.querySelector(".number").textContent=secretNumber,document.querySelector("body").style.backgroundColor="#60b347",document.querySelector(".number").style.width="30rem",score>highscore&&(highscore=score,document.querySelector(".highscore").textContent=highscore)):e!==secretNumber&&(1<score?(displayMessage(e>secretNumber?"📈 Too high!":"📉 Too low!"),score--,document.querySelector(".score").textContent=score):(displayMessage("💥 You lost the game!"),document.querySelector(".score").textContent=0)):displayMessage("⛔️ No number!")}),document.querySelector(".again").addEventListener("click",function(){score=20,secretNumber=Math.trunc(20*Math.random())+1,displayMessage("Start guessing..."),document.querySelector(".score").textContent=score,document.querySelector(".number").textContent="?",document.querySelector(".guess").value="",document.querySelector("body").style.backgroundColor="#222",document.querySelector(".number").style.width="15rem"});