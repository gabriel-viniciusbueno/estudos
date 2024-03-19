// =     x = y      x = y
// +=    x += y     x = x + y
// -=    x -= y     x = x - y
// *=    x *= y     x = x * y
// /=    x /= y     x = x / y
// %=    x %= y     x = x % y

// Podemos utilizar esses "atalhos" para simplificar equações e atribuições e simplificar o nosso código

var x = 30;

/*
    Esses são dois jeitos de se fazer a mesma coisa:
x++;
x += 1;
*/

x += 5; // Podemos usar essa atribuição para fazer uma incrementação de 5, ao invés de 1 (com x++).

console.log (x);

x -= 5; // Decrementação de 5

console.log(x);

/*
    Outro exemplo:

x = x * 2;
x *= 2;

*/

var y = 2;
x /= y;
console.log(x);

x %= y;
console.log(x);

x += 29;
console.log(x);

x %= 31;
console.log(x);

var z;

z = x++ % 7;

console.log(z);
console.log(x);

x /= z;

console.log(x);

console.log(y);

x *= y;
console.log(x);

y %= z;

console.log(y);


