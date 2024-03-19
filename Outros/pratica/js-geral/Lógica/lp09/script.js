function countSheeps(sheep) {
  const sheeps = []
   sheep.forEach((s) => {
     if(s == true) {
       sheeps.push(s)
     }
   })
  
  return sheeps.length
}

console.log(countSheeps([], 0));