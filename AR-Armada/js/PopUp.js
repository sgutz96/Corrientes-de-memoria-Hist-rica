// Detectar la visibilidad del marcador
const markerPopUp = document.getElementById('markerPopUp_Web');
const popup = document.getElementById('popupAR');
const overlay = document.getElementById('overlay');
const isPopup = false;
// Función para mostrar el pop-up y panel
markerPopUp.addEventListener('markerFound', () => {
  overlay.style.display = 'block'; // Muestra el panel oscuro
  popup.style.display = 'block'; // Muestra el pop-up
  isPopup = true;
});

// Event listener cuando el marcador se pierde
markerPopUp.addEventListener('markerLost', () => {
  overlay.style.display = 'none'; // Oculta el panel oscuro
  popup.style.display = 'none'; // Oculta el pop-up
  isPopup = false; // Cambia el estado a cerrado
});

// Función para cerrar el pop-up y panel
function closePopup() {
  if(isPopup) {
    overlay.style.display = 'none'; // Oculta el panel oscuro
  popup.style.display = 'none'; // Oculta el pop-up
  //isPopup = false; // Cambia el estado a cerrado
  }

}