const isSquare = function(n){
  const raiz = Math.sqrt(n)
  if(Number.isInteger(raiz)){
    return raiz + ' é raiz'
  }
  return raiz + ' deu ruim'; // fix me

  // Versão em 1 linha
  // return Number.isInteger(Math.sqrt(n)) ? true : false
}

console.log(isSquare(16))


console.log(9.3489 % 1)