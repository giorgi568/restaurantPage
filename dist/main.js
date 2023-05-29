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
  home.style.cssText = `background-image: url(/src/image.jpg);
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
  
  
  home.style.cssText = `background-image: url(/src/image.jpg);
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
  menu.style.cssText = `background-image: url(/src/menu.jpg);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQzBCOzs7Ozs7Ozs7Ozs7Ozs7QUNmMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNzQjs7Ozs7Ozs7Ozs7Ozs7O0FDMUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3VCOzs7Ozs7O1VDWHZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOdUM7QUFDRjtBQUNNO0FBQ047QUFDckMsb0RBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyw4Q0FBVztBQUM3QztBQUNBO0FBQ0Esa0NBQWtDLDhDQUFXO0FBQzdDO0FBQ0E7QUFDQSxxQ0FBcUMsb0RBQWM7QUFDbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5pdGlhbC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZGlzcGxheUNvbnRhY3QoKSB7XHJcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob29rJyk7XHJcbiAgY29udGFjdC5pbm5lckhUTUwgPSBgPGgxPiBjb250YWN0IHVzPC9oMT5cclxuICA8cD4gPGI+bG9jYXRpb246PC9iPiAxMDI0IE9ha3dvb2QgQXZlXHJcbiAgICAgIFNhbiBEaWVnbywgQ0EgMjI0MzQ8L3A+XHJcbiAgIDxwPiA8Yj5vcGVuOiA8L2I+IE1vbi1UaHVyczo4YW0tOHBtLFxyXG5GcmktU3VuOjhhbS0xMXBtPC9wPlxyXG48cD4gPGI+dGVsOjwvYj4gICgyMjIpLTg4OCA1NTU1PC9wPmA7XHJcblxyXG4gIGNvbnRhY3Quc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkU1Njk7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO2A7XHJcbn1cclxuZXhwb3J0IHsgZGlzcGxheUNvbnRhY3QgfTtcclxuIiwiZnVuY3Rpb24gZGlzcGxheUhvbWUoKSB7XHJcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob29rJyk7XHJcbiAgaG9tZS5pbm5lckhUTUwgPSAnJztcclxuICBob21lLnRleHRDb250ZW50ID0gJ291ciByZXN0YXVyYW50IHNlcnZlcyB3b25kZXJvdXMgZGlzaGVzIGZyb20gYWxsIGFyb3VuZCB0aGUgd29ybGQnO1xyXG4gIGhvbWUuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9pbWFnZS5qcGcpO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICNCNzA0MDQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrLCAwIDAgMXB4IGdyZXksIDAgMCAwLjJweCBncmV5O2BcclxufVxyXG5leHBvcnQgeyBkaXNwbGF5SG9tZSB9O1xyXG4iLCJmdW5jdGlvbiBpbml0aWFsaXplKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICBjb25zdCBsaUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IGxpTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgbGlDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob29rJyk7XHJcblxyXG4gIGxpSG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICBsaUhvbWUuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xyXG4gIGxpTWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICBsaU1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG4gIGxpQ29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuICBsaUNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG4gIGhvbWUudGV4dENvbnRlbnQgPVxyXG4gICAgJ291ciByZXN0YXVyYW50IHNlcnZlcyB3b25kZXJvdXMgZGlzaGVzIGZyb20gYWxsIGFyb3VuZCB0aGUgd29ybGQnO1xyXG4gIFxyXG4gIFxyXG4gIGhvbWUuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NyYy9pbWFnZS5qcGcpO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgY29sb3I6ICNCNzA0MDQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrLCAwIDAgMXB4IGdyZXksIDAgMCAwLjJweCBncmV5O2BcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcclxuICB1bC5hcHBlbmRDaGlsZChsaUhvbWUpO1xyXG4gIHVsLmFwcGVuZENoaWxkKGxpTWVudSk7XHJcbiAgdWwuYXBwZW5kQ2hpbGQobGlDb250YWN0KTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xyXG59XHJcblxyXG5leHBvcnQgeyBpbml0aWFsaXplIH07XHJcbiIsImZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xyXG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9vaycpO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSAnJztcclxuICBtZW51LnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcmMvbWVudS5qcGcpO1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRTU2OTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0YFxyXG4gIDtcclxufVxyXG5leHBvcnQgeyBkaXNwbGF5TWVudSB9O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGluaXRpYWxpemUgfSBmcm9tICcuL2luaXRpYWwnO1xyXG5pbXBvcnQgeyBkaXNwbGF5TWVudSB9IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCB7IGRpc3BsYXlDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcclxuaW1wb3J0IHsgZGlzcGxheUhvbWUgfSBmcm9tICcuL2hvbWUnO1xyXG5pbml0aWFsaXplKCk7XHJcbi8vIGRpc3BsYXlNZW51KCk7XHJcbi8vIGRpc3BsYXlDb250YWN0KCk7XHJcblxyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlIb21lKTtcclxuXHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheU1lbnUpO1xyXG5cclxuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XHJcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Q29udGFjdCk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=