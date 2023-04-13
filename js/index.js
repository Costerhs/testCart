import showBrand from './products/showBrand.js'
import showCard from './products/showCard.js'
import setLocalBasket from './defFunction/setLocalBasket.js'
import getLocalBasket from './defFunction/getLocalBasket.js'
import showBasketProducts from './basket/showBasketProducts.js'
import setPrice from './basket/setPrice.js'
import sendForm from './basket/sendForm.js'
import closeModal from './basket/closeModal.js'
import spa from './spa/spa.js'

if (!getLocalBasket()) {
    setLocalBasket({})
        .log('sda')
}
showBasketProducts()
setPrice()
sendForm()
closeModal()
showCard()
showBrand()
spa()
