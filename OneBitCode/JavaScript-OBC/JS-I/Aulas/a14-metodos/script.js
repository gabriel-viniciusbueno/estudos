// Podemos atrelar a esse objeto, uma função. Isso vai se tornar um método
let pessoa = {
    nome: "gabriel",
    idade: 19,
    dizerOla(){
        console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}

pessoa.dizerOla()