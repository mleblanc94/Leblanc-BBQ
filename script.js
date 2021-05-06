let menu = document.querySelector('.openMenu');
let subheader = document.querySelector('.subheader');
let smallDisplay = document.querySelector('.burgerMenuDiv');

let openMenu = () => {
    subheader.style.display = 'flex';
    smallDisplay.style.display = 'none';
}


menu.addEventListener('click', openMenu);