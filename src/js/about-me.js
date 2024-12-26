const aboutMeSection = document.querySelector('.accordion-container');
const swiperSection = document.querySelector('.swiper');
const nextBtn = document.querySelector('.about-me .swiper-button-next');
/* For part 2 */
import Accordion from 'accordion-js';

/* For part 3 */
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


new Accordion(aboutMeSection, {
    openOnInit: [0],
    collapse: true,
    elementClass: 'about-me-ac',
    triggerClass: 'about-me-trigger',
    panelClass: 'about-me-panel',
})

const swiper = new Swiper(swiperSection, {
    module: [Navigation],
    loop: true,
    navigation: {
        nextEl: ".about-me .swiper-button-next"
    },

    breakpoints: {
    // when window width is >= 320px
    375: {
        slidesPerView: 2
    },
    // when window width is >= 640px
    768: {
        slidesPerView: 3
    },

    1440: {
        slidesPerView: 6
    }
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});