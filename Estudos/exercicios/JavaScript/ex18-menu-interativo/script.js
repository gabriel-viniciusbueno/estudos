
// let encerrando = "";
// let option = ""

// do{
//     option = prompt("Escolha 1 opção \n1\n2\n3\n4\nencerrar");

//     switch(option){
//         case "1":
//             alert("Você escolheu " + option);
//             break
//         case "2":
//             alert("Você escolheu " + option);
//             break
//         case "3":
//             alert("Você escolheu " + option);
//             break
//         case "4":
//             alert("Você escolheu " + option);
//             break
//         case "encerrar":
//             encerrando = "encerrar";
//             alert(encerrando);
//             break
//         default:
//             alert("Algo deu errado");
//     }
// }while(encerrando !== option );

// alert("Desligando");



//Correção do exercício:

let option = "";

do{
    option = prompt("Seja bem-vindo(a)\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1. Opção 1" +
    "\n2. Opção 2" +
    "\n3. Opção 3" +
    "\n4. Opção 4" +
    "\n5. Encerrar" 
)

    switch(option){
        case "1":
        	alert("voce escolheu a opção " + option);
            break
        case "2":
        	alert("voce escolheu a opção " + option);
            break     
        case "3":
        	alert("voce escolheu a opção " + option);
            break     
        case "4":
        	alert("voce escolheu a opção " + option);
            break
        case "5":
        	alert("Encerrando");
            break 
        default:
            alert("Algo deu errado na minha vida");
    }
}while(option !== "5");

alert("Desligando Sistema :(");