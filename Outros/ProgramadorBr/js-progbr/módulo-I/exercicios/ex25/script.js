// Objetos - Construtores

// function criarAluno(name,n1,n2){
//     return {
//         nome: name,
//         nota1: n1,
//         nota2: n2,
//         media: function(){
//             return (this.nota1 + this.nota2) /2;
//         }
//     }
// }

// var turma = [
//     criarAluno("gabruel", 9, 5),
//     criarAluno("Lusca", 9, 10),
//     criarAluno("matia", 2, 10),
//     criarAluno("Maria", 5, 8),
//     criarAluno("sara", 9, 8)
// ]

// for(var aluno of turma){
//     console.log(aluno.nome + " - " + aluno.media());
// }






// function calcMedia(){
//     return (this.nota1 + this.nota2) /2;
// }

// var turma =[
//     {
//         nome: "Jaime",
//         nota1: 7,
//         nota2: 9,
//         media: calcMedia
//     }
// ]

// var aluno = turma[0];
// console.log(aluno)
// console.log(aluno.media());







// mais uma maneira de se criar um objeto
//a função criar aluno retorna um objeto, mas é possível transformar a função na criadora do objeto

function aluno(nome,n1,n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function(){
        return (this.nota1 + this.nota2) /2
    }
}

var a = new aluno("gabruel", 9,8);

console.log(a);
console.log(a.media());