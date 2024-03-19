// Promises

const ususarios = ['aaaa', 'bbbb', 'cccc']
function inserirUsuario(nome){

    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            ususarios.push(nome)
            let error = false

            if(!error){
                resolve()
            } else{
                reject({msg: 'error'})
            }
        }, 1000)
    }) // A promise é um objeto que recebe uma função
    return promise
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario('Gabriel')
.then(listarUsuarios)
.catch((error) => {
console.log(error.msg)
})
//Ao invés do callback, chamamos o THEN caso a promise seja TRUE
//Mesma coisa para tratarmos o erro