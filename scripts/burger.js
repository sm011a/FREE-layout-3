const navSlide = () => {
    const burger = document.querySelector('.header-nav-burger');
    const nav = document.querySelector('.header-nav-ul');
    const navLinks = document.querySelectorAll('.header-nav-ul-li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            console.log(index);
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = ` navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle('toggle');
    });
}
    navSlide();