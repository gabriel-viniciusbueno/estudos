// Pequeno Desafio.

var nomes = ['Gabriel','Maria','João'];
var notasA = [10, 9.0, 2.5];
var notasB = [10, 10, 9.5];

var media = function(n1,n2){
    return (n1+n2) /2;
}

function passou(media){

    if(media > 6){
        return "Aprovado!";
    } else{
        return "Reprovado!"
    }
}

for(var index in nomes){
    
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var nome = nomes[index];
    var m = media(nota1,nota2);

    console.log(nome + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m));
}