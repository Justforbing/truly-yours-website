// Bottle Label Animation on Scroll
window.addEventListener('scroll', function() {
const bottleImage = document.getElementById('bottleImage');
const scrollPosition = window.scrollY;

if (scrollPosition > 200) {
bottleImage.src = 'assets/bottle_trulyyours.png';
} else {
bottleImage.src = 'assets/bottle_generic.png';
}
});

// Testimonials Slider (Optional Enhancement)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function showTestimonial(index) {
testimonials.forEach((testimonial, i) => {
testimonial.classList.remove('active');
if (i === index) {
testimonial.classList.add('active');
}
});
}

setInterval(() => {
currentTestimonial = (currentTestimonial + 1) % testimonials.length;
showTestimonial(currentTestimonial);
}, 5000);

// Mobile Navigation Toggle (Optional Enhancement)
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
navMenu.classList.toggle('show');
});
