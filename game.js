// variables
const computerChoice = document.getElementById('computer-choice');
const userChoice= document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button'); // get the button elements
let user;
let computer;
let result;

// adds event listener to all the buttons
possibleChoices.forEach(button => button.addEventListener('click',(event) => {
  user = event.target.id;// get id of a button clicked
  userChoice.innerHTML = user;
  getComputerChoice();
  getResult();
 
}));

// generates a computer choice
function getComputerChoice() {
  var randomNumber = Math.floor(Math.random() * possibleChoices.length);
  switch (randomNumber) {
    case 0:
      computer = "Rock";
      break;
    case 1:
      computer = "Paper";
      break;
    case 2:
      computer = "Scissors";
      break;
  }
  computerChoice.innerHTML = computer; // displays result in the html
}


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
  resultDisplay.innerHTML = result; // displays result in the html

}

let game = {
  possibleChoices:[],
  randomNumber:[],
  possibleChoices:['Rock', 'Paper', 'Scissors']

};


module.exports = { game };