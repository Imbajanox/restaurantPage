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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact.js */ \"./src/modules/contact.js\");\n\n\n\n\n// Load the homepage by default\n(0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// Add event listeners for the buttons\ndocument.getElementById('home').addEventListener('click', _modules_homepage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\ndocument.getElementById('menu').addEventListener('click', _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ndocument.getElementById('about').addEventListener('click', _modules_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.getElementById('content');\n\n    // Clear existing content\n    content.innerHTML = '';\n\n    // Create elements\n    const heading = document.createElement('h1');\n    const address = document.createElement('p');\n    const phone = document.createElement('p');\n    const email = document.createElement('p');\n\n    // Set content\n    heading.textContent = 'Contact Us';\n    address.textContent = 'Address: 123 Main Street, City, Country';\n    phone.textContent = 'Phone: +1 234 567 890';\n    email.textContent = 'Email: info@restaurant.com';\n\n    // Append elements to the content div\n    content.appendChild(heading);\n    content.appendChild(address);\n    content.appendChild(phone);\n    content.appendChild(email);\n}\n\n//# sourceURL=webpack://restaurantpage/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomepage)\n/* harmony export */ });\nfunction loadHomepage() {\n    const content = document.getElementById('content');\n\n    // Clear existing content\n    content.innerHTML = '';\n\n    // Create elements\n    const heading = document.createElement('h1');\n    const image = document.createElement('img');\n    const paragraph = document.createElement('p');\n\n    // Set content and attributes\n    heading.textContent = 'Welcome to Our Restaurant!';\n    image.src = 'https://via.placeholder.com/400x200';\n    image.alt = 'Restaurant Image';\n    paragraph.textContent = 'We are a family-owned restaurant dedicated to serving the most delicious and authentic dishes. Come visit us and experience the warmth of our hospitality!';\n\n    // Append elements to the content div\n    content.appendChild(heading);\n    content.appendChild(image);\n    content.appendChild(paragraph);\n}\n\n//# sourceURL=webpack://restaurantpage/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.getElementById('content');\n\n    // Clear existing content\n    content.innerHTML = '';\n\n    // Create elements\n    const heading = document.createElement('h1');\n    const menuList = document.createElement('ul');\n\n    // Set content\n    heading.textContent = 'Our Menu';\n\n    const menuItems = [\n        'Pizza - $10',\n        'Pasta - $12',\n        'Salad - $8',\n        'Burger - $9',\n        'Steak - $20',\n    ];\n\n    menuItems.forEach((item) => {\n        const listItem = document.createElement('li');\n        listItem.textContent = item;\n        menuList.appendChild(listItem);\n    });\n\n    // Append elements to the content div\n    content.appendChild(heading);\n    content.appendChild(menuList);\n}\n\n//# sourceURL=webpack://restaurantpage/./src/modules/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;