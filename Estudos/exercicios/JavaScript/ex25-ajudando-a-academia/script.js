// const parametros = [10,9,4]

// function calcMedia(numeros = parametros){
//     return (numeros[0] + numeros[1] + numeros[2]) / numeros.length
// }

// const resultado = calcMedia()




function calcMedia(...numbers){


    // let sum = 0
    //Com ForEach
    // numbers.forEach(function (number){
    //     sum += number
    // })
    // const avarage = sum / numbers.length

    //reduce precisa de um "acumulador" e um valor
    let sum = numbers.reduce( function (accum, num){
        return accum + num
    },0)

    return sum / numbers.length
}

console.log(calcMedia([10,1,9,1,8]))