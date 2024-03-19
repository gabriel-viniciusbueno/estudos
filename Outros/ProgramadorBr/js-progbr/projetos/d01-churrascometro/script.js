let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')
let calcBtn = document.getElementById('calcular')

let resultado = document.getElementById('resultado')

calcBtn.addEventListener('click', function(){
    const adultos = inputAdultos.value
    const criancas = inputCriancas.value

    let totalCarne = adultos * carnePP(duracao) + (criancas * carnePP(duracao) / 2)
    
    let totalCerveja = adultos * cervejaPP(duracao)
    let totalBebidas = adultos * bebidasPP(duracao) + (criancas * bebidasPP(duracao) / 2)


    let paragrafoCarne = document.createElement('p')
    let paragrafoCerveja = document.createElement('p')
    let paragrafoBebidas = document.createElement('p')
    paragrafoCarne.innerText = `${totalCarne}g de carne`
    paragrafoCerveja.innerText += `${totalCerveja}ml de cerveja`
    paragrafoBebidas.innerText += `${totalBebidas}ml de bebida`

    resultado.append(paragrafoCarne, paragrafoCerveja, paragrafoBebidas)
})

function carnePP (duracao){
    if(duracao >= 6){
        return 650
    } else{
        return 400
    }
}

function cervejaPP (duracao){
    if(duracao >= 6){
        return 2000
    } else{
        return 1200
    }
}

function bebidasPP (duracao){
    if(duracao >= 6){
        return 1500
    } else{
        return 1000
    }
}


