const button = document.querySelector(".home-explore-a")
const load = document.querySelector(".home-explore-wrapper-load")
const burger = document.querySelector(".header-burger")
const burgerLine1 = document.querySelector(".header-burger-line1")
const burgerLine2 = document.querySelector(".header-burger-line2")
const burgerLine3 = document.querySelector(".header-burger-line3")
const menu = document.querySelector(".header-mobile")

button.addEventListener("click", function() {
    load.classList.add("grid")
    button.classList.add("none")
})

burger.addEventListener("click", function() {
    menu.classList.toggle("show")
    burgerLine1.classList.toggle("burger-line1")
    burgerLine2.classList.toggle("burger-line2")
    burgerLine3.classList.toggle("burger-line3")
})