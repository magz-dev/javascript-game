const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.getElementsByClassName('option')
let yourChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  yourChoice = e.target.id
  yourChoiceDisplay.innerHTML = yourChoice
  generateComputerChoice()
  getResult()
}))

