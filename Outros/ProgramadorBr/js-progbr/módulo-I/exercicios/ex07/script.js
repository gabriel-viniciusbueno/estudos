// Os operadores comparativos são do tipo boolean, então vão responder com TRUE ou FALSE de acordo com a afirmação.

// == igual a
// === valor igual e igual
// != não é igual
// !== não igual ou não igual
// > maior que
// < menor que
// >= maior que ou igual a
// <= menor que ou igual a


console.log(2 == 3);
// Para que o computador entenda que estamos fazendo uma comparação e não uma atribuição, usamos dois sinais de igual


var a = 7;
var b ="7";

console.log(a == b);
// Apesar da var a ser number e a var b ser uma string, essa afirmação é TRUE por conta do valor ser o mesmo.


// Para que o resultado seja FALSE precisamos dizer que tanto o valor quanto o tipo de dado tem que ser o mesmo. Então usamos ===
console.log(a === b);


// Quando queremos dizer que um valor é diferente do outro, o sinal é !=
console.log(a != b);


// Para dizer que tanto o valor quanto o tipo de dado tem que ser diferentes, colocamos um = a mais, ficando !==. Agora sim o computador vai entender que 7 (number) é diferente de 7 (string).
console.log(a !==b);



// Os sinais de "maior que" ou "menor que" são normalmente usados para números.
var c = 4;
var d = 5;

console.log(c > d);



// Também é muito comum utilizar o sinal de = junto com < ou >, para saber se o número é maior/menor ou igual à X.

var e = 10;
var f = 10;
console.log(e >= f);