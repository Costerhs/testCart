import filterCard from "./filterCard.js";
import resetFilter from "./resetFilter.js";

const showBrand = async () => {
    let data = [];
    await fetch('assets/brands.json')
        .then(response => response.json())
        .then(datas => {
            data = datas
        })
    const list = document.querySelector('.products__brand')
    data.map(el => {
        createBrand(el, list)
    })

    filterCard()
    resetFilter()
}



const createBrand = (data, list) => {
    const label = document.createElement('label');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', data.title);
    input.setAttribute('value', data.id);
    input.classList.add('products__inp');

    const textNode = document.createTextNode(data.title);

    label.appendChild(input);
    label.appendChild(textNode);

    list?.prepend(label);
}

export default showBrand;