
let options = "";

let baralho = ["4 de espadas", "Dama de Paus", "7 de copas"];


do{
    options = prompt("Baralho de Cartas"+
    "\n1. Cartas"+
    "\n2. Adicionar uma carta"+
    "\n3. Puxar uma carta"+
    "\n4. Sair")
    switch(options){
        case "1":
            let cartas = "";
            for(let i = 0; i <= baralho.length - 1; i++){
                cartas = baralho[i];
                alert(i + " - " + cartas);
            }

            break
        case "2":
            let novaCarta = prompt("Qual carta adicionar?")
            baralho.unshift(novaCarta);
            break
        case "3":
            let puxarCarta = baralho.shift();
            alert(puxarCarta + " foi removida do baralho")
            break
        case "4":
            alert("Encerrando");
            break
        default:
            alert("Opção Inválida");
    }
}while(options !== "4")