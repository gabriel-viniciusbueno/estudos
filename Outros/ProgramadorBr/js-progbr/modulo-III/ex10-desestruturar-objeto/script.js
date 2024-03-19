const aluno = {
    matricula: 1234,
    nome: 'gabirel',
    telefone: 1234567,
    cidade: 'Diadema'
}

const aluno1 = {
    matricula: 567,
    nome: 'gaaaal',
    telefone: 8907,
    cidade: 'Diadema'
}

//Criando uma varíavel para armazenar apenas o valor de matrícula de aluno 
// let {matricula, nome} = aluno

// console.log(matricula)

// console.log(nome)


//Também podesmo serparar os valores

const {matricula, nome, ...resto} = aluno
console.log(matricula)
console.log(nome)
console.log(resto)

//Também pode ser feito com array, mas respeitando a ordem deles

let alunos = [aluno, aluno1]

let [gabriel, gaaaal] = alunos

console.log(gaaaal)