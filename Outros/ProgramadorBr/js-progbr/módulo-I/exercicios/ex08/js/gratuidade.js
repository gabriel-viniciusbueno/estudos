// || Avalia se algum dos valores necessários são TRUE e retorna TRUE. Diferente de &&, || não precisa que todos os valores sejam verdadeiros e apenas um já basta.

var idade = 11;

var maior60 = idade >= 60; // vai dar false
var menor10 = idade <= 10; // vai dar false

var gratuidade = maior60 || menor10; // se ambos os valores são falsos, gratuidade também vai ser

console.log("Rola gratuidade?",gratuidade);