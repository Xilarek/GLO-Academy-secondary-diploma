'use strict';
const burgerMenu = () => {
    const burgerButton = document.querySelector('.menu-button'),
        popUpMenu = document.querySelector('.popup-menu'),
        btnMenuImg = document.getElementById('burger'),
        closeBtn = document.querySelector('.close-menu-btn > img'),
        boxMenuLink = document.querySelector('.hidden-small'),
        topMenu = document.querySelector('.top-menu');

    const windowSize = window.innerWidth;
    

    if (windowSize <= 768) {
        burgerButton.style.display = 'block';
        boxMenuLink.style.display = 'none';
    }
    //Липкое меню
    const positionFix = topMenu.offsetTop;
    const heigthTopMenu = window.getComputedStyle(topMenu, null).height;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= positionFix) {
            topMenu.style.position = 'fixed';
            document.body.style.marginTop = heigthTopMenu;
        }else{
            document.body.style.marginTop = '0';
            topMenu.style.position = 'static';
        }
    });

    //поп-ап
    const handlerMenu = () => {
        popUpMenu.style.display = 'none';
    };

    document.body.addEventListener('click', (event) => {
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