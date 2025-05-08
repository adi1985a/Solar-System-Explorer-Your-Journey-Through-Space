document.addEventListener('DOMContentLoaded', function() {
    const mainCard = document.querySelector('.main-card');
    const cards = document.querySelectorAll('.phenomena-cards .card');
    const prevButton = document.querySelector('.prev-card');
    const nextButton = document.querySelector('.next-card');
    const cardsContainer = document.querySelector('.phenomena-cards');
    
    // Funkcja do aktualizacji głównej karty
    function updateMainCard(card) {
        const image = card.getAttribute('data-image');
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        
        // Animacja przejścia
        mainCard.style.opacity = '0';
        
        setTimeout(() => {
            mainCard.querySelector('img').src = image;
            mainCard.querySelector('h3').textContent = title;
            mainCard.querySelector('p').textContent = description;
            mainCard.style.opacity = '1';
        }, 300);
    }

    // Obsługa kliknięcia w kartę
    cards.forEach(card => {
        card.addEventListener('click', function() {
            updateMainCard(this);
        });
    });

    // Obsługa przycisków nawigacji
    function scrollCards(direction) {
        const scrollAmount = 270; // szerokość karty + margines
        const currentScroll = cardsContainer.scrollLeft;
        
        cardsContainer.scrollTo({
            left: currentScroll + (direction === 'next' ? scrollAmount : -scrollAmount),
            behavior: 'smooth'
        });
    }

    nextButton.addEventListener('click', () => scrollCards('next'));
    prevButton.addEventListener('click', () => scrollCards('prev'));

    // Obsługa przewijania za pomocą klawiszy strzałek
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            scrollCards('prev');
        } else if (e.key === 'ArrowRight') {
            scrollCards('next');
        }
    });

    // Automatyczne przewijanie co 5 sekund
    let autoScroll = setInterval(() => scrollCards('next'), 5000);

    // Zatrzymaj automatyczne przewijanie przy interakcji
    cardsContainer.addEventListener('mouseenter', () => {
        clearInterval(autoScroll);
    });

    cardsContainer.addEventListener('mouseleave', () => {
        autoScroll = setInterval(() => scrollCards('next'), 5000);
    });
});
