/*
footer
*/
// footer page
const footerPage = document.querySelector('footer');

// page structure
const footerStructure = `
  <!-- page -->
  <section class="page">
    <!-- container -->
    <div class="container">
      <!-- row -->
      <div class="row">
        <!-- content -->
        <div class="content">
          <!-- footer-social -->
          <div class="footer-social">
            <!-- social-icons -->
            <div class="social-icons">
              <a href="https://github.com/sergiodperezp" target="_blank">
                <i class="fab fa-github-square"></i>
              </a>
              <a href="https://twitter.com/sergiodperezp" target="_blank">
                <i class="fab fa-twitter-square"></i>
              </a>
            </div>
            <!-- social-icons -->
          </div>
          <!-- footer-social -->
          <hr>
          <!-- footer-bottom -->
          <div class="footer-bottom">
            <p>&copy; <span id="year"></span> <a href="./">Sergio Perez</a></p>
            <p>All other trademarks or registered trademarks are property of their respective owners.</p>
          </div>
          <!-- footer-bottom -->
        </div>
        <!-- content -->
      </div>
      <!-- row -->
    </div>
    <!-- container -->
  </section>
  <!-- page -->
`;

// insert structure in page
footerPage.innerHTML = footerStructure;

const year = new Date();

document.querySelector('#year').innerHTML = year.getFullYear();
