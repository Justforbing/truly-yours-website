/* Reset Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Helvetica Neue', sans-serif;
    color: #333;
    line-height: 1.6;
}

/* Container */
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Header */
header {
    background: #fff;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 100;
}

header .logo img {
    height: 50px;
}

header nav {
    float: right;
}

header nav ul {
    list-style: none;
}

header nav ul li {
    display: inline-block;
    margin-left: 20px;
}

header nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
}

/* Hero Section */
.hero {
    background: url('assets/images/hero_background.jpg') no-repeat center center/cover; 
    height: 100vh;
    position: relative;
    color: #fff;
    display: flex;
    align-items: center;
    margin-top: 80px; /* Offset for fixed header */
}

.hero .container {
    z-index: 2;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.hero h1 span {
    color: #ffd700;
}

.hero p {
    font-size: 24px;
    margin-bottom: 30px;
}

.hero .btn {
    background: #ffd700;
    color: #333;
    padding: 15px 30px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
}

.hero .bottle-animation {
    position: absolute;
    bottom: 0;
    right: 50px;
    width: 300px;
    height: auto;
}

.hero .bottle-animation img {
    width: 100%;
    transition: all 1s ease-in-out;
}

/* Services Section */
.services {
    padding: 80px 0;
    background: #f9f9f9;
}

.services h2 {
    text-align: center;
    margin-bottom: 50px;
}

.services-grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.service-item {
    flex: 1;
    margin: 10px;
    text-align: center;
}

.service-item img {
    width: 80px;
    margin-bottom: 20px;
}

.service-item h3 {
    margin-bottom: 10px;
}

/* Benefits Section */
.benefits {
    padding: 80px 0;
}

.benefits h2 {
    text-align: center;
    margin-bottom: 30px;
}

.benefits ul {
    list-style: none;
    max-width: 800px;
    margin: 0 auto;
}

.benefits ul li {
    background: url('assets/images/icon_check.png') no-repeat left center; 
    padding-left: 40px;
    font-size: 18px;
    margin-bottom: 15px;
}

/* Clients Section */
.clients {
    padding: 80px 0;
    background: #f9f9f9;
}

.clients h2 {
    text-align: center;
    margin-bottom: 50px;
}

.clients-logos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.clients-logos img {
    margin: 20px;
    width: 150px;
    opacity: 0.7;
    transition: opacity 0.3s;
}

.clients-logos img:hover {
    opacity: 1;
}

/* Testimonials Section */
.testimonials {
    padding: 80px 0;
}

.testimonials h2 {
    text-align: center;
    margin-bottom: 50px;
}

.testimonials-slider {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.testimonial-item {
    display: none;
}

.testimonial-item.active {
    display: block;
}

.testimonial-item p {
    font-size: 24px;
    font-style: italic;
    margin-bottom: 20px;
}

.testimonial-item h4 {
    font-size: 20px;
    color: #555;
}

/* CTA Section */
.cta {
    padding: 80px 0;
    background: #ffd700;
    color: #333;
    text-align: center;
}

.cta h2 {
    margin-bottom: 20px;
}

.cta p {
    font-size: 20px;
    margin-bottom: 30px;
}

.cta .btn {
    background: #333;
    color: #fff;
    padding: 15px 30px;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
}

/* Footer */
footer {
    background: #333;
    color: #fff;
    padding: 20px 0;
}

footer p {
    text-align: center;
    margin-bottom: 10px;
}

footer .social-media {
    text-align: center;
}

footer .social-media a {
    display: inline-block;
    margin: 0 10px;
}

footer .social-media img {
    width: 24px;
}

/* Responsive Styles */
@media (max-width: 768px) {
    header nav {
        display: none;
    }
    .hero h1 {
        font-size: 36px;
    }
    .hero p {
        font-size: 18px;
    }
    .services-grid, .clients-logos {
        flex-direction: column;
        align-items: center;
    }
    .service-item, .clients-logos img {
        margin: 20px 0;
    }
    .hero .bottle-animation {
        display: none;
    }
      }
