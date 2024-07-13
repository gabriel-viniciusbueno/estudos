function number (array){
  for(let i = 0; i < array.length; i++){
    array[i] = `${i+1}: ` + array[i]
  }

  return array
}



console.log(number(["a", "b", "c"]))