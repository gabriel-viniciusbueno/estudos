const devForm = document.getElementById('dev-form')
const devName = document.getElementById('dev-name').value
const developers = []
const addTechBtn = document.getElementById('add-tech')

const stackInputs = document.getElementById('stack-input')
let inputRows = 0




function createLabel(text, htmlFor) {
  const createLabel = document.createElement('label')
  createLabel.innerText = text
  createLabel.htmlFor = htmlFor

  return createLabel
}

function createInput(type,name, id, value,) {
  const newInput = document.createElement('input')
  newInput.type = type
  newInput.id = id
  newInput.name = name
  newInput.value = value
  
  return newInput
}


//Criar o evento de nova tecnologia
addTechBtn.addEventListener('click', () => {
  const newRow = document.createElement('li')
  const rowIndex = inputRows
  newRow.id = 'inputRow-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Tecnologia: ', 'techName' + rowIndex)
  const techName = createInput('text', 'techName' + rowIndex, 'techName', '')

  
  const techExpId1 = 'expRadio-' + rowIndex + '.1'
  const techExpId2 = 'expRadio-' + rowIndex + '.2'
  const techExpId3 = 'expRadio-' + rowIndex + '.3'

  const expLabel = createLabel('Experiência: ')
  const techExp1 = createInput('radio', 'techExp-' + rowIndex, techExpId1, '0-2 anos')
  const techExpLabel1 = createLabel('0-2 anos', techExpId1)

  const techExp2 = createInput('radio', 'techExp-' + rowIndex, techExpId2, '3-4 anos')
  const techExpLabel2 = createLabel('3-4 anos', techExpId2)

  const techExp3 = createInput('radio', 'techExp-' + rowIndex, techExpId3, '5+ anos')
  const techExpLabel3 = createLabel('5+ anos', techExpId3)


  //Deletar
  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'remover'
  removeRowBtn.addEventListener('click', function(){
    stackInputs.removeChild(newRow)
  })


  newRow.append(expLabel, techNameLabel, techName, techExp1, techExpLabel1, techExp2, techExpLabel2, techExp3, techExpLabel3, removeRowBtn)

  stackInputs.append(newRow)

  inputRows++
})



//Cadastro
devForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const fullNameInput = document.getElementById('dev-name')
  const inputRows = document.querySelectorAll('.inputRows')
  
  let technologies = []
  inputRows.forEach(function (row){
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, exp: techExp})
  })

  const newDev = {fullname: fullNameInput, technologies}
  developers.push(newDev)
  alert('Dev cadastrado com sucesso')

  fullNameInput.value = ''
  inputRows.forEach(function (row){
    row.remove()
  })
  console.log(developers);
})