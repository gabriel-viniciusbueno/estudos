function sum (...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(2, 4, 7))
console.log(sum(2, 2, 5, 9, 12, 1, 2))