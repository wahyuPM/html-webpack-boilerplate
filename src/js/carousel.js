import { addClass, removeClass } from "./utils-class";

const carouselId = document.getElementById("carousel");
const carouselItems = carouselId.getElementsByClassName("flex")[0];
const carouselContainer = carouselId.getElementsByClassName("container")[0];

const carouselCalculateOffset = () => {
    const carouselOffset = carouselContainer.getBoundingClientRect().left
    carouselItems.style.paddingLeft = `${carouselOffset - 16}px`;
    carouselItems.style.paddingRight = `${carouselOffset - 16}px`;
}

const slide = (wrapper, items) => {
    let posX1 = 0, posX2 = 0, posInitial, posFinal, threshold = 100, slides = items.children;
}
if (carouselId) {
    window.addEventListener("load", carouselCalculateOffset);
    window.addEventListener("resize", carouselCalculateOffset);
}