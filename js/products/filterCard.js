import showCard from "./showCard.js";

const filterCard = () => {
    const btn = document.querySelector('.apply-button')
    const allBrand = document.querySelectorAll('.products__inp')

    btn?.addEventListener('click', () => {
        let filterBrandArr = [];
        Array.from(allBrand).map(el => {
            if (el.checked) {
                filterBrandArr.push(el.value)
            }
        })
        showCard(filterBrandArr)
    })
}

export default filterCard;