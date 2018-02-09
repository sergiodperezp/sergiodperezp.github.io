/*
footer
*/

const footer = document.querySelector('#footer');
const year = new Date();

if (footer) {
  document.querySelector('#year').innerHTML = year.getFullYear();
}
