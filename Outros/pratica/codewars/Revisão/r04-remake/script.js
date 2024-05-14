function createLabel(text, htmlFor){
    label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor

    return label
}

function createInput(id, name, value, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.name = name
    input.value = value
    input.type = type
    input.placeholder = placeholder

    return input
}

const form = document.getElementById('dev-form')
const addTechBtn = document.getElementById('add-tech-btn')

const developers = []
let rowInput = 0

addTechBtn.addEventListener('click', function(){
    const stackInputs = document.getElementById('stack-inputs')
    const newRow = document.createElement('li')
    let rowIndex = rowInput
    rowInput++
    newRow.id = 'tech-' + rowIndex
    newRow.className = 'input-row'

    const techNameLabel = createLabel('Nome: ', 'techName')
    const techNameInput = createInput('techName' + rowIndex, 'techName', null)

    const expLabelTitle = createLabel('Experiência: ',)

    const id1 = 'techExp' + rowIndex + '.1'
    const expRadio1 = createInput(id1,'expInput' + rowIndex, '0-2 anos', 'radio')
    const expLabel1 = createLabel('0-2 Anos', 'techExp' + rowIndex)
    const id2 = 'techExp' + rowIndex + '.2'
    const expRadio2 = createInput(id2,'expInput' + rowIndex, '3-4 anos', 'radio')
    const expLabel2 = createLabel('3-4 Anos', 'techExp' + rowIndex)
    const id3 = 'techExp' + rowIndex + '.3'
    const expRadio3 = createInput(id3,'expInput' + rowIndex, '5+ anos', 'radio')
    const expLabel3 = createLabel('5+ Anos', 'techExp' + rowIndex)


    const removeBtn = document.createElement('button')
    removeBtn.type = 'button'
    removeBtn.innerText = 'Remover'

    removeBtn.addEventListener('click', function(){
        stackInputs.removeChild(newRow)
    })
    stackInputs.appendChild(newRow)
    newRow.append(
        techNameLabel, techNameInput, expLabelTitle, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeBtn
    )

})

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const fullname = document.getElementById('full-name')
    const inputRow = document.querySelectorAll('.input-row')

    let technologies = []
    inputRow.forEach(function (row){
        const techNameInput = document.querySelector('#' + row.id + ' input[name="techName"]').value
        const techExpInput = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

        technologies.push({name: techNameInput, exp: techExpInput})
    })

    const newDev = {name : fullname.value, technologies}
    developers.push(newDev)
    console.log(developers)
    alert('Dev cadastrado com sucesso!')

    fullname.value = ''
    inputRow.forEach(function (row){
        row.remove()
    })
})