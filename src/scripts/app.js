let lastScroll = 0;
const blogBurger = document.querySelector('.blog__burger');
const blogNav = document.querySelector('.blog__nav');
const bntMobile = document.querySelector('.btn__mobile');
const fapslInput = document.getElementById('message');
const btnSend = document.querySelector('.fapsl__send');
const containnerChat = document.getElementById('fapsl__chats');
const filterCompability = document.querySelector('.filter__compability');
const lunasInput = document.querySelector('.lunas__input');
lunasInput.value = 90;
if(lunasInput){
    lunasInput.addEventListener('input', changeColor);
    function changeColor (){
        const pourcentValue = lunasInput.value
        const pourcent = document.querySelector('.lunas__compatibility--level')
        pourcent.textContent = pourcentValue
        if(0 >= pourcent <= 100){
        console.log(pourcent)
            const degres = 175 * pourcentValue / 100;
            console.log(degres)
            filterCompability.style.backgroundColor = `hsl(${degres}, 77%, 71%)`
        }
}}

if(btnSend){
btnSend.addEventListener('click', AddChat);
function AddChat() {
    const message = fapslInput.value;

    console.log(message)

    if (message.trim() !== "") {
        const newLine = document.createElement('div');
        newLine.classList.add('fapsl__line');
        const newContent = document.createElement('div');
        const newProfil = document.createElement('div');
        newProfil.classList.add('fapsl__profile');
        const imgUser = document.createElement('img');
        imgUser.src = 'assets/images/bc.png';
        const pseudo = document.createElement('h3');
        pseudo.textContent = "BC_05";
        const text = document.createElement('div');
        text.classList.add("fapsl__text");
        const date = document.createElement('p');
        date.classList.add('faspsl__date');
        date.textContent = "25/04/2035";
        const newMessage = document.createElement('p');
        newMessage.textContent =message;
        newContent.classList.add('fapsl__content');
        newProfil.appendChild(imgUser);
        newProfil.appendChild(pseudo)
        text.appendChild(newMessage)
        text.appendChild(date)
        newContent.appendChild(newProfil);
        newContent.appendChild(text);
         containnerChat.appendChild(newLine);
        containnerChat.appendChild(newContent)
       
    }}}
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