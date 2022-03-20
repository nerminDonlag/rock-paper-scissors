const main = document.querySelector('.main')
const human = main.querySelector('.human')
const computer = main.querySelector('.computer')
const humanName = human.querySelector('.name')
const computerName = computer.querySelector('.name')
const humanChoice = human.querySelector('.choice')
const computerChoice = computer.querySelector('.choice')
const humanScore = human.querySelector('.score')
const computerScore = computer.querySelector('.score')
const rockBtn = main.querySelector('.rock')
const paperBtn = main.querySelector('.paper')
const scissorsBtn = main.querySelector('.scissors')

rockBtn.addEventListener('click', () => {
  game.humanChoice = 'R'
  game.makeChoice()
  keepScore()
  renderGame()
  tellWinner()
});
paperBtn.addEventListener('click', () => {
  game.humanChoice = 'P'
  game.makeChoice()
  keepScore()
  renderGame()
  tellWinner()
});
scissorsBtn.addEventListener('click', () => {
  game.humanChoice = 'S'
  game.makeChoice()
  keepScore()
  renderGame()
  tellWinner()
});

const game = {
  humanName: 'Player',
  humanChoice: '-',
  humanScore: 0,
  computerName: 'Computer',
  computerChoice: '-',
  computerScore: 0,
  makeChoice: function () {
    let temp = Math.floor(Math.random() * 3)
    switch (temp) {
      case 0:
        this.computerChoice = 'R'
        break
      case 1:
        this.computerChoice = 'P'
        break
      case 2:
        this.computerChoice = 'S'
        break
    }
  },
}

function keepScore() {
  if (game.humanChoice === 'R') {
    if (game.computerChoice === 'P') {
      game.computerScore++
    }
    if (game.computerChoice === 'S') {
      game.humanScore++
    }
  }
  if (game.humanChoice === 'P') {
    if (game.computerChoice === 'S') {
      game.computerScore++
    }
    if (game.computerChoice === 'R') {
      game.humanScore++
    }
  }
  if(game.humanChoice === 'S') {
    if(game.computerChoice === 'R') {
      game.computerScore++
    }
    if(game.computerChoice === 'P') {
      game.humanScore++
    }
  }
}

function tellWinner() {
  if(game.humanScore === 5) {
    resetGame()
  }
  if(game.computerScore === 5) {
    resetGame()
  }
}

function resetGame() {
  game.humanChoice = '-'
  game.humanScore = 0
  game.computerChoice = '-'
  game.computerScore = 0
}

function renderGame() {
  humanName.innerHTML = `${game.humanName}`
  computerName.innerHTML = `${game.computerName}`
  humanChoice.innerHTML = `${game.humanChoice}`
  computerChoice.innerHTML = `${game.computerChoice}`
  humanScore.innerHTML = `${game.humanScore}`
  computerScore.innerHTML = `${game.computerScore}`
}