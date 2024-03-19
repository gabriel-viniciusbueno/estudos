// É uma função que recebe outra função como parâmetro

function calcular(a, b, operacao){ //high-rder function 
    console.log("Realizando uma operação")
    const resultado = operacao(a,b)
    return resultado;
}

function somar(x,y){
    console.log("Realizando uma soma.")
    return x + y;
}

calcular (3, 5, somar) // nesse momento, "operacao" vai se transformar na funçã somar
console.log(calcular (8, 4, function subtrair(n1, n2) { // NÃO É NECESSÁRIO DAR NOME PARA ESSE FUNÇÃO, afinal de contas ela não existe fora desse parâmetro
    console.log("Realizando subtração")
    return n1 - n2
}))

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["maça", "banana", "manga"]

lista.forEach(exibirElemento);
 
