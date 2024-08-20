// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
    if (mobileMenu.classList.contains('active')) {
        mobileMenu.style.pointerEvents = 'all'; // Allow interaction
    } else {
        setTimeout(() => {
            mobileMenu.style.pointerEvents = 'none'; // Prevent interaction when closing
        }, 500); // Duration matches the CSS transition time
    }
});

// Close button functionality
document.getElementById('close-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.getElementById('hamburger');
    
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');

    setTimeout(() => {
        mobileMenu.style.pointerEvents = 'none'; // Prevent interaction after closing
    }, 500); // Duration matches the CSS transition time
});
