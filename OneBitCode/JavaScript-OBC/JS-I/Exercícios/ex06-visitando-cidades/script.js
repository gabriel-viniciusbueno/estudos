// const nome = prompt("Digite seu nome");

// let pergunta = prompt((nome + ", você já visitou alguma cidade?\nSim\nNão"));
// while(pergunta === "Sim"){
//     var cidades = prompt("Qual cidade?");
//     alert("Você visitou " + cidades.length + " cidadess");
//     let pergunta = prompt((nome + ", você já visitou alguma cidade?\nSim\nNão"));
// }

const turista = prompt("Qual é o seu nome?");
let cidades = "";
let contagem = 0;
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)");


while(continuar === "Sim"){
    let cidade = prompt("Qual cidade?");
    cidades += " - " + cidade + "\n";
    contagem++;
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)");
}
alert("Cidades visitadas: " + cidades + " Quantidade de cidades: " + contagem);