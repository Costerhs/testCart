import showBrand from './showBrand.js'
import showCard from './showCard.js'
import setLocalBasket from './defFunction/setLocalBasket.js'
import getLocalBasket from './defFunction/getLocalBasket.js'

if (!getLocalBasket()) {
    setLocalBasket([])
    console.log('sda')
}

showCard()
showBrand()
