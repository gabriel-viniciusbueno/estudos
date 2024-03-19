// function dobro (x){
//     return 2 * x
// }

//Assim como a função anônima, a arrow function é armazenada em uma variável

let dobro = x => 2 * x
//Se ela tiver apenas 1 argumentp (e esse argumento for um return), pode ser encurtada desse modo


console.log(dobro(4))


// mas tem uma desvantagem:

let triplo = () => {console.log(this)}

// let triploo = function () {
//     return 3 * this.x
// }

const numero = {
    x: 8,
    t: triplo // uma arrow function não entende o que é o this
}
triplo = triplo.bind(numero)


numero.t()
// console.log(numero.t())

//Arrow function também não tem acesso ao Bind