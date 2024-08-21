export let playerNames = []

import './players-name.js'
//depois do clique, tenho acesso aos dados de playernames

document.querySelectorAll('.cells').forEach((n) => {
  n.addEventListener('click', () => console.log(playerNames))
})







