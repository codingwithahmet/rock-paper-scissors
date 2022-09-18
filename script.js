let newGamesButton = document.querySelector(".newGamesButton");
let newGame = document.querySelector(".newGame");
let newGamee = document.querySelector(".newGamee");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let result = document.querySelector(".result");
let pcSelect = document.querySelector(".pcSelect");
let computerScore = document.querySelector(".PCSCORE");
let youScore = document.querySelector(".YOUSCORE");
let pcChoiseItems = ["rock", "paper", "scissors"];
let pcChoiseItemNumber;
let pcChoiseItem;
let PCScore = 0;
let YourScore = 0;
newGamesButton.onclick = function () {
  setInterval(() => {
    newGame.style.zIndex = "-1";
  }, 300);
  newGame.style.opacity = "0";
};
function PCchoise() {
  pcChoiseItemNumber = Math.floor(Math.random() * 3);
  pcChoiseItem = pcChoiseItems[pcChoiseItemNumber];
}
rock.onclick = function () {
  PCchoise();
  pcSelect.innerHTML = "PC SELECT : " + pcChoiseItem;
  if (pcChoiseItem == "rock") {
    result.innerHTML = "RESULT : draw";
  } else if (pcChoiseItem == "paper") {
    result.innerHTML = "RESULT : lose";
    PCScore += 1;
    computerScore.innerHTML = "Computer Score : " + PCScore;
  } else {
    result.innerHTML = "RESULT : win";
    YourScore += 1;
    youScore.innerHTML = "You Score : " + YourScore;
  }
};
paper.onclick = function () {
  PCchoise();
  pcSelect.innerHTML = "PC SELECT : " + pcChoiseItem;
  if (pcChoiseItem == "paper") {
    result.innerHTML = "RESULT : draw";
  } else if (pcChoiseItem == "scissors") {
    result.innerHTML = "RESULT : lose";
    PCScore += 1;
    computerScore.innerHTML = "Computer Score : " + PCScore;
  } else {
    result.innerHTML = "RESULT : win";
    YourScore += 1;
    youScore.innerHTML = "You Score : " + YourScore;
  }
};
scissors.onclick = function () {
  PCchoise();
  pcSelect.innerHTML = "PC SELECT : " + pcChoiseItem;
  if (pcChoiseItem == "scissors") {
    result.innerHTML = "RESULT : draw";
  } else if (pcChoiseItem == "rock") {
    result.innerHTML = "RESULT : lose";
    PCScore += 1;
    computerScore.innerHTML = "Computer Score : " + PCScore;
  } else {
    result.innerHTML = "RESULT : win";
    YourScore += 1;
    youScore.innerHTML = "You Score : " + YourScore;
  }
};
