// import {startGame, showPlayerTurn} from './players-name.js'
import {startGame, playerNames} from './register-modal.js';
import {switchPlayer, selectCell, isValidCell} from './game.js';

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
    
    playerOne = playerNames[0]
    playerTwo = playerNames[1]
    selectCell(cell, playerOne, playerTwo)
    switchPlayer(playerOne, playerTwo)
  })
})

// checkwinner
// com um for, verificar se todos os elementos do array de arrays (winCondition) está preenchido com o mesmo dado




