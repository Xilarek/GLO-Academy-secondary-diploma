class Carousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 1,
        responsive = []
    }){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow
        };
        this.responsive = responsive;
        
    }
    //Панель вызовова методов
    init(){
      this.addClass(); 
      this.addStyle();

      if(this.prev && this.next) {
        this.controlSlider();
      }else{
        this.addArrow();
        this.controlSlider();
      }
      if(this.responsive){
        this.responseInit();
      }
    
    }
    //Добавление классов для обверток и элементов
    addClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for( const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }
    //Добавление стилей для созданных классов и элементов
    addStyle(){
        let style = document.getElementById('sliderCarusel-style');
        if(!style) {
            style = document.createElement('style');
            style.id = 'sliderCarusel-style';
        }
        
        style.textContent = `
            .glo-slider{
                overflow: hidden !important;
            }
            .glo-slider__wrap{
              display: flex !important;
              transition: transform 0.5s !important;
              will-change: transform !important;  
            }
            .glo-slider__item{
                display: flex !important;
                align-items: center;
                justify-content: center;
                align-items: center;
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
                
            }
            
        `;
        document.head.append(style);
    }
    //События на элементы управления слайдером
    controlSlider(){
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
        
    }
    //Логика работы левой кнопки
    prevSlider(){
        if(this.options.infinity || this.options.position > 0) {
            --this.options.position;
        
        if(this.options.position < 0) {
            this.options.position = this.options.maxPosition;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }
       
    //Логика работы правой кнопки
    nextSlider(){
        if(this.options.infinity ||this.options.position < this.options.maxPosition) {
            ++this.options.position;

        if(this.options.position > this.options.maxPosition){
            this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
        
    }
    
    //Блок добавления элементов управления слайдером
    addArrow(){
        this.prev = document.createElement('button');
        this.next = document.createElement('button');
        

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';
        
        this.prev.textContent = '<';
        this.next.textContent = '>';
        this.main.append(this.prev);
        this.main.append(this.next);
        

        const style = document.createElement('style');
        style.textContent = `
        .glo-slider__prev,
        .glo-slider__next{
            margin: 0 10px;
            border: 20px solid transparent;
            background: transparent;
            border-left-color: #19bbff
        },
        .glo-slider__prev{
            border-right-color: #19bbff
        }
        
        .glo-slider__prev: hover,
        .glo-slider__next: hover,
        .glo-slider__prev: focus,
        .glo-slider__next: focus{
            background: transparent;
            outline: transparent;
        }
        `;
        document.head.append('style');
    }
    //Адаптив
    responseInit(){
        const slidesToShowDefault = this.slidesToShow;
        const allRespone = this.responsive.map(item => item.breakpoint);
        const maxPesponse = Math.max(...allRespone);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if(widthWindow < maxPesponse){
                for ( let i = 0; i < allRespone.length; i++){
                   if(widthWindow < allRespone[i]){
                    this.slidesToShow = this.responsive[i].slideToShow;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.addStyle();
                   }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
               }
        };

        checkResponse();

        window.addEventListener('resize', checkResponse);


    }
}
//Блок передачи данных для слайдера

export default Carousel;