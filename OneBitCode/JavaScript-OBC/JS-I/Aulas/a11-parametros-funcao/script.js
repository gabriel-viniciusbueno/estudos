function dobro(x){
    alert("O dobro de " + x + " é " + (x*2));
}

// dobro(5);

function criarUsuario(nome, email, senha, tipo = "admin"){
    const usuario = {
        nome, //mesmo que Nome: Nome
        email,
        senha,
        tipo
    }
}

// function novoUsuario(nome, tipo = "admin", email, senha){
//     const usuario = {
//         nome, //mesmo que Nome: Nome
//         email,
//         senha,
//         tipo
//     }
//     console.log(usuario)
// }

// criarUsuario("Gabriel", "gabriel@emil.com", "123",)
// novoUsuario("Gabriel", "gabriel@emil.com", "123",);


function muitosParametros(parametros){
    parametros.nome
    parametros.email
    parametros.senha
}

const dadosDoParametro = {
    nome: "";
    email: "";
    senha: "";
}

muitosParametros(dadosDoParametro)