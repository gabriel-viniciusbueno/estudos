// Exercício 1
function media(...num){
    let sum = 0
    num.forEach( function (n){
        sum += n
    })
    return sum / num.length
}

console.log(media(10, 10, 0, 0, 0, 0))


//Exercício 2
function chunk(num2){

    if(num2 === 0){
        return ''
    }
    
    if(num2 === 1){
        return 'chunk'
    } else{
        return 'chunk-' + chunk(num2 - 1)
    }

}

console.log(chunk(200))