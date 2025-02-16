
var nombre = "";
var rango = "";
var text = "";
function mostrarAlerta(circuloId) {  

    var video = document.getElementById('relatosVideo');
    var videoSource = document.getElementById('videoSourceTestimonios');

    
    switch (circuloId) {
        case 0:
           
        break;
        case 1:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "Carlos Arbey Claros"
            rango = "rango1"
            text = "Pues la armada nacional es la empresa más importante que tiene este municipio, la armada nacional es la que le genera soberanía nacional... ";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/VideoBanner.mp4';
        break;
        case 2:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "Arturo Suleta CO708_1 "
            rango = "rango2"
            text = "De esta región es el eje, créeme que ellos pues la fuente de trabajo, pues cuando ha habido coca, pues la vaina de la gente con su coca, o su oro, pero es el ...";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/VideoBanner.mp4';
        break;
        case 3:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "Carlos Eduardo Siniestra"
            rango = "rango3"
            text = "La jurisdicción del municipio cuenta con 87 km del río, donde se encuentran dispersas diecinueve comunidades indígenas con necesidades distintas a la capital...";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/VideoBanner.mp4';
        break;
        case 4:
            //alert("Has hecho clic en el círculo número " + circuloId);
            nombre = "David García Becerra"
            rango = "rango1"
            text = "Hemos ganado terreno con la comunidad, nos hemos dado a querer, en el sentido de que promovemos la navegación segura. Iniciamos la campaña 'Cuida tu vida, navega seguro'...";

            // Cambiar la fuente del video
            videoSource.src = './Assets/Videos/VideoBanner.mp4';
        break;
        case 5:
            
        break;
        case 6:
        
        break;

        default:        
            
        }

        document.getElementById("relatosNombre").innerHTML = nombre;
        document.getElementById("relatosRango").innerHTML = rango;
        document.getElementById("relatosText").innerHTML = text;
          // Volver a cargar el video con la nueva fuente
  video.load();
  video.play();
}
