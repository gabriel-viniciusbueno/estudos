const usuarios = ['aaaa', 'bbbb', 'cccc']
function inserirUsuario(nome){

    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            usuarios.push(nome)
            let error = false

            if(!error){
                resolve()
            } else{
                reject({msg: 'error'})
            }
        }, 1000)
    })
    return promise
}

function listarUsuarios(){
    console.log(usuarios);
}

//Para fazer isso funcionar (porque vamos listar usuários antes de inserir um novo), precisamos de async para avisar a função que usaremos o await
async function executar(){
    await inserirUsuario('Gabriel') // o programa vai esperar até que essa função seja resolvida
    listarUsuarios()
}

executar()