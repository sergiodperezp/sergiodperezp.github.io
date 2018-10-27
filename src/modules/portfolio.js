const portfolioPage = document.querySelector('#portfolio');

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

if (portfolioPage) {
  portfolioPage.innerHTML = portfolioStructure;
}

export const portfolioTitle = document.querySelector('.portfolio-title');

export const portfolioClass = document.querySelector('.portfolio');