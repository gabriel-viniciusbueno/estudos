const startGameBtn = document.getElementById('start-game-btn')

const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
const DEFAULT_USER_CHOICE = PAPER
const RESULT_DRAW = 'DRAW'
const RESULT_PLAYER_WINS = 'YOU WON'
const RESULT_PLAYER_LOST = 'YOU LOST'


let gameIsRunning = false

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase()

  if (selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS) {
    alert(`Invalid Choice! We choose ${DEFAULT_USER_CHOICE} for you!`)
    return
  }
  return selection
}

const getComputerChoice = function () {
  const randomValue = Math.random()
  if (randomValue < 0.34) {
    return ROCK
  } else if (randomValue < 0.67) {
    return PAPER
  } else {
    return SCISSORS
  }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
  cChoice === pChoice
  ? RESULT_DRAW
  : cChoice === ROCK && pChoice === PAPER ||
    cChoice === PAPER && pChoice === SCISSORS ||
    cChoice === SCISSORS && pChoice === ROCK 
  ? RESULT_PLAYER_WINS
  : RESULT_PLAYER_LOST

  // if (cChoice === pChoice) {
  //   return RESULT_DRAW
  // } else if (
  //   cChoice === ROCK && pChoice === PAPER ||
  //   cChoice === PAPER && pChoice === SCISSORS ||
  //   cChoice === SCISSORS && pChoice === ROCK
  // ) {
  //   return RESULT_PLAYER_WINS
  // } else {
  //   return RESULT_PLAYER_LOST
  // }

startGameBtn.addEventListener('click', function () {
  if (gameIsRunning) {
    return
  }
  gameIsRunning = true

  const playerChoice = getPlayerChoice()
  const computerChoice = getComputerChoice()
  let winner
  if(playerChoice){
    winner = getWinner(computerChoice, playerChoice)
  } else {
    winner = getWinner(computerChoice)
  }
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE} and Computer picked ${computerChoice}, therefore you `
  if(winner === RESULT_DRAW){
    message += 'had a draw.'
  } else if(winner === RESULT_PLAYER_WINS){
    message += 'won.'
  } else{
    message += 'lost.'
  }
  alert(message)
  gameIsRunning = false
})