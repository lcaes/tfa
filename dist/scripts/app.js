/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ (() => {

var blogBurger = document.querySelector('.blog__burger');
var blogNav = document.querySelector('.blog__nav');
var lunaInput = document.querySelector('.luans__input');
var lastScroll = 0;
var widthScreen = screen.width;
console.log(widthScreen);
blogBurger.addEventListener('click', opennav);

function opennav() {
  blogNav.classList.toggle('blog__nav--active');
}

function closeNavigation() {
  blogNav.classList.remove('blog__nav--active');
}

window.addEventListener('scroll', showBTN);

function showBTN(e) {
  var scrollCurrent = window.scrollY;

  if (scrollCurrent < lastScroll && widthScreen < 1024) {
    blogBurger.classList.add("--show");
  } else {
    blogBurger.classList.remove("--show");
  }

  lastScroll = scrollCurrent;
}

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n6 │ @import 'components/lunas.scss';\n  │         ^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  src/styles/app.scss 6:9  root stylesheet\n    at processResult (/Users/lyn/Documents/GitHub/Imprevisible/node_modules/webpack/lib/NormalModule.js:758:19)\n    at /Users/lyn/Documents/GitHub/Imprevisible/node_modules/webpack/lib/NormalModule.js:860:5\n    at /Users/lyn/Documents/GitHub/Imprevisible/node_modules/loader-runner/lib/LoaderRunner.js:400:11\n    at /Users/lyn/Documents/GitHub/Imprevisible/node_modules/loader-runner/lib/LoaderRunner.js:252:18\n    at context.callback (/Users/lyn/Documents/GitHub/Imprevisible/node_modules/loader-runner/lib/LoaderRunner.js:124:13)\n    at Object.loader (/Users/lyn/Documents/GitHub/Imprevisible/node_modules/sass-loader/dist/index.js:69:5)");

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