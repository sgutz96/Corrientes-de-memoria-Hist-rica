
var nombre = "";
var rango = "";
var text = "";


function colorCirculos(circuloActive) {
    // Resetear todos los círculos a blanco
    document.querySelectorAll(".circle").forEach(circle => {
        circle.style.background = "#FAFAFA"; // Blanco
    });

    document.querySelectorAll(".circle")[circuloActive - 1].style.backgroundColor = "#304D3D";

}
function mostrarAlerta(circuloId) {

    var video = document.getElementById('relatosVideo');
    var videoSource = document.getElementById('videoSourceTestimonios');

    if (isEspanish) {
        switch (circuloId) {
            case 0:
                colorCirculos(circuloId);
                break;
            case 1:
                //alert("Has hecho clic en el círculo número " + circuloId);
                nombre = "Arnold"
                rango = "Comunidad Apapois"
                text = "Pues la armada nacional es la empresa más importante que tiene este municipio, la armada nacional es la que le genera soberanía nacional... ";

                // Cambiar la imagen en escritorio
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Arnold_comunidad_apapois.png";
                // Cambiar la imagen en móvil
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Arnold_comunidad_apapois.JPG";
                // Cambiar la imagen por defecto
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Arnold_comunidad_apapois.png";

                colorCirculos(circuloId);
                break;
            case 2:
                //alert("Has hecho clic en el círculo número " + circuloId);
                nombre = "Erika Paula cruz gaitan"
                rango = "Gobernadora Resguardo indigena Lagarto Cocha"
                text = "De esta región es el eje, créeme que ellos pues la fuente de trabajo, pues cuando ha habido coca, pues la vaina de la gente con su coca, o su oro, pero es el ...";


                // Cambiar la imagen en escritorio
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Erika_Paula_Cruz_Gaitan_Gobernadora.png";
                // Cambiar la imagen en móvil
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Erika_Paula_Cruz_Gaitan_Gobernadora.JPG";
                // Cambiar la imagen por defecto
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Erika_Paula_Cruz_Gaitan_Gobernadora.png";

                colorCirculos(circuloId);
                break;
            case 3:
                //alert("Has hecho clic en el círculo número " + circuloId);
                nombre = "Fernando trujillo"
                rango = "Fundacion Omacha"
                text = "La jurisdicción del municipio cuenta con 87 km del río, donde se encuentran dispersas diecinueve comunidades indígenas con necesidades distintas a la capital...";

                // Cambiar la imagen en escritorio
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Fernando_trujillo.png";
                // Cambiar la imagen en móvil
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Fernando_trujillo.JPG";
                // Cambiar la imagen por defecto
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Fernando_trujillo.png";

                colorCirculos(circuloId);
                break;
            case 4:
                //alert("Has hecho clic en el círculo número " + circuloId);
                nombre = "Viana makiscara quipa"
                rango = "Gobernadora Resguardo indigena Lagarto Cocha"
                text = "Hemos ganado terreno con la comunidad, nos hemos dado a querer, en el sentido de que promovemos la navegación segura. Iniciamos la campaña 'Cuida tu vida, navega seguro'...";

                // Cambiar la imagen en escritorio
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Viana_makiscara_quipa.png";
                // Cambiar la imagen en móvil
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Viana_makiscara_quipa.JPG";
                // Cambiar la imagen por defecto
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Viana_makiscara_quipa.png";

                colorCirculos(circuloId);
                break;
            case 5:

                break;
            case 6:

                break;

            default:
                break;
        }
    }else{
        switch (circuloId) {
            case 0:
                colorCirculos(circuloId);
                break;
            case 1:
                //alert("You clicked on circle number " + circuloId);
                nombre = "Arnold"
                rango = "Apapois Community"
                text = "The National Navy is the most important company in this municipality, the National Navy is the one that generates national sovereignty...";
        
                // Change the image for desktop
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Arnold_comunidad_apapois.png";
                // Change the image for mobile
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Arnold_comunidad_apapois.JPG";
                // Change the default image
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Arnold_comunidad_apapois.png";
        
                colorCirculos(circuloId);
                break;
            case 2:
                //alert("You clicked on circle number " + circuloId);
                nombre = "Erika Paula Cruz Gaitán"
                rango = "Governor Indigenous Reserve Lagarto Cocha"
                text = "This region is the axis, believe me, they are the source of work, when there has been coca, it's the people's coca or their gold, but it's the ...";
        
                // Change the image for desktop
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Erika_Paula_Cruz_Gaitan_Gobernadora.png";
                // Change the image for mobile
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Erika_Paula_Cruz_Gaitan_Gobernadora.JPG";
                // Change the default image
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Erika_Paula_Cruz_Gaitan_Gobernadora.png";
        
                colorCirculos(circuloId);
                break;
            case 3:
                //alert("You clicked on circle number " + circuloId);
                nombre = "Fernando Trujillo"
                rango = "Omacha Foundation"
                text = "The municipality's jurisdiction has 87 km of river, where nineteen indigenous communities are dispersed, each with needs different from the capital...";
        
                // Change the image for desktop
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Fernando_trujillo.png";
                // Change the image for mobile
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Fernando_trujillo.JPG";
                // Change the default image
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Fernando_trujillo.png";
        
                colorCirculos(circuloId);
                break;
            case 4:
                //alert("You clicked on circle number " + circuloId);
                nombre = "Viana Makiscara Quipa"
                rango = "Governor Indigenous Reserve Lagarto Cocha"
                text = "We have gained ground with the community, we have earned their trust by promoting safe navigation. We started the campaign 'Take care of your life, navigate safely'...";
        
                // Change the image for desktop
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Viana_makiscara_quipa.png";
                // Change the image for mobile
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Viana_makiscara_quipa.JPG";
                // Change the default image
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Viana_makiscara_quipa.png";
        
                colorCirculos(circuloId);
                break;
            case 5:
                break;
            case 6:
                break;
        
            default:
                break;
        }
        
    }


    document.getElementById("relatosNombre").innerHTML = nombre;
    document.getElementById("relatosRango").innerHTML = rango;
    document.getElementById("relatosText").innerHTML = text;
    // Volver a cargar el video con la nueva fuente
    video.load();
    video.play();
}
