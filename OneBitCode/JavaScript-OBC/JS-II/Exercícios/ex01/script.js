// let jogadores =  []

// function escalar(){
//     const pNome = document.getElementById('player-name').value
//     const pPosition = document.getElementById('player-position').value
//     const pNumber = document.getElementById('player-number').value


//     const confirmacao = confirm(`Deseja escalar o jogador ${pNome}, de número ${pNumber}, na posição ${pPosition}?`)

//     if(confirmacao){
//         const jogador = {
//             name: pNome,
//             position: pPosition,
//             number: pNumber
//         }

//         const playerList = document.getElementById('players-section')
//         const list = document.createElement('ul')
//         const listItem = document.createElement('li')
//         listItem = listItem.innerText(jogador)
//         list.appendChild(listItem)
//         playerList.appendChild(list)
//         // jogadores.push(jogador)
//         alert(pNome + ' escalado com sucesso')
//         console.log(jogador)
//     }

function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    console.log({position,name,number})

    const confirmacao = confirm(`Deseja escalar o jogador ${name}, de número ${number}, na posição ${position}?`)

    if(confirmacao){
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ": " + name + "(" + number + ")"
        teamList.appendChild(playerItem)

        document.getElementById('position').value = ''
        document.getElementById('name').value = ''
        document.getElementById('number').value = ''
    }
}

function removePlayer(){
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmacao = confirm(`Remover o jogador ${playerToRemove.innerText}?`)

    if(confirmacao){
        document.getElementById('teamList').removeChild(playerToRemove)

        document.getElementById('numberToRemove').value = ''
    }
}