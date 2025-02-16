let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const totalItems = document.querySelectorAll('.carousel-item').length;

function moveCarousel(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth;
    const offset = -(currentIndex * itemWidth);
    carousel.style.transform = `translateX(${offset}px)`;
    
}

setInterval(() => moveCarousel(1), 3000);