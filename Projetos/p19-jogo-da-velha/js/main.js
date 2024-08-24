// import {startGame, showPlayerTurn} from './players-name.js'
import {startGame, playerNames} from './register-modal.js';
import {switchPlayer, selectCell} from './game.js';

let playerOne
let playerTwo

const gameTable = ['', '','','','','','','','']

const startBtn = document.querySelector('.start-btn');

startBtn.addEventListener('click', startGame);

document.querySelectorAll('.cells').forEach((cell) => {
  cell.addEventListener('click', (clickedCell) => {
    const cellIndex = cell.getAttribute('data-index-cell')
    
    if(gameTable[cellIndex] == ''){
      // add style for invalid cell
    } else{
      return
    }

    playerOne = playerNames[0]
    playerTwo = playerNames[1]

    gameTable[cellIndex] = cellIndex

    // valid cell check
    // gameTable.forEach((e) => {
    //   if(e === ''){
    //     // continuar jogo
    //   } else {
    //     // erro
    //   }
    // })

    for( let i = 0; i <= gameTable.length; i++){
      if(gameTable[i] === ''){
        // enquanto isso aqui for true, rode o jogo
      }
    }

    selectCell(cell, playerOne, playerTwo)
    switchPlayer(playerOne, playerTwo)
  })
})


// gametable events (selected cells, invalid cells)
  // get cellIndex with getattribute, and fill gamestate array

// change player and players turn header
  // if current player is player1, switch to player2

// checkwin




