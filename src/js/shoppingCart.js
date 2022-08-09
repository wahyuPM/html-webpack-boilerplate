import { addClass, removeClass } from './utils-class.js';

const cart = ['1', '2', '3']
localStorage.setItem('cart', JSON.stringify(cart))

const shoppingCart = document.getElementById("shopping-cart")

if (shoppingCart) {
    const headerCart = document.getElementById("header-cart")
    const buttons = shoppingCart.querySelectorAll(".button[data-delete-item]")

    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        const id = button.attributes?.['data-delete-item']?.value;

        button.addEventListener("click", () => {
            shoppingCart.querySelector(`div[data-row='${id}']`).remove()

            const localStorageCart = localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))
        })
    }
}