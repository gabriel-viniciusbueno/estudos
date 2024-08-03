// import module;
const buttons = document.querySelectorAll('.btn-container .button');
const arrowPrev = document.getElementById('prev-arrow');
const arrowNext = document.getElementById('next-arrow');
const errorModalBtn = document.getElementById('x-icon');
const finishBtn = document.querySelector('.finish');
let pictureId = 13;
let rate = 0
let ratesArr = [];

function verification () {
  buttons.forEach((btn) => {
    btn.classList.remove('selected');
    btn.classList.add('non-selected');
}
)}

function changePicture() {
  if(pictureId <= 15){
    const picture = document.querySelector('.img-container img');
    picture.src = `./assets/animal${pictureId}.jpg`;
  }
}

function checkRate(rate){
    changePicture()
    ratesArr.push(rate);
}

function toggleErrorModal(){
  const opacity = document.querySelector('.main-opacity');
  const errorModal = document.querySelector('.error-container');

  opacity.classList.toggle('hide');
  errorModal.classList.toggle('hide');
}

function resetButton(){
  buttons.forEach((btn) => {
    btn.classList.remove('selected');
    btn.classList.add('non-selected');
  })
}

function togglePrevArrow() {
  if(pictureId >= 2){
    const arrowIco = document.getElementById('prev-arrow-ico');
    arrowIco.classList.remove('hide')
  } else {
    const arrowIco = document.getElementById('prev-arrow-ico');
    arrowIco.classList.add('hide')
  }
}

function showFinishBtn() {
  if(pictureId >= 15){
    arrowNext.classList.toggle('hide');
    finishBtn.classList.toggle('hide');
  }
}

function finalResult(){

}


buttons.forEach((btn) => btn.addEventListener('click', () => {

  verification();
  rate = parseInt(btn.value);
  btn.classList.toggle('non-selected');
  btn.classList.toggle('selected');
  console.log(rate)
})
)

arrowNext.addEventListener('click', () => {

  if(rate > 0) {
    pictureId++
    checkRate(rate)
  }else {
      toggleErrorModal()
    return
  }
  togglePrevArrow()
  resetButton()

  rate = 0;
  showFinishBtn()
  console.log(ratesArr)
  console.log(pictureId)
})

arrowPrev.addEventListener('click', () => {
  pictureId--
  togglePrevArrow()
  changePicture()

  ratesArr.pop()
  console.log(ratesArr)

})
console.log(errorModalBtn)

errorModalBtn.addEventListener('click', toggleErrorModal)

finishBtn.addEventListener('click')


//quando imageID chegar em 16, encerrar o jogo e mostrar a tela de resultado
// calcular o resultado

// aplicar modules