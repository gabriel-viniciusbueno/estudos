let velocidade = 80;

while(velocidade > 0){
    alert("O carro está a " + velocidade + "km por hora");
    velocidade -= 20;
    alert("Diminuindo 20 km/h");
}

const repetir = prompt("O carro parou! Gostaria de repetir o precesso? \n1 Sim\n2 Não");

if(velocidade <= 0){
    switch(repetir){
    case "1":
        velocidade = 80;
        while(velocidade > 0){
            alert("O carro está a " + velocidade + "km por hora");
            velocidade -= 20;
            alert("Diminuindo 20 km/h");
        }
        break;
    case "2":
        velocidade = 0;
        break;
    default:
        alert("Resposta Inválida");
}
}

