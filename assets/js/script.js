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

__webpack_require__(3);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// portfolio page
var portfolioPage = document.querySelector('#portfolio');
// page structure
var portfolioStructure = '\n  <div class="container">\n    <div class="row">\n      <div class="page-title">\n        <h1 class="portfolio-title"></h1>\n      </div>\n      <div class="portfolio"></div>\n    </div>\n  </div>\n';
// insert portfolio structure in page
portfolioPage.innerHTML = portfolioStructure;
// portfolio title
var portfolioTitle = document.querySelector('.portfolio-title');
// portfolio itself
var portfolio = document.querySelector('.portfolio');

// data url
var dataUrl = './assets/data/data.json';
// getting data
function getData() {
  fetch(dataUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    displayPortfolio(data[1]);
  });
}
getData();

var portfolioCategory = '';
// displaying portfolio
function displayPortfolio(portfolioData) {
  // portfolio title
  var portfolioTitleText = '';
  // looping into the portfolio
  for (var i in portfolioData) {

    portfolioTitleText += portfolioData[i].page_name;

    var categories = portfolioData[i].portfolio_categories;
    // looping into the categories
    for (var j in categories) {
      // displaying the portfolio categories
      portfolioCategory += '\n        <div class="portfolio-category" id="' + categories[j].name_id + '">\n          <h2>' + categories[j].name + '</h2>\n          <div class="portfolio-items">\n      ';

      var items = categories[j].portfolio_items;
      // looping into the items
      for (var k in items) {
        // sending items into its respective function to display
        if (categories[j].name === 'Web Design') {
          portfolioWebDesign(items[k]);
        } else if (categories[j].name === 'Custom PC Building') {
          portfolioCustomPC(items[k]);
        }
      }
      portfolioCategory += '\n          </div>\n        </div>\n      ';
    }
  }
  portfolioTitle.textContent = portfolioTitleText;
  portfolio.innerHTML = portfolioCategory;
}
// displaying portfolio web design
function portfolioWebDesign(webDesign) {
  portfolioCategory += '\n    <div class="portfolio-item">\n      <img src="./assets/images/portfolio/' + webDesign.image + '.png" alt="' + webDesign.name + '" class="item-image">\n      <div class="item-name">\n        <h3 class="name">' + webDesign.name + '</h3>\n      </div>\n      <div class="item-url">\n        <a href="' + webDesign.url + '" target="_blank" class="url">check it out<i class="fas fa-chevron-right"></i></a>\n      </div>\n    </div>\n  ';
}
// displaying portfolio custom pc building
function portfolioCustomPC(customPC) {
  portfolioCategory += '\n    <div class="portfolio-item">\n      <div class="item-inner">\n        <img src="./assets/images/portfolio/' + customPC.images[0] + '.png" alt="' + customPC.name + '" class="item-image">\n        <div class="item-name">\n          <h3 class="name">' + customPC.name + '</h3>\n        </div>\n      </div>\n      <div class="item-images">\n  ';

  var images = customPC.images;

  for (var l in images) {

    portfolioCategory += '\n      <img src="./assets/images/portfolio/' + images[l] + '.png" alt="' + customPC.name + '" class="images">\n    ';
  }
  portfolioCategory += '\n      </div>\n    </div>\n  ';
}

/***/ }),
/* 3 */
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