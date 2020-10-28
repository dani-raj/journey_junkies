const menuToggler = document.querySelector('.menu-toggle');
const navItems = document.querySelectorAll('.nav-item');

function removeOpenClassFromBody() {
    document.body.classList.remove('open');
}

window.addEventListener('resize', () => {
    if (document.body.classList.contains('open')) {
        removeOpenClassFromBody();
    }
});

menuToggler.addEventListener('click', () => {
    document.body.classList.toggle('open');
});

navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        removeOpenClassFromBody();
    });
});
