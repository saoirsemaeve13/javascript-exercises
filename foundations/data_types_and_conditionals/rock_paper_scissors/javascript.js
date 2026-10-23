function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) return "Rock";
  else if (computerChoice === 2) return "Paper";
  else return "Scissors";
}
let playerScore = 0,
  computerScore = 0;

const weaponBtn = document.querySelectorAll(".weapon");

weaponBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (playerScore >= 5 || computerScore >= 5) {
      console.log("Game over. Player wins.");
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
      console.log(`It's a tie! Both chose ${playerSelection}`);
    } else if (winningMoves[playerSelection] === computerSelection) {
      ++playerScore;
      console.log(
        `Player wins this round! ${playerSelection} beats ${computerSelection}.`,
      );
    } else {
      ++computerScore;
      console.log(
        `Computer wins this round! ${computerSelection} beats ${playerSelection}.`,
      );
    }
    console.log(`Player score is ${playerScore}.`);
    console.log(`Computer score is ${computerScore}`);
  });
});

function playGame() {
  while (playerScore < 5 && computerScore < 5) {
    if (playerScore > computerScore) {
      alert("Player wins!");
    } else {
      alert("Computer wins!");
    }
  }
}

const rpsShoot = document.querySelector("#rpsShoot");
//rpsShoot.addEventListener("click", playGame());

//playGame();
