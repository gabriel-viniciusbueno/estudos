const questionBtn = document.querySelectorAll('.question-btn')

const minusBtn = document.querySelectorAll('.minus-btn')
const plusBtn = document.querySelectorAll('.plus-btn')

const answer = document.querySelectorAll('.question-answer p')

questionBtn.forEach((btn) => {
  btn.addEventListener('click', function (){
    this.classList.toggle('hide')
  })
})