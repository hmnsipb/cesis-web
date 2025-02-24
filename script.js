// JavaScript for Navbar Animation
const toggler = document.querySelector('.navbar-toggler');
const navCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.nav-link');

// Toggler Click Event
toggler.addEventListener('click', () => {
  // Toggle the 'show' class for the navbar
  navCollapse.classList.toggle('show');

  // Animate each link with a slight delay
  if (navCollapse.classList.contains('show')) {
    navLinks.forEach((link, index) => {
      setTimeout(() => {
        link.style.opacity = '1';
        link.style.transform = 'translateY(0)';
      }, index * 100); // Staggered animation delay
    });
  } else {
    // Hide links when toggler is closed
    navLinks.forEach((link) => {
      link.style.opacity = '0';
      link.style.transform = 'translateY(-50px)';
    });
  }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Function to change slide
function changeSlide(index) {
  // Remove 'active' class from current slide and indicator
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  // Update the current slide index
  currentSlide = index;

  // Add 'active' class to the new slide and indicator
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

// Automatic slide change every 4 seconds
setInterval(() => {
  const nextSlide = (currentSlide + 1) % slides.length;
  changeSlide(nextSlide);
}, 4000);

// Add click event to each dot
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => changeSlide(index));
});
