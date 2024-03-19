// && exige que os dois valores sejam verdadeiros

var idade = 30;

var maiorq20 = idade >= 20;
var menorq30 = idade <= 30;
var entre = maiorq20 && menorq30;

console.log("A idade é", idade);
console.log("É maior de 20?", maiorq20);
console.log("É menor de 30?", menorq30);
console.log("Está entre 20 e 30?", entre);