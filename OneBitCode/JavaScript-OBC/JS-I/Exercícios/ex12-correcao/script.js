const baralho = [];
let opcao = "";

do{
    opcao = prompt(
        "Cartas no Baralho: " + baralho.length +
        "\n1. Adicionar uma carta \n2. Puxar uma carta \n3. Sair"
    )

    switch(opcao){
        case "1":
            let adicionarCarta = prompt("Qual carta será adicionada?")
            baralho.unshift(adicionarCarta);
            break
        case "2":
            let puxarCarta = baralho.shift();
            if(puxarCarta){
                alert(puxarCarta + " retirada do baralho");
            }else{
                alert("Não há cartas no baralho");
            }
            break
        case "3":
        alert("Encerrando...")
        break
        default:
        alert("Opção inválida")
                      
    }
}while(opcao !== "3");