const footerPage = document.querySelector('#footer');

const footerPageStructure = `
  <div class="container">
    <div class="row">
      <div class="content">
        <div class="footer-social">
          <div class="social-icons">
            <a href="https://github.com/sergiodperezp/" target="_blank">
              <i class="fab fa-github-square"></i>
            </a>
            <a href="https://twitter.com/sergiodperezp/" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <hr>
        <div class="footer-bottom">
          <p>&copy; <span id="year"></span> <a href="./">Sergio Perez</a></p>
          <p>All other trademarks or registered trademarks are property of their respective owners.</p>
        </div>
      </div>
    </div>
  </div>
`;

if (footerPage) {
  footerPage.innerHTML = footerPageStructure;
  
  const year = new Date();
  
  document.querySelector('#year').innerHTML = year.getFullYear();
}


