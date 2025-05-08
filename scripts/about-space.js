document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.gallery-section');
    const indicators = document.querySelectorAll('.section-indicators span');
    const prevButton = document.querySelector('.prev-section');
    const nextButton = document.querySelector('.next-section');
    let currentIndex = 0;
    let isTransitioning = false;

    function showSection(index, direction = 'next') {
        if (isTransitioning) return;
        isTransitioning = true;

        const currentSection = sections[currentIndex];
        const nextSection = sections[index];

        // Remove all transition classes
        sections.forEach(section => {
            section.classList.remove('active', 'previous');
            section.style.display = 'none';
        });

        // Set up the transition
        currentSection.style.display = 'block';
        nextSection.style.display = 'block';

        if (direction === 'next') {
            nextSection.style.transform = 'translateX(100%)';
            currentSection.style.transform = 'translateX(0)';
        } else {
            nextSection.style.transform = 'translateX(-100%)';
            currentSection.style.transform = 'translateX(0)';
        }

        // Force reflow
        void nextSection.offsetWidth;

        // Add transitions
        currentSection.style.transition = 'transform 0.5s ease';
        nextSection.style.transition = 'transform 0.5s ease';

        // Trigger animations
        if (direction === 'next') {
            currentSection.style.transform = 'translateX(-100%)';
            nextSection.style.transform = 'translateX(0)';
        } else {
            currentSection.style.transform = 'translateX(100%)';
            nextSection.style.transform = 'translateX(0)';
        }

        // Update indicators
        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[index].classList.add('active');

        // Reset after transition
        setTimeout(() => {
            currentSection.style.display = 'none';
            currentSection.style.transition = '';
            nextSection.style.transition = '';
            nextSection.classList.add('active');
            currentIndex = index;
            isTransitioning = false;
        }, 500);
    }

    function nextSection() {
        const nextIndex = (currentIndex + 1) % sections.length;
        showSection(nextIndex, 'next');
    }

    function prevSection() {
        const prevIndex = (currentIndex - 1 + sections.length) % sections.length;
        showSection(prevIndex, 'prev');
    }

    // Event listeners for navigation
    nextButton.addEventListener('click', nextSection);
    prevButton.addEventListener('click', prevSection);

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            if (index === currentIndex) return;
            showSection(index, index > currentIndex ? 'next' : 'prev');
        });
    });

    // Event listeners for sub-images
    document.querySelectorAll('.sub-image').forEach(subImage => {
        subImage.addEventListener('click', function() {
            const mainImage = this.closest('.gallery-section').querySelector('.main-image img');
            const mainCaption = this.closest('.gallery-section').querySelector('.image-caption');
            const newSrc = this.querySelector('img').src;
            const newAlt = this.querySelector('img').alt;
            const newCaption = this.querySelector('span').textContent;
            
            // Animate the image change
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.src = newSrc;
                mainImage.alt = newAlt;
                mainCaption.querySelector('p').textContent = newCaption;
                mainImage.style.opacity = '1';
            }, 300);
        });
    });

    // Auto-advance every 7 seconds
    let autoAdvance = setInterval(nextSection, 7000);

    // Pause auto-advance when hovering over the gallery
    document.querySelector('.space-gallery-slider').addEventListener('mouseenter', () => {
        clearInterval(autoAdvance);
    });

    document.querySelector('.space-gallery-slider').addEventListener('mouseleave', () => {
        autoAdvance = setInterval(nextSection, 7000);
    });
});
