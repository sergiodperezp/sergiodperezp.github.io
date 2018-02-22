/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

__webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
portfolio
*/
// portfolio page
var portfolioPage = document.querySelector('#portfolio');

// page structure
var portfolioStructure = '\n  <div class="container">\n    <div class="row">\n      <div class="page-title">\n        <h1>Portfolio</h1>\n      </div>\n      <div class="portfolio-grid"></div>\n    </div>\n  </div>\n';

// insert structure in page
portfolioPage.innerHTML = portfolioStructure;

// portfolio grid
var portfolioGrid = document.querySelector('.portfolio-grid');

// getting data
var portfolioUrl = './assets/data/data.json';

function getData() {
  fetch(portfolioUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    return displayData(data);
  });
}
getData();

// displaying data
function displayData(portfolio) {

  var portfolioItems = '';

  for (var i in portfolio) {

    portfolioItems += '\n    <div class="portfolio-item">\n      <img src="./assets/images/portfolio/' + portfolio[i].image + '.png" alt="' + portfolio[i].name + '" class="item-image">\n      <div class="item-name">\n        <h2 class="name">' + portfolio[i].name + '</h2>\n      </div>\n      <div class="item-url">\n        <a href="' + portfolio[i].url + '" target="_blank" class="url">check it out<i class="fas fa-chevron-right"></i></a>\n      </div>\n    </div>\n  ';
  }
  portfolioGrid.innerHTML = portfolioItems;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
footer
*/
// footer page
var footerPage = document.querySelector('footer');

// page structure
var footerStructure = '\n  <!-- page -->\n  <section class="page">\n    <!-- container -->\n    <div class="container">\n      <!-- row -->\n      <div class="row">\n        <!-- content -->\n        <div class="content">\n          <!-- footer-social -->\n          <div class="footer-social">\n            <!-- social-icons -->\n            <div class="social-icons">\n              <a href="https://github.com/sergiodperezp" target="_blank">\n                <i class="fab fa-github-square"></i>\n              </a>\n              <a href="https://twitter.com/sergiodperezp" target="_blank">\n                <i class="fab fa-twitter-square"></i>\n              </a>\n            </div>\n            <!-- social-icons -->\n          </div>\n          <!-- footer-social -->\n          <hr>\n          <!-- footer-bottom -->\n          <div class="footer-bottom">\n            <p>&copy; <span id="year"></span> <a href="./">Sergio Perez</a></p>\n            <p>All other trademarks or registered trademarks are property of their respective owners.</p>\n          </div>\n          <!-- footer-bottom -->\n        </div>\n        <!-- content -->\n      </div>\n      <!-- row -->\n    </div>\n    <!-- container -->\n  </section>\n  <!-- page -->\n';

// insert structure in page
footerPage.innerHTML = footerStructure;

var year = new Date();

document.querySelector('#year').innerHTML = year.getFullYear();

/***/ })
/******/ ]);