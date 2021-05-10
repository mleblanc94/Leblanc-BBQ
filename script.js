let menu = document.querySelector('.openMenu');
let subheader = document.querySelector('.subheader');
let smallDisplay = document.querySelector('.burgerMenuDiv');
let exitOut = document.getElementById('exitOut');

let openMenu = () => {
    subheader.style.display = 'flex';
    smallDisplay.style.display = 'none';
}

let exitBurgerMenu = () => {
    subheader.style.display = 'none';
    smallDisplay.style.display = 'block';
}


menu.addEventListener('click', openMenu);
exitOut.addEventListener('click', exitBurgerMenu);