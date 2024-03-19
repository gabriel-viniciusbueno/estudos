let veiculo1Nome = prompt("Digite o nome do veículo 1:");
let veiculo1vel = parseInt(prompt("Digite a velocidade do veículo 1: "));


let veiculo2Nome = prompt("Digite o nome do veículo 2:")
let veiculo2vel = parseInt(prompt("Digite a velocidade do veículo 2: "));

if (veiculo1vel > veiculo2vel){
    alert(veiculo1Nome + " é o mais rápido");

} else if(veiculo1vel == veiculo2vel){
    alert(veiculo1Nome + " e " + veiculo2Nome + " tem a mesma velocidade");
    
}else{
    alert(veiculo2Nome + " é mais rápido que " + veiculo1Nome );
}