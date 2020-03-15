'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);


import burgerMenu from './modules/burgerMenu';
burgerMenu();

import promotionalСode from './modules/promotionalСode';
promotionalСode();

import modelRecording from './modules/modelRecording';
modelRecording();

import modelCallMe from './modules/modelCallMe';
modelCallMe();

/*import Carousel from './modules/carousel';
const carousel = new Carousel({
    main: '#wrapper',
    wrap: '.services-slider-carousel',
    pver: '.services-btn > prev',
    next: '.services-btn > next',
    slidesToShow: 5,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slideToShow: 4
    },
    {
        breakpoint: 768,
        slideToShow: 3
    },
    {
        breakpoint: 576,
        slideToShow: 1
    }]
});
carousel.init();*/

import appearanceArrow from './modules/appearanceArrow';
appearanceArrow();

import dropDownMenu from './modules/dropDownMenu';
dropDownMenu();

import photoGallery from './modules/photoGallery';
photoGallery();

import mainSlider from './modules/mainSlider';
mainSlider();

import mainSendForm from './modules/mainSendForm';
mainSendForm();

import validationInput from './modules/validationInput';
validationInput();

