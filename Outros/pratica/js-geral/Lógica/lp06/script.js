
let arr = [2,2,3]

function partsSums(ls) {
  let sum = ls.reduce((sum,n) => sum + n, 0)
  const sums = [sum]

  for(let i = 1; i <= ls.length; i++){
    sum -= ls[i - 1]
    sums.push(sum)

  }
  return sums
}

console.log(partsSums(arr));


// console.log(partsSums(...arr))

