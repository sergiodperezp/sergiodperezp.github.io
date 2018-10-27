const servicesPage = document.querySelector('#services');

const servicesStructure = `
  <div class="container">
    <div class="row">
      <div class="page-title">
        <h1 class="services-title"></h1>
      </div>
      <div class="content">
        <div class="services"></div>
      </div>
    </div>
  </div>
`;

if (servicesPage) {
  servicesPage.innerHTML = servicesStructure;
}

export const servicesTitle = document.querySelector('.services-title');

export const servicesClass = document.querySelector('.services');
