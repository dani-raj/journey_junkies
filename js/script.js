let menuToggler = document.querySelector('.menu-toggle');
let navLink = document.querySelector('.nav-links');
let body = document.querySelector('body');


menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
})


navLink.addEventListener('click', function(){
    body.classList.toggle('open');
})

