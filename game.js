//new variables
const computerChoice = document.getElementById('computer-choice');
const userChoice= document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button'); // get the button elements
let user;
let computer;
let result;

// add event listener to all the buttons
possibleChoices.forEach(button => button.addEventListener('click', (event) => {
  user = event.target.id;// get id of a button clicked
  userChoice.innerHTML = user;
  getComputerChoice();
  getResult();
}));

// generates a computer choice
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) // creates a random integer
  if (randomNumber === 0) {
    computer = 'Rock';
  }
  else if (randomNumber === 1) {
    computer = 'Paper';
  }
  else if (randomNumber === 2) {
    computer = 'Scissors';
  }
  computerChoice.innerHTML = computer // displays result in the html

};

// generates a result
function getResult() {
  if (computer === user) {
    result = "It's a draw!";
  }
  else if (computer === 'Rock' && user === 'Paper') {
    result = 'You win!';
  }
  else if (computer === 'Rock' && user === 'Scissors') {
    result = 'Aww you lost.';
  }
  else if (computer === 'Paper' && user === 'Scissors') {
    result = 'You win!';
  }
  else if (computer === 'Paper' && user === 'Rock') {
    result = 'Aww you lost.';
  }
  else if (computer === 'Scissors' && user === 'Rock') {
    result = 'You win!';
  }
  else if (computer === 'Scissors' && user === 'Paper') {
    result = 'Aww you lost.';
  }
  resultDisplay.innerHTML = result // displays result in the html

};

