export const addClass = (el, className) => {
    el.classList && el.classList.add(...className.split(" "));
}

export const removeClass = (el, className) => {
    el.classList && el.classList.remove(...className.split(" "));
}