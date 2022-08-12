//cache
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
const message = main.querySelector('.message')

const modal = document.querySelector('.modal')
const winner = modal.querySelector('.winner')
const modalBtn = modal.querySelector('button')

const start = document.querySelector('.start')
const humanInput = document.getElementById('human')
const computerInput = document.getElementById('computer')
const startBtn = start.querySelector('button')

//bind
rockBtn.addEventListener('click', () => {
  game.humanChoice = 'R'
  handleChoice()
});
paperBtn.addEventListener('click', () => {
  game.humanChoice = 'P'
  handleChoice()
});
scissorsBtn.addEventListener('click', () => {
  game.humanChoice = 'S'
  handleChoice()
});

modalBtn.addEventListener('click', () => {
  renderGame()
  modal.style.display = 'none'
})

startBtn.addEventListener('click', () => {
  if (humanInput.value) {
    game.humanName = humanInput.value
  } else {
    game.humanName = 'Human'
  }
  if (computerInput.value) {
    game.computerName = computerInput.value
  } else {
    game.computerName = 'Computer'
  }
  renderGame()
  start.style.display = 'none'
}, { once: true })

//game object
const game = {
  humanName: 'Human',
  humanChoice: '',
  humanScore: 0,
  computerName: 'Computer',
  computerChoice: '',
  computerScore: 0,
  message: 'Start game by choosing rock, paper or scissors!',
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

//functions
function handleChoice() {
  game.makeChoice()
  keepScore()
  renderGame()
  tellWinner()
}

function keepScore() {
  if (game.humanChoice === 'R') {
    if (game.computerChoice === 'P') {
      game.computerScore++
      game.message = `${game.computerName} won this round!`
    }
    if (game.computerChoice === 'S') {
      game.humanScore++
      game.message = `${game.humanName} won this round!`
    }
    if (game.computerChoice === 'R') {
      game.message = "This round is a tie!"
    }
  }
  if (game.humanChoice === 'P') {
    if (game.computerChoice === 'S') {
      game.computerScore++
      game.message = `${game.computerName} won this round!`
    }
    if (game.computerChoice === 'R') {
      game.humanScore++
      game.message = `${game.humanName} won this round!`
    }
    if (game.computerChoice === 'P') {
      game.message = "This round is a tie!"
    }
  }
  if (game.humanChoice === 'S') {
    if (game.computerChoice === 'R') {
      game.computerScore++
      game.message = `${game.computerName} won this round!`
    }
    if (game.computerChoice === 'P') {
      game.humanScore++
      game.message = `${game.humanName} won this round!`
    }
    if (game.computerChoice === 'S') {
      game.message = "This round is a tie!"
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
  game.humanChoice = ''
  humanChoice.src = 'blank.png'
  game.humanScore = 0
  game.computerChoice = ''
  computerChoice.src = 'blank.png'
  game.computerScore = 0
  game.message = 'Start game by choosing rock, paper or scissors!'
}

function renderGame() {
  humanName.innerHTML = `${game.humanName}`
  computerName.innerHTML = `${game.computerName}`
  humanScore.innerHTML = `${game.humanScore}`
  computerScore.innerHTML = `${game.computerScore}`
  message.innerHTML = `${game.message}`
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