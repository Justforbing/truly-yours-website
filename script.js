document.addEventListener('DOMContentLoaded', () => { 
    const bottleImage = document.getElementById('bottleImage');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        // Change bottle animation when "Why Choose Us" is in viewport
        const whyChooseUsSection = document.getElementById('benefits');

        if (isElementInViewport(whyChooseUsSection)) {
            bottleImage.src = 'assets/images/bottle_trulyyours.png';
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

        // Water Splash Animation on Scroll (for .hero) and Hover (for .benefits)
        if (area.classList.contains('hero')) {
            window.addEventListener('scroll', () => {
                if (isElementInViewport(area)) { // Check if .hero is in viewport
                    createWaterSplash(area); 
                }
            });
        } else if (area.classList.contains('benefits')) {
            area.addEventListener('mouseover', () => {
                createWaterSplash(area); 
            });
        }
    });

    function createWaterDrop(x, y) {
        const waterDrop = document.createElement('div');
        waterDrop.classList.add('water-drop');
        waterDrop.style.left = x + 'px';
        waterDrop.style.top = y + 'px';
        document.body.appendChild(waterDrop);

        waterDrop.addEventListener('animationend', () => {
            waterDrop.remove();
        });
    }

    function createWaterSplash(area) {
        const x = Math.random() * area.offsetWidth; // Random x position within the section
        const y = Math.random() * area.offsetHeight; // Random y position within the section

        const waterSplash = document.createElement('div');
        waterSplash.classList.add('water-splash');
        waterSplash.style.left = x + 'px';
        waterSplash.style.top = y + 'px';
        area.appendChild(waterSplash); // Append to the section

        waterSplash.addEventListener('animationend', () => {
            waterSplash.remove();
        });
    }

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    } 

    // GSAP Animations
    gsap.from('.hero h1', { duration: 1, y: -50, opacity: 0, ease: "power4.out" }); // Hero heading animation
    gsap.from('.hero p', { duration: 1.5, y: -30, opacity: 0, ease: "power4.out", delay: 0.5 }); // Hero paragraph animation
    gsap.from('.btn', { duration: 1, scale: 0.8, opacity: 0, ease: "back.out(1.7)", stagger: 0.2 }); // Button animations

    // Services Section Animations
    gsap.from('.service-item', { 
        duration: 1, 
        y: 50, 
        opacity: 0, 
        ease: "power4.out", 
        stagger: 0.2 
    });

    // Service Item Hover Effect
    const serviceItems = document.querySelectorAll('.service-item');

    serviceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, { duration: 0.3, scale: 1.05, boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)" });
        });

        item.addEventListener('mouseleave', () => {
            gsap.to(item, { duration: 0.3, scale: 1, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" });
        });
    });

    // Why Choose Us Animations
    const benefitsListItems = document.querySelectorAll('.benefits ul li');

    gsap.from(benefitsListItems, { 
        duration: 1, 
        x: -50, 
        opacity: 0, 
        ease: "power4.out", 
        stagger: 0.2,
        delay: 0.5 // Delay after the heading animation
    });

    // Three.js 3D Scene
    const canvas = document.getElementById('three-canvas');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas }); 

    renderer.setSize(window.innerWidth, window.innerHeight); 

    // Create a 3D object (example: a cube)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green cube
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5; // Set camera position

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01; 
        cube.rotation.y += 0.01; 
        renderer.render(scene, camera); 
    }

    animate(); 
});
