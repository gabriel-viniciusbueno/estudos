

// function chunkTransform(){
//     let chunks = []
//     if(chunks.length <= n){
//         chunks.push('chunk -')
//         // chunks.push(newChunk)
//         return chunkTransform(n)
//     } else{
//         console.log(chunks)
//     }
    
// }

// console.log(chunkTransform(5))

function chunks(num){
    //Funções recursivas precisam de um caso base
    if(num === 0){
        return ''
    }

    if(num === 1){
        return 'chunk'
    } else {
        return 'chunk-' + chunks(num - 1)
    }
}

console.log(chunks(10))