let shareSection = document.querySelector('.share-section')
let shareBtn = document.querySelector('.share-icon')
let socialIco = document.querySelectorAll('.social-icon')

shareBtn.addEventListener('click', () => {
  shareSection.classList.toggle('active')
})

socialIco.forEach((icon) => {
  icon.addEventListener('click', () => {
  
  })
})

