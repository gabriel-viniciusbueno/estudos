//Alguns métodos que são importantes para trabalhar com arrays




//  MAP
// o Map é parecido com forEach, ele percorre cada elemento do array e a partir dessa iteração ele vai criando um novo array.


// Filter
// Vai pegar elementos específicos do array e criar um array novo, basicamente FILTRANDO os elementos e os separando.


//  Reduce
//  Serve para transformar um array em algum outro valor. Um dos métodos mais complexos e difíceis de usar.


//  Sort
//Vai pegar os elementos do array e mudar sua posição de acordo com algum critério.

const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

//////////////////////////////
  //MAP

//   const nomes = []

//   for(let i = 0; i < personagens.length; i++){
//     nomes.push(personagens[i].nome)
//   }

//   console.log(nomes);

const nomes = personagens.map(function(personagem){
    return personagem.nome
})

console.log(nomes);


//////////////////////////////
// FILTER

// const orcs = [];

// for(let i = 0; i < personagens.length; i++){
//     if (personagens[i].raca === "Orc"){
//         orcs.push(personagens[i]);
//     }
// }

// console.log(orcs);

const orcs = personagens.filter(function (personagem){
    return personagem.raca === "Orc"
})

console.log(orcs)


//////////////////////////////
//REDUCE
// O REDUCE RECEBE UM SEGUNDO VALOR (NO CASO, 0) PARA DEFINIR ONDE ELE COMEÇA.
const nivel = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivel)


// Usando REDUCE de uma meneira diferente
const racas = personagens.reduce(function (valorAcumulado, personagem){
    if(valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log(racas)

//////////////////////////////
// SORT
// Já que sort modifica o array original, não precisamos armazená-lo em uma variável
personagens.sort(function (personagemA,personagemB) {
    return personagemA.nivel - personagemB.nivel
})

console.log(personagens);