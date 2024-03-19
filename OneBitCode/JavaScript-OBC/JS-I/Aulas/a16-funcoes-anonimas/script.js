function somar(a, b){
    return a + b;
}

// no js as funções podem ser lidas como valores e armazenadas em variáveis.


//Uma dos usos da função anonima é para que ela seja armazenada em variáveis de maneira mais simples

let operacao = somar;

console.log(operacao(4,5))

operacao = function (a,b){ // Função anonima
    return a - b
}

console.log(operação(4,5))

//Usamos funções anônimas quando é interessante ter essa flexibilidade com o comportamento delas.