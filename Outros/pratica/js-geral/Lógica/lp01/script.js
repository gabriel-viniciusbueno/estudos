function createPhoneNumber(numbers){
    const elemento1 = numbers.splice(0,3)
    const elemento2 = numbers.splice(0,3)
    const elemento3 = numbers.splice(0,4)
    
    const ddd = elemento1.join('')
    const first = elemento2.join('')
    const last = elemento3.join('')
    const number = `(${ddd}) ${first}-${last}`

    return number
  }


  console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))