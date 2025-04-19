const header = document.querySelector(".header");
const burger = document.querySelector(".burger-menu");
const burgerIcon = document.querySelector(".burger__menu");

burger.addEventListener("click", function(){
    header.classList.toggle("header--mobile");

    if (header.classList.contains("header--mobile")) {
        burgerIcon.src ="files/close-menu.svg"
    } else {
        burgerIcon.src ="files/burger-menu.png"
    }

})