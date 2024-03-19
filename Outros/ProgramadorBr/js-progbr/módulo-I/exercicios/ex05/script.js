// + Adição
// - Subtração
// * Multiplicação
// / Divisão
// % módulo
// ++ Incremento
// -- Decremento

var num1 = 10;
var num2 = 15;

var c = num1 + num2;
var d = num1 - num2;
var e = num1 * num2;
var f = num1 / num2;

var g = num1 % num2;
// O módulo vai tentar dividir 10 por 15 de modo que não tenha número quebrado, então o resultado será 10.

// No caso, o módulo vai retornar o que sobrou da operação. Se eu tenho 10 e tento dividir para 15, eu fico com os 10 e não divido nada. Agora, se eu tenho 17 para dividir entre 15, eu dou 1 para cada um e me sobra 2 no final (que será o valor retornado). Se fosse 30 para dividir entre 15, seria 2 pra cada um e não me sobra nada, então o valor retornado seria 0;


console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);

var num3 = 30;

num3++; // O Incremento vai somar 1 ao número da variável
console.log(num3);

num3--; // O Decremento vai subtrair 1 ao número da variável
console.log(num3);


var a = 7;

var b = a++; /* A diferença entre a++ e ++a é a ordem da operação.


Com ++a, primeiro A será incrementado e então imprimido na tela (resultado 8).

Com a++, primeiro A será imprimido na tela e então a operação é feita (resultado 7).

*/

console.log(b);
console.log(a);
