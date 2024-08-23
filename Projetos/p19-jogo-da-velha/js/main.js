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

    selectCell(cell)
    switchPlayer(playerOne, playerTwo)
    // getting cell data index
    // console.log(cell.getAttribute('data-index-cell'))
     
  })
})

function selectCell(cell){
  // criar elemento html e indexar ao cell
  const selectedCell = document.element('i class="fa-solid fa-xmark"')
  cell.appendChild(selectedCell)
}

// gametable events (selected cells, invalid cells)
  // get cellIndex with getattribute, and fill gamestate array

// change player and players turn header
  // if current player is player1, switch to player2

// checkwin




