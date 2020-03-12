'use strict';
const burgerMenu = () =>{
    const burgerButton = document.querySelector('.menu-button'),
     boxMenuLink = document.querySelector('.hidden-small'),
     topMenu = document.querySelector('.top-menu');

    const windowSize = window.innerWidth;
    if(windowSize <= 768 ) {
        burgerButton.style.display = 'block';
        boxMenuLink.style.display = 'none'; 
    }
    //Липкое меню
    window.onscroll =  () => scrollFunction();
    const sticky = topMenu.offsetTop;
    
    function scrollFunction() {
        if (window.pageYOffset >= sticky) {
            topMenu.style.position = 'fixed';
            
          } else {
            topMenu.style.position = 'static';
          }
        }
};
export default burgerMenu;