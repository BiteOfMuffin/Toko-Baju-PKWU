const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
};

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
};

// untuk about page

const header = document.getElementById('header');
        const navbar = document.getElementById('navbar-about');
        const closeBtn = document.getElementById('close');
        const menuBtn = document.getElementById('bar');

        // Scroll effect
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        menuBtn.addEventListener('click', function() {
            navbar.classList.add('active');
        });

        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            navbar.classList.remove('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('#navbar-about a').forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
            });
        });

        // ===================––


        // script.js
document.addEventListener('DOMContentLoaded', function() {
  // Testimonial slider functionality
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;

  function showTestimonial(index) {
      // Hide all testimonials
      testimonials.forEach(testimonial => {
          testimonial.classList.remove('active');
      });
      
      // Show current testimonial
      testimonials[index].classList.add('active');
  }

  function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
  }

  function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
  }

  // Event listeners
  nextBtn.addEventListener('click', nextTestimonial);
  prevBtn.addEventListener('click', prevTestimonial);

  // Auto-rotate testimonials every 5 seconds
  setInterval(nextTestimonial, 5000);

  // CTA button animations
  const ctaButtons = document.querySelectorAll('.cta-button');
  
  ctaButtons.forEach(button => {
      button.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-3px)';
      });
      
      button.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
      });
  });

  // Smooth scrolling for any potential anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 100,
                  behavior: 'smooth'
              });
          }
      });
  });
});