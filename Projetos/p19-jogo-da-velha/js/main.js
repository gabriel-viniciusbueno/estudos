// import {startGame, showPlayerTurn} from './players-name.js'
import {startGame, playerNames} from './register-modal.js';
import {switchPlayer, selectCell, isValidCell, checkWinner, checkDraw, gameIsOver, restartGame, playAgain} from './game.js';

let playerOne
let playerTwo



const startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('click', startGame);

document.querySelectorAll('.cells').forEach((cell) => {

  cell.addEventListener('click', () => {
    if(isValidCell(cell)){
      cell.classList.add('cells-clicked')
    } else {
      return
    }

    checkWinner()

    playerOne = playerNames[0]
    playerTwo = playerNames[1]
    selectCell(cell, playerOne, playerTwo)

    if(!gameIsOver){
      checkDraw()
    } else {
      return
    }

    switchPlayer(playerOne, playerTwo)
    
  })
})

document.querySelector('.restart-game').addEventListener('click', restartGame)

document.getElementById('restart-game-id').addEventListener('click', restartGame)

document.querySelectorAll('.play-again').forEach((btn) => {
  btn.addEventListener('click', playAgain)
})
