const questionBtn = document.querySelectorAll('.question-btn')


questionBtn.forEach((btn) => {
  btn.addEventListener('click', function (){
    // this.classList.toggle('hide')
    const accordionContent = this.nextElementSibling
    const plusBtn = this.querySelector('.plus-btn')
    const minusBtn = this.querySelector('.minus-btn')


    if(accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null
      plusBtn.style.display = 'block'
      minusBtn.style.display = 'none'
    } else{
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
      plusBtn.style.display = 'none'
      minusBtn.style.display = 'block'
    }
  })
})