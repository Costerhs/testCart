const addBasketToObj = (number, obj) => {
    if (obj[number]) {
        obj[number] += 1;
    } else {
        obj[number] = 1;
    }
    return obj;
}

export default addBasketToObj