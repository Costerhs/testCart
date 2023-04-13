import getLocalBasket from "../defFunction/getLocalBasket.js"
import setLocalBasket from "../defFunction/setLocalBasket.js"
import setBasketNums from "./setBasketNums.js"
import showBasketProducts from "./showBasketProducts.js"

const deleteAllBasketCard = () => {
    const delBtn = document.querySelectorAll('.bCard__del')

    let basketObj = getLocalBasket() || {}
    setBasketNums(basketObj)

    Array.from(delBtn).map(el => {
        el.addEventListener('click', () => {
            let productId = el.getAttribute('data-id')
            delete basketObj[productId]
            setLocalBasket(basketObj)
            setBasketNums(basketObj)
            showBasketProducts()
        })
    })
}

export default deleteAllBasketCard;