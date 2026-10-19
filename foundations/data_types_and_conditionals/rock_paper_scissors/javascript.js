//      console.log("hello world");

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;
        if (computerChoice === 1) return "Rock";
    else if (computerChoice === 2) return "Paper";
    else return "Scissors";
        }

function getHumanChoice() {
    const humanChoice = prompt("Rock, paper, or scissors?");
    return humanChoice;
}

const finalChoice = getComputerChoice();
console.log("Computer choice is " + finalChoice);
const playerChoice = getHumanChoice();
console.log("Player choice is " + playerChoice);

let playerScore = 0,
    computerScore = 0;


function playRound(playerChoice, computerChoice) {

}