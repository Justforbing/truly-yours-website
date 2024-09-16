document.addEventListener('DOMContentLoaded', () => { 
    // Bottle Label Animation on Scroll
    const bottleImage = document.getElementById('bottleImage');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 200) {
            bottleImage.src = 'assets/images/bottle_trulyyours.png'; 
        } else {
            bottleImage.src = 'assets/images/bottle_generic.png'; 
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

    // Mobile Navigation Toggle 
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
});
