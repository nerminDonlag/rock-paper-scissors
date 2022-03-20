const main = document.querySelector('.main')
const human = main.querySelector('.human')
const computer = main.querySelector('.computer')
const humanName = human.querySelector('.name')
const computerName = computer.querySelector('.name')
const humanChoice = human.querySelector('img')
const computerChoice = computer.querySelector('img')
const humanScore = human.querySelector('.score')
const computerScore = computer.querySelector('.score')
const rockBtn = main.querySelector('.rock')
const paperBtn = main.querySelector('.paper')
const scissorsBtn = main.querySelector('.scissors')

const modal = document.querySelector('.modal')
const winner = modal.querySelector('.winner')
const modalBtn = modal.querySelector('button')

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

modalBtn.addEventListener('click', () => {
  renderGame()
  modal.style.display = 'none'
})

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
  if (game.humanChoice === 'S') {
    if (game.computerChoice === 'R') {
      game.computerScore++
    }
    if (game.computerChoice === 'P') {
      game.humanScore++
    }
  }
}

function tellWinner() {
  if (game.humanScore === 5) {
    winner.innerHTML = `${game.humanName} won!`
    modal.style.display = 'flex'
    resetGame()
  }
  if (game.computerScore === 5) {
    winner.innerHTML = `${game.computerName} won!`
    modal.style.display = 'flex'
    resetGame()
  }
}

function resetGame() {
  game.humanChoice = '-'
  humanChoice.src = 'blank.png'
  game.humanScore = 0
  game.computerChoice = '-'
  computerChoice.src = 'blank.png'
  game.computerScore = 0
}

function renderGame() {
  humanName.innerHTML = `${game.humanName}`
  computerName.innerHTML = `${game.computerName}`
  humanScore.innerHTML = `${game.humanScore}`
  computerScore.innerHTML = `${game.computerScore}`
  switch (game.humanChoice) {
    case 'R':
      humanChoice.src = 'rock.png'
      break
    case 'P':
      humanChoice.src = 'paper.png'
      break
    case 'S':
      humanChoice.src = 'scissors.png'
      break
  }
  switch (game.computerChoice) {
    case 'R':
      computerChoice.src = 'rock.png'
      break
    case 'P':
      computerChoice.src = 'paper.png'
      break
    case 'S':
      computerChoice.src = 'scissors.png'
      break
  }
}