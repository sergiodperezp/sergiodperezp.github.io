import {servicesTitle, servicesClass} from './services';
import {portfolioTitle, portfolioClass} from './portfolio';

// data url
const dataUrl = './assets/data/data.json';

// getting data
function getData() {
  fetch(dataUrl)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
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

  let servicesItem = '';

  for (let i in servicesData) {
    
    servicesTitle.textContent = servicesData[i].title;

    let services = servicesData[i].services;

    for (let j in services) {

      servicesItem += `
        <div class="services-item">
          <div class="service-image">
            <img src="./assets/images/services/${services[j].image}.jpg" alt="${services[j].name}" class="image">
            <div class="image-opacity"></div>
          </div>
          <div class="service-content">
            <h2 class="service-name">${services[j].name}</h2>
            <p class="service-description">${services[j].description}</p>
          </div>
        </div>
      `;
    }
  }
  servicesClass.innerHTML = servicesItem;
}

let portfolioCategory = '';

// displaying portfolio
function displayPortfolio(portfolioData) {

  for (let i in portfolioData) {

    portfolioTitle.textContent = portfolioData[i].title;

    let categories = portfolioData[i].portfolio_categories;

    for (let j in categories) {

      portfolioCategory += `
        <div class="portfolio-category" id="${categories[j].name_id}">
          <h2 class="portfolio-name">${categories[j].name}</h2>
          <div class="portfolio-items">
      `;

      let items = categories[j].portfolio_items;

      for (let k in items) {

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
      portfolioCategory += `
          </div>
        </div>
      `;
    }
  }
  portfolioClass.innerHTML = portfolioCategory;
}

// displaying portfolio web design
function portfolioWebDesign(webDesign) {

  portfolioCategory += `
    <div class="portfolio-item">
      <div class="item-image">
        <img src="./assets/images/portfolio/web-design-${webDesign.image}.png" alt="${webDesign.name}" class="image">
      </div>
      <div class="item-name">
        <h3 class="name">${webDesign.name}</h3>
      </div>
      <div class="item-url">
        <a href="${webDesign.url}" target="_blank" class="url">check it out<i class="fas fa-chevron-right"></i></a>
      </div>
    </div>
  `;
}

// displaying portfolio custom pc building
function portfolioCustomPC(customPC) {

  portfolioCategory += `
    <div class="portfolio-item">
  `;

  let images = customPC.images;

  for (let l in images) {

    portfolioCategory += `
      <div class="item-image">
        <img src="./assets/images/portfolio/custom-pc-building-${images[l]}.jpg" alt="${customPC.name}" class="image">
      </div>
    `;
  }
  portfolioCategory += `
    </div>
  `;
}

// displaying portfolio digital signage
function portfolioDigitalSignage(digitalSignage) {

  portfolioCategory +=`
    <div class="portfolio-item">
  `;

  let images = digitalSignage.images;

  for (let m in images) {

    portfolioCategory +=`
      <img src="./assets/images/portfolio/digital-signage-${images[m]}.jpg" alt="${digitalSignage.name}" class="item-image">
    `;
  }
  portfolioCategory += `
    </div>
  `;
}