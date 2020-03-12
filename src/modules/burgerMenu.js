'use strict';
const burgerMenu = () => {
    const burgerButton = document.querySelector('.menu-button'),
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

        console.log(sticky);
        if (window.pageYOffset >= sticky) {
            topMenu.style.position = 'fixed';

        } else {
            topMenu.style.position = 'static';
        }
    });

};
export default burgerMenu;