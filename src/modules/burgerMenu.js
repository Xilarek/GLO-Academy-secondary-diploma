'use strict';
const burgerMenu = () =>{
    const burgerButton = document.querySelector('.menu-button'),
        itemMenuLink = document.querySelector('.hidden-small');

    const windowSize = window.innerWidth;
    if(windowSize <= 768 ) {
        burgerButton.style.display = 'block';
        itemMenuLink.style.display = 'none'; 
    }
    
};

export default burgerMenu;