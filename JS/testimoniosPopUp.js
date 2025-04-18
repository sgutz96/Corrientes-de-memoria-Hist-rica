

// Obtener el elemento de la imagen
const Relatosimage = document.getElementById('RelatosdefaultImage');
// Obtener el pop-up
const Relatospopup = document.getElementById('RelatosVideoPopUp');
// Obtener el botón de cerrar
const RelatoscloseBtn = document.getElementById('Relatosclose-btn');

// Mostrar el pop-up cuando se haga clic en la imagen
Relatosimage.addEventListener('click', () => {
    
  bloquearScrollBody();

  musicVideo();


    Relatospopup.style.display = 'flex';

    const RelatosPopUpvideo = document.getElementById('Relatos-Popup-video');
    RelatosPopUpvideo.play(); // Reproducir el video al abrir el pop-up
    
});

// Cerrar el pop-up cuando se haga clic en el botón de cerrar
RelatoscloseBtn.addEventListener('click', () => {
    permitirScrollBody();

    musicVideo();


    Relatospopup.style.display = 'none';
    // Pausar el video cuando se cierre
    const RelatosPopUpvideo = document.getElementById('Relatos-Popup-video');
    RelatosPopUpvideo.pause();
    RelatosPopUpvideo.currentTime = 0; // Reiniciar el video al principio
});

// Cerrar el pop-up si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === Relatospopup) {
        // Si el clic fue fuera del contenido del pop-up, cierra el pop-up
        // y permite el scroll del body
        permitirScrollBody();
        //  Desactivar la música al cerrar el pop-up
        musicVideo()
        Relatospopup.style.display = 'none';
        const RelatosPopUpvideo = document.getElementById('Relatos-Popup-video');
    RelatosPopUpvideo.pause();
    RelatosPopUpvideo.currentTime = 0; // Reiniciar el video al principio

    }
});

function musicVideo() {
    if(isMusic) {
         toggleMusic()
    }
}

