let palavra = prompt("Digite uma palavra");
let palindromo = "";

for(i = 0; i < palavra.length; i++){
    console.log(palavra*2);
    if(palavra.length/2*2 === palavra){
        palindromo = palavra;
        alert(palindromo +" palindromo és");
    }else{
        alert("essa palavra não é um palíndromo");
    }
}