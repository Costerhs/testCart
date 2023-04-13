const setBasketNums = (obj) => {
    const basketNums = document.querySelector('.num')
    basketNums.innerHTML = Object.values(obj).reduce((acc, curr) => acc + curr, 0);
}

export default setBasketNums;