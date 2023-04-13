import showCard from "../products/showCard.js";

const closeModal = () => {
    const closeBtn = document.querySelector('.modal button');
    const modal = document.querySelector('.modal');
    const products = document.querySelector('.products')
    const basket = document.querySelector('.basket')

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
        localStorage.clear();
        const currentUrl = window.location.href;
        const urlWithoutBasket = currentUrl.replace('/basket.html', '');
        const title = '';
        const state = {};

        window.history.pushState(state, title, urlWithoutBasket);
        products.style.display = 'block';
        basket.style.display = 'none';
        showCard()
    })
}

export default closeModal;