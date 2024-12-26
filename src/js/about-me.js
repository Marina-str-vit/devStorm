const aboutMeSection = document.querySelector('.accordion-container');
const swiperSection = document.querySelector('.swiper-div');
const nextBtn = document.querySelector('.next-swiper');
/* For part 2 */
import Accordion from 'accordion-js';

/* For part 3 */
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard } from 'swiper/modules';
import { Mousewheel } from 'swiper/modules';


new Accordion(aboutMeSection, {
    openOnInit: [0],
    collapse: true,
    elementClass: 'about-me-ac',
    triggerClass: 'about-me-trigger',
    panelClass: 'about-me-panel',
})

const swiperAbout = new Swiper(swiperSection, {
    wrapperClass: 'wrapper-ul-swiper',
    slideClass: 'slide-li-swiper',
    slideActiveClass: 'slide-li-active-about-me',

    module: [Navigation, Keyboard, Mousewheel],
    loop: true,
    speed: 800,

    spaceBetween: 0,
    breakpoints: {
    320: {
        slidesPerView: 2
    },
        
    768: {
        slidesPerView: 3
    },

    1440: {
        slidesPerView: 6
    }
    },

    navigation: {
        nextEl: '.next-swiper'
    },

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    mousewheel: {
    invert: true,
    },

    slideToClickedSlide: true,
    /* nested: true */
});

nextBtn.addEventListener('click', (evt) => {
    swiperAbout.slideNext();
});

swiperSection.addEventListener('keydown', (evt) => {
    evt.preventDefault();
    if (evt.key === "Tab") {
        swiperAbout.slideNext();
    } else {
        swiperAbout.slidePrev();
    }
})

