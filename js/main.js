document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Facts Carousel
    const facts = [
        {
            icon: 'fa-sun',
            title: 'Our Sun',
            text: 'The Sun contains 99.86% of the Solar System\'s mass'
        },
        {
            icon: 'fa-globe',
            title: 'Earth\'s Twin?',
            text: 'Venus is often called Earth\'s twin due to similar size'
        },
        {
            icon: 'fa-meteor',
            title: 'Asteroid Belt',
            text: 'Millions of asteroids orbit between Mars and Jupiter'
        },
        {
            icon: 'fa-temperature-high',
            title: 'Venus Temperature',
            text: 'Venus is the hottest planet, despite Mercury being closer to the Sun'
        },
        {
            icon: 'fa-wind',
            title: 'Jupiter\'s Storm',
            text: 'Jupiter\'s Great Red Spot has been raging for at least 400 years'
        }
    ];

    let currentFactIndex = 0;
    const factsCarousel = document.querySelector('.facts-carousel');

    function updateFacts() {
        const startIndex = currentFactIndex;
        const visibleFacts = [];
        
        for (let i = 0; i < 3; i++) {
            const index = (startIndex + i) % facts.length;
            visibleFacts.push(facts[index]);
        }

        factsCarousel.innerHTML = visibleFacts.map(fact => `
            <div class="fact">
                <i class="fas ${fact.icon}"></i>
                <h3>${fact.title}</h3>
                <p>${fact.text}</p>
            </div>
        `).join('');

        currentFactIndex = (currentFactIndex + 1) % facts.length;
    }

    // Update facts every 5 seconds
    setInterval(updateFacts, 5000);

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
            }
        });
    }

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Add active class to current page link
    function setActiveLink() {
        const currentPage = window.location.pathname;
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    setActiveLink();

    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all featured cards
    document.querySelectorAll('.featured-card').forEach(card => {
        observer.observe(card);
    });
});
