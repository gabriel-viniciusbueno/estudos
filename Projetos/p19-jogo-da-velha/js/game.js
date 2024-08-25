import {playerNames} from './register-modal.js'

let currentPlayer;
export let  gameIsOver = false
let gameTable = ['', '','','','','','','',''];
const winCondition = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]


function updatePlayerTurnHeader(currentPlayer){
  const playerTurnHeader = document.querySelector('.game-container h2 span')
  playerTurnHeader.innerHTML = currentPlayer + "'s"
}

export function switchPlayer(p1, p2){
  currentPlayer = currentPlayer === p1 ? p2 : p1
  updatePlayerTurnHeader(currentPlayer)
}

 export function isValidCell(cell){
  const cellIndex = cell.getAttribute('data-index-cell')

  if(gameTable[cellIndex] == ''){
    return gameTable[cellIndex] = currentPlayer
    
  } else{
    return false
  }
}
export function selectCell(cell, p1, p2){
  const selectedCell = document.createElement('i')
  if(currentPlayer === p1){
    selectedCell.classList.add('fa-solid', 'fa-xmark', 'player1-color', 'remove');
    
  } else if(currentPlayer === p2){
    selectedCell.classList.add('fa-regular', 'fa-circle', 'player2-color', 'remove')
  }

  cell.appendChild(selectedCell)
}

export function checkWinner(){
  for(let i = 0; i < winCondition.length; i++){
    const condition = winCondition[i] 
    // console.log(winCondition[i])
    const cellA = gameTable[condition[0]]
    const cellB = gameTable[condition[1]]
    const cellC = gameTable[condition[2]]
    
    if(cellA != '' && cellA == cellB && cellB == cellC){
      gameIsOver = true
      const cells = document.querySelectorAll('.cells')
      
      cells[condition[0]].classList.add('cells-winner')
      cells[condition[1]].classList.add('cells-winner')
      cells[condition[2]].classList.add('cells-winner')
      
      const winnerModal = document.querySelector('.winner-modal')
      const winnerIs = document.querySelector('.winner-modal h2 span')
      winnerModal.classList.remove('hide')
      winnerIs.textContent = currentPlayer
      
      
      const player1Name = playerNames[0]
      const player2Name = playerNames[1]
      playerScores(player1Name, player2Name)
    }
  }

}

export function checkDraw(){
  console.log(gameTable)
  if(!gameTable.includes('')){
    drawScores()
    gameIsOver = true
    const drawModal = document.querySelector('.draw-modal')
    drawModal.classList.remove('hide')
  }
}

function playerScores(p1, p2){
  if(currentPlayer == p1){
    let p1Score = document.getElementById('player1-score')
    let text = p1Score.textContent
    let number = parseInt(text) + 1
    p1Score.innerHTML = number

  } else if(currentPlayer == p2){
    let p2Score = document.getElementById('player2-score')
    let text = p2Score.textContent
    let number = parseInt(text) + 1
    p2Score.innerHTML = number
  }
}

function drawScores(){
  let drawScore = document.getElementById('draw-score')
  let text = drawScore.textContent
  let number = parseInt(text) + 1
  drawScore.innerHTML = number
}

export function restartGame(){
  gameTable = ['', '','','','','','','','']
  gameIsOver = false
  
  const gameModal = document.querySelector('.game-container')
  gameModal.classList.add('hide')
  const nameModal = document.querySelector('.name-container')
  nameModal.classList.remove('hide')
  const winnerModal = document.querySelector('.winner-modal')
  winnerModal.classList.add('hide')
  const drawModal = document.querySelector('.draw-modal')
  drawModal.classList.add('hide')
  
  const cells = document.querySelectorAll('.cells')
  const cellsIcon = document.querySelectorAll('.remove')
  cellsIcon.forEach((icon) => {
    icon.remove()
  })
  
  cells.forEach((cell) => {
    cell.classList.remove('cells-winner')
    cell.classList.remove('cells-clicked')
  })

  let p1Score = document.getElementById('player1-score')
  p1Score.textContent = 0

  let p2Score = document.getElementById('player2-score')
  p2Score.textContent = 0

  let drawScore = document.getElementById('draw-score')
  drawScore.textContent = 0

}

export function playAgain(){
  const cells = document.querySelectorAll('.cells')
  const cellsIcon = document.querySelectorAll('.remove')
  cellsIcon.forEach((icon) => {
    icon.remove()
  })

  const winnerModal = document.querySelector('.winner-modal')
  winnerModal.classList.add('hide')
  const drawModal = document.querySelector('.draw-modal')
  drawModal.classList.add('hide')
  
  cells.forEach((cell) => {
    cell.classList.remove('cells-winner')
    cell.classList.remove('cells-clicked')
  })

  gameTable = ['', '','','','','','','','']
  gameIsOver = false
}