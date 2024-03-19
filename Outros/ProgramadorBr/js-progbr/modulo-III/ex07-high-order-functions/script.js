

function newStudent(name, yo){
    return {name, yo}
}

const students = [
    newStudent('mario', 23),
    newStudent('josé', 45),
    newStudent('gabriel', 19),
    newStudent('aaaa', 29)
]

//Quero mostrar apenas alunos que tem menos de 30 nos

function under30(student){
    return student.yo < 30
}

// let under30Students = students.filter(under30)
// let over30Students = students.filter(over30)
// console.log(under30Students);
// console.log(over30Students);

// function filter(callback){
//     let alunosFiltrados = []
//     for(let student of students){
//         if(callback(student)){
//             alunosFiltrados.push(student)
//         }
//     }

//     return alunosFiltrados
// }

console.log(students.filter(under30))

function nameAge(student){
    return student.name + ' is ' + student.yo + ' years old.'
}

console.log(students.map(nameAge)) // Com map, criamos um array totalmente novo mas usando do array principal para basear seus elementos

//Tenho que ter cuidado com map, pois ele pode sobrerescrever o array principal




///////////////////////////
// REDUCE


function novoAluno(nome, idade){
    return {nome, idade}
}

const alunos = [
    novoAluno('Mario', 23),
    novoAluno('Diane', 33),
    novoAluno('Gabriel', 19),
    novoAluno('jao', 13),
]

// a função vai pegar todo o nosso array e transformar num único resultado. Então vamos somar a idade de todos os alunos
function idadeDaTurma(total, aluno){
    return total + aluno.idade
}

console.log(alunos.reduce(idadeDaTurma, 0)) // PRECISAMOS passar o total antes de iniciar a função. No caso é 0