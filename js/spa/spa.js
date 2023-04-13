import showBasketProducts from '../basket/showBasketProducts.js'

const spa = () => {
    const main = document.querySelector('.head__logo');
    const basketBtn = document.querySelector('.head__basket');
    const products = document.querySelector('.products')
    const basket = document.querySelector('.basket')
    const fileName = window.location.pathname.split('/').pop();

    if (fileName === 'basket.html') {
        products.style.display = 'none';
        basket.style.display = 'block';
    } else {
        products.style.display = 'block';
        basket.style.display = 'none';
    }

    basketBtn.addEventListener('click', (e) => {
        if (!window.location.href.includes('basket.html')) {
            const currentUrl = window.location.href;
            const newUrl = currentUrl + 'basket.html';
            const title = '';
            const state = {};

            window.history.pushState(state, title, newUrl);
        }

        products.style.display = 'none';
        basket.style.display = 'block';
        showBasketProducts()
    })

    main.addEventListener('click', (e) => {
        const currentUrl = window.location.href;
        const urlWithoutBasket = currentUrl.replace('/basket.html', '');
        const title = '';
        const state = {};


        window.history.pushState(state, title, urlWithoutBasket);
        products.style.display = 'block';
        basket.style.display = 'none';
    })


}

export default spa;