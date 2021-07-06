// Functions
function offset(el){
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {top: rect.top + scrollTop, left: rect.left + screenLeft};
}

// Burger
const burgerButton = document.querySelector(".header__button");
const burgerMenu = document.querySelector(".header__burger");

burgerButton.addEventListener("click", toggleBurgerMenu);
burgerMenu.addEventListener("click", toggleBurgerMenu)

function toggleBurgerMenu(){
    burgerMenu.classList.toggle("open-burger-menu");
}

// Animation
window.addEventListener("scroll", animateDocument);
window.addEventListener("load", animateDocument);

function animateDocument(){
    let brands = document.querySelector(".brands");
    let brandItems = document.querySelectorAll(".brands__item");
    if(window.scrollY > offset(brands).top - window.screen.height + 400){
        for(let i = 0; i < brandItems.length; i++){
            brandItems[i].classList.add("translateY-animation");
            brandItems[i].style.animationDelay = `0.${i}s`;
        }
    }

    let contacts = document.querySelector(".contacts");
    let contactsList = document.querySelectorAll(".contacts__list");
    if(window.scrollY > offset(contacts).top - window.screen.height + 400){
        for(let i = 0; i < contactsList.length; i++){
            contactsList[i].classList.add("translateX-animation");
            contactsList[i].style.animationDelay = `0.${i}s`;
        }
    }
}