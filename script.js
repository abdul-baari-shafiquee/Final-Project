function setActiveTab() {
    const currentPage = window.location.pathname;
    console.log("Current Page:", currentPage);
    
    const navLinks = document.querySelectorAll('.right ul li a');
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('current');
      }
    });
  }

  fetch('/navbar.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navbar').innerHTML = html;
      setActiveTab();
    });
  