const deleteBasketToObj = (number, obj) => {
    if (obj[number] == 1) {
        delete obj[number]
    } else {
        obj[number] -= 1;
    }
    return obj;
}

export default deleteBasketToObj