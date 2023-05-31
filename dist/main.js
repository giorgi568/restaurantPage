/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayContact": () => (/* binding */ displayContact)
/* harmony export */ });
function displayContact() {
  const contact = document.querySelector('.hook');
  contact.innerHTML = `<h1> contact us</h1>
  <p> <b>location:</b> 1024 Oakwood Ave
      San Diego, CA 22434</p>
   <p> <b>open: </b> Mon-Thurs:8am-8pm,
Fri-Sun:8am-11pm</p>
<p> <b>tel:</b>  (222)-888 5555</p>`;

  contact.style.cssText = `display: flex;
  height: 90%;
  background-color: #FFE569;
  flex-direction: column;
  align-items: center;`;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayHome": () => (/* binding */ displayHome)
/* harmony export */ });
function displayHome() {
  const home = document.querySelector('.hook');
  home.innerHTML = '';
  home.textContent = 'our restaurant serves wonderous dishes from all around the world';
  home.style.cssText = `background-image: url(src/image.jpg);
  height: 90%;
  font-size: 60px;
  background-repeat: no-repeat;
  background-size:cover;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10%;
  overflow: hidden;
  box-sizing: border-box;
  color: #B70404;
  font-weight: 600;
  text-shadow: 2px 2px 10px black, 0 0 1px grey, 0 0 0.2px grey;`
}



/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialize": () => (/* binding */ initialize)
/* harmony export */ });
function initialize() {
  const header = document.createElement('header');
  const ul = document.createElement('ul');
  const liHome = document.createElement('li');
  const liMenu = document.createElement('li');
  const liContact = document.createElement('li');
  const home = document.createElement('div');
  home.classList.add('hook');

  liHome.textContent = 'Home';
  liHome.classList.add('home');
  liMenu.textContent = 'Menu';
  liMenu.classList.add('menu');
  liContact.textContent = 'Contact';
  liContact.classList.add('contact');
  home.textContent =
    'our restaurant serves wonderous dishes from all around the world';

  home.style.cssText = `background-image: url(./src/image.jpg);
  height: 90%;
  font-size: 60px;
  background-repeat: no-repeat;
  background-size:cover;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10%;
  overflow: hidden;
  box-sizing: border-box;
  color: #B70404;
  font-weight: 600;
  text-shadow: 2px 2px 10px black, 0 0 1px grey, 0 0 0.2px grey;`;
  const content = document.getElementById('content');
  content.appendChild(header);
  header.appendChild(ul);
  ul.appendChild(liHome);
  ul.appendChild(liMenu);
  ul.appendChild(liContact);
  content.appendChild(home);
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayMenu": () => (/* binding */ displayMenu)
/* harmony export */ });
function displayMenu() {
  const menu = document.querySelector('.hook');
  menu.textContent = '';
  menu.style.cssText = `background-image: url(src/menu.jpg);
  height: 90%;
  background-size: contain;
  background-position: center;
  background-color: #FFE569;
  background-repeat: no-repeat`
  ;
}



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
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ "./src/initial.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");




(0,_initial__WEBPACK_IMPORTED_MODULE_0__.initialize)();
// displayMenu();
// displayContact();

const homeBtn = document.querySelector('.home');
homeBtn.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_3__.displayHome);

const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__.displayMenu);

const contactBtn = document.querySelector('.contact');
contactBtn.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_2__.displayContact);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQzBCOzs7Ozs7Ozs7Ozs7Ozs7QUNmMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDc0I7Ozs7Ozs7Ozs7Ozs7OztBQ3pDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7OztVQ1h2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ0Y7QUFDTTtBQUNOO0FBQ3JDLG9EQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsOENBQVc7QUFDN0M7QUFDQTtBQUNBLGtDQUFrQyw4Q0FBVztBQUM3QztBQUNBO0FBQ0EscUNBQXFDLG9EQUFjO0FBQ25EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGRpc3BsYXlDb250YWN0KCkge1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9vaycpO1xyXG4gIGNvbnRhY3QuaW5uZXJIVE1MID0gYDxoMT4gY29udGFjdCB1czwvaDE+XHJcbiAgPHA+IDxiPmxvY2F0aW9uOjwvYj4gMTAyNCBPYWt3b29kIEF2ZVxyXG4gICAgICBTYW4gRGllZ28sIENBIDIyNDM0PC9wPlxyXG4gICA8cD4gPGI+b3BlbjogPC9iPiBNb24tVGh1cnM6OGFtLThwbSxcclxuRnJpLVN1bjo4YW0tMTFwbTwvcD5cclxuPHA+IDxiPnRlbDo8L2I+ICAoMjIyKS04ODggNTU1NTwvcD5gO1xyXG5cclxuICBjb250YWN0LnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFNTY5O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtgO1xyXG59XHJcbmV4cG9ydCB7IGRpc3BsYXlDb250YWN0IH07XHJcbiIsImZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9vaycpO1xyXG4gIGhvbWUuaW5uZXJIVE1MID0gJyc7XHJcbiAgaG9tZS50ZXh0Q29udGVudCA9ICdvdXIgcmVzdGF1cmFudCBzZXJ2ZXMgd29uZGVyb3VzIGRpc2hlcyBmcm9tIGFsbCBhcm91bmQgdGhlIHdvcmxkJztcclxuICBob21lLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9pbWFnZS5qcGcpO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICNCNzA0MDQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrLCAwIDAgMXB4IGdyZXksIDAgMCAwLjJweCBncmV5O2BcclxufVxyXG5leHBvcnQgeyBkaXNwbGF5SG9tZSB9O1xyXG4iLCJmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBjb25zdCBsaUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IGxpTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgbGlDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob29rJyk7XHJcblxyXG4gIGxpSG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICBsaUhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xyXG4gIGxpTWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICBsaU1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIGxpQ29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuICBsaUNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG4gIGhvbWUudGV4dENvbnRlbnQgPVxyXG4gICAgJ291ciByZXN0YXVyYW50IHNlcnZlcyB3b25kZXJvdXMgZGlzaGVzIGZyb20gYWxsIGFyb3VuZCB0aGUgd29ybGQnO1xyXG5cclxuICBob21lLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vc3JjL2ltYWdlLmpwZyk7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBjb2xvcjogI0I3MDQwNDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2ssIDAgMCAxcHggZ3JleSwgMCAwIDAuMnB4IGdyZXk7YDtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcclxuICB1bC5hcHBlbmRDaGlsZChsaUhvbWUpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGxpTWVudSk7XHJcbiAgdWwuYXBwZW5kQ2hpbGQobGlDb250YWN0KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59XHJcblxyXG5leHBvcnQgeyBpbml0aWFsaXplIH07XHJcbiIsImZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9vaycpO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSAnJztcclxuICBtZW51LnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9tZW51LmpwZyk7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFNTY5O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXRgXHJcbiAgO1xyXG59XHJcbmV4cG9ydCB7IGRpc3BsYXlNZW51IH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaW5pdGlhbGl6ZSB9IGZyb20gJy4vaW5pdGlhbCc7XHJcbmltcG9ydCB7IGRpc3BsYXlNZW51IH0gZnJvbSAnLi9tZW51JztcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xyXG5pbXBvcnQgeyBkaXNwbGF5SG9tZSB9IGZyb20gJy4vaG9tZSc7XHJcbmluaXRpYWxpemUoKTtcclxuLy8gZGlzcGxheU1lbnUoKTtcclxuLy8gZGlzcGxheUNvbnRhY3QoKTtcclxuXHJcbmNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG5ob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUhvbWUpO1xyXG5cclxuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TWVudSk7XHJcblxyXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcclxuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlDb250YWN0KTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==