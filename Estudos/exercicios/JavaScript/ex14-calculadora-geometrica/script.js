let option = "";
let base = 0;
let altura = 0;
let lado = 0;
let raio = 0;
let resultado = ""
function triangulo (base, altura){
    return base * altura / 2
}

function retangulo (base, altura){
    return base * altura
}

function quadrado (lado){
    return retangulo(lado, lado)
}

function trapezio (bmaior, bmenor, altura){
    return (bmaior + bmenor) * altura / 2
}

function circulo (pi, raio){
    return pi * raio * raio;
}
//////////////
do{
    option = prompt("Bem-vindo a calculadora geométrica" +
    "\n1. Área do triângulo \n2. Base do retângulo \n3. Área do quadrado \n4. Área do trapézio \n5. Área do círculo \n6. Sair ")

    switch(option){
        case "1":
            base = parseFloat(prompt("Qual a base do triângulo?"))
            altura = parseFloat(prompt("Qual a altura do triângulo?"))

            resultado = triangulo(base, altura);
            alert(resultado)
            break

        case "2":
            base = parseFloat(prompt("Qual a base do retângulo?"))
            altura = parseFloat(prompt("Qual a altura do retângulo?"))
    
            resultado = retangulo(base, altura);
            alert(resultado)
            break
        case "3":
            lado = parseFloat(prompt("Qual o lado do quadrado?"))
    
            resultado = quadrado(lado, lado);
            alert(resultado)
            break
        case "4":
            basemaior = parseFloat(prompt("Qual a base maior?"))
            basemenor = parseFloat(prompt("Qual a base menor?"))
            altura = parseFloat(prompt("Qual a altura?"))
    
            resultado = trapezio(basemaior, basemenor, altura);
            alert(resultado)
            break
        case "5":
            raio = parseFloat(prompt("Qual o raio do círculo?"))
    
            resultado = circulo(3.14, raio);
            alert(resultado)
            break
        case "6":
            alert("Encerrando")
            break
        default:
            alert("Opção Inválida")
    
    }

}while(option !== "6")
