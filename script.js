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

// Navigation functions
function switchTab(tab) {
  // Update tab buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
  });
  
  if (tab === 'register') {
      document.querySelector('.tab-button:first-child').classList.add('active');
  } else {
      document.querySelector('.tab-button:last-child').classList.add('active');
  }
  
  // Update form visibility
  document.querySelectorAll('.form-section').forEach(form => {
      form.classList.remove('active');
  });
  
  document.getElementById(tab + 'Form').classList.add('active');
}

// Form validation
document.addEventListener('DOMContentLoaded', function() {
  // Initialize with register tab active
  switchTab('register');
  
  // Register form validation
  const registerForm = document.getElementById('registrationForm');
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  const termsCheckbox = document.getElementById('terms');
  
  // Error message elements
  const fullNameError = document.getElementById('fullNameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const passwordError = document.getElementById('passwordError');
  const confirmPasswordError = document.getElementById('confirmPasswordError');
  const termsError = document.getElementById('termsError');
  
  // Real-time validation for register form
  fullNameInput.addEventListener('blur', validateFullName);
  emailInput.addEventListener('blur', validateEmail);
  phoneInput.addEventListener('blur', validatePhone);
  passwordInput.addEventListener('blur', validatePassword);
  confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
  termsCheckbox.addEventListener('change', validateTerms);
  
  // Login form validation
  const loginForm = document.getElementById('loginForm');
  const loginEmailInput = document.getElementById('loginEmail');
  const loginPasswordInput = document.getElementById('loginPassword');
  
  const loginEmailError = document.getElementById('loginEmailError');
  const loginPasswordError = document.getElementById('loginPasswordError');
  
  loginEmailInput.addEventListener('blur', validateLoginEmail);
  loginPasswordInput.addEventListener('blur', validateLoginPassword);
  
  // Register form submission
  registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate all fields
      const isFullNameValid = validateFullName();
      const isEmailValid = validateEmail();
      const isPhoneValid = validatePhone();
      const isPasswordValid = validatePassword();
      const isConfirmPasswordValid = validateConfirmPassword();
      const isTermsValid = validateTerms();
      
      // Check if all validations pass
      if (isFullNameValid && isEmailValid && isPhoneValid && 
          isPasswordValid && isConfirmPasswordValid && isTermsValid) {
          
          // Simulate successful registration
          alert('Pendaftaran berhasil! Selamat datang di platform kami.');
          
          // Reset the form
          registerForm.reset();
          
          // Clear any error messages
          clearAllErrors();
      }
  });
  
  // Login form submission
  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate login fields
      const isEmailValid = validateLoginEmail();
      const isPasswordValid = validateLoginPassword();
      
      if (isEmailValid && isPasswordValid) {
          // Simulate successful login
          alert('Login berhasil! Selamat datang kembali.');
          
          // Reset the form
          loginForm.reset();
          
          // Clear any error messages
          clearLoginErrors();
      }
  });
  
  // Validation functions for registration
  function validateFullName() {
      const value = fullNameInput.value.trim();
      if (value === '') {
          showError(fullNameError, 'Nama lengkap harus diisi');
          return false;
      } else if (value.length < 3) {
          showError(fullNameError, 'Nama minimal 3 karakter');
          return false;
      } else {
          showSuccess(fullNameError);
          return true;
      }
  }
  
  function validateEmail() {
      const value = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (value === '') {
          showError(emailError, 'Email harus diisi');
          return false;
      } else if (!emailRegex.test(value)) {
          showError(emailError, 'Format email tidak valid');
          return false;
      } else {
          showSuccess(emailError);
          return true;
      }
  }
  
  function validatePhone() {
      const value = phoneInput.value.trim();
      const phoneRegex = /^[0-9]+$/;
      
      if (value === '') {
          showError(phoneError, 'Nomor telepon harus diisi');
          return false;
      } else if (!phoneRegex.test(value)) {
          showError(phoneError, 'Nomor telepon hanya boleh berisi angka');
          return false;
      } else if (value.length < 10 || value.length > 13) {
          showError(phoneError, 'Nomor telepon harus 10-13 digit');
          return false;
      } else {
          showSuccess(phoneError);
          return true;
      }
  }
  
  function validatePassword() {
      const value = passwordInput.value;
      
      if (value === '') {
          showError(passwordError, 'Kata sandi harus diisi');
          return false;
      } else if (value.length < 8) {
          showError(passwordError, 'Kata sandi minimal 8 karakter');
          return false;
      } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          showError(passwordError, 'Kata sandi harus mengandung huruf besar, huruf kecil, dan angka');
          return false;
      } else {
          showSuccess(passwordError);
          return true;
      }
  }
  
  function validateConfirmPassword() {
      const value = confirmPasswordInput.value;
      const passwordValue = passwordInput.value;
      
      if (value === '') {
          showError(confirmPasswordError, 'Konfirmasi kata sandi harus diisi');
          return false;
      } else if (value !== passwordValue) {
          showError(confirmPasswordError, 'Kata sandi tidak cocok');
          return false;
      } else {
          showSuccess(confirmPasswordError);
          return true;
      }
  }
  
  function validateTerms() {
      if (!termsCheckbox.checked) {
          showError(termsError, 'Anda harus menyetujui syarat dan ketentuan');
          return false;
      } else {
          showSuccess(termsError);
          return true;
      }
  }
  
  // Validation functions for login
  function validateLoginEmail() {
      const value = loginEmailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (value === '') {
          showError(loginEmailError, 'Email harus diisi');
          return false;
      } else if (!emailRegex.test(value)) {
          showError(loginEmailError, 'Format email tidak valid');
          return false;
      } else {
          showSuccess(loginEmailError);
          return true;
      }
  }
  
  function validateLoginPassword() {
      const value = loginPasswordInput.value;
      
      if (value === '') {
          showError(loginPasswordError, 'Kata sandi harus diisi');
          return false;
      } else if (value.length < 6) {
          showError(loginPasswordError, 'Kata sandi minimal 6 karakter');
          return false;
      } else {
          showSuccess(loginPasswordError);
          return true;
      }
  }
  
  function showError(element, message) {
      element.textContent = message;
      element.style.color = '#e74c3c';
  }
  
  function showSuccess(element) {
      element.textContent = '';
  }
  
  function clearAllErrors() {
      const errorElements = [
          fullNameError, emailError, phoneError, 
          passwordError, confirmPasswordError, termsError
      ];
      
      errorElements.forEach(element => {
          element.textContent = '';
      });
  }
  
  function clearLoginErrors() {
      loginEmailError.textContent = '';
      loginPasswordError.textContent = '';
  }
});