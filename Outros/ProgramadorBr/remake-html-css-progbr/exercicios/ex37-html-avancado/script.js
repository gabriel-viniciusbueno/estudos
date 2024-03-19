const image = document.getElementById('img1')

image.addEventListener('click', function(){
    
    image.setAttribute('src', './assets/guto, 2023.png')

    //Podemos criar atriubutos que não existem e acessá-los

})

const lista = document.getElementById('lista')

lista.dataset.n = 4

let id = lista.getAttribute('data-id')
console.log(id)

const num = parseInt(lista.dataset.n)

console.log(lista.dataset.n)

let conteudo = ''
for( let i = 0; i < num; i++){
    conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo

//Com isso, podemos manipular o código usando o HTML, desde que o JS esteja esperando por isso

