 // Toggle the mobile menu visibility
 document.getElementById('toggleMenu').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.add('active');
});

// Close the mobile menu
document.getElementById('closeMenu').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.remove('active');
});

