const blogBurger = document.querySelector('.blog__burger');
const blogNav = document.querySelector('.blog__nav');
const scroll = window.scrollY;
console.log(scroll);

blogBurger.addEventListener('click', opennav); 

function opennav() {
    blogNav.classList.toggle('blog__nav--active');

}
    function closeNavigation() {
    blogNav.classList.remove('blog__nav--active');
}