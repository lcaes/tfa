const blogBurger = document.querySelector('.blog__burger');
const blogNav = document.querySelector('.blog__nav');
const lunaInput = document.querySelector('.luans__input')
let lastScroll=0;
const widthScreen = screen.width
console.log(widthScreen)

blogBurger.addEventListener('click', opennav); 

function opennav() {
    blogNav.classList.toggle('blog__nav--active');

}
    function closeNavigation() {
    blogNav.classList.remove('blog__nav--active');
}

window.addEventListener('scroll',showBTN);
function showBTN(e){
    const scrollCurrent = window.scrollY;
    if(scrollCurrent < lastScroll && widthScreen < 1024){
    blogBurger.classList.add("--show")}
    else{
        blogBurger.classList.remove("--show")
    }
    lastScroll = scrollCurrent
}
