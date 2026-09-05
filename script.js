// Mobile Navigation

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Contact form

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for contacting Vishal!");

    form.reset();
});