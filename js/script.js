const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const cardText = document.querySelector('.card-text')

for (let card of cards) {
    card.addEventListener('click', () => {
        const imgId = card.getAttribute('id')
        const title = card.querySelector('.card-title').textContent
        const author = card.querySelector('.card-author').textContent
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = `./assets/${imgId}.png`
        modalOverlay.querySelector('.title').innerHTML = title
        modalOverlay.querySelector('.author').innerHTML = author
    })
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('img').src = ''
})

