// Estudando funções



// function media() {
//     var nota1 = 10;
//     var nota2 = 9;
//     var media = (nota1 + nota2) /2;
//     console.log(media);
// }

// media();





// function media(n1,n2,n3){
//     var nota1 = n1;
//     var nota2 = n2;
//     var nota3 = n3;
//     var media = (nota1 + nota2 + nota3) /3;
//     console.log(media);
// }

// media(8,9,6);
// media(10,8,9);


function media(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) /2;

    return media;
}

var resultado1 = media(10,8);
var resultado2 = media(9,7);


console.log(resultado1 + " e " + resultado2);