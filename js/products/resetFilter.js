import showCard from "./showCard.js"

const resetFilter = () => {
    const resetBtn = document.querySelector('.reset-button')
    const allBrand = document.querySelectorAll('.products__inp')

    resetBtn?.addEventListener('click', () => {
        Array.from(allBrand).map(el => {
            el.checked = false
        })
        showCard()
    })
}

export default resetFilter;