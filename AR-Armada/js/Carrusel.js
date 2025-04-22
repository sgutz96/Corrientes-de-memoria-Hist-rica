let time = 0;
const radius = 2;

// Selecciona todas las imágenes con la clase 'ImagenCarrusel'
const carouselImages = Array.from(document.getElementsByClassName("ImagenCarrusel"));
const totalImages = carouselImages.length;

function animateCarousel() {
  time += 0.0005;
  const angle = time * Math.PI * 2;

  carouselImages.forEach((image, index) => {
    const angleOffset = (index / totalImages) * Math.PI * 2;
    const x = radius * Math.cos(angle + angleOffset);
    const y = radius * Math.sin(angle + angleOffset);
    const scale = 1 + Math.sin(angle + angleOffset) * 0.5; // Scale based on sine wave
    image.setAttribute('scale', `${scale} ${scale} ${scale}`);
    image.setAttribute('position', `${x} 0 ${y}`);
  });

  requestAnimationFrame(animateCarousel);
}

animateCarousel();
