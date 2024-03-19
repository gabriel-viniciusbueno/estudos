// Spread Operator

const pessoa = {
    name: 'José Silva',
    idade: 32
}

const contato = {
    telefone: 8765432,
    email: 'jose@gmail.com'
}

//Podemos juntar dois objetos num só com Spread Operator
let copia = {...pessoa, cidade: 'Diadema', ...contato}
copia.idade = 88

console.log(pessoa)
console.log(copia);


//E isso também funciona para arrays


const notasTurma1 = [10, 8, 9 ,2]

const notasTurma2 = [4,5,8,1]

const todasNotas = [...notasTurma1, ...notasTurma2]

console.log(todasNotas)