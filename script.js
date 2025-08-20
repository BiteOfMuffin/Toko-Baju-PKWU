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