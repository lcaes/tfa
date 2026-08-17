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
var lunasPagination = document.querySelector('.lunas__pagination');
var lunasBtnPrev = document.querySelector('.lunas__btn--prev');
var lunasBtnNext = document.querySelector('.lunas__btn--next');
var paginationList = document.querySelector('.pagination__list');
var currentActive = document.querySelector('.pagination__el--active');
var paginationLinks = document.querySelectorAll('.pagination__el a');
var lastScroll = 0;

if (lunasPagination && paginationList) {
  var changePage = function changePage(e) {
    e.preventDefault();
    var currentActiveLi = paginationList.querySelector('.pagination__el--active');

    if (currentActiveLi) {
      currentActiveLi.classList.remove('pagination__el--active');
    }

    var clickedLi = event.currentTarget.parentElement;
    clickedLi.classList.add('pagination__el--active');
    var lunasSectionActive = document.querySelector('.lunas__section--active');

    if (lunasSectionActive) {
      lunasSectionActive.classList.remove('lunas__section--active');
    }

    var sectionId = e.currentTarget.getAttribute('href');
    var sectionSelect = document.querySelector(sectionId);

    if (sectionSelect) {
      sectionSelect.classList.add('lunas__section--active');
    }

    updateButtons();
  };

  var updateButtons = function updateButtons() {
    var currentActive = paginationList.querySelector('.pagination__el--active');
    if (!currentActive) return;
    var isFirst = paginationList.firstElementChild === currentActive;
    var isLast = paginationList.lastElementChild === currentActive;
    lunasBtnPrev.classList.toggle('disabled', isFirst);
    lunasBtnPrev.disabled = isFirst;
    lunasBtnNext.classList.toggle('disabled', isLast);
    lunasBtnNext.disabled = isLast;
  };

  var goToPrevPage = function goToPrevPage(e) {
    e.preventDefault();
    var currentActive = paginationList.querySelector('.pagination__el--active');
    var prevLi = currentActive ? currentActive.previousElementSibling : null;
    var lunasSeectionActive = document.querySelector(".lunas__section--active");
    var lunasSectionPrev = lunasSeectionActive.previousElementSibling;

    if (prevLi) {
      currentActive.classList.remove('pagination__el--active');
      prevLi.classList.add('pagination__el--active');
      lunasSeectionActive.classList.remove('lunas__section--active');
      lunasSectionPrev.classList.add('lunas__section--active');
      updateButtons();
    }
  };

  var goToNextPage = function goToNextPage(e) {
    e.preventDefault();
    var currentActive = paginationList.querySelector('.pagination__el--active');
    var nextLi = currentActive ? currentActive.nextElementSibling : null;
    var lunasSeectionActive = document.querySelector(".lunas__section--active");
    var lunasSectionNext = lunasSeectionActive.nextElementSibling;

    if (nextLi) {
      currentActive.classList.remove('pagination__el--active');
      nextLi.classList.add('pagination__el--active');
      lunasSeectionActive.classList.remove('lunas__section--active');
      lunasSectionNext.classList.add('lunas__section--active');
      updateButtons();
    }
  };

  paginationLinks.forEach(function (link) {
    link.addEventListener('click', changePage);
  });
  lunasBtnPrev.addEventListener('click', goToPrevPage);
  lunasBtnNext.addEventListener('click', goToNextPage);
  updateButtons();
}

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
    document.body.classList.toggle('noScroll');
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
    document.body.classList.add('noScroll');
  };

  btnOpenNavFapsl.addEventListener('click', opennavFapsl);
}

if (btnCloseNavFapsl) {
  var closenavFapsl = function closenavFapsl() {
    navFapsl.classList.remove('active');
    hearderFapsl.classList.remove('show');
    document.body.classList.remove('noScroll');
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
    var isMobile = window.innerWidth < 1024;
    var scrollCurrent = window.scrollY;

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/scripts/app": 0,
/******/ 			"styles/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_dwmaj_workflow"] = self["webpackChunk_dwmaj_workflow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["styles/app"], () => (__webpack_require__("./src/scripts/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles/app"], () => (__webpack_require__("./src/styles/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map