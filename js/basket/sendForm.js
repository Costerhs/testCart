import getLocalBasket from "../defFunction/getLocalBasket.js";

const sendForm = async () => {
    const btn = document.querySelector('.form__btn');
    const name = document.querySelector('form__name');
    const phone = document.querySelector('form__phone');
    const modal = document.querySelector('.modal');

    let basketData = getLocalBasket();
    let products = [];

    await fetch('assets/products.json')
        .then(response => response.json())
        .then(datas => products = datas)

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        let newProducts = products.filter(el => basketData[el.id])
            .map(el => ({ ...el, nums: basketData[el.id], price: basketData[el.id] * el.regular_price.value }));
        //nums - количество товара price сумма цены на количество
        fetch('https://app.aaccent.su/js/confirm.php'
            //след образом я б отправил но так как post нельзя я полагаю что нужно get
            // {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         name: name,
            //         phone: phone,
            //         products: newProducts
            //     })
            // }
        )
            .then(() => {
                modal.style.display = 'flex'
            })
            .catch(error => console.error(error));
    })

}

export default sendForm;