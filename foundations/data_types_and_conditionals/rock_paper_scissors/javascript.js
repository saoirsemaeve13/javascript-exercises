function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) return "Rock";
  else if (computerChoice === 2) return "Paper";
  else return "Scissors";
}
let playerScore = 0,
  computerScore = 0;

const weaponBtn = document.querySelectorAll(".weapon");
const resultsBody = document.querySelector(".results");
const para = document.createElement("p");

weaponBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (playerScore >= 5 || computerScore >= 5) {
      if (playerScore > computerScore) {
        para.textContent = "Player wins. Game Over. Press shoot to restart.";
        resultsBody.appendChild(para);
      } else {
        para.textContent = "Game over. Computer wins. Press shoot to restart.";
        resultsBody.appendChild(para);
      }
      return;
    }

    const winningMoves = {
      Rock: "Scissors",
      Paper: "Rock",
      Scissors: "Paper",
    };

    const playerSelection = button.dataset.choice;
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
      para.textContent = `It's a tie! Both chose ${playerSelection}. Player score is ${playerScore}. Computer score is ${computerScore}.`;
      resultsBody.appendChild(para);
    } else if (winningMoves[playerSelection] === computerSelection) {
      ++playerScore;
      para.textContent = `Player wins this round! ${playerSelection} beats ${computerSelection}. Player score is ${playerScore}. Computer score is ${computerScore}.`;
      resultsBody.appendChild(para);
    } else {
      ++computerScore;
      para.textContent = `Computer wins this round! ${computerSelection} beats ${playerSelection}. Player score is ${playerScore}. Computer score is ${computerScore}.`;
      resultsBody.appendChild(para);
    }

    if (playerScore >= 5 || computerScore >= 5) {
      if (playerScore > computerScore) {
        para.textContent = "Player wins! Press shoot to restart the game!";
        resultsBody.appendChild(para);
      } else {
        para.textContent = "Computer wins! Press shoot to restart the game!";
        resultsBody.appendChild(para);
      }
    }
  });
});

const rpsShoot = document.querySelector("#rpsShoot");
rpsShoot.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  para.textContent = "Scores have been reset.";
  resultsBody.appendChild(para);
});

//playGame();
