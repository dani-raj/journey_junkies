// MENU TOGGLER

// const selectElement = function (element) {
//     return document.querySelector(element);
// };


let menuToggler = document.querySelector('.menu-toggle');
let navLink = document.querySelector('.nav-links');
let body = document.querySelector('body');


menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
})


navLink.addEventListener('click', function(){
    body.classList.toggle('open');
})


// IMAGE GALLERY POP UP
// let imageGallery = document.querySelector('.image-gallery > a');

// imageGallery.addEventListener('click', function(){
//     body.classList.toggle('pop-up-view');
// } )