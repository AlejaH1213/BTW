document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Toggle mobile menu
    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Toggle dropdown menu when clicking "Services"
    dropdown.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        event.stopPropagation(); // Prevent click from closing immediately

        // Toggle dropdown active class
        dropdownMenu.classList.toggle("active");
    });

    // Close menu and dropdown when clicking anywhere outside
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        }

        if (!dropdown.contains(event.target)) {
            dropdownMenu.classList.remove("active");
        }
    });
});


