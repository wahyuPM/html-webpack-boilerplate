import { addClass, removeClass } from './utils-class.js';

let data = {
    "complate-name": "",
    "email-address": "",
    "address": "",
    "phone-number": "",
    "courier": "",
    "payment": "",
}

const check = () => {
    // check value dari variabel 'data' dan urutkan menjadi array
    const find = Object.values(data).filter((item) => item === "")
    if (find.length === 0) {
        document.querySelector("#shipping-detail button[type='submit']").disabled = false
    }
}

const options = document.querySelectorAll("#shipping-detail button[data-name")
for (let index = 0; index < options.length; index++) {
    const option = options[index];
    option.addEventListener("click", () => {
        const name = option.attributes?.['data-name']?.value
        const value = option.attributes?.['data-value']?.value
        data[name] = value
        check()
    }
    )
}

const inputs = document.querySelectorAll("#shipping-detail input[data-input]")
for (let index = 0; index < inputs.length; index++) {
    const input = inputs[index];
    input.addEventListener("change", (event) => {
        // ambil value dari input
        data[event.target.id] = event.target.value
        console.log(data)
        check()
    })
}