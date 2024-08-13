// let info = {[],};
// let imoveis = [];
// let opcao = "";


// do{
//     opcao = prompt("Bem vindo ao cadastro de imóveis"+
//     "\n1.Salvar um imóvel \n2. Imóveis salvos \n3.Sair")

//     switch(opcao){
//         case "1":
//             info.dono = imoveis + prompt("Qual o nome do proprietário?");
//             info.quartos = imoveis + prompt("Quantos quartos tem o imóvel?");
//             info.banheiros = imoveis + prompt("Quantos Banheiros tem o imóvel?");
//             info.garagem = imoveis + prompt("Possui garagem?"+
//             "\n1. Sim \n2. Não");
//         case "2":

//         case "3":

//         default:
//             alert("Algo deu errado");

//     }

// }while(opcao !== "3");

// console.log(info);



//Resolução do exercício

const imoveis = []
let opcao = "";

do{
    opcao = prompt("Bem vindo ao cadastro de imoveis"+
    "Total de imóveis : " + imoveis.length+
    "\n1.Novo imóvel \n2.Listar imóveis \n3. Sair")

    switch(opcao){
        case "1":
            const imovel = {};
            imovel.proprietario = prompt ("Informe o nome do proprietário")
            imovel.quartos = prompt ("Informe quantos quartos possui o imóvel");
            imovel.banheiros = prompt ("Informe quantos banheiros possui o imóvel");
            imovel.garagem = prompt ("Informe se o imóvel possui garagem? (Sim/Não)");

            const confirmacao = confirm("Salvar este imóvel?\n"+
            "\n Proprietário: " + imovel.proprietario +
            "\n Quartos: " + imovel.quartos +
            "\n Banheiros: " + imovel.banheiros +
            "\n Garagem: " + imovel.garagem);

            if (confirmacao){
                imoveis.push(imovel);
                alert("Imóvel salvo com sucesso")
            }
            break

        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    "Imóvel " + (i+1) + imoveis[i] +
                    "\nProprietário: " + imoveis[i].proprietario+
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nPossui garagem: " + imoveis[i].garagem
                    )
            }
            break
        case "3":
            alert("Encerrando");
            break
        default:
            alert("Opção inválida!")
    }
}while(opcao !== "3")