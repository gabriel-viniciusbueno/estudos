// Formulário
const firstFormModal = document.querySelector('.form-container')
let player1Name
let player2Name

// Jogo
const secondGameboard = document.querySelector('.board-container')
let gameCards = document.querySelectorAll('.game-cards')
const playersTurn = document.querySelector('.board-container h2 span')
const resetGameModal = document.querySelector('.reset-container')
const modalContainerButton = document.querySelector('.modal-container button')
const winnerPlayerInput = document.querySelector('.reset-modal h2 span')
let gameIsRunning = false
let whoIsNext = 'X'
let currentPlayer
const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]
]


const formData = {
  p1NameInput: document.getElementById('p1Name'),
  p2NameInput: document.getElementById('p2Name'),
  startButton: document.querySelector('.form-container button')
}

const AlertError = {
  errorMessage: firstFormModal.querySelector('.alert-error'),
  open() {
    this.errorMessage.classList.add('open')
  },
  close() {
    this.errorMessage.classList.remove('open')
  }
}


//Functions


function sendingForm(){
  const p1Name = formData.p1NameInput.value
  const p2Name = formData.p2NameInput.value

  if( p1Name === '' || p2Name === ''){
    AlertError.open()
    return
  }

  player1Name = formData.p1NameInput.value
  player2Name = formData.p2NameInput.value

  startGame()
}

function startGame() {
  gameIsRunning = true

  firstFormModal.classList.add('hide')
  secondGameboard.classList.remove('hide')

  gameCards.forEach( (e) => {
    e.addEventListener('click', nextTurn)
  
  })
  

  currentPlayer = player1Name

  playersTurn.innerText = currentPlayer

}

function nextTurn(e){
  e.target.innerText = whoIsNext

  checkWinner()
  whoIsNext = whoIsNext == 'X' ? 'O' : 'X'

  currentPlayer = whoIsNext == 'X' ? player1Name : player2Name

  playersTurn.innerText = currentPlayer

  e.target.classList.add('checked')

  e.currentTarget.removeEventListener('click', nextTurn)

  if(checkDraw()){
    showResetModalDraw()
  }
}

function checkWinner(){

  winCondition.forEach( (combination) => {
    let check = combination.every(idx => gameCards[idx].innerText.trim() == whoIsNext)
    if(check){
      highlightCells(combination)

      showResetModalWinner()
    }
  })
}

function checkDraw(){
  return [...gameCards].every(cell => {
    return cell.classList.contains('checked')
  })
}

function highlightCells(combination) {
  combination.forEach((idx) => {
    gameCards[idx].classList.add('highlight')
  })
}


function showResetModalDraw(){
  
  resetGameModal.classList.remove('hide')

  winnerPlayerInput.innerText = 'Ninguém'


  setTimeout( () => {
    resetGameModal.classList.add('show-restart-modal')
  }, 1500)
}

function showResetModalWinner(){

  resetGameModal.classList.remove('hide')

  if(whoIsNext == 'X'){
    winnerPlayerInput.innerText = player1Name 
  } else{
    winnerPlayerInput.innerText = player2Name
  }

  setTimeout( () => {
    resetGameModal.classList.add('show-restart-modal')
  }, 1200)
}


function restartGame(){
  if(gameIsRunning){
    gameIsRunning = false;

    resetGameModal.classList.add('hide')
    secondGameboard.classList.add('hide')
    firstFormModal.classList.remove('hide')

    gameCards = document.querySelectorAll('.game-cards')

    formData.p1NameInput.value = ''
    formData.p2NameInput.value = ''

    p1Name = ''
    p2name = ''

    whoIsNext = 'X'

    gameCards.forEach((card) => {
      card.classList.remove('highlight')
      card.classList.remove('checked')
      card.innerText = ''
      card.removeEventListener('click', nextTurn)
    })

    resetGameModal.classList.remove('show-restart-modal')
  }
}


// Input validation
formData.p1NameInput.oninput = () => {
  AlertError.close()
}
formData.p2NameInput.oninput = () => {
  AlertError.close()
}


formData.startButton.addEventListener('click', sendingForm)

modalContainerButton.addEventListener('click', restartGame)