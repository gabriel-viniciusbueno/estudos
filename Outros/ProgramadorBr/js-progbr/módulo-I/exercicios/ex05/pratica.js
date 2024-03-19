var a = 7;

++a;    //Já que não é uma operação ou atribuição (estamos apenas incrementando A), não importa muito se o ++ vem na frente ou atrás

console.log(a);

var b;

b = ++a; // Incrementa antes de ser atribuído a B.
c = ++b; // Incrementa depois de ser atribuído a C.
d = ++a;



console.log(b);
console.log(c);
console.log(d);


// console.log(a);

var mod = 30;

resultado = mod % 9;

console.log(resultado);


// teste de outra aula
var teste = 30;

teste %= 2;

console.log(teste)