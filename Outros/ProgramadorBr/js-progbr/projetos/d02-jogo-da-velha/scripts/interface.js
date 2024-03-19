document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.square')

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(e){
    let square = e.target
    let position = square.id

    if(handleMove(position)){
        setTimeout(()=>{
            alert('O jogo acabou!')
        },10)
        
    }
    updateSquare(position)
}

function updateSquare(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}
