const nav = document.querySelector('.nav')
const body = document.querySelector('#body')
const navLinks = document.querySelectorAll('.nav-item')
const navBtn = document.querySelector('.navbar-toggler')
const navBar = document.querySelector('#navbarNav')


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
}, 1000);

let navToggle = () => {

    if (navBar.classList.contains('show')) {
        console.log('its showing')
        navBar.classList.remove('show')
    } else {
        console.log('not showing')
    }
} 

body.addEventListener('click', navToggle)

  var data = [
    {type: "img", src: "images/16.jpg", href: "#somelink", title: "WoW", text: "by 16"},
    {type: "img", src: "images/11.jpg", href: "#somelink", title: "WoW", text: "by 11"},
    {type: "img", src: "images/04.jpg", href: "#somelink", title: "Doge", text: "by me"},
    {type: "img", src: "images/17.jpg", href: "#somelink", title: "WoW", text: "by 17"},
    {type: "img", src: "images/07.jpg", href: "#somelink", title: "Graffiti", text: "by me"},
    {type: "img", src: "images/12.jpg", href: "#somelink", title: "WoW", text: "by 12"},
    {type: "img", src: "images/13.jpg", href: "#somelink", title: "WoW", text: "by 13"},
    {type: "img", src: "images/15.jpg", href: "#somelink", title: "WoW", text: "by 15"},
    {type: "img", src: "images/14.jpg", href: "#somelink", title: "WoW", text: "by 14"},
    {type: "img", src: "images/08.jpg", href: "#somelink", title: "High-rise", text: "by me"},
    {type: "img", src: "images/01.jpg", href: "#somelink", title: "Pidgins", text: "by me"},
    {type: "img", src: "images/10.jpg", href: "#somelink", title: "WoW", text: "by 10"}


   ];
   
   // html templates
   var tplimg = '<a href="%href%" class="thumb thumb-img" style="background-image: url(%src%)">'
              + '<img src="%src%" alt="%title%"/>'
              + '<div><span>%title%</span><span>%text%</span></div>'
              + '</a>';
   var tpltxt = '<a href="%href%" class="thumb thumb-txt">'
              + '<div><span>%title%</span><span>%text%</span></div>'
              + '</a>';
   
   var cnt = document.getElementById("thumbs");
   var cs = "";
   for (var i=0; i<data.length; i++) {
    // choose a template to use
    var tpl = data[i].type == "img" ? tplimg : tpltxt;
    // replace strings
    for (var k in data[i])
     tpl = tpl.replace(eval("/%"+k+"%/g"), data[i][k]);
    // save the result
    cs += tpl;
   }
   cnt.innerHTML = cs;
 


