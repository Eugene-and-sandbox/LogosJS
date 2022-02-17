// Create table
const tableCreationForm = document.querySelector('#tableCreationForm')


const resetTableCreationFormBtn = document.querySelector('#resetTableCreationFormBtn'),
  creteTableBtn = document.querySelector('#creteTableBtn'),
  closeTableModal = document.querySelector('#closeTableModal')


function createTableFunction() {
  const tableTrCount = document.querySelector('#tableTrCount').value,
    tableTdCount = document.querySelector('#tableTdCount').value,
    tableTdWidth = document.querySelector('#tableTdWidth').value,
    tableTdHeight = document.querySelector('#tableTdHeight').value,
    tableBorderWidth = document.querySelector('#tableBorderWidth').value,
    styleOfBorderDropdown = document.querySelector('#styleOfBorderDropdown').value,
    styleOfBorderColorDropdown = document.querySelector('#styleOfBorderColorDropdown').value

  const tableWrapper = document.createElement('table')
  for (let i = 0; i < tableTrCount; i++) {
    const trItem = document.createElement('tr')

    for (let j = 0; j < tableTdCount; j++) {
      const tdItem = document.createElement('td')

      tdItem.style.padding = '.2rem .2rem .2rem'
      tdItem.style.width = tableTdWidth + 'px'
      tdItem.style.height = tableTdHeight + 'px'
      tdItem.style.border = tableBorderWidth + 'px' + ' ' + styleOfBorderDropdown + ' ' + styleOfBorderColorDropdown
      tdItem.innerText = 'TD'

      trItem.appendChild(tdItem)
    }

    tableWrapper.appendChild(trItem)
  }

  textShowingBlock.appendChild(tableWrapper)



  closeTableModal.classList.add('close')
  closeTableModal.dataset.dismiss = 'modal'
  textShowingBlock.style.display = 'block'
  textStylePanel.style.display = 'block'
  textEditorBlock.style.display = 'none'
  textEditorPanel.style.display = 'none'
}


creteTableBtn.addEventListener('click', createTableFunction)


// Create Ol
const olCreationForm = document.querySelector('#olCreationForm'),
  resetOlCreationFormBtn = document.querySelector('#resetOlCreationFormBtn'),
  creteOlBtn = document.querySelector('#creteOlBtn')

const closeModalOl = document.querySelector('#closeModalOl')

const olWrapper = document.createElement('ol')


function listOlCreatingFunction() {
  const styleTypeOfOlMarksListDropdown = document.querySelector('#styleTypeOfOlMarksListDropdown').value,
    listLiCount = document.querySelector('#listLiCount').value

  textShowingBlock.appendChild(olWrapper)

  for (let i = 0; i < listLiCount; i++) {
    const liItem = document.createElement('li')

    liItem.innerText = 'Lorem, example text for list'
    liItem.style.listStyleType = styleTypeOfOlMarksListDropdown

    olWrapper.appendChild(liItem)
  }

  closeModalOl.classList.add('close')
  closeModalOl.dataset.dismiss = 'modal'
  textShowingBlock.style.display = 'block'
  textStylePanel.style.display = 'block'
  textEditorBlock.style.display = 'none'
  textEditorPanel.style.display = 'none'
}

creteOlBtn.addEventListener('click', listOlCreatingFunction)


// Create Ul
const ulCreationForm = document.querySelector('#ulCreationForm'),
  resetUlCreationFormBtn = document.querySelector('#resetUlCreationFormBtn'),
  creteUlBtn = document.querySelector('#creteUlBtn')

const closeModalUl = document.querySelector('#closeModalUl')

const ulWrapper = document.createElement('ul')

function listUlCreatingFunction(event) {
  const styleTypeOfUlMarksListDropdown = document.querySelector('#styleTypeOfUlMarksListDropdown').value,
    countOfLiItems = document.querySelector('#countOfLiItems').value

  textShowingBlock.appendChild(ulWrapper)

  for (let i = 0; i < countOfLiItems; i++) {
    const liItem = document.createElement('li')

    liItem.innerText = 'Lorem, example text for list'
    liItem.style.listStyleType = styleTypeOfUlMarksListDropdown

    ulWrapper.appendChild(liItem)
  }

  closeModalUl.classList.add('close')
  closeModalUl.dataset.dismiss = 'modal'
  textShowingBlock.style.display = 'block'
  textStylePanel.style.display = 'block'
  textEditorBlock.style.display = 'none'
  textEditorPanel.style.display = 'none'
}

createUlBtn.addEventListener('click', listUlCreatingFunction)

resetUlCreationFormBtn.addEventListener('click', listUlCreatingResetFunction)
