const { createElement } = require("react");

let lastScroll = 0;
const blogBurger = document.querySelector('.blog__burger');
const blogNav = document.querySelector('.blog__nav');
const bntMobile = document.querySelector('.btn__mobile');
const fapslInput = document.getElementById('message');
const btnSend = document.querySelector('.fapsl__send')
const containnerChat = document.querySelector('.fapsl__chats')

btnSend.addEventListener('click', AddChat);
function AddChat() {
    const message = fapslInput.value;

    if (message.trim() !== "") {
        // 1. Créer la ligne principale (le parent)
        const newLine = document.createElement('div');
        newLine.classList.add('fapsl__line'); // Pas de point ici

        // 2. Créer le bloc profil (pour l'avatar)
        const newProfil = document.createElement('div');
        newProfil.classList.add('fapsl__profile');

        // 3. Créer l'image
        const imgUser = document.createElement('img');
        imgUser.src = 'assets/images/bc.png';
        imgUser.alt = 'avatar';
        imgUser.classList.add('fapsl__avatar'); // Optionnel, pour ton CSS

        // 4. Créer le bloc contenu (pour le texte)
        const newContent = document.createElement('div');
        newContent.classList.add('fapsl__content');
        const newMesssaage =createElement('p')
        newMesssaage.textContent = message; // On injecte le texte ici !

        // --- L'ASSEMBLAGE (L'ordre est crucial) ---
        
        // On met l'image dans le profil
        newProfil.appendChild(imgUser);
        
        // On met le profil ET le contenu dans la ligne
        newContent.appendChild(newProfil);
        newContent.appendChild(newMesssaage)
        containnerChat.appendChild(newContent)
        // Enfin, on met la ligne complète dans le chat
        containnerChat.appendChild(newLine);

        // Nettoyage du champ
        fapslInput.value = "";
        fapslInput.style.height = "auto";

    }}

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