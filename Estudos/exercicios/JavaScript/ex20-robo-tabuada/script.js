let numero = parseInt(prompt("Digite o número que gostaria de multiplicar:" +
"\n1"+
"\n2"+
"\n3"+
"\n4"+
"\n5"+
"\n6"+
"\n7"+
"\n8"+
"\n9"+
"\n10"+
"\n11"+
"\n12"+
"\n13"+
"\n14"+
"\n15"+
"\n16"+
"\n17"+
"\n18"+
"\n19"+
"\n20"
));
let tabuada = "";

for(i = 1; i <=20 ; i++){
    tabuada = numero * i;
    alert(i + " vezes " + numero + " é igual a " + tabuada);
}


alert("Programa encerrado");

