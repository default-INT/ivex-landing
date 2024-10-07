const offerType = {
  cargo: 'CARGO',
  transport: 'TRANSPORT',
}

const transportBox = document.getElementById('transportBox');
const cargoBox = document.getElementById('cargoBox');

const selectingButtons = document.querySelectorAll('#selectOfferType > button');

const buttonByType = {
  [offerType.cargo]: selectingButtons[1],
  [offerType.transport]: selectingButtons[0],
}

const boxByType = {
  [offerType.cargo]: cargoBox,
  [offerType.transport]: transportBox,
}

selectingButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const selectedType = event.target.dataset.type
    const reversedType = selectedType === offerType.cargo ? offerType.transport : offerType.cargo

    buttonByType[selectedType].classList.add('active')
    buttonByType[reversedType].classList.remove('active')

    boxByType[selectedType].style.display = ''
    boxByType[reversedType].style.display = 'none'
  })
})
