import setBasketNums from "./setBasketNums.js"
import addBasketToObj from "./addBasketToObj.js"
import getLocalBasket from "../defFunction/getLocalBasket.js"
import setLocalBasket from "../defFunction/setLocalBasket.js"
import deleteBasketToObj from "./deleteBasketToObj.js"
import showBasketProducts from "./showBasketProducts.js"
import setPrice from "./setPrice.js"

const basketActions = () => {
    const basketAdd = document.querySelectorAll('.bCard__btn-plus')
    const basketDelete = document.querySelectorAll('.bCard__btn-min')
    let basketObj = getLocalBasket() || {}
    setBasketNums(basketObj)

    Array.from(basketAdd).map(el => {
        el.addEventListener('click', () => {
            let productId = el.getAttribute('data-id')
            let newObj = addBasketToObj(productId, basketObj)
            let productsNums = el.previousElementSibling
            productsNums.value = newObj[productId]
            setLocalBasket(newObj)
            setBasketNums(newObj)
            setPrice()
        })
    })

    Array.from(basketDelete).map(el => {
        el.addEventListener('click', () => {
            let productId = el.getAttribute('data-id')
            let newObj = deleteBasketToObj(productId, basketObj)
            let productsNums = el.nextElementSibling
            productsNums.value = newObj[productId]
            setLocalBasket(newObj)
            setBasketNums(newObj)
            if (!basketObj[productId]) {
                showBasketProducts()
            }
        })
    })
}
export default basketActions;