// Objetos - Resumo

// function obj(nome, sobrenome){
//     return{
//         name: nome ,
//         lastname: sobrenome
//     }
// }

// var b = obj("gabriel", "bueno");

// console.log(b);


// var a = { nome: "gabriel", sobrenome: "oliveira"}

// console.log(a);



function obj(n,s){
    this.nome = n;
    this.sobrenome = s;
    
}

var a = new obj("gabriel", "oliveria10");

console.log(a);