

//Botão que vai pegar os valores dos nomes e armazenar no array

const nomes = []

const start = document.getElementById('start').addEventListener('click', function(ev){
    ev.preventDefault()


     name1 = document.getElementById('name').value
     name2 = document.getElementById('name2').value

     nomes.push(name1, name2)

})

//teste
console.log(nomes)


//O que eu penso: se for vez de n1, é X, caso contrário é O. Os nomes vão se alternar com toggle como se fosse um modo dark/light
const turn = document.getElementById('turn')

turn.addEventListener('toggle', function(){

})


//Essa porra faz o X e o O do jogo
const button = document.querySelectorAll('.button')

button.forEach(function (botao){
    botao.addEventListener('click', function(ev){
        const play = ev.target

        if(turn === "name"){
            play.value = 'X'
        } else{
            play.value = 'O'
        }
       
    })
})