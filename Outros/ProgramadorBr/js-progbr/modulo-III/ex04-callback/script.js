
// const dobro = n => 2 * n
//já vimos funções que recebem variáveis como argumentos, agora vamos ver funcções que recebem funções como argumentos. Funções essas que são chamadas de callbacks

// function ola(){
//     console.log('ola')
// }

// function saudacao(s, nome){
//     s()
//     console.log(nome)
// }

// saudacao(ola, 'gabriel')

/////////////////////////////////////////////////////////


const users = ['adirano', 'gabreil', 'francisoc', 'jsoe']

function inserirUsusario(nome, callback){
    setTimeout(() => {
        usuarios.push(nome)
        callback()
    },1000)
}


function listarUsuarios(){
    console.log(usuarios)
}

inserirUsusario('professoe', listarUsuarios)

