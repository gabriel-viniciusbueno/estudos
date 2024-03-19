const tela = document.getElementById('tela')
const ctx = tela.getContext('2d')

// ctx.moveTo(0,0)
// ctx.lineTo(250,250)
// ctx.lineTo(500,0)
// ctx.lineWidth = 5
// ctx.strokeStyle = 'red'
// ctx.stroke()

// ctx.fillStyle = 'yellow'
// ctx.fillRect(450, 400, 50, 100)

//Path




// ctx.beginPath()

// ctx.lineWitdh = 4
// ctx.strokeStyle = 'red'
// ctx.moveTo(10,10)
// ctx.lineTo(400, 300)
// ctx.stroke()

// ctx.beginPath() // Begin path diz para iniciar uma nova linha, senão ela sequiria o rumo da primeira. Isso se não tivessemos o moveTo, caso contrário teríamos duas linhas azuis
// ctx.lineWidth = 7
// ctx.strokeStyle = 'blue'
// ctx.fillStyle = 'green'
// ctx.moveTo(50, 10)
// ctx.lineTo (300, 300)
// ctx.lineTo(200, 300)
// ctx.closePath()
// ctx.stroke()
// ctx.fill()








const circle = {
    x: 250,
    y: 250,
    raio: 100,
    inicio: 0,
    fim: 0
}
function drawCircle(c) { 
    //Cada vez que a função desenhar um novo círculo, ela tmb vai desenhar um novo background, o que não gera o efeito estranho da cor
    ctx.beginPath()
    ctx.rect(0,0, 500, 500)
    ctx.fillStyle = 'beige'
    ctx.fill()

    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    ctx.stroke()

    ctx.fill()
    ctx.stroke()
}

setInterval(function () {
    if( circle.fim < 2 * Math.PI){
        circle.fim += 0.1
        circle.x += 0.5
        circle.y += 0.5;
    }

    drawCircle(circle)
}, 5)
