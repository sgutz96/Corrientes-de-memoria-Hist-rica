// Obtiene el botón y el popup
const leerMasBtn = document.getElementById('AboutleerMasBtn');
const popup = document.getElementById('Aboutpopup');
const closePopup = document.getElementById('AboutclosePopup');

// Al hacer clic en el botón, abre el popup
leerMasBtn.addEventListener('click', () => {
  popup.style.visibility = 'visible';
});

// Al hacer clic en el icono de cerrar, cierra el popup
closePopup.addEventListener('click', () => {
  popup.style.visibility = 'hidden';
});

// Cierra el popup si haces clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.visibility = 'hidden';
  }
});
