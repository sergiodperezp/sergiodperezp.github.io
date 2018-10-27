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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var servicesPage = document.querySelector('#services');

var servicesStructure = '\n  <div class="container">\n    <div class="row">\n      <div class="page-title">\n        <h1 class="services-title"></h1>\n      </div>\n      <div class="content">\n        <div class="services"></div>\n      </div>\n    </div>\n  </div>\n';

if (servicesPage) {
  servicesPage.innerHTML = servicesStructure;
}

var servicesTitle = exports.servicesTitle = document.querySelector('.services-title');

var servicesClass = exports.servicesClass = document.querySelector('.services');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var portfolioPage = document.querySelector('#portfolio');

var portfolioStructure = '\n  <div class="container">\n    <div class="row">\n      <div class="page-title">\n        <h1 class="portfolio-title"></h1>\n      </div>\n      <div class="portfolio"></div>\n    </div>\n  </div>\n';

if (portfolioPage) {
  portfolioPage.innerHTML = portfolioStructure;
}

var portfolioTitle = exports.portfolioTitle = document.querySelector('.portfolio-title');

var portfolioClass = exports.portfolioClass = document.querySelector('.portfolio');

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(10);

__webpack_require__(0);

__webpack_require__(1);

__webpack_require__(4);

__webpack_require__(5);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _services = __webpack_require__(0);

var _portfolio = __webpack_require__(1);

// data url
var dataUrl = './assets/data/data.json';

// getting data
function getData() {
  fetch(dataUrl).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data[0]) {
      displayServices(data[0]);
    }
    if (data[1]) {
      displayPortfolio(data[1]);
    }
  });
}
getData();

// displaying services
function displayServices(servicesData) {

  var servicesItem = '';

  for (var i in servicesData) {

    _services.servicesTitle.textContent = servicesData[i].title;

    var services = servicesData[i].services;

    for (var j in services) {

      servicesItem += '\n        <div class="services-item">\n          <div class="service-image">\n            <img src="./assets/images/services/' + services[j].image + '.jpg" alt="' + services[j].name + '" class="image">\n            <div class="image-opacity"></div>\n          </div>\n          <div class="service-content">\n            <h2 class="service-name">' + services[j].name + '</h2>\n            <p class="service-description">' + services[j].description + '</p>\n          </div>\n        </div>\n      ';
    }
  }
  _services.servicesClass.innerHTML = servicesItem;
}

var portfolioCategory = '';

// displaying portfolio
function displayPortfolio(portfolioData) {

  for (var i in portfolioData) {

    _portfolio.portfolioTitle.textContent = portfolioData[i].title;

    var categories = portfolioData[i].portfolio_categories;

    for (var j in categories) {

      portfolioCategory += '\n        <div class="portfolio-category" id="' + categories[j].name_id + '">\n          <h2 class="portfolio-name">' + categories[j].name + '</h2>\n          <div class="portfolio-items">\n      ';

      var items = categories[j].portfolio_items;

      for (var k in items) {

        if (categories[j].name_id === 'web-design') {
          portfolioWebDesign(items[k]);
        }
        if (categories[j].name_id === 'custom-pc-building') {
          portfolioCustomPC(items[k]);
        }
        if (categories[j].name_id === 'digital-signage') {
          portfolioDigitalSignage(items[k]);
        }
      }
      portfolioCategory += '\n          </div>\n        </div>\n      ';
    }
  }
  _portfolio.portfolioClass.innerHTML = portfolioCategory;
}

// displaying portfolio web design
function portfolioWebDesign(webDesign) {

  portfolioCategory += '\n    <div class="portfolio-item">\n      <div class="item-image">\n        <img src="./assets/images/portfolio/web-design-' + webDesign.image + '.png" alt="' + webDesign.name + '" class="image">\n      </div>\n      <div class="item-name">\n        <h3 class="name">' + webDesign.name + '</h3>\n      </div>\n      <div class="item-url">\n        <a href="' + webDesign.url + '" target="_blank" class="url">check it out<i class="fas fa-chevron-right"></i></a>\n      </div>\n    </div>\n  ';
}

// displaying portfolio custom pc building
function portfolioCustomPC(customPC) {

  portfolioCategory += '\n    <div class="portfolio-item">\n  ';

  var images = customPC.images;

  for (var l in images) {

    portfolioCategory += '\n      <div class="item-image">\n        <img src="./assets/images/portfolio/custom-pc-building-' + images[l] + '.jpg" alt="' + customPC.name + '" class="image">\n      </div>\n    ';
  }
  portfolioCategory += '\n    </div>\n  ';
}

// displaying portfolio digital signage
function portfolioDigitalSignage(digitalSignage) {

  portfolioCategory += '\n    <div class="portfolio-item">\n  ';

  var images = digitalSignage.images;

  for (var m in images) {

    portfolioCategory += '\n      <img src="./assets/images/portfolio/digital-signage-' + images[m] + '.jpg" alt="' + digitalSignage.name + '" class="item-image">\n    ';
  }
  portfolioCategory += '\n    </div>\n  ';
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var footerPage = document.querySelector('#footer');

var footerPageStructure = '\n  <div class="container">\n    <div class="row">\n      <div class="content">\n        <div class="footer-social">\n          <div class="social-icons">\n            <a href="https://github.com/sergiodperezp/" target="_blank">\n              <i class="fab fa-github-square"></i>\n            </a>\n            <a href="https://twitter.com/sergiodperezp/" target="_blank">\n              <i class="fab fa-twitter-square"></i>\n            </a>\n          </div>\n        </div>\n        <hr>\n        <div class="footer-bottom">\n          <p>&copy; <span id="year"></span> <a href="./">Sergio Perez</a></p>\n          <p>All other trademarks or registered trademarks are property of their respective owners.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n';

if (footerPage) {
  footerPage.innerHTML = footerPageStructure;

  var year = new Date();

  document.querySelector('#year').innerHTML = year.getFullYear();
}

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add('navbar-special');
  } else {
    navbar.classList.remove('navbar-special');
  }
});

/***/ })
/******/ ]);