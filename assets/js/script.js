'use strict';

/*
portfolio
*/
var portfolioPage = document.querySelector('#portfolio');

// page structure
var portfolioStructure = '\n  <div class="container">\n    <div class="row">\n      <div class="page-title">\n        <h1>Portfolio</h1>\n      </div>\n      <div class="portfolio-grid"></div>\n    </div>\n  </div>\n';

portfolioPage.innerHTML = portfolioStructure;

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

    portfolioItems += '\n    <a href="' + portfolio[i].url + '" target="_blank" class="portfolio-item">\n      <img src="./assets/images/portfolio/' + portfolio[i].image + '.png" alt="' + portfolio[i].name + '" class="image">\n      <div class="name"><h2>' + portfolio[i].name + '</h2></div>\n    </a>\n  ';
  }
  portfolioGrid.innerHTML = portfolioItems;
}

/*
footer
*/

var footer = document.querySelector('footer');
var year = new Date();

if (footer) {
  document.querySelector('#year').innerHTML = year.getFullYear();
}
