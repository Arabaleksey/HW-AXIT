let hamb = document.querySelector(".hamb")
let navMenu = document.querySelector(".bar__list")
let main = document.querySelector(".main")

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    main.classList.toggle("active")
}

