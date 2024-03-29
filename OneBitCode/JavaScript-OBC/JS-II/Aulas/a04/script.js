function addContact() {
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')
    
    const nameLi = document.createElement('li')
    nameLi.innerText = 'Nome: '
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))
    nameLi.appendChild(nameInput)
    

    const telLi = document.createElement('li')
    telLi.innerText = 'Telefone: '
    const telInput = document.createElement('input')
    telInput.type = 'number'
    telInput.name = 'tel'
    telLi.appendChild(telInput)
    ul.appendChild(telLi)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement('li')
    addressLi.innerHTML = '<label for="address">Endereço: </label'
    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    

    contactSection.append(h3, ul)
}

function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}