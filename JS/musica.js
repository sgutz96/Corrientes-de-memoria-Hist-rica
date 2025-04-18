var isMusic = false; // Variable para controlar el estado de la música

// Función para activar/desactivar la música
function toggleMusic() {
    var audio = document.getElementById('audio-music');
    var button = document.querySelector('.floating-button-music');

    if (audio.paused) {
        isMusic = true; // Variable para controlar el estado de la música
        
        audio.play();  // Reproducir música
        button.classList.add('active');  // Cambiar color del botón
       
    } else {
        isMusic = false; // Variable para controlar el estado de la música
        audio.pause();  // Detener música
        button.classList.remove('active');  // Volver al color original
  
    }
}
