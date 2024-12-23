const aboutMeSection = document.querySelector('.accordion-container');
const swiperSection = document.querySelector('.swiper')

/* For part 2 */
import Accordion from 'accordion-js';

/* For part 3 */
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


new Accordion(aboutMeSection, {
    openOnInit: [0],
    collapse: true
})

const swiper = new Swiper(swiperSection, {
    modules: [Navigation]
});