export const playerNames = []
export function startGame(){
  const player1Input = document.getElementById('name1')
  const player2Input = document.getElementById('name2')

  playerNames.push(player1Input.value, player2Input.value);

  console.log(playerNames)
}


