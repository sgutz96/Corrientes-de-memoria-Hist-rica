

// Obtener el elemento de la imagen
const Relatosimage = document.getElementById('RelatosdefaultImage');
// Obtener el pop-up
const Relatospopup = document.getElementById('RelatosVideoPopUp');
// Obtener el botón de cerrar
const RelatoscloseBtn = document.getElementById('Relatosclose-btn');

// Mostrar el pop-up cuando se haga clic en la imagen
Relatosimage.addEventListener('click', () => {
    Relatospopup.style.display = 'flex';
    
});

// Cerrar el pop-up cuando se haga clic en el botón de cerrar
RelatoscloseBtn.addEventListener('click', () => {
    Relatospopup.style.display = 'none';
    // Pausar el video cuando se cierre
    const RelatosPopUpvideo = document.getElementById('Relatos-Popup-video');
    RelatosPopUpvideo.pause();
    RelatosPopUpvideo.currentTime = 0; // Reiniciar el video al principio
});

// Cerrar el pop-up si se hace clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === Relatospopup) {
        Relatospopup.style.display = 'none';
        const RelatosPopUpvideo = document.getElementById('Relatos-Popup-video');
    RelatosPopUpvideo.pause();
    RelatosPopUpvideo.currentTime = 0; // Reiniciar el video al principio

    }
});

