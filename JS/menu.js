document.addEventListener("DOMContentLoaded", function() {
  const experienciaMenuItem = document.querySelector('.menu-item-has-children');
  
  experienciaMenuItem.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    const submenu = this.querySelector('.submenu');
    
    // Alternar la clase 'display: block' para mostrar/ocultar el submenú
    submenu.classList.toggle('show');
  });
});
