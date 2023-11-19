const menu = document.querySelector('#mobile-menu')
const menuLinks =document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click',mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home_page')
    const eventsMenu = document.querySelector('#events_page')
    const galleryMenu = document.querySelector('#gallery_page')
    const contactMenu = document.querySelector('#contacts_page')
    let scrollPos = window.scrollY
    console.log(scrollPos)

    //adds'highlight' class to my menu items        //when the width is less than 960 or 960 we get hamburger menu so in this case we dont want to highlight the opt

    if(window.innerWidth > 960 && scrollPos < 600)  { 
        homeMenu.classList.add('highlight')
        eventsMenu.classList.remove('highlight')
        return
    }  else if(window.innerWidth > 960 && scrollPos < 1400)  {
        eventsMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        galleryMenu.classList.remove('highlight')
        return
    }  else if(window.innerWidth > 960 && scrollPos < 2345)  {
        galleryMenu.classList.add('highlight')
        eventsMenu.classList.remove('highlight')
        contactMenu.classList.remove('highlight')
        return
    }  else if(window.innerWidth > 960 && scrollPos < 4858)  {
        contactMenu.classList.add('highlight')
        galleryMenu.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll',highlightMenu)
window.addEventListener('click',highlightMenu)

//close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 700 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click',hideMobileMenu)
navLogo.addEventListener('click',hideMobileMenu)