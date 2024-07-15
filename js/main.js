// /----------------menu start-----------------------------



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




// /------------------------menu finish--------------------------





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*= ' + id + ' ]').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);



    ///--------------------------------------------///


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*-----------------------scroll-------------------*/
ScrollReveal({
    // reset: true,
    distance: '90px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.header', { origin: 'top' });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home__img, .skill-box, .services-contanier, .portfolio, .portfolio-box, .contact form', {
    origin: 'bottom'
});



ScrollReveal().reveal(' .home-content h1, .sub-para, .about-img', { origin: 'left' });
ScrollReveal().reveal(' .home-content p, .about-content', { origin: 'right' });


/*-----------------------scroll-------------------*/



const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDel: 1000,
    loop: true,

});