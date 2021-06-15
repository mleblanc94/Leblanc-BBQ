let menu = document.querySelector('.openMenu');
let subheader = document.querySelector('.subheader');
let burgerDisplay = document.querySelector('.burgerMenuDiv');
let exitOut = document.getElementById('exitOut');

let openMenu = () => {
    subheader.style.display = 'flex';
    burgerDisplay.style.display = 'none';
}

let exitBurgerMenu = () => {
    subheader.style.display = 'none';
    burgerDisplay.style.display = 'block';
}

menu.addEventListener('click', openMenu);
exitOut.addEventListener('click', exitBurgerMenu);