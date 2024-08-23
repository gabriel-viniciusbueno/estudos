// input is a valid value
function isValidName(){
  
}

// display error with css

function displayGameBoard(){
  const registerSection = document.querySelector('.name-container')
  const gameBoard = document.querySelector('.game-container')

  registerSection.classList.toggle('hide')
  gameBoard.classList.toggle('hide')
}

export const playerNames = []

export function startGame(){
  const player1Input = document.getElementById('name1')
  const player2Input = document.getElementById('name2')

  const playerTurnHeader = document.querySelector('.game-container h2 span')
  playerTurnHeader.innerHTML = player1Input.value

  playerNames.push(player1Input.value, player2Input.value);
  displayGameBoard()
  
  console.log(playerNames)
}




