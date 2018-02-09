'use strict';

/*
footer
*/

var footer = document.querySelector('#footer');
var year = new Date();

if (footer) {
  document.querySelector('#year').innerHTML = year.getFullYear();
}
