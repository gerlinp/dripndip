const nav = document.querySelector('.nav')
const body = document.querySelector('#body')
const navLinks = document.querySelectorAll('.nav-item')




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

setTimeout(() => {
    const ad = document.querySelector('.eapps-link')
    const hide = document.querySelector('.hide')
    ad.style.display = 'none'  
    hide.style.display = 'block'
}, 600);



