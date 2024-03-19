function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value


    const confirmacao = confirm(`Deseja escalar o jogador ${name}, na posição ${position}, número ${number}?`)
    
    if(confirmacao){
        const teamList = document.getElementById('team-list')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ": " + name + "(" + number + ")"
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }

}