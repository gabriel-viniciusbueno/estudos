const arr = [1,3,3,4]

const soma = arr.reduce(function (soma, i){
  return soma + i
}, 0)

if(soma % 2 === 0){
  console.log(soma + ' é par');
}else {
  console.log(soma + ' é impar')
}
