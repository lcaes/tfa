/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ (() => {

var blogBurger = document.querySelector('.blog__burger');
var blogNav = document.querySelector('.blog__nav');
var bntMobile = document.querySelector('.btn__mobile');
var fapslInput = document.getElementById('message');
var btnSend = document.querySelector('.fapsl__send');
var containnerChat = document.querySelector('.fapsl__chats');
var filterCompability = document.querySelector('.filter__compability');
var lunasInput = document.querySelector('.lunas__input');
var pourcent = document.querySelector('.lunas__compatibility--level');
var btnCarrousel = document.querySelector('.interupteur');
var btnCarrouselEtat = document.querySelector('.interupteur__default');
var btnOpenNavFapsl = document.querySelector('.fapsl__button--nav');
var btnCloseNavFapsl = document.querySelector('.btn__close');
var navFapsl = document.querySelector('.fapsl__nav');
var hearderFapsl = document.querySelector('.fapsl__header');
var lunasBurger = document.querySelector('.lunas__burger');
var pageLunas = document.querySelector('.lunas');
var lunasNav = document.querySelector('.lunas__nav');
var mondeBtns = document.querySelector('.monde__btns');
var navMonde = document.querySelector('.monde__nav');
var burgerMonde = document.querySelector('.monde__burger');
var imprevisibleMain = document.querySelector('.imprevisible__main');
var fapslBgPopup = document.querySelector('.fapsl__bgpopup');
var faapslFonctionBtns = document.querySelectorAll('.fapsl__fonction');
var fapslPopup = document.querySelector('.fapsl__popup');

if (faapslFonctionBtns && fapslPopup) {
  var openPopup = function openPopup(e) {
    e.preventDefault();
    fapslPopup.classList.add('active');
  };

  faapslFonctionBtns.forEach(function (btn) {
    btn.addEventListener('click', openPopup);
  });
}

if (fapslBgPopup && fapslPopup) {
  var closePopup = function closePopup() {
    fapslPopup.classList.remove('active');
  };

  fapslBgPopup.addEventListener('click', closePopup);
}

if (lunasBurger) {
  var openNavLunas = function openNavLunas() {
    lunasBurger.classList.toggle('open');
    lunasNav.classList.toggle('open');
  };

  lunasBurger.addEventListener('click', openNavLunas);
  ;
}

if (burgerMonde) {
  var opennavMonde = function opennavMonde() {
    navMonde.classList.toggle('monde__nav--active');
  };

  burgerMonde.addEventListener('click', opennavMonde);
}

if (btnOpenNavFapsl) {
  var opennavFapsl = function opennavFapsl() {
    navFapsl.classList.add('active');
    hearderFapsl.classList.add('show');
  };

  btnOpenNavFapsl.addEventListener('click', opennavFapsl);
}

if (btnCloseNavFapsl) {
  var closenavFapsl = function closenavFapsl() {
    navFapsl.classList.remove('active');
    hearderFapsl.classList.remove('show');
  };

  btnCloseNavFapsl.addEventListener('click', closenavFapsl);
}

if (btnCarrousel) {
  var carroussel = function carroussel() {
    var currentAnim = document.querySelector('.carrousel__anim');
    currentAnim.classList.toggle('active');
    btnCarrouselEtat.classList.toggle('active');
  };

  btnCarrousel.addEventListener('click', carroussel);
}

if (pourcent) {
  pourcent.textContent = "90%";
}

if (lunasInput && filterCompability) {
  var changeColor = function changeColor(e) {
    e.preventDefault();
    if (lunasInput.value === "") return;
    var pourcentValue = Number(lunasInput.value);

    if (pourcentValue > 100) {
      pourcentValue = 100;
      lunasInput.value = 100;
    } else if (pourcentValue < 0) {
      pourcentValue = 0;
      lunasInput.value = 0;
    }

    var degres = 175 * pourcentValue / 100;
    filterCompability.style.backgroundColor = "hsl(".concat(degres, ", 100%, 25%)");

    if (pourcent) {
      pourcent.textContent = pourcentValue + "%";
    }
  };

  lunasInput.addEventListener('input', changeColor);
}

if (btnSend && fapslInput && containnerChat) {
  btnSend.addEventListener('click', AddChat);
}

function AddChat(e) {
  e.preventDefault();
  var message = fapslInput.value;
  console.log(message);

  if (message.trim() !== "") {
    var newContent = document.createElement('li');
    newContent.classList.add('fapsl__content');
    var newProfil = document.createElement('div');
    newProfil.classList.add('fapsl__profile');
    var imgUser = document.createElement('img');
    imgUser.src = 'assets/images/bc.webp';
    imgUser.alt = 'avatar';
    var pseudo = document.createElement('h3');
    pseudo.textContent = "BC_05";
    var text = document.createElement('div');
    text.classList.add("fapsl__text");
    var date = document.createElement('p');
    date.classList.add('faspsl__date');
    date.textContent = "25/04/2035";
    var newMessage = document.createElement('p');
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
  var showBTN = function showBTN() {
    var isMobile = window.innerWidth < 1200;

    if (navMonde) {
      if (navMonde.classList.contains('monde__nav--active')) {
        navMonde.classList.remove('monde__nav--active');
      }

      ;
    }

    if (blogNav) {
      if (blogNav.classList.contains('blog__nav--active')) {
        blogNav.classList.remove('blog__nav--active');
      }
    }

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
  };

  window.addEventListener('scroll', showBTN);
}

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected \"{\".\n    ╷\n391 │         }d\n    │           ^\n    ╵\n  src/styles/components/lunas.scss 391:11  @import\n  src/styles/app.scss 6:9                  root stylesheet\n    at processResult (/Users/lyn/Documents/GitHub/Imprevisible/node_modules/webpack/lib/NormalModule.js:758:19)\n    at /Users/lyn/Documents/GitHub/Imprevisible/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Users/lyn/Documents/GitHub/Imprevisible/node_modules/loader-runner/lib/LoaderRunner.js:400:11\n    at /Users/lyn/Documents/GitHub/Imprevisible/node_modules/loader-runner/lib/LoaderRunner.js:252:18\n    at context.callback (/Users/lyn/Documents/GitHub/Imprevisible/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at Object.loader (/Users/lyn/Documents/GitHub/Imprevisible/node_modules/sass-loader/dist/index.js:69:5)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./src/scripts/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/styles/app.scss"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map