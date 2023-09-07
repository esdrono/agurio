  document.getElementById('menu-toggle').addEventListener('click', function() {
    var mainNavLinks = document.getElementById('main-nav-links');
    var body = document.querySelector('body');
  
    if (mainNavLinks.classList.contains('show')) {
        mainNavLinks.classList.remove('show');
        mainNavLinks.classList.remove('white-bg'); // Remove white background class
        body.classList.remove('showing-menu'); // Allow scrolling
    } else {
        mainNavLinks.classList.add('show');
        mainNavLinks.classList.add('white-bg'); // Add white background class
        body.classList.add('showing-menu'); // Prevent scrolling
    }
  });
  
  document.getElementById('close-menu').addEventListener('click', function() {
    var mainNavLinks = document.getElementById('main-nav-links');
    var body = document.querySelector('body');
  
    mainNavLinks.classList.remove('show');
    mainNavLinks.classList.remove('white-bg'); // Remove white background class
    body.classList.remove('showing-menu'); // Allow scrolling
  });
  
  document.querySelector('.dropbtn').addEventListener('click', function(event) {
    var dropdownContent = this.nextElementSibling;
  
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
  
    // Prevent the default action of the link
    event.preventDefault();
  });