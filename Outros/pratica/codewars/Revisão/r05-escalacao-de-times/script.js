const playerName = document.getElementById('name')
const playerPosition = document.getElementById('position')
const playerNumber = document.getElementById('number')
const addBtn = document.getElementById('add-player-btn')
const ulTeam = document.getElementById('team')
const removePlayer = document.getElementById('remove-player-btn')

addBtn.addEventListener('click', (e) => {
  e.preventDefault()


  const playerLi = document.createElement('li')

  const confirmacao = confirm(playerName.value + ' é ' + playerPosition.value + ' e camisa ' + playerNumber.value + '?')
  if(confirmacao){
    playerLi.id = 'player' + playerNumber.value
    playerLi.className = 'players'
    playerLi.innerHTML = 'player: ' + playerName.value + ' (' + playerNumber.value + ') ' + playerPosition.value

    ulTeam.appendChild(playerLi)
  }
})


removePlayer.addEventListener('click', (e) => {
  e.preventDefault()
  const players = document.querySelectorAll('.players')
  const numberInput = document.getElementById('number-to-delete').value
  console.log(numberInput)

  players.forEach(function(player){
    if(player.id == 'player' + numberInput){
      ulTeam.removeChild(player)
    }
  })

  
  
})
