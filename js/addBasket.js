import getLocalBasket from "./defFunction/getLocalBasket.js"
import setLocalBasket from "./defFunction/setLocalBasket.js"

const addBasket = () => {
    const basketBtns = document.querySelectorAll('.card__del')
    const basketNums = document.querySelector('.num')
    let basketArr = getLocalBasket() || []
    basketNums.innerHTML = basketArr.length

    Array.from(basketBtns).map(el => {
        el.addEventListener('click', () => {
            let productId = el.getAttribute('data-id')
            basketArr.push(productId)
            setLocalBasket(basketArr)
            basketNums.innerHTML = basketArr.length
        })
    })
}
export default addBasket;