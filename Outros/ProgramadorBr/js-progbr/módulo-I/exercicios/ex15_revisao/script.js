// Um pouco de operadores comparativos

var idade = "17";

// if(nota >= 7){
//     alert("menor ou igual pega tanto string quanto numero, não é necessário ser do mesmo 'tipo'");

//     podemos trabalhar com strings e numbers enquanto usamos o "menor ou igual", pois ele aceita dados de tipos diferentes sem precisar de parseInt

    
// } else{
//     alert("menor ou igual precisam ser do mesmo tipo (string e number não foram 'iguais')")
// }


//exemplo com bebidas

// if(idade >= 18){
//     console.log("Já tem idade para beber");
// } else{
//     console.log("não tem idade para beber, volte futuramente");
// }




// Faixa de idade para bebida está entre 18 e 70. Os cliente que não podem beber recebem uma mensagem 'personalizada' de acordo se ultrapassou a faixa etária ou ainda não alcançou

var conceito;

if (idade >= 18 && idade < 70){
    conceito = "Está dentro da faixa de idade, pode beber!";
} else if(idade >= 70){
    conceito = "Já passou da faixa de idade, procure outro lugar";
}
else{
    conceito = "Não está na faixa de idade ainda, volte futuramente";
}

console.log(conceito);