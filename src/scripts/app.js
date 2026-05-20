import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lastScroll = 0;

const blogBurger = document.querySelector('.blog__burger');
const blogNav = document.querySelector('.blog__nav');
const bntMobile = document.querySelector('.btn__mobile');
const fapslInput = document.getElementById('message');
const btnSend = document.querySelector('.fapsl__send');
const containnerChat = document.getElementById('fapsl__chats');
const filterCompability = document.querySelector('.filter__compability');
const lunasInput = document.querySelector('.lunas__input');
const pourcent = document.querySelector('.lunas__compatibility--level');
const pageHome = document.querySelector('.home');
const homeLogo = document.querySelector('.home__logo');
const homeTitle = document.querySelector('.home__title')
const homeHeader = document.querySelector('.home__header');
const homeExplication = document.querySelector('.home__main');


if (pageHome) {
  
    const introTl = gsap.timeline();

    introTl.from(homeLogo, {
        x: '-200%',
        rotate: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    })
    .to(homeLogo, { x: '15%', rotate: 25, duration: 0.3 })
    .to(homeLogo, { x: '-5%', rotate: -5, duration: 0.2 })
    .to(homeLogo, { x: '0%', rotate: 0, duration: 0.2 });

    introTl.from(homeTitle, {
        x: '200%',
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, 0); 
    
    const scrollTl = gsap.timeline({
        scrollTrigger: {
            trigger: homeHeader,
            start: "top top",   
            end: "bottom 90%",  
            markers: true,    
            scrub: 3,
         
        }
    });

    scrollTl.from(homeHeader, { height: '100vh' })
            .from(homeTitle, { fontSize: '5.5rem' }, "<")  
            .from(homeLogo, { width: '103px' }, "<")
            .from(homeExplication, { opacity: 0, y: 50,scale: 0, duration: 1 }, +1);

    
      
     
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
        filterCompability.style.backgroundColor = `hsl(${degres}, 77%, 71%)`;
        if (pourcent) {
            pourcent.textContent = pourcentValue + "%";
        }
    }
}

if (btnSend && fapslInput && containnerChat) {
    btnSend.addEventListener('click', AddChat);
}

function AddChat() {
    const message = fapslInput.value;
    if (message.trim() !== "") {
        const newLine = document.createElement('div');
        newLine.classList.add('fapsl__line');
        
        const newContent = document.createElement('div');
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
        
        containnerChat.appendChild(newLine);
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

function closeNavigation() {
    blogNav.classList.remove('blog__nav--active');
}

if (bntMobile) {
    window.addEventListener('scroll', showBTN);

    function showBTN() {
        const scrollCurrent = window.scrollY;
        const isMobile = window.innerWidth < 1024;

        if (scrollCurrent < 50) {
            bntMobile.classList.remove("--show");
            if (blogNav) blogNav.classList.remove('blog__nav--active');
            lastScroll = scrollCurrent;
            return;
        }

        if (scrollCurrent < lastScroll && isMobile) {
            bntMobile.classList.add("--show");
        } else {
            bntMobile.classList.remove("--show");
            if (blogNav) blogNav.classList.remove('blog__nav--active');
        }
        
        lastScroll = scrollCurrent;
    }
}