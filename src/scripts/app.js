let lastScroll = 0;
const blogBurger = document.querySelector('.blog__burger');
const blogNav = document.querySelector('.blog__nav');
const bntMobile = document.querySelector('.btn__mobile')


blogBurger.addEventListener('click', opennav); 

function opennav() {
    blogNav.classList.toggle('blog__nav--active');
}

function closeNavigation() {
    blogNav.classList.remove('blog__nav--active');
}

window.addEventListener('scroll', showBTN);

function showBTN() {
    const scrollCurrent = window.scrollY;

    const isMobile = window.innerWidth < 1024;

    if (scrollCurrent < lastScroll && isMobile) {
  
            bntMobile.classList.add("--show");
}
   else {

        bntMobile.classList.remove("--show");
        blogNav.classList.remove('blog__nav--active');
   }
    
lastScroll = scrollCurrent;

}