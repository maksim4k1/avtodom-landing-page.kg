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
    document.body.classList.toggle("body-overflow");
}

// Animation
window.addEventListener("scroll", animateDocument);
window.addEventListener("load", animateDocument);

let isFinishBrandsAnimation = false;
let isFinishContactsAnimation = false;

function animateDocument(){
    let brands = document.querySelector(".brands");
    let brandItems = document.querySelectorAll(".brands__item");
    if(window.scrollY > (offset(brands).top - window.screen.height + 200) && isFinishBrandsAnimation === false){
        for(let i = 0; i < brandItems.length; i++){
            brandItems[i].classList.add("translateY-animation");
            brandItems[i].style.animationDelay = `0.${i}s`;
            setTimeout(function(){
                brandItems[i].classList.remove("translateY-animation");
                brandItems[i].style.opacity = 1;
            }, i * 100 + 1000);
        }
        isFinishBrandsAnimation = true;
    }

    let contacts = document.querySelector(".contacts");
    let contactsList = document.querySelectorAll(".contacts__list");
    if(window.scrollY > offset(contacts).top - window.screen.height + 200 && isFinishContactsAnimation === false){
        for(let i = 0; i < contactsList.length; i++){
            contactsList[i].classList.add("translateX-animation");
            contactsList[i].style.animationDelay = `0.${i}s`;
            setTimeout(function(){
                contactsList[i].classList.remove("translateX-animation");
                contactsList[i].style.opacity = 1;
            }, i * 100 + 1000);
            isFinishContactsAnimation = true;
        }
    }
}