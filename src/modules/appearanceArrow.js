const appearanceArrow = () => {
    const firstBlock = document.querySelector('.head-slider'),
     sticky = firstBlock.offsetTop,
     boxArrow = document.getElementById('totop');
    
    boxArrow.style.display = 'none';
    window.addEventListener('scroll', () => {
        if(window.pageYOffset >=sticky ){
            boxArrow.style.display = 'block';
        }else{
            boxArrow.style.display = 'none';
        }
    });
};

export default appearanceArrow;