// Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('mobile-menu').classList.toggle('active');
});

// Close button functionality
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.remove('active');
    document.getElementById('hamburger').classList.remove('active');
});
