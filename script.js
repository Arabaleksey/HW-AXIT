let bar__hamb = document.querySelector(".bar__hamb")
let navMenu = document.querySelector(".bar__list")
let main = document.querySelector(".main")

bar__hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    bar__hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    main.classList.toggle("active")
}

