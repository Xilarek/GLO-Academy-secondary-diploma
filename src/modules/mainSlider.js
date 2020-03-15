const mainSlider = () => {
    const slider = document.querySelector('.main-slider'),
        slide = slider.querySelectorAll('.slide');
        
    let currentSlide = 0,
        interval;
    
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };
        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };
    
    const autoPlaySlider = () => {
        prevSlide(slide, currentSlide, 'slide-active');
        currentSlide++;

        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'slide-active');
    };

    const startSlider = (time = 2500) => {
        interval = setInterval(autoPlaySlider, time);
    };
    
    startSlider(3000);
};
export default mainSlider;