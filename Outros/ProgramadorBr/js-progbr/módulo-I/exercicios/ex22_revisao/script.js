
var alunos = ["gabrie", "maria", "joao", "jose", "mariana"];
var notaA = [10, 9, 8, 7, 8];
var notaB = [10, 3, 5, 4, 2];

function media(n1,n2){
    return (n1+n2) /2;
}

var situacao;

function conceito(m){
    if(m >= 6){
        return "aprovado";
    } else{
        return "reprovado";
    }
}

for(var index = 0; index < alunos.length; index++){
    var aluno = alunos[index];
    var nota1 = notaA[index];
    var nota2 = notaB[index];
    var m = media(nota1, nota2);

    console.log(aluno + " - " + nota1 + " - " + nota2 +  " - " + m + " - " + conceito());
}