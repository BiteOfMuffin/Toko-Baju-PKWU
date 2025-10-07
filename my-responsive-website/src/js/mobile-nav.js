/* Responsive styles for mobile devices */
@media only screen and (max-width: 768px) {
    .containerrr-r {
        grid-template-columns: 1fr; /* Satu kolom untuk mobile */
        padding: 15px;
    }

    .main-image {
        height: 300px; /* Ukuran gambar utama yang lebih kecil */
        border-radius: 8px;
    }

    .thumbnail {
        width: 60px; /* Ukuran thumbnail yang lebih kecil */
        height: 60px;
    }

    .product-title {
        font-size: 20px; /* Ukuran font judul produk */
    }

    .product-price {
        font-size: 24px; /* Ukuran font harga produk */
    }

    .btn {
        padding: 12px; /* Ukuran tombol yang lebih kecil */
        font-size: 14px; /* Ukuran font tombol */
    }

    .action-buttons {
        flex-direction: column; /* Tombol dalam kolom untuk mobile */
        gap: 10px;
    }

    .modal-content {
        width: 95%; /* Lebar modal yang lebih kecil */
        max-width: 400px; /* Lebar maksimum modal */
        padding: 20px;
    }

    .success-icon {
        font-size: 60px; /* Ukuran ikon sukses */
    }

    .payment-details input {
        padding: 10px; /* Padding input yang lebih kecil */
        font-size: 12px; /* Ukuran font input */
    }

    #pay-now-btn, .continue-shopping-btn {
        padding: 12px; /* Padding tombol yang lebih kecil */
        font-size: 14px; /* Ukuran font tombol */
    }

    .floating-cart {
        width: 50px; /* Ukuran cart yang lebih kecil */
        height: 50px;
    }

    .cart-icon {
        width: 20px; /* Ukuran ikon cart yang lebih kecil */
        height: 20px;
    }
}

@media only screen and (max-width: 480px) {
    .main-image {
        height: 250px; /* Ukuran gambar utama yang lebih kecil untuk ponsel */
    }

    .product-title {
        font-size: 18px; /* Ukuran font judul produk */
    }

    .product-price {
        font-size: 22px; /* Ukuran font harga produk */
    }

    .btn {
        padding: 10px; /* Ukuran tombol yang lebih kecil */
        font-size: 12px; /* Ukuran font tombol */
    }

    .review-card {
        padding: 10px; /* Padding review card yang lebih kecil */
    }

    .reviewer-name, .review-date, .review-text {
        font-size: 12px; /* Ukuran font untuk nama reviewer, tanggal, dan teks */
    }

    .modal-content h2 {
        font-size: 22px; /* Ukuran font judul modal */
    }

    .success-icon {
        font-size: 50px; /* Ukuran ikon sukses yang lebih kecil */
    }
}