import getLocalBasket from "../defFunction/getLocalBasket.js"

const setPrice = async () => {
    const price = document.querySelector('.basket__price')
    const basketData = getLocalBasket();
    let products = []
    await fetch('assets/products.json')
        .then(response => response.json())
        .then(datas => products = datas)
    price.textContent = calculatePrice(basketData, products)
}
function calculatePrice(obj, arr) {
    let sum = 0;
    let filteredArr = arr.filter(el => Object.keys(obj).includes(String(el.id)));
    filteredArr.map(el => {
        sum += el.regular_price.value * obj[el.id]

    })
    return sum.toFixed(2);
}

export default setPrice;