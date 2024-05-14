// Os meses começam do zero
const dataAniversario = new Date(2020, 0, 20)
console.log(dataAniversario)

const primeiroDataDoJS = new Date(0)
console.log(primeiroDataDoJS)

const hoje = new Date()
console.log(hoje.toString())
console.log(hoje.toLocaleString)


//Formato global recomendado
console.log(hoje.toISOString)