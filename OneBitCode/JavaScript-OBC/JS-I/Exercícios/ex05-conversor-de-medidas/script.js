let metros = parseInt(prompt("Digite um valor em metros para converter: "));

const medida = prompt("Escolha a medida que gostaria de converter: \nmm\ncm\ndm\ndam\nhm\nkm");

switch(medida){
    case "mm":
        alert("temos " + metros*1000 + " milímetros");
        break;
    case "cm":
        alert("temos " + metros*100 + " centímetros");
        break;
    case "dm":
        alert("temos " + metros*10 + " decímetros");
        break;
    case "dam":
        alert("temos " + metros/10 + " decâmetro");
        break;
    case "hm":
        alert("temos " + metros/100 + " hectômetro");
        break;
    case "km":
        alert("temos " + metros/1000 + " quilômetro(s)");
        break;
    default:
        alert("Opção Inválida");
}