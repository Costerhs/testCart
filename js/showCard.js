import addBasket from "./addBasket.js";

const showCard = async (filterData) => {
    let data = [];
    await fetch('assets/products.json')
        .then(response => response.json())
        .then(datas => data = datas)

    const list = document.querySelector('.products__list')
    list.innerHTML = ''

    if (filterData) {
        data.filter(elem => filterData.includes(String(elem.brand))).map(el => {
            createCard(el, list)
        })
        console.log(filterData)
    } else {
        data.map(el => {
            createCard(el, list)
        })
    }
    addBasket()
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
export default showCard