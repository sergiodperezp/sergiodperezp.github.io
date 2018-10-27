// displaying portfolio
// function displayPortfolio(portfolioData) {

//   let portfolioTitleText = '';
//   let portfolioCategory = '';

//   for (let i in portfolioData) {

//     portfolioTitleText += portfolioData[i].page_name;
//     let categories = portfolioData[i].portfolio_categories;

//     for (let j in categories) {

//       portfolioCategory += `
//         <div class="portfolio-category" id="${categories[j].name_id}">
//           <h2>${categories[j].name}</h2>
//           <div class="portfolio-items">
//       `;

//       let items = categories[j].portfolio_items;

//       for (let k in items) {

//         portfolioCategory += `
//           <div class="portfolio-item">
//             <img src="./assets/images/portfolio/${items[k].image}.png" alt="${items[k].name}" class="item-image">
//             <div class="item-name">
//               <h3 class="name">${items[k].name}</h3>
//             </div>
//             <div class="item-url">
//               <a href="${items[k].url}" target="_blank" class="url">check it out<i class="fas fa-chevron-right"></i></a>
//             </div>
//           </div>
//         `;
//       }
//       portfolioCategory += `
//           </div>
//         </div>
//       `;
//     }
//   }
//   portfolioTitle.textContent = portfolioTitleText;
//   portfolio.innerHTML = portfolioCategory;
// }
// displaying data
// function displayData(personal) {

  // let portfolioItems = '';
  //
  // for (let i in personal) {
  //
  //   let portfolio = personal[i].portfolio;
  //
  //   for (let j in portfolio) {
  //
  //     portfolioItems += `
  //       <div class="portfolio-item">
  //         <img src="./assets/images/portfolio/${portfolio[j].image}.png" alt="${portfolio[j].name}" class="item-image">
  //         <div class="item-name">
  //           <h2 class="name">${portfolio[j].name}</h2>
  //         </div>
  //         <div class="item-url">
  //           <a href="${portfolio[j].url}" target="_blank" class="url">check it out<i class="fas fa-chevron-right"></i></a>
  //         </div>
  //       </div>
  //     `;
  //   }
  // }
  // portfolioGrid.innerHTML = portfolioItems;
// }
// function displayData(portfolio) {

//   let portfolioItems = '';

//   for (let i in portfolio) {

//   portfolioItems += `
//     <div class="portfolio-item">
//       <img src="./assets/images/portfolio/${portfolio[i].image}.png" alt="${portfolio[i].name}" class="item-image">
//       <div class="item-name">
//         <h2 class="name">${portfolio[i].name}</h2>
//       </div>
//       <div class="item-url">
//         <a href="${portfolio[i].url}" target="_blank" class="url">check it out<i class="fas fa-chevron-right"></i></a>
//       </div>
//     </div>
//   `;
//   }
//   portfolioGrid.innerHTML = portfolioItems;
// }
