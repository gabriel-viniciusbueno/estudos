// Revisão Switch

function media(n1,n2,n3){
    return (n1 + n2 + n3) /3;
}

var conceito;
var m = media(10,10,10);

if(m > 8){
    conceito = "bom";
} else if(m > 5){
    conceito = "regular";
} else{
    conceito = "ruim";
}

switch(conceito){
    case conceito = "bom":
        console.log(m);
        console.log("Você foi muito bem!");
        break

    case conceito = "regular":
        console.log(m);
        console.log("Você foi mediano, se esforce um pouquinho mais!");
        break

    case conceito = "ruim":
        console.log(m);
        console.log("Você foi abaixo da média, se esforce mais!");
        break

    default:
        console.log("Houve algum erro");

}