


document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuItems = document.querySelectorAll('.mobile-menu li');

    burgerButton.addEventListener('click', () => {
        const isActive = mobileMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll', isActive);
        burgerButton.classList.toggle('active', isActive);
    });


    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
            burgerButton.classList.remove('active');
        });
    });
});
