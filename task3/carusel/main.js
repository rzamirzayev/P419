let carusel = document.querySelector(".content");
let items = document.querySelectorAll(".item");
let btn=document.querySelectorAll(".btn")
let value = 0;
let total = items.length;
function nextSlide() {
    if (value <total) {
        value++;
    }
    else {
        value = 0;
    }
    updateCarusel();
}
function prevSlide() {
    if (value >total) {
        value--;
    }
    else {
        value = 0;
    }
    updateCarusel();
}
function updateCarusel() {
    let offset = value * 400;
    carusel.style.left = `-${offset}px`;
    console.log(offset);
}
setInterval(nextSlide, 3000);