// import module;
const buttons = document.querySelectorAll('.btn-container .button');
const arrow = document.querySelectorAll('.arrow-container a');

let rate
let ratesArr = [];

function verification () {
  buttons.forEach((btn) => {
    btn.classList.remove('selected');
    btn.classList.add('non-selected');
  }
  )}


buttons.forEach((btn) => btn.addEventListener('click', () => {

  verification();
  rate = btn.value; // inserir no array quando avançar para a proxima foto
  btn.classList.toggle('non-selected');
  btn.classList.toggle('selected');

})
)

arrow.forEach((a) => a.addEventListener('click', () => {
  console.log('clicado!')

  // mudar a foto
  // zerar os rate
  // adicionar o botão de voltar
  
})
)

//pegar os botões das notas
//pegar os botões de  avançar
// criar uma variavel igual a 0 que acompanha o numero da foto
//criar um array para armazenar as notas. se avançar, a nota é armazenada no array. se voltar, a ultima nota do array é apagada.

// button.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     console.log('fui clicado ' + btn.value)
//   })
// })

// <!-- a ideia é usar template literals para mudar a foto exibida -->
// armazenar o valor dos rates em um array e apenas retornar quando o quiz estiver encerrado. retirar o último valor do array caso o usuário queira voltar e refazer seus ratings

// arquivo de variáveis
// aplicar modules