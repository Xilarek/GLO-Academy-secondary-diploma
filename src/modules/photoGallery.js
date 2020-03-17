const photoGallery = () => {
    const gallery = document.getElementById('gallery'),
        slide = gallery.querySelectorAll('.slide'),
        slider = gallery.querySelector('.gallery-slider'),
        leftBtn = document.getElementById('arrow-left'),
        rightBtn = document.getElementById('arrow-right'),
        dotsBox = slider.querySelector('.gallery-dots');

    const windowSize = window.innerWidth;
    if (windowSize <= 768) {
        leftBtn.style.display = 'none';
        rightBtn.style.display = 'none';
        dotsBox.style.display = 'none';
    } else {
        leftBtn.style.display = 'block';
        rightBtn.style.display = 'block';
        dotsBox.style.display = 'block';
    }

    //Переменные которые будут содержать индекс слайда, интервал и точку
    let currentSlide = 0,
        interval,
        dots = null;
    //Проверяем кол-во слайдов и создаем кол-во точек равное кол-ву слайдов
    const createDots = () => {

        for (let i = 0; i < slide.length; i++) {
            let li = document.createElement('li');
            li.classList.add('dot');
            dotsBox.append(li);
        }
        dots = dotsBox.querySelectorAll('.dot');

    };
    //Функция смены слайда
    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };
    //Автоперелистывание слайда
    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;
        //Ограничиваем кол-во слайдов
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dots, currentSlide, 'dot-active');
    };

    //Запуск и остановка слайдера
    const startSlider = (time = 2500) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlider = () => {
        clearInterval(interval);
    };
    //Взаимодействие со слайдером вручную
    slider.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        //Защита на случай если кликнули не на элемент управления слайдером
        if (!target.matches('.gallery-btn, .dot'))
            return;

        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dots, currentSlide, 'dot-active');

        //Делаем проверку на какой элемент мы нажали
        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dots.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        }
        //Добавляем классы тому сладу который соответствует проверкам
        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dots, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.gallery-btn') ||
            event.target.matches('.dot')) {
            stopSlider();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.gallery-btn') ||
            event.target.matches('.dot')) {
            startSlider();
        }
    });

    createDots();
    startSlider(2500);
};
export default photoGallery;