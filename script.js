// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetId = this.getAttribute('href').substring(1); // Get the section ID
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth', // Smooth scrolling effect
      block: 'start'
    });
  });
});