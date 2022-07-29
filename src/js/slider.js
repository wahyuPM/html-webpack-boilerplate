import { addClass, removeClass } from './utils-class.js';

const sliders = document.getElementsByClassName("slider")

for (let index = 0; index < sliders.length; index++) {
    const slider = sliders[index];

    const items = slider.querySelectorAll(".slider .item")
    const preview = slider.querySelector("div > .preview")

    // loop jumlah class item
    for (let item = 0; item < items.length; item++) {
        const itemTrigger = items[item];

        itemTrigger.addEventListener("click", () => {
            const dataImg = itemTrigger.attributes?.['data-img']?.value;

            // loop jumlah class item yang berisi class selected
            for (let eachItemTrigger = 0; eachItemTrigger < items.length; eachItemTrigger++) {
                const triggerNeedToRemove = items[eachItemTrigger];

                removeClass(triggerNeedToRemove, "selected")
            }

            // add class selected ke item yang diklik
            addClass(itemTrigger, "selected")
            preview.querySelector("img").setAttribute("src", dataImg)
        })
    }
}