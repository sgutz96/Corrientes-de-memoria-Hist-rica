
var nombre = "";
var rango = "";
var text = "";


function colorCirculos(circuloActive){
       // Resetear todos los círculos a blanco
       document.querySelectorAll(".circle").forEach(circle => {
        circle.style.background = "#FAFAFA"; // Blanco
    });

    document.querySelectorAll(".circle")[circuloActive - 1].style.backgroundColor = "#304D3D";

}
function mostrarAlerta(circuloId) {  

    var video = document.getElementById('relatosVideo');
    var videoSource = document.getElementById('videoSourceTestimonios');

    
    switch (circuloId) {
        case 0:
            colorCirculos(circuloId);
        break;
        case 1:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "Arnold"
            rango = "Comunidad Apapois"
            text = "Pues la armada nacional es la empresa más importante que tiene este municipio, la armada nacional es la que le genera soberanía nacional... ";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/Relatos/Arnold comunidad apapois.webm';
            colorCirculos(circuloId);
        break;
        case 2:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "Erika Paula cruz gaitan"
            rango = "Gobernadora Resguardo indigena Lagarto Cocha"
            text = "De esta región es el eje, créeme que ellos pues la fuente de trabajo, pues cuando ha habido coca, pues la vaina de la gente con su coca, o su oro, pero es el ...";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/Relatos/Erika Paula cruz gaitan Gobernadora.mp4';
            colorCirculos(circuloId);
        break;
        case 3:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "Fernando trujillo"
            rango = "Fundacion Omacha"
            text = "La jurisdicción del municipio cuenta con 87 km del río, donde se encuentran dispersas diecinueve comunidades indígenas con necesidades distintas a la capital...";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/Relatos/Fernando trujillo.webm';
            colorCirculos(circuloId);
        break;
        case 4:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "Viana makiscara quipa"
            rango = "Gobernadora Resguardo indigena Lagarto Cocha"
            text = "Hemos ganado terreno con la comunidad, nos hemos dado a querer, en el sentido de que promovemos la navegación segura. Iniciamos la campaña 'Cuida tu vida, navega seguro'...";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/Relatos/Viana makiscara quipa.webm';
            colorCirculos(circuloId);
        break;
        case 5:
            
        break;
        case 6:
        
        break;

        default:   
        
    

        // Cambiar el color del círculo seleccionado a verde
       
            
        }

        document.getElementById("relatosNombre").innerHTML = nombre;
        document.getElementById("relatosRango").innerHTML = rango;
        document.getElementById("relatosText").innerHTML = text;
          // Volver a cargar el video con la nueva fuente
  video.load();
  video.play();
}
