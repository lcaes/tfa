import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lastScroll = 0;

const blogBurger = document.querySelector('.blog__burger');
const blogNav = document.querySelector('.blog__nav');
const bntMobile = document.querySelector('.btn__mobile');
const fapslInput = document.getElementById('message');
const btnSend = document.querySelector('.fapsl__send');
const containnerChat = document.querySelector('.fapsl__chats');
const filterCompability = document.querySelector('.filter__compability');
const lunasInput = document.querySelector('.lunas__input');
const pourcent = document.querySelector('.lunas__compatibility--level');
const pageimprevisible = document.querySelector('.imprevisible');
const imprevisibleLogo = document.querySelector('.imprevisible__logo');
const imprevisibleTitle = document.querySelector('.imprevisible__title')
const imprevisibleHeader = document.querySelector('.imprevisible__header--home');
const imprevisibleExplication = document.querySelector(' .imprevisible__explication');
const btnCarrousel = document.querySelector('.interupteur');
const btnCarrouselEtat = document.querySelector('.interupteur__default');
const btnOpenNavFapsl = document.querySelector ('.fapsl__button--nav');
const btnCloseNavFapsl = document.querySelector('.btn__close');
const navFapsl= document.querySelector('.fapsl__nav');
const hearderFapsl = document.querySelector('.fapsl__header')
const lunasBurger = document.querySelector('.lunas__burger');
const pageLunas =document.querySelector('.lunas');
const lunasNav =document.querySelector('.lunas__nav');
const mondeBtns = document.querySelector('.monde__btns');
const navMonde= document.querySelector('.monde__nav')
const burgerMonde =document.querySelector('.monde__burger')
const imprevisibleMain = document.querySelector('.imprevisible__main');

if (lunasBurger) {
    lunasBurger.addEventListener('click', openNavLunas)
    function openNavLunas(){
        lunasBurger.classList.toggle('open');
        lunasNav.classList.toggle('open');
    };
}

if(burgerMonde){
    burgerMonde.addEventListener('click', opennavMonde);
    function opennavMonde(){
        navMonde.classList.toggle('monde__nav--active')
    }
}
if(btnOpenNavFapsl){
btnOpenNavFapsl.addEventListener('click', opennavFapsl)
function opennavFapsl(){
    navFapsl.classList.add('active')
    hearderFapsl.classList.add('show')
}
}
if(btnCloseNavFapsl){
    btnCloseNavFapsl.addEventListener('click', closenavFapsl)
    function closenavFapsl(){
        navFapsl.classList.remove('active')
        hearderFapsl.classList.remove('show')
    }
}
if (btnCarrousel) {
    btnCarrousel.addEventListener('click', carroussel);

    function carroussel() {
        
        const currentAnim = document.querySelector('.carrousel__anim');
        currentAnim.classList.toggle('active');
        btnCarrouselEtat.classList.toggle('active');
       
    }
}


if (imprevisibleHeader) {
  
    const introTl = gsap.timeline();

    introTl.from(imprevisibleLogo, {
        x: '-200%',
        rotate: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    })
    .to(imprevisibleLogo, { x: '15%', rotate: 25, duration: 0.2 })
    .to(imprevisibleLogo, { x: '-5%', rotate: -5, duration: 0.1 },"<")
    .to(imprevisibleLogo, { x: '0%', rotate: 0, duration: 0.1});

    introTl.from(imprevisibleTitle, {
        x: '200%',
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, 0); 
    const mobile = window.innerWidth < 600;
    if (mobile) {
    const scrollTl = gsap.timeline({
    scrollTrigger: {
        trigger: imprevisibleHeader,
        start: "+=100",   
        end: "+=100",      
        scrub: 1,       
        pinSpacing: true,  
        toggleActions: "play none none reverse",
       

    }});
      scrollTl
    .from(".imprevisible__header", 
        { height: '100vh' }, "<") 
    .from(".imprevisible__title", 
        { scale: 1.3}, "<")  
    .from(".imprevisible__logo", 
        { scale: 1.3, paddingRight: '3%' }, "<");}
    else {
           const scrollTl = gsap.timeline({
    scrollTrigger: {
        trigger: imprevisibleHeader,
        start: "+=50",   
        end: "+=50",      
        scrub: 2,       
        pinSpacing: true,  
        toggleActions: "play none none reverse",

    }});
      scrollTl
    .from(".imprevisible__header", 
        { height: '100vh' }, "<") 
    .from(".imprevisible__title", 
        { scale: 1.3}, "<")  
    .from(".imprevisible__logo", 
        { scale: 1.3, paddingRight: '4%' }, "<");}

  }


if (pourcent) {
    pourcent.textContent = "90%";
}

if (lunasInput && filterCompability) {
    lunasInput.addEventListener('input', changeColor);
    
    function changeColor() {
        if (lunasInput.value === "") return;
        let pourcentValue = Number(lunasInput.value);
        if (pourcentValue > 100) {
            pourcentValue = 100;
            lunasInput.value = 100; 
        } else if (pourcentValue < 0) {
            pourcentValue = 0;
            lunasInput.value = 0; 
        }

        const degres = (175 * pourcentValue) / 100;
        filterCompability.style.backgroundColor = `hsl(${degres}, 100%, 25%)`;
        if (pourcent) {
            pourcent.textContent = pourcentValue + "%";
        }
    }
}

if (btnSend && fapslInput && containnerChat) {
    btnSend.addEventListener('click', AddChat);
}

function AddChat(e) {
    e.preventDefault();
    const message = fapslInput.value;
    console.log(message);
    if (message.trim() !== "") {
        
        const newContent = document.createElement('li');
        newContent.classList.add('fapsl__content');
        
        const newProfil = document.createElement('div');
        newProfil.classList.add('fapsl__profile');
        
        const imgUser = document.createElement('img');
        imgUser.src = 'assets/images/bc.png';
        imgUser.alt = 'avatar';
        
        const pseudo = document.createElement('h3');
        pseudo.textContent = "BC_05";
        
        const text = document.createElement('div');
        text.classList.add("fapsl__text");
        
        const date = document.createElement('p');
        date.classList.add('faspsl__date');
        date.textContent = "25/04/2035";
        
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        
        newProfil.appendChild(imgUser);
        newProfil.appendChild(pseudo);
        
        text.appendChild(newMessage);
        text.appendChild(date);
        
        newContent.appendChild(newProfil);
        newContent.appendChild(text);

        containnerChat.appendChild(newContent);
        
        fapslInput.value = "";
        fapslInput.style.height = "auto";
        containnerChat.scrollTop = containnerChat.scrollHeight;
    }
 
}

if (blogBurger && blogNav) {
    blogBurger.addEventListener('click', opennav); 
}

function opennav() {
    blogNav.classList.toggle('blog__nav--active');
}


if (bntMobile) {
    window.addEventListener('scroll', showBTN);

    function showBTN() {
        const scrollCurrent = window.scrollY;
        const isMobile = window.innerWidth < 1200;
        if(navMonde){
            if(navMonde.classList.contains('monde__nav--active')){
                navMonde.classList.remove('monde__nav--active')}
                ;}
        if(blogNav){
            if(blogNav.classList.contains('blog__nav--active')){
                blogNav.classList.remove('blog__nav--active');
            }}
            
        if (scrollCurrent < 50) {
            bntMobile.classList.remove("--show");

            lastScroll = scrollCurrent;
            return;
        }

        if (scrollCurrent < lastScroll && isMobile) {
            bntMobile.classList.add("--show");
        } else {
            bntMobile.classList.remove("--show");
        }
        
        lastScroll = scrollCurrent;
    }
}