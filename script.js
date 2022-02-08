//returns randomly "rock", "paper" or "scissors"
function computerPlay() {
  let randomNumberZeroToTwo = Math.floor(Math.random() * 3);
  switch (randomNumberZeroToTwo) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

// takes player and computer plays and returns the winner
function oneRound(playerSelection, computerSelection) {
  let playerSelectionLowerCase = playerSelection.toLowerCase();
  if (playerSelectionLowerCase === "rock") {
    switch (computerSelection) {
      case "rock":
        return "tie";
      case "paper":
        return "lose";
      case "scissors":
        return "win";
    }
  } else if (playerSelectionLowerCase === "paper") {
    switch (computerSelection) {
      case "rock":
        return "win";
      case "paper":
        return "tie";
      case "scissors":
        return "lose";
    }
  } else if (playerSelectionLowerCase === "scissors") {
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

// plays 5 times oneRound() and outputs the winner (call from console!)
function game() {
  let score = 0;
  for (let i = 0; i < 5; i++) {
    let playerInput = prompt("Rock, paper or scissors?");
    let round = oneRound(playerInput, computerPlay());
    if (round === "win") {
      score++;
    } else if (round === "lose") {
      score--
    }
  }
  (score > 0) ? document.getElementById("message").innerHTML = "WIN" : (score < 0) ? document.getElementById("message").innerHTML = "LOSE" : document.getElementById("message").innerHTML = "TIE";
}