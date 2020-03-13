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