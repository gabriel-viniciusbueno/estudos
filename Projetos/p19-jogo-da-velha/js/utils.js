let currentPlayer 


function updatePlayerTurnHeader(currentPlayer){
  const playerTurnHeader = document.querySelector('.game-container h2 span')
  playerTurnHeader.innerHTML = currentPlayer + "'s"
}

export function switchPlayer(p1, p2){
  currentPlayer = currentPlayer === p1 ? p2 : p1
  updatePlayerTurnHeader(currentPlayer)
}

export function selectCell(cell, p1, p2){
  const selectedCell = document.createElement('i')
  
  if(currentPlayer === p1){
    selectedCell.classList.add('fa-regular', 'fa-circle')
    
  } else if(currentPlayer === p2){
    selectedCell.classList.add('fa-solid', 'fa-xmark');
  }

  cell.appendChild(selectedCell)
}