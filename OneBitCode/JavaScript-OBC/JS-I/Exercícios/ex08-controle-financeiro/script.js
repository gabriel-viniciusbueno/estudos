
// let modificar = "";

// dinheiro = parseFloat(prompt("Qual sua quantia de dinheiro atual?"));

// do{
//     modificar = prompt(dinheiro + "\nadicionar\nremover\nsair");
//     switch (modificar){
//         case "adicionar":
//             let somar = parseFloat(prompt("Quanto adicionar?"))
//             dinheiro = dinheiro + somar;
//             alert("Agora você tem " + dinheiro);
//             break
//         case "remover":
//             let remover = parseFloat(prompt("Quanto remover?"))
//             dinheiro -= remover;
//             alert("Agora você tem " + dinheiro);
//             break
//         case "sair":
//             dinheiro = 0;
//             break;
//     } 
// }while(dinheiro > 0);



//Tentando apenas com WHILE
// while(dinheiro > 0){
//     modificar = prompt(dinheiro + "\nadicionar\nremover\nsair");
//     switch (modificar){
//         case "adicionar":
//             let somar = parseFloat(prompt("Quanto adicionar?"))
//             dinheiro = dinheiro + somar;
//             alert("Agora você tem " + dinheiro);
//             break
//         case "remover":
//             let remover = parseFloat(prompt("Quanto remover?"))
//             dinheiro -= remover;
//             alert("Agora você tem " + dinheiro);
//             break
//         case "sair":
//             dinheiro = 0;
//             break;
//     } 
// }
// alert("Desligando Programa");

let saldo = parseFloat(prompt("Informe sua quantidade de dinheiro"));
let option = "";

do{
    option = prompt("O que você gostaria de fazer com seus " + saldo + " reais?" +
    "\n1. adicionar" +
    "\n2. remover" +
    "\n3. sair")

    switch(option){
        case "1":
            let adicionar = parseFloat(prompt("Quanto gostaria de adicionar?"));
            saldo += adicionar;
            alert("Agora você tem " + saldo);
            break
        case "2":
            let subtrair = parseFloat(prompt("Quanto gostaria de subtrair?"));
            saldo -= subtrair;
            alert("Agora você tem " + saldo);
            break
        case "3":
            alert("Encerrando programa");
            break
        default:
        alert("Opção inválida");
    }
} while (option !== "3");

alert("Programa Encerrado");
