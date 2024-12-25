const aboutMeSection = document.querySelector('.accordion-container');
const swiperSection = document.querySelector('.swiper');
const nextBtn = document.querySelector('.swiper-button-next');
const prevBtn = document.querySelector('.swiper-button-prev');

/* For part 2 */
import Accordion from 'accordion-js';

/* For part 3 */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


new Accordion(aboutMeSection, {
    openOnInit: [0],
    collapse: true,
    elementClass: 'about-me-ac',
    triggerClass: 'about-me-trigger',
    panelClass: 'about-me-panel',
})

const swiper = new Swiper(swiperSection, {
    navigation: {
    nextEl: nextBtn
    },

    breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 2
    },
    // when window width is >= 640px
    768: {
        slidesPerView: 3
    },

    1440: {
        slidesPerView: 6
    }

    }
});