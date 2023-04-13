import addBasket from "./addBasket.js";
let paginationNum = 1;


const showCard = async (filterData) => {
    let data = [];

    await fetch('assets/products.json')
        .then(response => response.json())
        .then(datas => data = datas)

    const list = document.querySelector('.products__list')
    const productBtnContainer = document.querySelector('.products__more-btn')
    list.innerHTML = ''

    if (filterData) {
        let filtData = data.filter(elem => filterData.includes(String(elem.brand)))
        filtData.slice(0, paginationNum * 6).map(el => {
            createCard(el, list)
        })
        paginationBtn(productBtnContainer, filtData.length, paginationNum * 6, filterData)
    } else {
        data.slice(0, paginationNum * 6).map(el => {
            createCard(el, list)
        })
        paginationBtn(productBtnContainer, data.length, paginationNum * 6)
    }
    addBasket()
}

export default showCard;

const paginationBtn = (div, length, num, filterData) => {
    const button = document.createElement('button');

    if (num < length) {
        div.style.display = 'block'
        button.classList.add('products__more');
        button.innerText = 'Больше';

        div.append(button);
        button.addEventListener('click', () => {
            paginationNum += 1
            showCard(filterData)
        })
    } else {
        div.style.display = 'none'
    }
}

const createCard = (product, list) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const btns = document.createElement('div');
    btns.classList.add('card__btns');
    card.appendChild(btns);

    const icon = document.createElement('img');
    icon.setAttribute('src', './assets/icons/basket.svg');
    icon.setAttribute('data-id', product.id);
    icon.classList.add('card__del');
    btns.appendChild(icon);

    const img = document.createElement('div');
    img.classList.add('card__img');
    card.appendChild(img);

    const imgTag = document.createElement('img');
    imgTag.setAttribute('src', 'assets' + product.image);
    imgTag.setAttribute('alt', 'img');
    img.appendChild(imgTag);

    const title = document.createElement('div');
    title.classList.add('card__title');
    title.textContent = product.title;
    card.appendChild(title);

    const price = document.createElement('div');
    price.classList.add('card__price');
    price.textContent = product.regular_price.value + product.regular_price.currency;
    card.appendChild(price);

    list.appendChild(card)
}


