document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu'); // You'll need to create a mobile menu element in your HTML

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Reseller form modal functionality
    const resellerModal = document.getElementById('resellerModal');
    const closeResellerFormBtn = document.getElementById('closeResellerForm');
    const openResellerFormBtns = document.querySelectorAll('.open-reseller-form'); // Add a class to the "Apply Now" buttons

    if (resellerModal && closeResellerFormBtn) {
        // Example: open the modal. You'll need to add a class to the button
        // that opens the modal, like 'open-reseller-form'.
        openResellerFormBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                resellerModal.classList.remove('hidden');
            });
        });

        closeResellerFormBtn.addEventListener('click', () => {
            resellerModal.classList.add('hidden');
        });

        // Close modal if user clicks outside of it
        window.addEventListener('click', (event) => {
            if (event.target === resellerModal) {
                resellerModal.classList.add('hidden');
            }
        });
    }

    // Logo slider duplication for infinite scroll
    const logosSlide = document.querySelector('.logos-slide');
    if (logosSlide) {
        const copy = logosSlide.cloneNode(true);
        document.querySelector('.logos').appendChild(copy);
    }
});