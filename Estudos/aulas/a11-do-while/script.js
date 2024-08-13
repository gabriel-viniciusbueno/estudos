//minhas tramoia
let cidades = "";
let contagem = 0;



// não dá pra replicar o útimo exercicio com do while
do{
    contagem++
    pergunta =prompt("você ja visitou algum cidade?\nsim\nnao");
    let cidade = prompt("qual cidade?")
    cidades += cidade + " - ";
}while(pergunta === "sim")

alert (cidades + "contagem: " + contagem);




//Aula

// let speed = 0;

// do{
//     alert("The vehicle speed is " + speed + " km per hour");
//     speed -=20;
// } while(speed > 0);

// alert("final speed: " + speed);