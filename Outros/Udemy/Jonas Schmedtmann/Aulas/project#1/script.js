'use strict';
const resetBtn = document.querySelector('.again')

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0

const displayMessage = function (message){
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value)
  console.log(guess, typeof guess)
  
  
  
  // there's no input
  if (!guess) {
    displayMessage('No number!')

    // player wins
  } else if (guess === secretNumber){
    displayMessage('Corret number!')
    document.querySelector('.number').textContent = secretNumber

    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '30rem'
    
    if(highscore < score){
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }

    // guess is wrong
  } else if(guess !== secretNumber){
    if (score > 1){
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('You lost the game!')
      document.querySelector('.score').textContent = 0
    }
  }

})

resetBtn.addEventListener('click', function (){
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1

  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})