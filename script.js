// the variables
let score = 0;
let playerSelection = "";
let computerSelection = "";
let roundResult = ""

// the selectors
let gameResult = document.getElementById('result');
let rockButton = document.getElementById('rock-btn');
let paperButton = document.getElementById('paper-btn');
let scissorsButton = document.getElementById('scissors-btn');

// button click actions
rockButton.addEventListener('click', () => {
  let result = onePlay('rock');
  keepScore(result);
  displayResult(score);
});
paperButton.addEventListener('click', () => {
  let result = onePlay('paper');
  keepScore(result);
  displayResult(score);
});
scissorsButton.addEventListener('click', () => {
  let result = onePlay('scissors');
  keepScore(result);
  displayResult(score);
});

// takes players play and returns round result
function onePlay(playerInput) {
  playerSelection = playerInput;
  computerSelection = computerPlay();
  roundResult = oneRound(playerSelection, computerSelection);
  return roundResult;
}

// updates score
function keepScore(roundResult) {
  if (roundResult === 'win') {
    score++;
  } else if (roundResult === 'lose') {
    score--;
  }

  // displays current state of game
  document.getElementById('info').innerHTML = `You played: ${playerSelection} <br>Computer played: ${computerSelection}<br>This round: You ${roundResult}<br> Total score: ${score}`;
}

//returns randomly "rock", "paper" or "scissors"
function computerPlay() {
  let randomNumberZeroToTwo = Math.floor(Math.random() * 3);
  switch (randomNumberZeroToTwo) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

// takes player and computer plays and returns the winner
function oneRound(playerSelection, computerSelection) {
  if (playerSelection === "rock") {
    switch (computerSelection) {
      case "rock":
        return "tie";
      case "paper":
        return "lose";
      case "scissors":
        return "win";
    }
  } else if (playerSelection === "paper") {
    switch (computerSelection) {
      case "rock":
        return "win";
      case "paper":
        return "tie";
      case "scissors":
        return "lose";
    }
  } else if (playerSelection === "scissors") {
    switch (computerSelection) {
      case "rock":
        return "lose";
      case "paper":
        return "win";
      case "scissors":
        return "tie";
    }
  }
}

// game state + reset button if game over
function displayResult(currentScore) {
  if (currentScore > 2) {
    gameResult.innerHTML = 'You WON the game! :)<br>';
    gameResult.appendChild(resetButton);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (currentScore < -2) {
    gameResult.innerHTML = 'You LOST the game! :(<br>';
    gameResult.appendChild(resetButton);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else {
    gameResult.innerHTML = 'still playing...';
  }
}

// creates reset button
const resetButton = document.createElement('button');
resetButton.innerHTML = 'Click to play again!';
resetButton.addEventListener('click', () => {
  location.reload();
})