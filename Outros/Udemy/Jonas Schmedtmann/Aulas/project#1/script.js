'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)
})

if (!guess) {
  document.querySelector('.message').textContent = 'No number!'
} else if (geuss === secretNumber){

}