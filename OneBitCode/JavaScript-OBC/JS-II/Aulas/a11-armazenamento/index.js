document.getElementById('sessionBtn').addEventListener('click', function (){
    const input = document.getElementById('session')

    // Armazenando Input
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function (){
    const info = sessionStorage.getItem('info')
    alert('A informação salva é: ' + info)
})

document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')

    // Muito parecido com SessionStorage
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function () {
    const text = localStorage.getItem('text')
    alert('O texo salvo em local storage é: ' + text)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')

    //cookieName = value; expires = UTCStringDate; path = /
    
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2023,4,28) + ';'
    const path = 'path=/;'

    document.cookie = cookie + expiration + path
    input.value = ''
})