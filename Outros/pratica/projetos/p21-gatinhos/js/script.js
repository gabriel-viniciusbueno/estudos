// import module;
const buttons = document.querySelectorAll('.btn-container .button');
const arrowPrev = document.getElementById('prev-arrow');
const arrowNext = document.getElementById('next-arrow');

let pictureId = 1;
let rate
let ratesArr = [];

function verification () {
  buttons.forEach((btn) => {
    btn.classList.remove('selected');
    btn.classList.add('non-selected');
}
)}

function changePicture() {
  const picture = document.querySelector('.img-container img');
  picture.src = `./assets/animal${pictureId}.jpg`;
}


function checkRate(rate){

  if(rate > 0){
    changePicture()
    ratesArr.push(rate);
  } else{
    console.log('erro ae bixo kkkk')
  }
}

function resetButton(){
  buttons.forEach((btn) => {
    btn.classList.remove('selected');
    btn.classList.add('non-selected');
  })
}

function showPrevArrow() {
  if(pictureId >= 2){
    const arrowIco = document.getElementById('prev-arrow-ico');
    arrowIco.classList.remove('hide-btn')
  } else {
    const arrowIco = document.getElementById('prev-arrow-ico');
    arrowIco.classList.add('hide-btn')
  }
}



buttons.forEach((btn) => btn.addEventListener('click', () => {

  verification();
  rate = parseInt(btn.value);
  btn.classList.toggle('non-selected');
  btn.classList.toggle('selected');

})
)

arrowNext.addEventListener('click', () => {
  pictureId++
  checkRate(rate)
  showPrevArrow()
  resetButton()

  rate = 0;

  console.log(pictureId)
})

arrowPrev.addEventListener('click', () => {
  pictureId--
  showPrevArrow()
  changePicture()
  console.log(pictureId)

})

// Mostrar uma mensgaem de erro ao não escolher uma nota

//fazer pictureId reduzir 1 quando voltarmos
//Apagar o último elemento do array
//voltar à foto anterior

//criar um array para armazenar as notas. se avançar, a nota é armazenada no array. se voltar, a ultima nota do array é apagada.

// <!-- a ideia é usar template literals para mudar a foto exibida -->
// armazenar o valor dos rates em um array e apenas retornar quando o quiz estiver encerrado. retirar o último valor do array caso o usuário queira voltar e refazer seus ratings

// arquivo de variáveis
// aplicar modules