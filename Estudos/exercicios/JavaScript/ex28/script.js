// const newTech = document.getElementById('add-tech')
// const devs = []

// newTech.addEventListener('click', function(ev){
//     ev.preventDefault()
//     const newArea = document.createElement('input')
//     newArea.type = 'text'
//     newArea.id = 'tech'
//     newArea.name = 'tech'
//     newArea.placeholder = 'Tecnologia'

//     form.appendChild(newArea)
// })

// const form = document.getElementById('dev-form')
// form.addEventListener('submit', function(ev){
//     ev.preventDefault()

//     const name = document.querySelector('input[name = "name"').value
//     devs = {tech}
//     devs.tech = document.getElementById('tech').value
    
//     console.log(devs)

// })






// Vamos ter algumas tarefas repetitivas nesse exercício, como por exemplo a criação de labels (que precisam de text e for) e de inputs(name, id, value, type e placeholder)
function createLabel (text, htmlFor){
    const label = document.createElement('label')
    label.innerText = text
    label.for = htmlFor

    return label
}

function createInput (id, value, name, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.name = name
    input.id = id
    input.value = value
    input.type = type
    input.placeholder = placeholder

    return input
}

//Agora é hora de capturar o botão e o formulário
const addTechBtn = document.getElementById('add-tech-btn')
const form = document.getElementById('dev-form')

//Para auxiliar, já crio o array de developers e o número de linhas que teremos na tecnologia quando inseridas na UL
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function (ev) {
    const stackInputs = document.getElementById('stack-inputs')

    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'input-row' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex)
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName')

    //Criação do input radio
    const expLabelTitle = createLabel('Experiência: ',)
    const id1 = 'expRadio-' + rowIndex + '.1'
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel1 = createLabel('0-2 anos', id1)
    const id2 = 'expRadio-' + rowIndex + '.2'
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-' + rowIndex, 'radio')
    const expLabel2 = createLabel('3-4 anos', id2)
    const id3 = 'expRadio-' + rowIndex + '.3'
    const expRadio3 = createInput(id3, '5+ anos', 'techExp-' + rowIndex, 'radio')
    const expLabel3 = createLabel('5+ anos', id3)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function (){
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel, techNameInput, expLabelTitle,expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
        )

    stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function (ev){
    ev.preventDefault()

    const fullnameInput = document.getElementById('full-name')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []
    inputRows.forEach(function (row) {
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
        technologies.push({name: techName, exp: techExp})
    })

    const newDev = {fullname: fullnameInput.value, technologies: technologies}

    developers.push(newDev)
    alert('Dev cadastrado com sucesso!')

    fullnameInput.value = ''
    inputRows.forEach(function (row){
        row.remove()
    })

    console.log(developers)
})