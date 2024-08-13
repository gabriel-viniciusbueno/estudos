// O escopo é o contexto onde a variável foi declarada

let pokemon = "Charmander"

function evoluir (){
    pokemon = "Charmeleon"
}

///
function avaliarNota(nota){
    if(nota < 60){
        var aprovado = true;
        let situacao = "Aprovado";
    } else{
        var aprovado = false
        let situacao = "Reprovado";
    }

    console.log(nota);
    console.log(aprovado);
    console.log(situacao);
}
// Situação nunca será mostrada, pois Let não tem o alcance necessário
avaliarNota(83)
avaliarNota(49)