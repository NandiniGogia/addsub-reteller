document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
        });
    }

    // Reseller Modal Functionality
    const openResellerFormBtn = document.getElementById('openResellerFormBtn');
    const closeResellerFormBtn = document.getElementById('closeResellerFormBtn');
    const resellerModal = document.getElementById('resellerModal');

    if (openResellerFormBtn && closeResellerFormBtn && resellerModal) {
        // Open the modal
        openResellerFormBtn.addEventListener('click', (e) => {
            e.preventDefault();
            resellerModal.classList.remove('hidden');
        });

        // Close the modal
        closeResellerFormBtn.addEventListener('click', () => {
            resellerModal.classList.add('hidden');
        });

        // Close the modal by clicking outside of it
        window.addEventListener('click', (e) => {
            if (e.target === resellerModal) {
                resellerModal.classList.add('hidden');
            }
        });
    }
});