const computerChoice = document.getElementById('computer-choice');
const useryChoice= document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.getElementsByTagName('button');
let user;
let computer;
let result;

//
possibleChoices.forEach(buttons => buttons.addEventListener('click', (event) => {
  userChoice = event.target.id
  userChoice.innerHTML = user
  getComputerChoice()
  getResult()
}))
