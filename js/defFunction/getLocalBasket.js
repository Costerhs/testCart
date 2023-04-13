const getLocalBasket = () => {
    return JSON.parse(localStorage.getItem('basket'))
}

export default getLocalBasket;