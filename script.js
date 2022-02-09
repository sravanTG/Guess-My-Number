"use strict";

// messages
let lowMessage = "wrong guess! your number is lower than mine!";
let highmessage = "wrong guess! your nubmer is higher than mine!";
let correctMessage = "you guessed the correct Number!!!";
let noNumberMesage = "you didn`t enter any number!";
let lostMessage = "you lost the game!!!";
let startMessage = "start the game!";
let myScore = 20;
let myHighscore = 0;

//  buttons
let submitButton = document.querySelector(".submit");
let againButton = document.querySelector(".again");
let resetButton = document.querySelector(".reset");

// number generation
let generatedNumber = Math.trunc(Math.random() * 10) + 1;

// functions
const displayMessage = function (givenMessage) {
  document.querySelector(".warning").textContent = givenMessage;
};

submitButton.addEventListener("click", function () {
  const hisNumber = Number(document.querySelector(".enter").value);
  console.log(hisNumber);
  if (!hisNumber) {
    displayMessage(noNumberMesage);
  } else if (hisNumber === generatedNumber) {
    displayMessage(correctMessage);
    document.querySelector(".secret-number").textContent = generatedNumber;

    if (myScore > myHighscore) {
      myHighscore = myScore;
      document.querySelector(".highscore").textContent =
        "Highscore: " + myHighscore;
    }
  } else if (hisNumber !== generatedNumber) {
    if (myScore > 1) {
      displayMessage(hisNumber > generatedNumber ? highmessage : lowMessage);
      myScore--;
      document.querySelector(".score").textContent = "Score: " + myScore;
    } else {
      displayMessage(lostMessage);
      document.querySelector(".score").textContent = 0;
    }
  }
});

againButton.addEventListener("click", function () {
  myScore = 20;
  generatedNumber = Math.trunc(Math.random() * 10) + 1;
  displayMessage(startMessage);
  document.querySelector(".score").textContent = "Score: " + myScore;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".enter").value = "";
});

resetButton.addEventListener("click", function name(params) {
  myScore = 20;
  myHighscore = 0;
  generatedNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".score").textContent = "Score: " + 0;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".enter").value = "";
  document.querySelector(".highscore").textContent = "Highscore: " + 0;
  displayMessage(startMessage);
});
