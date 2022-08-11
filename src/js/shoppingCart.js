import { removeClass } from './utils-class.js';

const cart = ['1', '2', '3']
localStorage.setItem('cart', JSON.stringify(cart))

const shoppingCart = document.getElementById("shopping-cart")

if (shoppingCart) {
    const headerCart = document.getElementById("header-cart")
    const buttons = shoppingCart.querySelectorAll("button[data-delete-item]")

    for (let index = 0; index < buttons.length; index++) {
        const button = buttons[index];
        const id = button.attributes?.['data-delete-item']?.value;

        button.addEventListener("click", () => {
            shoppingCart.querySelector(`div[data-row='${id}']`).remove()

            const localStorageCart = localStorage.getItem("cart") && JSON.parse(localStorage.getItem("cart"))

            // mencari index dari id
            const found = localStorageCart.indexOf(id)

            if (found > -1) {
                // menghapus index dari array
                localStorageCart.splice(found, 1)
                // menyimpan ke local storage
                localStorage.setItem("cart", JSON.stringify(localStorageCart))
            }

            if (localStorageCart.length === 0) {
                removeClass(headerCart, "cart-filled")
                removeClass(document.getElementById("cart-empty"), "hidden")
            }
        })
    }
}