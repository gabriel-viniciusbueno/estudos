const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function (){
    input.value = 'Olá, Mundo!'

    console.log(input.value)
    console.log(input.getAttribute('value'))
    //GetAttribute é uma propriedade do JS que me permite resgatar o valor setado no elmento HTML, por isso os retornos são diferentes
})

document.getElementById('type').addEventListener('click', function(){
    // input.type = input.type !== 'radio' ? 'radio' : 'text'

    //É possível modificar de outra forma, utilizando setAttribute. Primeiro setamos o atributo e então o valor do atributo. Mas nesse caso, ele vai só alterar
    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function(){
    const placeholderTransform = input.value
    input.placeholder = input.placeholder !== placeholderTransform ? placeholderTransform : ''
    input.value = ''
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled) // Já que disabled é um valor booleano, podemos negá-lo
})

document.getElementById('data').addEventListener('click', function(){
    //Elementos data no HTML servem para armazernamos valores customizados no HTML que podem ser acessados no JS
    //Dataset é uma propriedade que referencia todos os elementos do tipo data no HTML
    const data = input.dataset.somethingElse
    console.log("O valor do atributo data-something é: " + data)
    // input.data.something = ''

})