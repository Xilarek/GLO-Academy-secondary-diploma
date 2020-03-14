'use strict';
const burgerMenu = () => {
    const burgerButton = document.querySelector('.menu-button'),
        body = document.querySelector('body'),
        popUpMenu = document.querySelector('.popup-menu'),
        btnMenuImg = document.querySelector('.btn-img'),
        closeBtn = document.querySelector('.close-menu-btn > img'),
        boxMenuLink = document.querySelector('.hidden-small'),
        topMenu = document.querySelector('.top-menu');

    const windowSize = window.innerWidth;

    if (windowSize <= 768) {
        burgerButton.style.display = 'block';
        boxMenuLink.style.display = 'none';
    }
    //Липкое меню
    const sticky = topMenu.offsetTop;
    window.addEventListener('scroll', () => {

        if (window.pageYOffset >= sticky) {
            topMenu.style.position = 'fixed';

        } else {
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
        if (target.closest('a')) {
            handlerMenu();
        }

        if (target === closeBtn) {
            handlerMenu();
        }
    });

};
export default burgerMenu;