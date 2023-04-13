import getLocalBasket from "../defFunction/getLocalBasket.js";
import basketActions from "./basketActions.js";
import deleteAllBasketCard from "./deleteAllBasketCard.js";
import setBasketNums from './setBasketNums.js'
import setPrice from "./setPrice.js";

const showBasketProducts = async () => {
    let basketObj = getLocalBasket();
    const list = document.querySelector('.basket__list');
    list.innerHTML = ''
    setBasketNums(basketObj)
    let products = []
    await fetch('assets/products.json')
        .then(response => response.json())
        .then(datas => products = datas)
    let filteredProducts = products.filter(el => basketObj[el.id])

    filteredProducts.map(el => {
        createBasket(el, basketObj[el.id])
    })
    basketActions()
    deleteAllBasketCard()
    setPrice()
}

const createBasket = (data, value) => {
    const bCard = document.createElement('div');
    bCard.classList.add('bCard');

    // Создаем элемент .bCard__img
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('bCard__img');
    const img = document.createElement('img');
    img.src = 'assets' + data.image;
    img.alt = '';
    imgWrapper.appendChild(img);
    bCard.appendChild(imgWrapper);

    // Создаем элемент .bCard__description
    const description = document.createElement('div');
    description.classList.add('bCard__description');
    const title = document.createElement('p');
    title.classList.add('bCard__title');
    title.innerText = data.title;
    description.appendChild(title);
    bCard.appendChild(description);

    // Создаем элемент .bCard__event
    const event = document.createElement('div');
    event.classList.add('bCard__event');

    // Создаем элемент .bCard__nums
    const nums = document.createElement('div');
    nums.classList.add('bCard__nums');
    const minusBtn = document.createElement('button');
    minusBtn.classList.add('bCard__btn');
    minusBtn.classList.add('bCard__btn-min');
    minusBtn.innerText = '-';
    minusBtn.setAttribute('data-id', data.id);
    const numInput = document.createElement('input');
    numInput.type = 'number';
    numInput.value = value;
    numInput.disabled = true
    numInput.classList.add('bCard__num');
    const plusBtn = document.createElement('button');
    plusBtn.classList.add('bCard__btn');
    plusBtn.classList.add('bCard__btn-plus');
    plusBtn.setAttribute('data-id', data.id);
    plusBtn.innerText = '+';
    nums.appendChild(minusBtn);
    nums.appendChild(numInput);
    nums.appendChild(plusBtn);
    event.appendChild(nums);

    // Создаем элемент .bCard__sum
    const sum = document.createElement('div');
    sum.classList.add('bCard__sum');
    sum.textContent = data.regular_price.value + data.regular_price.currency + ' 1шт';
    event.appendChild(sum);

    // Создаем элемент .bCard__del
    const del = document.createElement('div');
    del.classList.add('bCard__del');
    del.setAttribute('data-id', data.id);
    const delImg = document.createElement('img');
    delImg.src = 'assets/icons/delete.svg';
    delImg.alt = 'delete';
    del.appendChild(delImg);
    event.appendChild(del);

    bCard.appendChild(event);

    // Добавляем созданный элемент в DOM
    const list = document.querySelector('.basket__list');
    list?.appendChild(bCard);
}

export default showBasketProducts;