'use strict';
const resetBtn = document.querySelector('.again')

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)
  
  
  
  // there's no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!'

  // player wins
} else if (guess === secretNumber){
  document.querySelector('.message').textContent = 'Corret Number!'
  document.querySelector('.number').textContent = secretNumber

  document.querySelector('body').style.backgroundColor = '#60b347'

  document.querySelector('.number').style.width = '30rem'

  // guess is too high
} else if (guess > secretNumber) {
  if (score > 1){
    document.querySelector('.message').textContent = 'Too High'
    score--
    document.querySelector('.score').textContent = score
  } else {
    document.querySelector('.message').textContent = 'You lost the game!'
    document.querySelector('.score').textContent = 0
  }

  // guess is too low
} else if (guess < secretNumber) {
  if (score > 1){
    document.querySelector('.message').textContent = 'Too low!'
    score--
    document.querySelector('.score').textContent = score
  } else {
    document.querySelector('.message').textContent = 'You lost the game!'
    document.querySelector('.score').textContent = 0
  }
}

})

resetBtn.addEventListener('click', function (){
  secretNumber = Math.trunc(Math.random() * 20) + 1
  score = 20
  document.querySelector('.number').textContent = '?'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.message').textContent = 'Start Guessing...'
  document.querySelector('.score').textContent = score
  document.querySelector('.guess').value = ''
})