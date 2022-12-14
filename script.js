import { startConfetti, removeConfetti } from './confetti.js';

const humanScoreEl = document.getElementById('humanScore');
const humanChoiceEl = document.getElementById('humanChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const result = document.getElementById('result');

const humanRock = document.getElementById('humanRock');
const humanPaper = document.getElementById('humanPaper');
const humanScissors = document.getElementById('humanScissors');
const humanLizard = document.getElementById('humanLizard');
const humanSpock = document.getElementById('humanSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allIcons = document.querySelectorAll('.fa-solid');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let computerChoice = '';
let humanScore = 0;
let computerScore = 0;

// Computer's random choice
const computerRandomChoice = function () {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  if (randomNumber === 1) computerChoice = 'rock';
  if (randomNumber === 2) computerChoice = 'paper';
  if (randomNumber === 3) computerChoice = 'scissors';
  if (randomNumber === 4) computerChoice = 'lizard';
  if (randomNumber === 5) computerChoice = 'spock';
};

// Marking the computer's choice and writing it on the UI
const displayComputerChoice = function () {
  switch (computerChoice) {
    case 'rock':
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = ' -> Rock';
      break;
    case 'paper':
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' -> Paper';
      break;
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' -> Scissors';
      break;
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' -> Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' -> Spock';
      break;
    default:
      break;
  }
};

// Remove the seleted class each time we run the function
const removeSelectedClass = function () {
  allIcons.forEach(icon => icon.classList.remove('selected'));
};

// Reset score, choices, result and selection
const reset = function () {
  humanScore =
    humanScoreEl.textContent =
    computerScore =
    computerScoreEl.textContent =
      0;
  humanChoiceEl.textContent = computerChoiceEl.textContent = '';
  result.textContent = 'Result';
  removeSelectedClass();
  removeConfetti();
};
window.reset = reset;

// Function chain
const checkResult = function (humanChoice) {
  removeSelectedClass();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(humanChoice);
};

// Marking the selected choice and writing it on the UI
const select = function (humanChoice) {
  checkResult(humanChoice);

  switch (humanChoice) {
    case 'rock':
      humanRock.classList.add('selected');
      humanChoiceEl.textContent = ' -> Rock';
      break;
    case 'paper':
      humanPaper.classList.add('selected');
      humanChoiceEl.textContent = ' -> Paper';
      break;
    case 'scissors':
      humanScissors.classList.add('selected');
      humanChoiceEl.textContent = ' -> Scissors';
      break;
    case 'lizard':
      humanLizard.classList.add('selected');
      humanChoiceEl.textContent = ' -> Lizard';
      break;
    case 'spock':
      humanSpock.classList.add('selected');
      humanChoiceEl.textContent = ' -> Spock';
      break;
    default:
      break;
  }
};
window.select = select;

// Find the winner, calculate score and update the UI
const updateScore = function (humanChoice) {
  if (humanChoice === computerChoice) {
    result.textContent = 'Tie! 🤝';
    removeConfetti();
  } else {
    // const choice = choices[humanChoice];
    if (choices[humanChoice].defeats.includes(computerChoice)) {
      humanScore++;
      humanScoreEl.textContent = humanScore;
      result.textContent = 'You won! 🏆';
      startConfetti();
    } else {
      computerScore++;
      computerScoreEl.textContent = computerScore;
      result.textContent = 'You lost! 😢';
      removeConfetti();
    }
  }
};
