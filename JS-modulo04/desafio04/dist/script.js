/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/calcular.js":
/*!****************************!*\
  !*** ./src/JS/calcular.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcular: () => (/* binding */ calcular)\n/* harmony export */ });\nconst input = document.getElementById('input');\nconst resultInput = document.getElementById('result');\nfunction calcular(){\n    resultInput.value = 'ERROR';\n    resultInput.classList.add('error');\n    const resultado = eval(input.value);\n    resultInput.value = resultado;\n    resultInput.classList.remove('error');\n}\n\n\n//# sourceURL=webpack://desafio04/./src/JS/calcular.js?");

/***/ }),

/***/ "./src/JS/copy.js":
/*!************************!*\
  !*** ./src/JS/copy.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cobyToClipBoard: () => (/* binding */ cobyToClipBoard)\n/* harmony export */ });\nconst resultInput = document.getElementById('result');\n\nfunction cobyToClipBoard(ev){\n    const button = ev.currentTarget;\n    if(button.innerText === 'Copy'){\n        button.innerText = 'Copied';\n        button.classList.add('success');\n        window.navigator.clipboard.writeText(resultInput.value); \n    }else{\n        button.innerText = 'Copy';\n        button.classList.remove('success');\n    }\n} \n\n//# sourceURL=webpack://desafio04/./src/JS/copy.js?");

/***/ }),

/***/ "./src/JS/keyHandler.js":
/*!******************************!*\
  !*** ./src/JS/keyHandler.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearKey: () => (/* binding */ clearKey),\n/* harmony export */   keyClicked: () => (/* binding */ keyClicked),\n/* harmony export */   typing: () => (/* binding */ typing)\n/* harmony export */ });\n/* harmony import */ var _calcular_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcular.js */ \"./src/JS/calcular.js\");\n\n\nconst input = document.getElementById('input');\n\nconst allowedKeys = ['(', ')', '/', '*', '+', '-', '.', '%', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' '];\n\nfunction keyClicked(ev){\n    const value = ev.currentTarget.dataset.value;\n    input.value += value;\n}\n\nfunction clearKey(){\n    input.value = '';\n    input.focus();\n}\n\nfunction typing(ev){\n    ev.preventDefault();\n    if(allowedKeys.includes(ev.key)){\n        input.value += ev.key;\n        return\n    }\n    if(ev.key === 'Backspace'){\n        input.value = input.value.slice(0, -1);\n    }\n    if(ev.key === 'Enter'){\n        (0,_calcular_js__WEBPACK_IMPORTED_MODULE_0__.calcular)();\n    }\n}\n\n\n\n//# sourceURL=webpack://desafio04/./src/JS/keyHandler.js?");

/***/ }),

/***/ "./src/JS/theme.js":
/*!*************************!*\
  !*** ./src/JS/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   switchTheme: () => (/* binding */ switchTheme)\n/* harmony export */ });\nconst main = document.querySelector('main');\nconst root =document.querySelector(':root');\n\n\nfunction switchTheme(){\n    if (main.dataset.theme === 'dark'){\n        root.style.setProperty('--bg-color', '#f1f5f9');\n        root.style.setProperty('--border-color', '#aaa');\n        root.style.setProperty('--font-color', '#212529');\n        root.style.setProperty('--primary-color', '#26834a');\n        main.dataset.theme = 'light';\n    }else {\n        root.style.setProperty('--bg-color', '#212529');\n        root.style.setProperty('--border-color', '#666');\n        root.style.setProperty('--font-color', '#f1f5f9');\n        root.style.setProperty('--primary-color', '#4dff91');\n        main.dataset.theme = 'dark';\n    }\n}\n\n\n\n\n//# sourceURL=webpack://desafio04/./src/JS/theme.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JS_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JS/theme.js */ \"./src/JS/theme.js\");\n/* harmony import */ var _JS_copy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JS/copy.js */ \"./src/JS/copy.js\");\n/* harmony import */ var _JS_calcular_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./JS/calcular.js */ \"./src/JS/calcular.js\");\n/* harmony import */ var _JS_keyHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./JS/keyHandler.js */ \"./src/JS/keyHandler.js\");\n\n\n\n\ndocument.querySelectorAll('.charKey').forEach( (charkeybtn) => {\n    charkeybtn.addEventListener('click', _JS_keyHandler_js__WEBPACK_IMPORTED_MODULE_3__.keyClicked);\n});\ndocument.getElementById('clear').addEventListener('click', _JS_keyHandler_js__WEBPACK_IMPORTED_MODULE_3__.clearKey);\ndocument.getElementById('equal').addEventListener('click', _JS_calcular_js__WEBPACK_IMPORTED_MODULE_2__.calcular)\ndocument.getElementById('input').addEventListener('keydown', _JS_keyHandler_js__WEBPACK_IMPORTED_MODULE_3__.typing)\ndocument.getElementById('themeSwitcher').addEventListener('click', _JS_theme_js__WEBPACK_IMPORTED_MODULE_0__.switchTheme);\ndocument.getElementById('copyToClipboard').addEventListener('click', _JS_copy_js__WEBPACK_IMPORTED_MODULE_1__.cobyToClipBoard);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://desafio04/./src/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;