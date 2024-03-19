// Funções pt2


// function saudacao(){
//     return "Olá Mundo!";
// }

// var s = saudacao;

// console.log(s);




// "Apelidando" as funções

// function media(n1, n2){
//     var nota1 = n1;
//     var nota2 = n2;
//     var media = (nota1 + nota2) /2;

//     return media;
// }

// var resultado = media(8,9);
// var m = media;

// var resultado2 = m(10,10);

// console.log(resultado);
// console.log(resultado2);





//Criando uma Função anônima
var media = function(n1,n2,n3){
    return (n1+n2+n3) /3;
}

console.log(media(10,9,8));