import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
 
  const accordion = new Accordion('.faq-wrap', {
    duration: 300, 
    showMultiple: false, 
  });

  console.log('Accordion initialized:', accordion);
});






