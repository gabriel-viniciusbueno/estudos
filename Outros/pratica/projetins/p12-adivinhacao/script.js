const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')


const tryButton = document.querySelector('.screen1 button')
const resetButton = document.querySelector('.screen2 button')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1


function handleClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) == randomNumber){
    screen1.classList.add('hide')
    screen2.classList.remove('hide')

    document.querySelector('.screen2 h2').innerText = `acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++
} 

tryButton.addEventListener('click', handleClick)
resetButton.addEventListener('click', function() {
  console.log('cluicou')
  screen1.classList.remove('hide')
  screen2.classList.add('hide')
  xAttempts = 1

  randomNumber = Math.round(Math.random() * 10)
})
