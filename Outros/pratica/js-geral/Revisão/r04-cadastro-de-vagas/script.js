// Criadores de Label e Input
function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.innerText = text
    label.for = htmlFor
    return label
}

function createInput(id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.name = name
    input.value = value
    input.id = id
    input.type = type
    input.placeholder = placeholder

    return input
}

//Capturando o form e o button
const form = document.getElementById('dev-form')
const addTechBtn = document.getElementById('add-tech-btn')


//Setando o index das linhas e criando o array
let inputRow = 0
const developers = []


//Setando o evento de criação de campos
addTechBtn.addEventListener('click', function(ev){
    //Capturando o form
    const stackInput = document.getElementById('stack-input')
    //Criando o elemento li
    const newRow = document.createElement('li')
    //Atribuindo inputRow
    let indexRow = inputRow
    inputRow++
    //Setando id e class no li
    newRow.id = 'input-row' + indexRow
    newRow.className = 'input-row'

    const techNameLabel = createLabel('Nome: ', 'techName' + indexRow)
    const techNameInput = createInput('techName-' + indexRow, null, 'techName')

    //Criação do input radio
    const expLabelTitle = createLabel('Experiência: ',)
    const id1 = 'expInput' + indexRow + '.1'
    const expInput1 = createInput(id1, '0-2 anos', 'techExp' + indexRow, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)
    const id2 = 'expInput' + indexRow + '.2'
    const expInput2 = createInput(id2, '3-4 anos', 'techExp' + indexRow, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)
    const id3 = 'expInput' + indexRow + '.3'
    const expInput3 = createInput(id3, '5+ anos', 'techExp' + indexRow, 'radio')
    const expLabel3 = createLabel('5+ anos', id3)
  
    // Criação do botão remover
    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.id = 'remove-btn'
    removeRowBtn.innerText = 'Remover'

    removeRowBtn.addEventListener('click', function(ev){
        stackInput.removeChild(newRow)
    })


    //Alocando os elementos no HTML

    newRow.append(
        techNameLabel, techNameInput, expLabelTitle, expInput1, expLabel1, expInput2, expLabel2, expInput3, expLabel3, removeRowBtn
    )

    stackInput.appendChild(newRow)
})

//Fazer o submit do form

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const fullName = document.getElementById('full-name')
    const inputRow = document.querySelectorAll('.input-row') // Pegando TODOS os elementos que possuem a clase InputRow (no caso todas as linhas)


    let technologies = []
    //Para cada Linha com a classe InputRow
    inputRow.forEach(function(row){
        //Pegando o id (até encontrar o primeiro elemento) e selecionando o input específico que quero puxar o valor 
        const techName = document.querySelector('#' + row.id + ' input[name = "techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type = "radio"]:checked').value

        //Depois faço o push do objeto contendo o nome e exp no array technologies 
        technologies.push({name: techName, exp: techExp})
    })

    const newDev = {fullname: fullName.value, technologies: technologies}

    developers.push(newDev)
    alert('Dev cadastrado com sucesso')

    fullName.value = ''
    inputRow.forEach(function (row){
        row.remove()
    })

    console.log(developers)
})
