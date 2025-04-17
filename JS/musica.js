// Función para activar/desactivar la música
function toggleMusic() {
    var audio = document.getElementById('audio-music');
    var button = document.querySelector('.floating-button-music');

    if (audio.paused) {
        audio.play();  // Reproducir música
        button.classList.add('active');  // Cambiar color del botón
    } else {
        audio.pause();  // Detener música
        button.classList.remove('active');  // Volver al color original
    }
}
