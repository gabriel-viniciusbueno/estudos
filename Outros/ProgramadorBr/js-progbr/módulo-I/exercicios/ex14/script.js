//Exemplo com média escolar


var nota1 = 8.0;
var nota2 = 3.0;

var media = (nota1 + nota2) /2;

// if(media >= 7.0){
//     alert("Parabéns, passou de ano com média " + media + "!");
// } else{
//     alert("Sua nota " + media + " não foi suficiente para passar :(");
// }

var conceito;

if(media >= 8){
    conceito = "Ótimo!";

} else if(media >= 6){
    conceito = "Regular";

} else{
    conceito = "Ruim";
    
}

conceito = "Mais ou Menos";

console.log(media);
console.log(conceito);



switch(conceito){
    
    case conceito = "Ótimo!":
        console.log("Você foi muito bem!")
        break
    case conceito = "Regular":
        console.log("Você foi mediano")
        break
    case conceito = "Ruim":
        console.log("Bem ruim ai, precisa estudar mais")
        break
    default:
        console.log("Houve algum erro")    
        break
}


//Se por algum acaso nós mudarmos a variável conceito para "mais ou menos", switch deixará de funcionar pois não encontrará esse valor em seus cases. Logo, vai disparar a mensagem de erro (default)

//Switch também pode ser considerado uma condicional por conta disso, uma condição gera uma ação