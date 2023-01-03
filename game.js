//new variables
const computerChoice = document.getElementById('computer-choice');
const userChoice= document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let user;
let computer;
let result;

// add a click event for all the buttons
possibleChoices.forEach(button => button.addEventListener('click', (event) => {
  user = event.target.id // get id of a button clicked
  userChoice.innerHTML = user
  getComputerChoice()
  getResult()
}))

// generate a computer choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) // get a random integer
  if (randomNumber === 0) {
    computer = 'rock';
  }
 else if (randomNumber === 1) {
    computer = 'scissors';
  }
 else if (randomNumber === 2) {
    computer = 'paper';
  }
  computerChoice.innerHTML = computer

}