/*
portfolio
*/
// portfolio page
const portfolioPage = document.querySelector('#portfolio');

// page structure
const portfolioStructure = `
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1>Portfolio</h1>
      </div>
      <div class="portfolio-grid"></div>
    </div>
  </div>
`;

// insert structure in page
portfolioPage.innerHTML = portfolioStructure;

// portfolio grid
const portfolioGrid = document.querySelector('.portfolio-grid');

// getting data
const portfolioUrl = './assets/data/data.json';

function getData() {
  fetch(portfolioUrl)
  .then((response) => response.json())
  .then((data) => displayData(data))
}
getData();

// displaying data
function displayData(portfolio) {

  let portfolioItems = '';

  for (let i in portfolio) {

  portfolioItems += `
    <div class="portfolio-item">
      <img src="./assets/images/portfolio/${portfolio[i].image}.png" alt="${portfolio[i].name}" class="item-image">
      <div class="item-name">
        <h2 class="name">${portfolio[i].name}</h2>
      </div>
      <div class="item-url">
        <a href="${portfolio[i].url}" target="_blank" class="url">check it out<i class="fas fa-chevron-right"></i></a>
      </div>
    </div>
  `;
  }
  portfolioGrid.innerHTML = portfolioItems;
}
