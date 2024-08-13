const nome = prompt("Fala dev- digo, viajante! Qual seu nome?");
let cidades = "";
let contagem = 0;
let pergunta = prompt("Você já visitou alguma cidade?\nSim\nNão");

while (pergunta === "Sim"){
    let cidade = prompt("Qual cidade?");
    cidades += cidade + " - ";
    contagem++;
    pergunta = prompt("Você já visitou alguma outra cidade?\nSim\nNão");
}

alert("Você já visitou " + cidades + " e ao todo foram " + contagem + " cidades!" );