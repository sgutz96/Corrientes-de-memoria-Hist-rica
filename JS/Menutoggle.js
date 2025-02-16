
// Toggle menu hamburguesa

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menupopup');
const closeBtn = document.getElementById('close-mobile-menubtn');


// Crear un fondo de overlay para el fondo oscuro
const overlay = document.createElement('div');
overlay.classList.add('mobile-menu-overlay');

// Función para abrir el menú
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  mobileMenu.style.visibility = 'visible';
  document.body.appendChild(overlay); // Agregar el overlay al abrir el menú
});

// Función para cerrar el menú
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  mobileMenu.style.visibility = 'hidden';
  document.body.removeChild(overlay); // Eliminar el overlay al cerrar el menú
});
/*
// Cerrar el menú si se hace clic en el overlay (fuera del menú)
overlay.addEventListener('click', () => {
    mobileMenu.style.visibility = 'visible';
  mobileMenu.classList.remove('active');
  document.body.removeChild(overlay); // Eliminar el overlay
});
*/

// Cierra el popup si haces clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === mobileMenu) {
    mobileMenu.style.visibility = 'hidden';
  }
});

