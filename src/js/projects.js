'use strict'

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const nextButton = document.querySelector(".projects-swiper-next-button");
const prevButton = document.querySelector(".projects-swiper-prev-button");


const swiper = new Swiper('.swiper-projects-container', {
    modules: [Navigation,Keyboard, Mousewheel], 
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    }, 
    spaceBetween: 100,
    slidesPerView: 1, 
    speed: 800,
    keyboard: {
      enabled: true, 
      onlyInViewport: true, 
    },
    mousewheel: {
        forceToAxis: true, 
    },
    touchEventsTarget: 'wrapper', 
    createElements: true,
  });





