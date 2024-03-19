function triangulo(){
    const base = prompt("Qual a base do triângulo?")
    const altura = prompt("Qual a altura do triângulo?")

    return base * altura / 2;
}

function retangulo(){
    const base = parseFloat(prompt("Qual a base do retangulo?"))
    const altura = parseFloat(prompt("Qual a altura do retângulo?"))
    return base * altura;
}

function quadrado(){
    const lado = parseFloat(prompt("Qual o lado do quadrado"))
    return lado * lado;
}

function trapezio(){
    const bmaior = parseFloat(prompt("Qual a base maior do trapézio?"))
    const bmenor = parseFloat(prompt("Qual a base menor do trapézio?"))
    const altura = parseFloat(prompt("Qual a altura do trapézio?"))

    return (bmaior + bmenor) * altura /2;
}

function circulo(){
    const raio = prompt("Qual o raio  do círculo?")
    return 3.14 * raio * raio
}

function menu(){
    return prompt(
        "Calculadora Geométrica \n" +
        "1.Calcular área de triângulo\n"+
        "2.Calcular área de retângulo\n"+
        "3.Calcular área de quadrado\n"+
        "4.Calcular área de trapézio\n"+
        "5.Calcular área de círculo\n"+
        "6.Sair"
    )
}

function executar(){
    let opcao = "";

    do{
        opcao = menu()
        let resultado

        switch(opcao){
            case "1":
                resultado = triangulo()
                break
            case "2":
                resultado = retangulo()
                break
            case "3":
                resultado = quadrado()
                break
            case "4":
                resultado = trapezio()
                break
            case "5":
                resultado = circulo()
                break
            case "6":
                alert("Encerrando")
                break
            default:
                alert("Opção inválida")
        }

        if(resultado){
            alert("Resultado: " + resultado)
        }
    }while(opcao !== "6")
}

executar()