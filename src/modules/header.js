const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbar.classList.add('navbar-special');
  } else {
    navbar.classList.remove('navbar-special');
  }
});