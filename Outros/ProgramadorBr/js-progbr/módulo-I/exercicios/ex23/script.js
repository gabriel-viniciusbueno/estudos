// Trabalhando com Objetos

var alunos = {nome: "Gabriel", nota: 10}

alunos.sobrenome = "Oliveira";
alunos.apelido = "Gabas";

console.log( alunos["apelido"] + " - " + alunos["nome"]);


var notas = {nota1: 10, nota2: 9};

var m = "media";

notas[m] = (notas.nota1 + notas.nota2) /2;

console.log(notas["media"]);


var novoOBJ = new Object;

var nomenclatura = "nome";

novoOBJ[nomenclatura] = "claudio";

console.log(novoOBJ);