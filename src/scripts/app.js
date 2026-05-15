

let lastScroll = 0;
const blogBurger = document.querySelector('.blog__burger');
const blogNav = document.querySelector('.blog__nav');
const bntMobile = document.querySelector('.btn__mobile');
const fapslInput = document.getElementById('message');
const btnSend = document.querySelector('.fapsl__send')
const containnerChat = document.getElementById('fapsl__chats')

btnSend.addEventListener('click', AddChat);
function AddChat() {
    const message = fapslInput.value;

    if (message.trim() !== "") {
        const newLine = document.createElement('div');
        const newProfil = document.createElement('div');
        newProfil.classList.add('fapsl__profile');
        const imgUser = document.createElement('img');
        imgUser.src = 'assets/images/bc.png';
        const newContent = document.createElement('div');
        newContent.classList.add('fapsl__content');
        const newMesssaage = createElement('p')
        newMesssaage.textContent = "message"; 
        newProfil.appendChild(imgUser);
        newContent.appendChild(newProfil);
        newContent.appendChild(newMesssaage)
        containnerChat.appendChild(newContent)
        containnerChat.appendChild(newLine);
        fapslInput.value = "";
        fapslInput.style.height = "auto";
    }}
if (blogBurger){
blogBurger.addEventListener('click', opennav); 
}
function opennav() {
    blogNav.classList.toggle('blog__nav--active');
}

function closeNavigation() {
    blogNav.classList.remove('blog__nav--active');
}
if(bntMobile){
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

}}