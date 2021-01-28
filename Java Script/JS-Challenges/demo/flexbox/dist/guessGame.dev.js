"use strict";

function startGame() {
  var targetNum = generateRandom();
  var guess = getInput();

  while (guess !== targetNum) {
    if (guess > targetNum) {
      console.log("".concat(guess, " is too high"));
    } else {
      console.log("".concat(guess, " is too low"));
    }

    guess = getInput();
  }

  alert("You Win !!!!");
}

function generateRandom() {
  return Math.floor(Math.random() * 10) + 1;
}

function getInput() {
  var guess = parseInt(prompt("Enter a number"));

  while (Number.isNaN(guess)) {
    guess = parseInt(prompt("Please Enter a valid Number!"));
  }

  return guess;
}

startGame();