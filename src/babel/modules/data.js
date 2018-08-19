// portfolio page
const portfolioPage = document.querySelector('#portfolio');
// page structure
const portfolioStructure = `
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="portfolio-title"></h1>
      </div>
      <div class="portfolio"></div>
    </div>
  </div>
`;
// insert portfolio structure in page
portfolioPage.innerHTML = portfolioStructure;
// portfolio title
const portfolioTitle =  document.querySelector('.portfolio-title');
// portfolio itself
const portfolio = document.querySelector('.portfolio');

// data url
const dataUrl = './assets/data/data.json';
// getting data
function getData() {
  fetch(dataUrl)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    displayPortfolio(data[1]);
  });
}
getData();

let portfolioCategory = '';
// displaying portfolio
function displayPortfolio(portfolioData) {
  // portfolio title
  let portfolioTitleText = '';
  // looping into the portfolio
  for (let i in portfolioData) {

    portfolioTitleText += portfolioData[i].page_name;

    let categories = portfolioData[i].portfolio_categories;
    // looping into the categories
    for (let j in categories) {
      // displaying the portfolio categories
      portfolioCategory += `
        <div class="portfolio-category" id="${categories[j].name_id}">
          <h2>${categories[j].name}</h2>
          <div class="portfolio-items">
      `;

      let items = categories[j].portfolio_items;
      // looping into the items
      for (let k in items) {
        // sending items into its respective function to display
        if (categories[j].name === 'Web Design') {
          portfolioWebDesign(items[k]);
        } else if (categories[j].name === 'Custom PC Building') {
          portfolioCustomPC(items[k]);
        }
      }
      portfolioCategory += `
          </div>
        </div>
      `;
    }
  }
  portfolioTitle.textContent = portfolioTitleText;
  portfolio.innerHTML = portfolioCategory;
}
// displaying portfolio web design
function portfolioWebDesign(webDesign) {
  portfolioCategory += `
    <div class="portfolio-item">
      <img src="./assets/images/portfolio/${webDesign.image}.png" alt="${webDesign.name}" class="item-image">
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
      <div class="item-inner">
        <img src="./assets/images/portfolio/${customPC.images[0]}.png" alt="${customPC.name}" class="item-image">
        <div class="item-name">
          <h3 class="name">${customPC.name}</h3>
        </div>
      </div>
      <div class="item-images">
  `;

  let images = customPC.images;

  for (let l in images) {

    portfolioCategory += `
      <img src="./assets/images/portfolio/${images[l]}.png" alt="${customPC.name}" class="images">
    `;
  }
  portfolioCategory += `
      </div>
    </div>
  `;
}
