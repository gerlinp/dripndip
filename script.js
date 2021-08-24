
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
        nav.classList.add('navbar-dark')
    } else {
        nav.classList.remove('active')
        nav.classList.remove('navbar-dark')
    }
}