'use strict';
const burgerMenu = () => {
    const burgerButton = document.querySelector('.menu-button'),
        body = document.querySelector('body'),
        popUpMenu = document.querySelector('.popup-menu'),
        btnMenuImg = document.querySelector('.btn-img'),
        closeBtn = document.querySelector('.close-menu-btn > img'),
        itemUl = popUpMenu.querySelector('ul'),
        itemPopUp = itemUl.querySelectorAll('.scroll > a'),
        boxMenuLink = document.querySelector('.hidden-small'),
        topMenu = document.querySelector('.top-menu');

    const windowSize = window.innerWidth;

    if (windowSize <= 768) {
        burgerButton.style.display = 'block';
        boxMenuLink.style.display = 'none';
    }
    //Липкое меню
    window.addEventListener('scroll', () => {

        if (topMenu.getBoundingClientRect().top < 1) {

            topMenu.style.position = 'fixed';

        } else if (topMenu.getBoundingClientRect().top === 97) {

            topMenu.style.position = 'static';
        }
    });

    //поп-ап
    const handlerMenu = () => {
        popUpMenu.style.display = 'none';
    };

    body.addEventListener('click', (event) => {
        let target = event.target;
        if (target === btnMenuImg) {
            popUpMenu.style.display = 'flex';
        }
        for (let i = 0; i < itemPopUp.length; i++) {
            if (target === itemPopUp[i]) {
                handlerMenu();
            }
        }
        if (target === closeBtn) {
            handlerMenu();
        }
    });

};
export default burgerMenu;