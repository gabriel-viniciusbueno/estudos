// import {startGame, showPlayerTurn} from './players-name.js'
import {startGame, playerNames} from './register-modal.js';
import {switchPlayer} from './utils.js';

let playerOne
let playerTwo

const startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('click', startGame);

document.querySelectorAll('.cells').forEach((cell) => {
  cell.addEventListener('click', () => {
    playerOne = playerNames[0]
    playerTwo = playerNames[1]
    switchPlayer(playerOne, playerTwo)
    // updatePlayerTurnHeader(currentPlayer)
    // getting cell data index
    // console.log(cell.getAttribute('data-index-cell'))
     
  })
})

// gametable events (selected cells, invalid cells)
  // get cellIndex with getattribute, and fill gamestate array

// change player and players turn header
  // if current player is player1, switch to player2

// checkwin




