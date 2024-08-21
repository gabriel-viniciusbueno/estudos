// import {startGame, showPlayerTurn} from './players-name.js'
import {startGame, playerNames} from './players-name.js';

const startBtn = document.querySelector('.start-btn')


startBtn.addEventListener('click', startGame);


document.querySelectorAll('.cells').forEach((cell) => {
  cell.addEventListener('click', () => {
    playerOne = playerNames[0]
    playerTwo = playerNames[1]
    
  })
})




