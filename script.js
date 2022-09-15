let hamb = document.querySelector(".hamb")
let navMenu = document.querySelector(".bar__list")
let main = document.querySelector(".main")

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    main.classList.toggle("active")
}




// let review__point_one = document.querySelector(".review__point_one")
// let review__block_one = document.querySelector('.review__block_one')

// review__point_one.addEventListener("click, flip")

// function flip(){
//     review__point_one.classList.toggle("active")
//     review__block_one.classList.toggle("active")
// }

// let review__point_two = document.querySelector(".review__point_two")
// let review__block_two = document.querySelector('.review__block_two')

// review__point_two.addEventListener("click, flip")

// function flip(){
//     review__point_two.classList.toggle("active")
//     review__block_two.classList.toggle("active")
// }

// let review__point_three = document.querySelector(".review__point_three")
// let review__block_three = document.querySelector('.review__block_three')

// review__point_three.addEventListener("click, flip")

// function flip(){
//     review__point_three.classList.toggle("active")
//     review__block_three.classList.toggle("active")
// }