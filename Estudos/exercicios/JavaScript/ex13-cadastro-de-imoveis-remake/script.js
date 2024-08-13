const imoveis = [];
let opcao = "";

do{
    opcao = prompt("Bem-vindo ao cadastro de imóveis \n" +
    "Quantidade de Imóveis: " + imoveis.length +
    "\n\n Escolha uma opção:"+
    "\n1. Adicionar um imóvel \n2. Ver imóveis \n3. Sair");

    let imovel = {};
    switch(opcao){
        case "1":
            imovel.prop = prompt("Quem é o proprietário?");
            imovel.quartos = prompt("Quantos quartos possui?");
            imovel.banheiros = prompt("Quantos banheiros?");
            imovel.garagem = prompt("Possui Garagem (Sim/Não)?");

            const confirmacao = confirm("Salvar imóvel?");
            if(confirmacao){
                imoveis.push(imovel);
                alert("Imóvel salvo com sucesso!")
            }
            break
        case "2":
       
            for(let i = 0; i < imoveis.length; i++){

               let = percorrida = alert("Imóvel: " + (i+1) +
                    "\nProprietário: " + imoveis[i].prop +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nGaragem? " + imoveis[i].garagem)
            }
            break

        case "3":
            alert("Encerrando")
            break
        default:
            alert("Opção inválida")
    }


}while(opcao !== "3");