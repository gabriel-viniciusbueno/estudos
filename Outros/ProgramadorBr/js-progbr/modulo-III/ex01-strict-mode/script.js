// x = 7
// console.log(x);
//Quando declaramos uma variável fora de qualquer função, é criado no window uma 'copia' desse valor

"use strict" // com strict mode, não temos mais esse problema, pois ele trata como obrigatório a declaração de toda variável que usamos

function imprimir() {
    /*const*/ x = 7
    console.log(x);
}

imprimir()
console.log(x)
console.log(window);

//Quando criamos a variável dentro de função, ela só vai existir na função.
//Quando não criamos a variável mas colocamos o X, a primeira coisa que o JavaScript procura é uma varíavel de escopo global, e se não houver, ele cria uma variável de forma global


//Isso pode trazer problemas se esquecer de declarar a variável dentro da função, pois ela vai para o escopo global, mas tem uma maneira de evitar isso.
