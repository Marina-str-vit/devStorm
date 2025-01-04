import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const reviews = await fetchReviews();
    renderReviews(reviews);

    const swiper = new Swiper('.swiper-reviews', {
      breakpoints: {
        375: { slidesPerView: 1 },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16, },
      },
      navigation: {
        nextEl: ".reviews .swiper-button-next",
        prevEl: ".reviews .swiper-button-prev",
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        releaseOnEdges: false, 
      },
      touchRatio: 1,
      loop: false,
      centeredSlides: false, 
      on: {
        init: function () {
          updateButtonState(this);
        },
        slideChange: function () {
          updateButtonState(this);
        },
      },
    });

    const prevBtn = document.querySelector('.reviews .reviews-btn-prev');
    const nextBtn = document.querySelector('.reviews .reviews-btn-next');

    if (!prevBtn || !nextBtn) {
      console.error('Navigation buttons not found in DOM.');
      return;
    }

    prevBtn.addEventListener('keydown', function (event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        swiper.slidePrev();
      }
    });

    nextBtn.addEventListener('keydown', function (event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        swiper.slideNext();
      }
    });
  } catch (error) {
    console.error('Error initializing reviews:', error);
  }
});


async function fetchReviews() {
  try {
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
    return response.data || [];
  } catch (error) {
    console.error('Error fetching reviews:', error);
    showError();
    return [];
  }
}


function renderReviews(reviews) {
  const reviewsGallery = document.querySelector('.reviews-gallery');
  reviewsGallery.innerHTML = '';

  if (!reviews || reviews.length === 0) {
    showError();
    return;
  }

  const markup = reviews.map(review => `
    <div class="swiper-slide reviews-list">
      <img class="reviews-image" src="${review.avatar_url}" alt="user photo" width="48" height="48" style="border-radius: 10px;"/>
      <h3 class="reviews-author">${review.author}</h3>
      <p class="reviews-text">${review.review}</p>
    </div>
  `).join('');

  reviewsGallery.insertAdjacentHTML('beforeend', markup);
}


function updateButtonState(swiper) {
  const prevBtn = document.querySelector('.reviews .reviews-btn-prev');
  const nextBtn = document.querySelector('.reviews .reviews-btn-next');

  if (!prevBtn || !nextBtn) {
    console.error('Navigation buttons not found in DOM.');
    return;
  }

  if (swiper.isBeginning) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }

  if (swiper.isEnd) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
}


function showError() {
  const reviewsGallery = document.querySelector('.reviews-gallery');
  reviewsGallery.innerHTML = '<p class="error-message">Not found</p>';
}
