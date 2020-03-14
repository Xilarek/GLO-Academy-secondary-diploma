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

/*import Slider from './modules/mainSlider';
const mainSliders = new Slider({
    main: '.wrapper_slider',
    wrap: '.main-slider',
    slidesToShow: 1,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slideToShow: 1
    },
    {
        breakpoint: 768,
        slideToShow: 1
    },
    {
        breakpoint: 576,
        slideToShow: 1
    }]
});
mainSliders.init();*/

import appearanceArrow from './modules/appearanceArrow';
appearanceArrow();

import dropDownMenu from './modules/dropDownMenu';
dropDownMenu();

