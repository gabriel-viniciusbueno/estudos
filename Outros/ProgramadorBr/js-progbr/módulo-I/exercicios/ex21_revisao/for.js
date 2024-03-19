//Estudo de FOR;

var alunos = ["gabriel", "maria", "isabela", "carlinhos", "josias"];
var notaA = [10, 9.5, 5.5, 7.0, 9.0];
var notaB = [10, 3.5, 7.0, 5.5, 1.5];

var media = function(n1,n2){
    return (n1 + n2) /2;
}

function passou(media){
    if(media > 6){
        return "Aprovado!";
    } else{
        return "Reprovado";
    }
}

for(var index in alunos){

    var nota1 = notaA[index];
    var nota2 = notaB[index];
    var aluno = alunos[index];

    var m = media(nota1, nota2);

    console.log(aluno + " - " + nota1 + " - " + nota2 + " - " + m + " - " + passou(m));
}


var notasbalas = function(b1, b2){
    return (b1+b2) /2;
}

var notafinal = notasbalas(9,10);

console.log(notafinal);