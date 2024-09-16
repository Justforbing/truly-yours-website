document.addEventListener('DOMContentLoaded', () => { 
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

    // Water Drop Animation on Click/Touch
    const animatableAreas = document.querySelectorAll('.hero, .benefits'); // Add other sections if needed

    animatableAreas.forEach(area => {
        area.addEventListener('click', (event) => {
            createWaterDrop(event.clientX, event.clientY);
        });

        area.addEventListener('touchstart', (event) => {
            createWaterDrop(event.touches[0].clientX, event.touches[0].clientY);
        });
    });

    function createWaterDrop(x, y) {
        const waterDrop = document.createElement('div');
        waterDrop.classList.add('water-drop');
        waterDrop.style.left = x + 'px';
        waterDrop.style.top = y + 'px';
        document.body.appendChild(waterDrop);

        // Remove the water drop after the animation is complete
        waterDrop.addEventListener('animationend', () => {
            waterDrop.remove();
        });
    }
}); 
