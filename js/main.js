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






//-------------------------------backrond-----------------------//


// let body = document.querySelector('body');
// let title = document.querySelector('.title')
// let link = document.querySelector('.link');
// let linktwo = document.querySelector('.linktwo');
// let up = document.querySelector('.up');
// let down = document.querySelector('.down');
// let text = document.querySelector('.text');
// let btn = document.querySelector('.btn');
// let btntwo = document.querySelector('.btntwo');
// let img = document.querySelector('.img');

// let changeColor = () => {
//     body.style.backgroundColor = 'white';
//     body.style.transition = "all 1s linear";
//     body.style.boxShadow = "0px 0px 10px 5px rgba(0,0,0,0.1)";
//     body.style.borderRadius = "10px";
//     body.tranformition = "all 5s linear";
//     body.style.padding = "30px";
//     title.style.color = 'pink';
//     link.style.color = 'pink';
//     linktwo.style.color = 'pink';
//     up.style.color = 'pink';
//     down.style.color = 'pink';
//     text.style.color = 'pink';
//     btn.style.backgroundColor = 'pink';



// }



// let changeColors = () => {
//     body.style.backgroundColor = 'whitesmoke';
//     body.style.transition = "all 1s linear";

//     body.style.padding = "0px";
//     title.style.color = 'black';
//     link.style.color = 'black';
//     linktwo.style.color = 'black';
//     up.style.color = 'black';
//     down.style.color = 'black';
//     text.style.color = 'black';
//     btntwo.style.backgroundColor = 'black';
//     btntwo.style.color = 'white';

// }




let body = document.querySelector('body');






let changeColor = () => {

    body.style.backgroundColor = '#323946';





};






let changeColors = () => {

    body.style.backgroundColor = '#1f242d';

};