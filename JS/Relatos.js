
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
    var videoSource = document.getElementById('Relatos-Popup-video');

    if (isEspanish) {
        switch (circuloId) {
            case 0:
                colorCirculos(circuloId);
                break;
            case 1:
                //alert("Has hecho clic en el círculo número " + circuloId);
                nombre = "Arnol Tanimuka-Riayawa'y"
                rango = "Comunidad Bellavista Tanimuka"
                text = '"'+"Mi nombre es Arnol Tanimuka-Riayawa'y, vengo de Apaporis de una comunidad llamada Bellavista Tanimuka, a estudiar, aprender y conocer lo bello del Amazonas, para sentirme orgulloso de mí mismo... "+'"';

                // Cambiar la imagen en escritorio
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Arnold_comunidad_apapois.png";
                // Cambiar la imagen en móvil
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Arnold_comunidad_apapois.jpg";
                // Cambiar la imagen por defecto
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Arnold_comunidad_apapois.png";

                // Change video popUp
                videoSource.src = "Assets/Videos/Relatos/Arnold comunidad apapois.webm";

                colorCirculos(circuloId);
                break;
            case 2:
                //alert("Has hecho clic en el círculo número " + circuloId);
                nombre = "Erika Paola Cruz Gaitán"
                rango = "Gobernadora de la comunidad del resguardo indígena Lagartococha"
                text = '"' + "(...) unos de los impactos que estamos sufriendo hoy, es el cambio climático en nuestro calendario ecológico..." + '"';

                // Cambiar la imagen en escritorio
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Erika_Paula_Cruz_Gaitan_Gobernadora.png";
                // Cambiar la imagen en móvil
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Erika_Paula_Cruz_Gaitan_Gobernadora.jpg";
                // Cambiar la imagen por defecto
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Erika_Paula_Cruz_Gaitan_Gobernadora.png";

                // Change video popUp
                videoSource.src = "Assets/Videos/Relatos/Erika_Paula_Cruz_Gaitan_Gobernadora.mp4";

                colorCirculos(circuloId);
                break;
            case 3:
                //alert("Has hecho clic en el círculo número " + circuloId);
                nombre = "Fernando Trujillo"
                rango = " Director Científico Fundación Omacha"
                text = '"' + "A lo largo de 37 años se ven los cambios, no, se ven muchos cambios. Cuando llegué la biodiversidad era mucho más evidente..." + '"';

                // Cambiar la imagen en escritorio
                document.getElementById("RelatosimageDesktop").srcset = "   ./Assets/IMG/testimonios/PC/Fernando_trujillo.png";
                // Cambiar la imagen en móvil
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Fernando_trujillo.jpg";
                // Cambiar la imagen por defecto
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Fernando_trujillo.png";

                // Change video popUp
                videoSource.src = "./Assets/Videos/Relatos/Fernando_trujillo.webm";

                colorCirculos(circuloId);
                break;
            case 4:
                //alert("Has hecho clic en el círculo número " + circuloId);
                nombre = "Viane Masakaje Hipa"
                rango = "Gobernadora del resguardo indígena Tukunare"
                text = '"' + "(...) pero uno como líder no está mirando quien le hace el mal y quien le hace el bien, sino que uno trabaja es para toda una comunidad"+'"';
                
                // Cambiar la imagen en escritorio
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Viana_makiscara_quipa.png";
                // Cambiar la imagen en móvil
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Viana_makiscara_quipa.jpg";
                // Cambiar la imagen por defecto
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Viana_makiscara_quipa.png";

                // Change video popUp
                videoSource.src = "Assets/Videos/Relatos/Viana_makiscara_quipa.webm";

                colorCirculos(circuloId);
                break;
            case 5:

                break;
            case 6:

                break;

            default:
                break;
        }
    } else {
        switch (circuloId) {
            case 0:
                colorCirculos(circuloId);
                break;
            case 1:
                //alert("You have clicked on circle number " + circuloId);
                nombre = "Arnol Tanimuka-Riayawa'y"
                rango    = "Community of Bellavista Tanimuka"
                text = '"' + "My name is Arnol Tanimuka-Riayawa'y, I come from Apaporis from a community called Bellavista Tanimuka, to study, learn, and discover the beauty of the Amazon, to feel proud of myself... " + '"';

                // Change the image for desktop
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Arnold_comunidad_apapois.png";
                // Change the image for mobile
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Arnold_comunidad_apapois.jpg";
                // Change the default image
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Arnold_comunidad_apapois.png";

                // Change video popUp
                videoSource.src = "Assets/Videos/Relatos/Arnold comunidad apapois.webm";


                colorCirculos(circuloId);
                break;
            case 2:
                nombre = "Erika Paola Cruz Gaitán";
                rango = "Governor of the indigenous reservation community of Lagartococha";
        text = '"' + "(...) one of the impacts we are suffering today is climate change in our ecological calendar..." + '"';

                // Change the image for desktop
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Erika_Paula_Cruz_Gaitan_Gobernadora.png";
                // Change the image for mobile
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Erika_Paula_Cruz_Gaitan_Gobernadora.jpg";
                // Change the default image
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Erika_Paula_Cruz_Gaitan_Gobernadora.png";

                // Change video popUp
                videoSource.src = "Assets/Videos/Relatos/Erika_Paula_Cruz_Gaitan_Gobernadora.mp4";

                colorCirculos(circuloId);
                break;
            case 3:
                //alert("You have clicked on circle number " + circuloId);
                nombre = "Fernando Trujillo";
                role = "Scientific Director of Fundación Omacha";
                text = '"' + "Over the past 37 years, changes have become visible—many changes. When I arrived, the biodiversity was much more evident..." + '"';

                // Change the image for desktop
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Fernando_trujillo.png";
                // Change the image for mobile
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Fernando_trujillo.jpg";
                // Change the default image
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Fernando_trujillo.png";

                // Change video popUp
                videoSource.src = "./Assets/Videos/Relatos/Fernando_trujillo.webm";


                colorCirculos(circuloId);
                break;
            case 4:
                //alert("You have clicked on circle number " + circuloId);
                nombre = "Viane Masakaje Hipa";
                role = "Governor of the Tukunare indigenous reservation";
                text = '"' + "(...) but as a leader, you don’t focus on who does you harm or who does you good—you work for the entire community." + '"';

                // Change the image for desktop
                document.getElementById("RelatosimageDesktop").srcset = "./Assets/IMG/testimonios/PC/Viana_makiscara_quipa.png";
                // Change the image for mobile
                document.getElementById("RelatosimageMobile").srcset = "./Assets/IMG/testimonios/Movil/Viana_makiscara_quipa.jpg";
                // Change the default image
                document.getElementById("RelatosdefaultImage").src = "./Assets/IMG/testimonios/PC/Viana_makiscara_quipa.png";

                // Change video popUp
                videoSource.src = "Assets/Videos/Relatos/Viana_makiscara_quipa.webm";

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
