// Estudo dos operadores condicionais


/* Exemplo com console.log

var idade = 18;

 if (idade >= 18) {
     console.log("Pode beber!")
 } else {
     console.log("Não tem idade ainda")

*/

var idade = parseInt(prompt("Quantos anos você tem?"));


// if (idade >= 18 && idade <= 70){
//     alert("Pode beber!");
// } else{
//    alert("Você não pode beber aqui");
// }


if(idade < 18 || idade > 70){
    alert("Não pode beber")
}else{
    alert("Pode beber!");
}


