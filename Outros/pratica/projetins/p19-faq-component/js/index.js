const questionBtn = document.querySelectorAll('.question-btn')


questionBtn.forEach((btn) => {
  btn.addEventListener('click', function (){
    // this.classList.toggle('hide')
    const accordionContent = this.nextElementSibling
    accordionContent.classList.toggle('hide')
    const plusBtn = this.querySelector('.plus-btn')
    const minusBtn = this.querySelector('.minus-btn')
    console.log(accordionContent, plusBtn)
  })
})