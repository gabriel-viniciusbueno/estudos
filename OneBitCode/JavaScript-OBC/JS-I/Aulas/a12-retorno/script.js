function calcularMedia(a, b){
    const media = (a + b) /2;
    return media;
}

const resultado = calcularMedia(7,2);

console.log(resultado);

function criarProduto(nome,preco){
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

const notebook = criarProduto("Positivo", "5 cuanzas");
console.log(notebook)

//Return pode retornar o valor de outra função

function areaRetangular(base, altura){
    return base * altura
}

function areaQuadrada (lado){
    return areaRetangular(lado, lado)
}

console.log(areaQuadrada(9));

//APÓS O RETURN, A FUNÇÃO É FINALIZADA
