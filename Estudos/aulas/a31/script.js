const button = document.getElementById('register-button')

//Podemos passar como segundo parâmetro uma função de callback
// button.addEventListener('click', function (){
//     alert('botão clicado')
// })

function register(evento){
    console.log(evento)
    const sectionElement = evento.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert('Usuário' + username + 'cadastrado')
    }else{
        alert('as senhas não batem')
    }
}

button.addEventListener('click', register)

// É assim que se remove os eventListener
function removeListener(){
    button.removeEventListener('click', register)
}

button.addEventListener('mouseover', function (ev){
    console.log(ev.currentTarget)
})