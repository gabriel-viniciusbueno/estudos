const palavra = prompt("Qual palavra você deseja verificar?");
let palavraInvertida = "";

for(let i = palavra.length - 1; i >= 0; i--){
    palavraInvertida += palavra[i];
}

if(palavra === palavraInvertida){
    alert("A palavra " + palavra + " é políndromo");
    alert(palavra[i]);
}else{
    alert("Essas palavras não são políndromos");
}
