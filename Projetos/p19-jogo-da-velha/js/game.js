let currentPlayer;
const cells = document.querySelectorAll('cells')
const gameTable = ['', '','','','','','','',''];
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
    selectedCell.classList.add('fa-solid', 'fa-xmark', 'player1-color');
    
  } else if(currentPlayer === p2){
    selectedCell.classList.add('fa-regular', 'fa-circle', 'player2-color')
  }

  cell.appendChild(selectedCell)

  // invalidCell(cell)
}

export function checkWinner(cell){

  if(gameTable.includes('')){
    for(let i = 0; i < winCondition.length; i++){
      const condition = winCondition[i] // = [0,1,2]
      // console.log(winCondition[i])
      const cellA = gameTable[condition[0]] // = ['este','','']
      const cellB = gameTable[condition[1]] // = ['','este','']
      const cellC = gameTable[condition[2]] // = ['','','este']

      // usar esses index no array cell, para adicionar a classe
      // gameTable[condition[0]].classList.add('cells-winner')
      if(cellA != '' && cellA == cellB && cellB == cellC){
        const cells = document.querySelectorAll('.cells')
        
        cells[condition[0]].classList.add('cells-winner')
        cells[condition[1]].classList.add('cells-winner')
        cells[condition[2]].classList.add('cells-winner')
       
        setTimeout(function(){
          const winnerModal = document.querySelector('.winner-modal')

          winnerModal.classList.remove('hide')
        }, 1000)
        console.log(`the winner is ${currentPlayer}`)

      }
    }
  } else {
    // draw modal
    // draw score
    console.log('its a draw')
  }
}
