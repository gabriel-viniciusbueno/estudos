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

function checkRate(rate){
  if(rate){
    ratesArr.push(rate);
  } else{
    return
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
    arrowIco.classList.add('hide-btn')
  }
}



buttons.forEach((btn) => btn.addEventListener('click', () => {

  verification();
  rate = btn.value; // inserir no array quando avançar para a proxima foto
  btn.classList.toggle('non-selected');
  btn.classList.toggle('selected');

})
)

arrowPrev.addEventListener('click', () => {
  console.log('aoba')
})

arrowNext.addEventListener('click', () => {

  pictureId++;
  const picture = document.querySelector('.img-container img');
  picture.src = `./assets/animal${pictureId}.jpg`;

  checkRate(rate)
  showPrevArrow()
  resetButton()


  
  console.log(rate)
  console.log(ratesArr)
  rate = 0;
  // mudar a foto
  // zerar os rate
  // adicionar o botão de voltar
  // impedir o usuário de avançar sem dar uma nota
  //verificar se tem algum select nos rates, se tiver pode avançar

})

//fazer pictureId reduzir 1 quando voltarmos
//Apagar o último elemento do array
//voltar à foto anterior

//criar um array para armazenar as notas. se avançar, a nota é armazenada no array. se voltar, a ultima nota do array é apagada.

// <!-- a ideia é usar template literals para mudar a foto exibida -->
// armazenar o valor dos rates em um array e apenas retornar quando o quiz estiver encerrado. retirar o último valor do array caso o usuário queira voltar e refazer seus ratings

// arquivo de variáveis
// aplicar modules