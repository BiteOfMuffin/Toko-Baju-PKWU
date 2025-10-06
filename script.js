


document.addEventListener("DOMContentLoaded", function () {
    // ========== NAVBAR & HEADER ==========
    const bar = document.getElementById("bar");
    const close = document.getElementById("close");
    const nav = document.getElementById("navbar");
    const header = document.getElementById("header");

    if (bar) bar.addEventListener("click", () => nav && nav.classList.add("active"));
    if (close) close.addEventListener("click", (e) => { e.preventDefault(); nav && nav.classList.remove("active"); });
    if (header) {
        window.addEventListener("scroll", function () {
            header.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

    const navLinks = document.querySelectorAll("#navbar a, #navbar-about a");
    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            if (nav && nav.classList.contains("active")) {
                nav.classList.remove("active");
            }
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: "smooth",
                });
            }
        });
    });

    // ========== TESTIMONIAL SLIDER ==========
    const testimonialsContainer = document.querySelector(".testimonials-slider");
    if (testimonialsContainer) {
        const testimonials = document.querySelectorAll(".testimonial");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        let currentIndex = 0;

        function showTestimonial(index) {
            testimonials.forEach((t, i) => t.classList.toggle("active", i === index));
        }
        function nextTestimonial() {
            currentIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(currentIndex);
        }
        function prevTestimonial() {
            currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentIndex);
        }

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener("click", nextTestimonial);
            prevBtn.addEventListener("click", prevTestimonial);
            setInterval(nextTestimonial, 5000);
        }
    }

    // ========== FORM REGISTER & LOGIN ==========
    const registrationForm = document.getElementById("registrationForm");
    const loginForm = document.getElementById("loginForm");
    if (registrationForm && loginForm) {
        function switchTab(tab) {
            document.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"));
            const targetButton = tab === "register" ? document.querySelector(".tab-button:first-child") : document.querySelector(".tab-button:last-child");
            targetButton?.classList.add("active");

            document.querySelectorAll(".form-section").forEach((f) => f.classList.remove("active"));
            document.getElementById(tab + "Form")?.classList.add("active");
        }
        switchTab("register");

        const registerTabButton = document.querySelector(".tab-button:first-child");
        const loginTabButton = document.querySelector(".tab-button:last-child");
        registerTabButton?.addEventListener("click", () => switchTab("register"));
        loginTabButton?.addEventListener("click", () => switchTab("login"));

        // Validasi Register
        const fullNameInput = document.getElementById("fullName");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("confirmPassword");
        const termsCheckbox = document.getElementById("terms");

        const fullNameError = document.getElementById("fullNameError");
        const emailError = document.getElementById("emailError");
        const phoneError = document.getElementById("phoneError");
        const passwordError = document.getElementById("passwordError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");
        const termsError = document.getElementById("termsError");

        function showError(el, msg) {
            el.textContent = msg;
            el.style.color = "#e74c3c";
            return false;
        }
        function showSuccess(el) {
            el.textContent = "";
            return true;
        }

        function validateFullName() {
            const v = fullNameInput.value.trim();
            if (!v) return showError(fullNameError, "Nama lengkap harus diisi");
            if (v.length < 3) return showError(fullNameError, "Nama minimal 3 karakter");
            return showSuccess(fullNameError);
        }
        function validateEmail() {
            const v = emailInput.value.trim();
            const r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!v) return showError(emailError, "Email harus diisi");
            if (!r.test(v)) return showError(emailError, "Format email tidak valid");
            return showSuccess(emailError);
        }
        function validatePhone() {
            const v = phoneInput.value.trim();
            if (!v) return showError(phoneError, "Nomor telepon harus diisi");
            if (!/^[0-9]+$/.test(v)) return showError(phoneError, "Nomor telepon hanya boleh angka");
            if (v.length < 10 || v.length > 13) return showError(phoneError, "Nomor telepon harus 10-13 digit");
            return showSuccess(phoneError);
        }
        function validatePassword() {
            const v = passwordInput.value;
            if (!v) return showError(passwordError, "Kata sandi harus diisi");
            if (v.length < 8) return showError(passwordError, "Minimal 8 karakter");
            if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(v)) return showError(passwordError, "Harus ada huruf besar, kecil, dan angka");
            return showSuccess(passwordError);
        }
        function validateConfirmPassword() {
            if (!confirmPasswordInput.value) return showError(confirmPasswordError, "Konfirmasi harus diisi");
            if (confirmPasswordInput.value !== passwordInput.value) return showError(confirmPasswordError, "Kata sandi tidak cocok");
            return showSuccess(confirmPasswordError);
        }
        function validateTerms() {
            if (!termsCheckbox.checked) return showError(termsError, "Harus setuju syarat & ketentuan");
            return showSuccess(termsError);
        }
        function clearAllErrors() {
            [fullNameError, emailError, phoneError, passwordError, confirmPasswordError, termsError].forEach((el) => (el.textContent = ""));
        }

        registrationForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const valid = validateFullName() && validateEmail() && validatePhone() && validatePassword() && validateConfirmPassword() && validateTerms();
            if (valid) {
                alert("Pendaftaran berhasil!");
                registrationForm.reset();
                clearAllErrors();
            }
        });

        // Validasi Login
        const loginEmailInput = document.getElementById("loginEmail");
        const loginPasswordInput = document.getElementById("loginPassword");
        const loginEmailError = document.getElementById("loginEmailError");
        const loginPasswordError = document.getElementById("loginPasswordError");

        function validateLoginEmail() {
            const v = loginEmailInput.value.trim();
            const r = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!v) return showError(loginEmailError, "Email harus diisi");
            if (!r.test(v)) return showError(loginEmailError, "Format email tidak valid");
            return showSuccess(loginEmailError);
        }
        function validateLoginPassword() {
            const v = loginPasswordInput.value;
            if (!v) return showError(loginPasswordError, "Kata sandi harus diisi");
            if (v.length < 6) return showError(loginPasswordError, "Minimal 6 karakter");
            return showSuccess(loginPasswordError);
        }
        function clearLoginErrors() {
            loginEmailError.textContent = "";
            loginPasswordError.textContent = "";
        }

        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const valid = validateLoginEmail() && validateLoginPassword();
            if (valid) {
                alert("Login berhasil!");
                loginForm.reset();
                clearLoginErrors();
            }
        });
    }

    // ========== KERANJANG & PRODUK ==========
    function formatRupiah(number) {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(number);
    }

    function updateCartCounter() {
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        const cartCount = document.getElementById('cart-count');
        if (cartCount) cartCount.textContent = cart.length;
    }
    updateCartCounter();

    const addToCartModal = document.getElementById('add-to-cart-modal');
    if (addToCartModal) {
        const closeBtn = addToCartModal.querySelector('.close-modal');
        const continueBtn = addToCartModal.querySelector('.continue-shopping-btn');
        const closeModal = () => addToCartModal.classList.remove('show');
        closeBtn.addEventListener('click', closeModal);
        continueBtn.addEventListener('click', closeModal);
        addToCartModal.addEventListener('click', (e) => {
            if (e.target === addToCartModal) closeModal();
        });
    }

    // ========== LOGIKA HALAMAN PRODUK (SHOP & INDEX) ==========
    const productPage = document.querySelector('.pro-container');
    const paginationContainer = document.getElementById("pagination");
    if (productPage) {
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const productElement = button.closest('.pro');
                if (productElement && productElement.dataset.id) {
                    const product = { id: productElement.dataset.id, name: productElement.dataset.name, price: parseFloat(productElement.dataset.price), image: productElement.dataset.image };
                    addToCart(product);
                }
            });
        });

        function addToCart(product) {
            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            if (cart.find(item => item.id === product.id)) {
                alert('This item is already in your cart.');
                return;
            }
            cart.push(product);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            updateCartCounter();
            if (addToCartModal) {
                document.getElementById('modal-added-item-name').textContent = `${product.name} has been added to your cart.`;
                addToCartModal.classList.add('show');
            }
        }

        if (paginationContainer) {
            const productsPerPage = 8;
            const allProducts = Array.from(document.querySelectorAll(".pro"));
            const totalPages = Math.ceil(allProducts.length / productsPerPage);
            let currentPage = 1;

            function displayProducts(page) {
                const start = (page - 1) * productsPerPage;
                const end = start + productsPerPage;
                allProducts.forEach((p, i) => {
                    p.style.display = i >= start && i < end ? "block" : "none";
                });
            }
            function setupPagination() {
                paginationContainer.innerHTML = "";
                const prevButton = document.createElement("button");
                prevButton.classList.add("page-btn");
                prevButton.dataset.page = "prev";
                prevButton.innerHTML = "&larr;";
                paginationContainer.appendChild(prevButton);

                for (let i = 1; i <= totalPages; i++) {
                    const b = document.createElement("button");
                    b.classList.add("page-btn");
                    if (i === currentPage) b.classList.add("active");
                    b.dataset.page = i;
                    b.textContent = i;
                    paginationContainer.appendChild(b);
                }

                const nextButton = document.createElement("button");
                nextButton.classList.add("page-btn", "next");
                nextButton.dataset.page = "next";
                nextButton.innerHTML = "&rarr;";
                paginationContainer.appendChild(nextButton);
            }
            function updateActiveButton() {
                document.querySelectorAll(".page-btn").forEach((btn) => {
                    btn.classList.toggle("active", btn.dataset.page == currentPage);
                });
            }

            paginationContainer.addEventListener("click", (e) => {
                const b = e.target.closest(".page-btn");
                if (!b) return;
                const action = b.dataset.page;
                if (action === "prev" && currentPage > 1) currentPage--;
                else if (action === "next" && currentPage < totalPages) currentPage++;
                else if (!isNaN(action)) currentPage = parseInt(action);
                displayProducts(currentPage);
                updateActiveButton();
            });

            setupPagination();
            displayProducts(currentPage);
        }
    }

    // ========== LOGIKA HALAMAN KERANJANG & CHECKOUT (CART.HTML) ==========
    const cartPage = document.getElementById('cart-container');
    if (cartPage) {
        const cartItemsContainer = document.getElementById('cart-items-container');
        const cartSummary = document.getElementById('cart-summary');
        const cartSubtotalEl = document.getElementById('cart-subtotal');
        const cartTotalEl = document.getElementById('cart-total');
        const cartEmptyMessage = document.getElementById('cart-empty-message');
        
        const checkoutBtn = document.getElementById('checkout-btn');
        const paymentModal = document.getElementById('payment-modal');
        const paymentSuccessModal = document.getElementById('payment-success-modal');
        
        function displayCartItems() {
            const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            cartItemsContainer.innerHTML = ''; 

            if (cart.length === 0) {
                cartEmptyMessage.style.display = 'block';
                cartItemsContainer.style.display = 'none';
                cartSummary.style.display = 'none';
            } else {
                cartEmptyMessage.style.display = 'none';
                cartItemsContainer.style.display = 'flex';
                cartSummary.style.display = 'block';

                cart.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.classList.add('cart-item');
                    itemElement.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-details">
                            <h5>${item.name}</h5>
                            <span>ID: ${item.id}</span>
                        </div>
                        <div class="cart-item-actions">
                            <span class="item-price">${formatRupiah(item.price)}</span>
                            <a href="#" class="remove-item" data-id="${item.id}"><i class='bx bxs-trash'></i></a>
                        </div>
                    `;
                    cartItemsContainer.appendChild(itemElement);
                });
                updateCartTotals();
                addRemoveEventListeners();
            }
        }

        function updateCartTotals() {
            const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            const subtotal = cart.reduce((total, item) => total + item.price, 0);
            const totalText = formatRupiah(subtotal);
            
            cartSubtotalEl.textContent = totalText;
            cartTotalEl.textContent = totalText;
            document.getElementById('modal-total-amount').textContent = totalText;
        }

        function addRemoveEventListeners() {
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const productId = e.target.closest('.remove-item').dataset.id;
                    removeFromCart(productId);
                });
            });
        }

        function removeFromCart(productId) {
            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            cart = cart.filter(item => item.id !== productId);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems();
            updateCartCounter();
        }

        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => {
                updateCartTotals(); 
                paymentModal.classList.add('show');
            });
        }
        
        const paymentOptions = document.querySelectorAll('input[name="payment"]');
        const paymentDetails = document.querySelectorAll('.payment-details');
        paymentOptions.forEach(option => {
            option.addEventListener('change', () => {
                paymentDetails.forEach(detail => detail.classList.remove('active'));
                const targetDetail = document.getElementById(`${option.value}_details`);
                if (targetDetail) {
                    targetDetail.classList.add('active');
                }
            });
        });

        const payNowBtn = document.getElementById('pay-now-btn');
        const paymentError = document.getElementById('payment-error');
        if (payNowBtn) {
            payNowBtn.addEventListener('click', () => {
                const selectedPayment = document.querySelector('input[name="payment"]:checked').value;
                let isValid = true;
                paymentError.textContent = '';
                if (selectedPayment === 'credit_card') {
                    const ccNumber = document.getElementById('credit-card-number').value;
                    if (ccNumber.length !== 16 || !/^\d+$/.test(ccNumber)) {
                        paymentError.textContent = 'Please enter a valid 16-digit card number.';
                        isValid = false;
                    }
                }
                if (selectedPayment === 'bank_transfer') {
                    const vaNumber = document.getElementById('bank-va-number').value;
                    if (vaNumber.length < 8) {
                        paymentError.textContent = 'Please enter a valid Virtual Account number.';
                        isValid = false;
                    }
                }
                if (!isValid) return;
                payNowBtn.textContent = 'Processing...';
                payNowBtn.disabled = true;
                setTimeout(() => {
                    paymentModal.classList.remove('show');
                    paymentSuccessModal.classList.add('show');
                    sessionStorage.removeItem('cart');
                    displayCartItems();
                    updateCartCounter();
                    payNowBtn.textContent = 'Pay Now';
                    payNowBtn.disabled = false;
                }, 2500);
            });
        }
        
        document.querySelectorAll('.modal-overlay').forEach(modal => {
            const closeBtn = modal.querySelector('.close-modal');
            if (closeBtn) closeBtn.addEventListener('click', () => modal.classList.remove('show'));
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('show');
            });
        });
        
        displayCartItems();
    }
});


// aaaaaaaa

// script.js
// Image gallery functionality
const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        // Remove active class from all thumbnails
        thumbnails.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked thumbnail
        this.classList.add('active');
        
        // Update main image
        mainImage.src = this.dataset.src || this.src;
    });
});

// Quantity control
const quantityInput = document.getElementById('quantity');
const increaseBtn = document.getElementById('increaseQty');
const decreaseBtn = document.getElementById('decreaseQty');

increaseBtn.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

decreaseBtn.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});

// Variant selection
const variantOptions = document.querySelectorAll('.variant-option');

variantOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remove selected class from all options
        variantOptions.forEach(o => o.classList.remove('selected'));
        
        // Add selected class to clicked option
        this.classList.add('selected');
    });
});

// Floating cart button animation
const floatingCart = document.querySelector('.floating-cart');

floatingCart.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
    
    alert('Produk ditambahkan ke troli!');
});

// Smooth scroll for reviews
document.querySelector('.reviews-section h2').addEventListener('click', function() {
    window.scrollTo({
        top: document.querySelector('.reviews-section').offsetTop - 100,
        behavior: 'smooth'
    });
});