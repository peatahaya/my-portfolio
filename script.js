// Show/hide the back-to-top button
window.addEventListener('scroll', function() {
  const button = document.getElementById('backToTop');
  if (window.scrollY > 300) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

// Scroll to top when button is clicked
document.getElementById('backToTop').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
