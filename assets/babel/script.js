/*
portfolio
*/
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

portfolioPage.innerHTML = portfolioStructure;

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
    <a href="${portfolio[i].url}" target="_blank" class="portfolio-item">
      <img src="./assets/images/portfolio/${portfolio[i].image}.png" alt="${portfolio[i].name}" class="image">
      <div class="name"><h2>${portfolio[i].name}</h2></div>
    </a>
  `;
  }
  portfolioGrid.innerHTML = portfolioItems;
}

/*
footer
*/

const footer = document.querySelector('footer');
const year = new Date();

if (footer) {
  document.querySelector('#year').innerHTML = year.getFullYear();
}
