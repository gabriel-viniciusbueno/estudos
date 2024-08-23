let currentPlayer


function updatePlayerTurnHeader(currentPlayer){
  const playerTurnHeader = document.querySelector('.game-container h2 span')
  playerTurnHeader.innerHTML = currentPlayer + "'s"
}

export function switchPlayer(p1, p2){
  currentPlayer = currentPlayer === p2 ? p1 : p2

  updatePlayerTurnHeader(currentPlayer)
}