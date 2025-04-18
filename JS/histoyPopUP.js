// Obtiene el botón y el popup
const leerMasBtnCaqueta = document.getElementById('HisCaqBtnCaqueta');
const leerMasBtnPutumayo = document.getElementById('HisCaqBtnPutumayo');
const leerMasBtnGuaviare = document.getElementById('HisCaqBtnGuaviare');
const leerMasBtnBaupez = document.getElementById('HisCaqBtnBaupez');
const leerMasBtnAmazonas = document.getElementById('HisCaqBtnAmazonas');

const popupAmazonas = document.getElementById('historypopup');
const closePopupAmazonas = document.getElementById('historyclosePopup');

// Cierra el popup si haces clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === popupAmazonas) {
        permitirScrollBody() 
        popupAmazonas.style.visibility = 'hidden';
    }
  });
  

// Al hacer clic en el botón, abre el popup
leerMasBtnCaqueta.addEventListener('click', () => {
    bloquearScrollBody();
    popupAmazonas.style.visibility = 'visible';
});
// Al hacer clic en el botón, abre el popup
leerMasBtnPutumayo.addEventListener('click', () => {
    bloquearScrollBody();
    popupAmazonas.style.visibility = 'visible';
});
// Al hacer clic en el botón, abre el popup
leerMasBtnGuaviare.addEventListener('click', () => {
    bloquearScrollBody();
    popupAmazonas.style.visibility = 'visible';
});
// Al hacer clic en el botón, abre el popup
leerMasBtnBaupez.addEventListener('click', () => {
    bloquearScrollBody();
    popupAmazonas.style.visibility = 'visible';
});
// Al hacer clic en el botón, abre el popup
leerMasBtnAmazonas.addEventListener('click', () => {
    bloquearScrollBody();
    popupAmazonas.style.visibility = 'visible';
});









// Al hacer clic en el icono de cerrar, cierra el popup
closePopupAmazonas.addEventListener('click', () => {
    permitirScrollBody() 
    popupAmazonas.style.visibility = 'hidden';
});

// Cierra el popup si haces clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    permitirScrollBody() 
    popupAmazonas.style.visibility = 'hidden';
  }
});
