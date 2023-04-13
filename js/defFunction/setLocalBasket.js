const setLocalBasket = (data) => {
    localStorage.setItem('basket', JSON.stringify(data))
}

export default setLocalBasket;