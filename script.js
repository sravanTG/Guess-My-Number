"use strict";

// messages
let lowMessage = "wrong guess! your number is lower than mine!";
let highmessage = "wrong guess! your number is higher than mine!";
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
let generatedNumber = Math.trunc(Math.random() * 20) + 1;

// functions

// this function picks a message from the above messages according to the conditions.

const displayMessage = function (givenMessage) {
  document.querySelector(".warning").textContent = givenMessage;
};

// when clicked on the submit button

submitButton.addEventListener("click", function () {
  const hisNumber = Number(document.querySelector(".enter").value);

  // if user pressed submit without giving an input.
  if (!hisNumber) {
    displayMessage(noNumberMesage);

    // if the user number is matching with the computer number.
  } else if (hisNumber === generatedNumber) {
    displayMessage(correctMessage);
    document.querySelector(".secret-number").textContent = generatedNumber;

    if (myScore > myHighscore) {
      myHighscore = myScore;
      document.querySelector(".highscore").textContent =
        "Highscore: " + myHighscore;
    }

    // if user number is greater than or less thon the computer number.
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

// when clicked on the again button.

againButton.addEventListener("click", function () {
  myScore = 20;
  generatedNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(startMessage);
  document.querySelector(".score").textContent = "Score: " + myScore;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".enter").value = "";
});

// when clicked on the reset button.

resetButton.addEventListener("click", function name(params) {
  myScore = 20;
  myHighscore = 0;
  generatedNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = "Score: " + 0;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".enter").value = "";
  document.querySelector(".highscore").textContent = "Highscore: " + 0;
  displayMessage(startMessage);
});
