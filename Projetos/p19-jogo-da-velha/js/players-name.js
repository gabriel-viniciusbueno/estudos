import { playerNames } from "./script.js";

document.querySelector('.start-btn').addEventListener('click', function () {
  const playerName1 = document.getElementById('name1').value;
  const playerName2 = document.getElementById('name2').value;

  playerNames.push(playerName1, playerName2)

  const namesModal = document.querySelector('.name-container')
  const gameModal = document.querySelector('.game-container')

  namesModal.classList.toggle('hide');
  gameModal.classList.toggle('hide')
  console.log(playerNames)
});






