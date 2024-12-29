import Swiper from 'swiper/bundle';
import 'swiper/css';
import sprite from '../img/sprite.svg';

const swiper = new Swiper('.projects-block-slider.swiper-container', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.projects-button-slider-next.swiper-button-next',
        prevEl: '.projects-button-slider-prev.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    on: {
        reachEnd: function () {
            // const nextIcon = document.querySelector('.projects-button-slider-next.swiper-button-next svg use');
            // nextIcon.setAttribute('href', `${sprite}#arrow-right`);
            const nextButton = document.querySelector('.projects-button-slider-next');
            nextButton.style.borderColor = 'grey';
        },
        reachBeginning: function () {
            // const prevIcon = document.querySelector('.projects-button-slider-prev .swiper-button-prev svg use');
            // prevIcon.setAttribute('href', `${sprite}#arrow-right`);
            const prevButton = document.querySelector('.projects-button-slider-prev');
            prevButton.style.borderColor = 'grey';
        },
        slideChange: function() {
            if (!swiper.isBeginning && !swiper.isEnd) {
                // const nextIcon = document.querySelector('.projects-button-slider-next.swiper-button-next svg use');
                // const prevIcon = document.querySelector('.projects-button-slider-prev.swiper-button-prev svg use');
                // nextIcon.setAttribute('href', `${sprite}#arrow-right`);
                // prevIcon.setAttribute('href', `${sprite}#arrow-right`);
                
                const prevButton = document.querySelector('.projects-button-slider-prev');
                const nextButton = document.querySelector('.projects-button-slider-next');
                prevButton.style.borderColor = 'white';
                nextButton.style.borderColor = 'white';
            }
        }
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        if (event.shiftKey) {
            swiper.slidePrev();
        } else {
            swiper.slideNext();
        }
    }
});

