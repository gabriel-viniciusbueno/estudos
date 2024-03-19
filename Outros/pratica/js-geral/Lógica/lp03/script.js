function removeSmallest(...numbers) {

  const indexOfMin = numbers.indexOf(Math.min(...numbers))

  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

console.log(removeSmallest(1,2,3,4,5,6,6,1,1))