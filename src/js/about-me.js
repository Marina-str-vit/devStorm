const aboutMeSection = document.querySelector('.accordion-container');

import Accordion from 'accordion-js';

new Accordion(aboutMeSection, {
    openOnInit: [0],
    collapse: false
})