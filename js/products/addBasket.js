import setBasketNums from "../basket/setBasketNums.js"
import createBasketObject from "../basket/addBasketToObj.js"
import getLocalBasket from "../defFunction/getLocalBasket.js"
import setLocalBasket from "../defFunction/setLocalBasket.js"

const addBasket = () => {
    const basketBtns = document.querySelectorAll('.card__del')

    let basketObj = getLocalBasket() || {}
    setBasketNums(basketObj)

    Array.from(basketBtns).map(el => {
        el.addEventListener('click', () => {
            let productId = el.getAttribute('data-id')
            let newObj = createBasketObject(productId, basketObj)

            setLocalBasket(newObj)
            setBasketNums(newObj)
        })
    })
}
export default addBasket;