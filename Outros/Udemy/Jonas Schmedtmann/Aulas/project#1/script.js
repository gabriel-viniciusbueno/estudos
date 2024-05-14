'use strict';
const resetBtn = document.querySelector('.again')

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0
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
  
  if(highscore < score){
    highscore = score
    document.querySelector('.highscore').textContent = highscore
  }



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
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  document.querySelector('.message').textContent = 'Start Guessing...'
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})