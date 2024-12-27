document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    burgerButton.addEventListener('click', () => {
        const isActive = mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll', isActive);
        burgerButton.classList.toggle('active', isActive);
    });
});
