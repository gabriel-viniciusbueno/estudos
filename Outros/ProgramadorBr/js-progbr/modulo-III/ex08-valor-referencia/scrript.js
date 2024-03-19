

function newStudent(name, yo){
    return {name, yo}
}

const students = [
    newStudent('mario', 23),
    newStudent('josé', 45),
    newStudent('gabriel', 19),
    newStudent('aaaa', 29)
]

function student5YearsLater(student){
    let newStudent = student
    newStudent.yo += 5
    return newStudent
}

console.log(students.map(student5YearsLater))

const studentA = {name:'Igor', yo: '15'}

let studentB = studentA

studentB.yo = 25

//No JS, quando colocamos um objeto dentro de outro, ele vai como referência. Então studentB é uma referência de studentA.
//Tudo que for modificado em alunoB será alterado em alunoA.
//Mesma coisa acontece com arrays



//Então como fazemos para COPIAR um objeto e não criar uma referência ao mesmo?
//Com arrays podemos usar slice() sem argumentos, ele retorna o array inteiro

const turmaA = ['igro', 'gabriel', 'josue', 'paula']
const turmaB = [...turmaA] // Podemos criar uma cópia de array assim



let alunoA = {name: 'gabriel', yo: 19}

// let alunoB = Object.assign({}, alunoA) podemos fazer assim

let alunoB = {...alunoA} // Ou assim... que é bem melhor
//O nome disso é spread Operator

alunoB.idade = 25

