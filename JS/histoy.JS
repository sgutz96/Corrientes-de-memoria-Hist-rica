let contadorPuntos = 0;
let DisYPoint = 20;  // Distancia entre cada punto en el eje Y
let puntosRojosX = []; // Arreglo para almacenar las posiciones en X de los puntos rojos

let puntosRojosElements = []; // Arreglo para almacenar las referencias a los elementos de los puntos rojos

let puntoAzul; // Variable para el punto azul

var NumHistory = 1;

// Función para generar un nuevo punto
function generarPunto(posicionX) {
  // Obtener el contenedor
  const contenedor = document.getElementById('histoy-nav');

  // Crear un nuevo div para el punto
  const punto = document.createElement('div');
  punto.classList.add('puntoRojo');

  // Calcular la posición en Y basándonos en el contador y la distancia (100vh)
  const posicionY = contadorPuntos * DisYPoint; // 100vh para cada punto

  // Establecer la posición del punto usando las coordenadas X y Y
  punto.style.left = `${posicionX}vw`; // Posición X recibida
  punto.style.top = `${posicionY}vh`;  // Posición Y calculada

  // Añadir el punto al contenedor
  contenedor.appendChild(punto);

  // Almacenar la posición en X y Y del punto rojo
  puntosRojosX.push(posicionX);

  // Almacenar la referencia al elemento del punto rojo
  puntosRojosElements.push(punto);

  // Incrementar el contador de puntos
  contadorPuntos++;
}

// Llamar a la función generadora de puntos con diferentes posiciones X
// Llamar a la función generadora de puntos con diferentes posiciones X
//putumayo
generarPunto(50); // Llama con X en 50vw
generarPunto(48); // Llama con X en 70vw
generarPunto(46); // Llama con X en 20vw
generarPunto(44); // Llama con X en 50vw
generarPunto(46); // Llama con X en 70vw*/
//AMAZONAS
generarPunto(48); // Llama con X en 50vw
generarPunto(50); // Llama con X en 70vw
generarPunto(52); // Llama con X en 20vw
generarPunto(54); // Llama con X en 50vw
generarPunto(52); // Llama con X en 70vw*/
//Guaviare
generarPunto(50); // Llama con X en 50vw
generarPunto(48); // Llama con X en 70vw
generarPunto(46); // Llama con X en 20vw
generarPunto(44); // Llama con X en 50vw
generarPunto(42); // Llama con X en 70vw*/
//Caqueta
generarPunto(44); // Llama con X en 50vw
generarPunto(46); // Llama con X en 70vw
generarPunto(48); // Llama con X en 20vw
generarPunto(50); // Llama con X en 50vw
generarPunto(52); // Llama con X en 70vw*/
//Vaupez
generarPunto(50); // Llama con X en 50vw
generarPunto(48); // Llama con X en 70vw
generarPunto(46); // Llama con X en 20vw
generarPunto(44); // Llama con X en 50vw
generarPunto(42); // Llama con X en 70vw*/

// Ajustar la altura total de la sección histoy-nav para que corresponda con el número de puntos generados
const contenedor = document.getElementById('histoy-nav');
contenedor.style.height = `${puntosRojosX.length * DisYPoint}vh`;

// Crear un nuevo div para el punto azul
puntoAzul = document.createElement('div');
puntoAzul.classList.add('puntoAzul');
contenedor.appendChild(puntoAzul); // Añadirlo al contenedor


// Crea un nuevo elemento de imagen
var imagen = document.createElement("img");

// Asigna la clase "barcoimg" a la imagen
imagen.classList.add("barcoimg");

// Asigna la fuente de la imagen (puedes reemplazar la URL por la que desees)
imagen.src = "Assets/IMG/Hitoria/barco1.png";
// Asigna la clase "barco" a la imagen
imagen.className = "barco";

// Agrega la imagen como hijo del elemento "puntoAzul"
puntoAzul.appendChild(imagen);






// Función para actualizar la posición del punto azul con el scroll
function moverPuntoAzul() {
  // Obtener la posición del scroll vertical
  const scrollPosition = window.scrollY;
  const mitadViewport = window.innerHeight / 2;
  const mitadViewport2 = mitadViewport + scrollPosition;

  // Seleccionar el índice del punto rojo que deseas
  const indicePuntoRojo = 0;

  // Obtener la posición absoluta del punto rojo con respecto al documento
  const rect1 = puntosRojosElements[indicePuntoRojo].getBoundingClientRect();  // Devuelve un objeto con la información de la posición
  const rect2 = puntosRojosElements[puntosRojosElements.length - 1].getBoundingClientRect();

  // La propiedad `top` de `getBoundingClientRect()` nos da la distancia desde el borde superior del viewport.
  const primerPuntoY = rect1.top + scrollPosition;
  const segundPuntoY = rect2.top + scrollPosition;


  const poimt1 = mitadViewport2 - primerPuntoY;
  const poimt2 = mitadViewport2 - segundPuntoY;

  if (poimt1 >= 0 && poimt2 <= 0) {
    console.log(NumHistory)
    setElementAbsoluteTop(puntoAzul, mitadViewport2);
    setElementAbsoluteLeft(puntoAzul);
    setElementAbsoluterotate(puntoAzul);
    ChangeText();

  } else {

  }
}

// Escuchar el evento de scroll para mover el punto azul
window.addEventListener('scroll', moverPuntoAzul);




function setElementAbsoluteTop(element, newTop) {
  // Primero, calculamos la posición actual absoluta del elemento
  let rect = element.getBoundingClientRect();
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Calculamos el top absoluto actual
  let currentTop = rect.top + scrollTop;

  // La diferencia entre el `newTop` que queremos y la posición actual
  let offset = newTop - currentTop;

  // Ajustamos la posición del elemento
  element.style.position = "absolute"; // Aseguramos que el elemento esté en posición absoluta
  element.style.top = `${element.offsetTop + offset}px`; // Movemos el elemento al nuevo top


}


function setElementAbsoluteLeft(element) {
  // Obtener la posición del scroll vertical
  const scrollPosition = window.scrollY;
  const mitadViewport = window.innerHeight / 2;
  const mitadViewport2 = mitadViewport + scrollPosition;

  // Buscar el punto rojo más cercano arriba y abajo al punto azul
  let puntoRojoAnterior = null;
  let puntoRojoSiguiente = null;



  for (let i = 0; i < puntosRojosElements.length; i++) {
    NumHistory = i + 1;
    const rect = puntosRojosElements[i].getBoundingClientRect();
    const puntoRojoY = rect.top + scrollPosition;

    // Verificamos si el punto azul está entre el punto rojo anterior y el siguiente
    if (puntoRojoY <= mitadViewport2 && (i === puntosRojosElements.length - 1 || puntosRojosElements[i + 1].getBoundingClientRect().top + scrollPosition >= mitadViewport2)) {
      puntoRojoAnterior = puntosRojosElements[i];
      puntoRojoSiguiente = puntosRojosElements[i + 1] || puntosRojosElements[i];
      break;
    }






  }

  // Si encontramos dos puntos rojos, interpolamos la posición X
  if (puntoRojoAnterior && puntoRojoSiguiente) {
    const rectAnterior = puntoRojoAnterior.getBoundingClientRect();
    const rectSiguiente = puntoRojoSiguiente.getBoundingClientRect();

    // Calcular la interpolación entre las posiciones X de los puntos rojos
    const y1 = rectAnterior.top + scrollPosition;
    const y2 = rectSiguiente.top + scrollPosition;
    const x1 = puntosRojosX[puntosRojosElements.indexOf(puntoRojoAnterior)];
    const x2 = puntosRojosX[puntosRojosElements.indexOf(puntoRojoSiguiente)];

    // Interpolación lineal para la posición X del punto azul
    const t = (mitadViewport2 - y1) / (y2 - y1);
    const interpolacionX = x1 + t * (x2 - x1);

    // Ajustamos la posición X del punto azul
    element.style.left = `${interpolacionX}vw`;
  }
}
/*
function setElementAbsoluterotate(element) {
  // Obtener la posición del scroll vertical
  const scrollPosition = window.scrollY;
  const mitadViewport = window.innerHeight / 2;
  const mitadViewport2 = mitadViewport + scrollPosition;

  // Buscar el punto rojo más cercano arriba y abajo al punto azul
  let puntoRojoAnterior = null;
  let puntoRojoSiguiente = null;

  for (let i = 0; i < puntosRojosElements.length; i++) {
    const rect = puntosRojosElements[i].getBoundingClientRect();
    const puntoRojoY = rect.top + scrollPosition;

    // Verificamos si el punto azul está entre el punto rojo anterior y el siguiente
    if (puntoRojoY <= mitadViewport2 && (i === puntosRojosElements.length - 1 || puntosRojosElements[i + 1].getBoundingClientRect().top + scrollPosition >= mitadViewport2)) {
      puntoRojoAnterior = puntosRojosElements[i];
      puntoRojoSiguiente = puntosRojosElements[i + 1] || puntosRojosElements[i];
      break;
    }


  }

  // Si encontramos un siguiente punto rojo
  if (puntoRojoSiguiente) {

    const rectPuntoAzul = element.getBoundingClientRect();
    const rectPuntoSiguiente = puntoRojoSiguiente.getBoundingClientRect();

    // Calcular las coordenadas absolutas de ambos puntos
    const puntoAzulX = rectPuntoAzul.left + window.scrollX;
    const puntoAzulY = rectPuntoAzul.top + window.scrollY;

    const puntoSiguienteX = rectPuntoSiguiente.left + window.scrollX;
    const puntoSiguienteY = rectPuntoSiguiente.top + window.scrollY;

    // Calcular la diferencia entre las posiciones X y Y de ambos puntos
    const deltaX = puntoSiguienteX - puntoAzulX;
    const deltaY = puntoSiguienteY - puntoAzulY;

    // Calcular el ángulo en radianes entre los dos puntos
    const angle = Math.atan2(deltaY, deltaX) + (Math.PI) / 2;  // En radianes

    // Convertir de radianes a grados
    const angleInDegrees = angle * (180 / Math.PI);

    // Aplicar la rotación al elemento (la imagen) para que apunte hacia el siguiente punto
    element.style.transform = `rotate(${angleInDegrees}deg)`;
  }
}
*/

let previousAngle = null;  // Variable para guardar el último ángulo rotado

function setElementAbsoluterotate(element) {
  // Obtener la posición del scroll vertical
  const scrollPosition = window.scrollY;
  const mitadViewport = window.innerHeight / 2;
  const mitadViewport2 = mitadViewport + scrollPosition;

  // Buscar el punto rojo más cercano arriba y abajo al punto azul
  let puntoRojoAnterior = null;
  let puntoRojoSiguiente = null;

  for (let i = 0; i < puntosRojosElements.length; i++) {
    const rect = puntosRojosElements[i].getBoundingClientRect();
    const puntoRojoY = rect.top + scrollPosition;

    // Verificamos si el punto azul está entre el punto rojo anterior y el siguiente
    if (puntoRojoY <= mitadViewport2 && (i === puntosRojosElements.length - 1 || puntosRojosElements[i + 1].getBoundingClientRect().top + scrollPosition >= mitadViewport2)) {
      puntoRojoAnterior = puntosRojosElements[i];
      puntoRojoSiguiente = puntosRojosElements[i + 1] || puntosRojosElements[i];
      break;
    }
  }

  // Si encontramos un siguiente punto rojo
  if (puntoRojoSiguiente) {
    const rectPuntoAzul = element.getBoundingClientRect();
    const rectPuntoSiguiente = puntoRojoSiguiente.getBoundingClientRect();

    // Calcular las coordenadas absolutas de ambos puntos
    const puntoAzulX = rectPuntoAzul.left + window.scrollX;
    const puntoAzulY = rectPuntoAzul.top + window.scrollY;

    const puntoSiguienteX = rectPuntoSiguiente.left + window.scrollX;
    const puntoSiguienteY = rectPuntoSiguiente.top + window.scrollY;

    // Calcular la diferencia entre las posiciones X y Y de ambos puntos
    const deltaX = puntoSiguienteX - puntoAzulX;
    const deltaY = puntoSiguienteY - puntoAzulY;

    // Calcular el ángulo en radianes entre los dos puntos
    const angle = Math.atan2(deltaY, deltaX) + (Math.PI) / 2;  // En radianes

    // Convertir de radianes a grados
    let angleInDegrees = angle * (180 / Math.PI);

    // Restringir el ángulo al rango de -180 a 180 grados para evitar rotaciones innecesarias
    if (angleInDegrees > 180) {
      angleInDegrees -= 360;
    } else if (angleInDegrees < -180) {
      angleInDegrees += 360;
    }

    // Si es la primera vez o la diferencia de ángulo es pequeña, actualizamos la rotación suavemente
    if (previousAngle === null) {
      previousAngle = angleInDegrees;
    }

    // Calcular la diferencia entre el ángulo actual y el anterior
    let angleDifference = angleInDegrees - previousAngle;

    // Asegurarnos de que la diferencia de ángulo sea la más pequeña posible (sin rotar de 360°)
    if (angleDifference > 180) {
      angleDifference -= 360;
    } else if (angleDifference < -180) {
      angleDifference += 360;
    }

    // Llamar a la función de transición suave
    const smoothAngle = previousAngle + angleDifference * 0.1; // Controlamos la velocidad de rotación (0.1 es el factor de suavizado)

    // Aplicar la rotación al elemento (la imagen) para que apunte hacia el siguiente punto
    element.style.transform = `rotate(${smoothAngle}deg)`;

    // Actualizar el ángulo previo
    previousAngle = smoothAngle;
  }
}


function ChangeText() {
  var ImgPutumayoLink = "./Assets/IMG/Hitoria/historias/IMG/his-"
  switch (NumHistory) {
    case 0:
      document.getElementById("").innerHTML = ""
      break;
    case 1:
      document.getElementById("asd").style.display = "block";
      document.getElementById("HistoryDerechos").innerHTML = "Imperio conocido como Casa Arana, que explotó el caucho en el Amazonas. Fuente: Libro La Fuerza Naval del Sur en la Amazonía colombiana, 2017."
      document.getElementById("Titulocaqueta").innerHTML = "Casa Arana: La rebelión por el caucho (1904-1907)"
      document.getElementById("Textcaqueta").innerHTML = "La Casa Arana cuenta con una estructura colonial con características típicas de la arquitectura adaptada a la región amazónica, en donde predominan el uso de materiales..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Casa Arana: La rebelión por el caucho (1904-1907) "
      document.getElementById("TextPopAmazonas").innerHTML = "La Casa Arana cuenta con una estructura colonial con características típicas de la arquitectura adaptada a la región amazónica, en donde predominan el uso de materiales locales como madera y techos de palma. En el año 1904, la compañía denominada Peruvian Amazon Company, con sede central en Londres, se encontraba en la Amazonía colombiana, y fue allí donde estableció relaciones con Julio César Arana, las cuales terminaron en una fusión en 1907, asegurando la viabilidad y el futuro de la empresa al que el mismo le dio el nombre de Casa Arana. Sin embargo, el sitio es tristemente célebre por ser uno de los principales centros de explotación y abuso de los pueblos indígenas de la región, particularmente de las comunidades Huitoto, Bora y Ocaína, sometidas a trabajos forzados para la extracción de caucho, el cual era fuente de riqueza y de transformaciones culturales y sociales en la Amazonía. Actualmente, la Casa Arana es considerada un símbolo del recuerdo y la memoria histórica en la lucha por los derechos indígenas durante los años de desarrollo económico en el sur de Colombia. En ese sentido, se ha convertido en un lugar de reflexión y en algunos casos, en un destino para dignificar a las víctimas del conflicto armado acaecido en el pasado (Libro La Historia de la Fuerza Naval del Sur en la Amazonía Colombia, 2017. Capítulo 5, P. 30-32)." 
      document.getElementById("asd").src= ImgPutumayoLink + NumHistory + ".webp"
      break;
    case 2:
      document.getElementById("asd").style.display = "block";
      document.getElementById("HistoryDerechos").innerHTML = "Archivo fotográfico del ICANH. Fuente: https://colecciones.icanh.gov.co/articulos/expeEtnologica.php#undefined – Expedición Etnológica a la Intendencia del Putumayo (1945-1946)."

      document.getElementById("Titulocaqueta").innerHTML = "Creación de la Intendencia del Putumayo (1905)"
      document.getElementById("Textcaqueta").innerHTML = "La reorganización territorial de 1905, bajo la presidencia de Rafael Reyes Prieto, buscaba debilitar las grandes unidades territoriales y frenar los intentos separatistas..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación de la Intendencia del Putumayo (1905)"
      document.getElementById("TextPopAmazonas").innerHTML = "La reorganización territorial de 1905, bajo la presidencia de Rafael Reyes Prieto, buscaba debilitar las grandes unidades territoriales y frenar los intentos separatistas, por lo cual, la creación de la Intendencia del Putumayo fue parte de este esfuerzo por consolidar el control colombiano sobre la región amazónica. La Armada de Colombia fue fundamental en la seguridad de la región durante este proceso, por lo que se describen algunas de sus funciones que dieron lugar al eficiente control territorial: 1.	Patrullaje fluvial: Se realizaron despliegues constantes en los ríos de la región, asegurando que no hubiera infiltraciones ni actividades ilegales que pudieran amenazar la estabilidad. 2.	Transporte de Fuerzas: Facilitó el transporte de tropas y suministros a la nueva Intendencia del Putumayo, asegurando que las autoridades civiles y militares pudieran establecerse rápidamente. 3.	Protección de fronteras: La Armada de Colombia ayudó a proteger las fronteras de la región, evitando conflictos con países vecinos y asegurando la soberanía colombiana en la zona. 4.	Asistencia a la población local: Proporcionó asistencia a las comunidades locales, ayudándoles a adaptarse a los cambios administrativos y asegurando su seguridad y bienestar. La contribución de la Armada de Colombia fue vital para el éxito de la reorganización territorial y para la estabilidad del Putumayo. Su presencia ayudó a consolidar el control colombiano y a garantizar la seguridad y el desarrollo de la región. "
      
            document.getElementById("asd").src= ImgPutumayoLink + NumHistory + ".webp"
      break;
    case 3:
      document.getElementById("asd").style.display = "block";
      document.getElementById("HistoryDerechos").innerHTML = "Formación Flotilla de Guerra del Putumayo. Fuente: Pañol de la Historia, “El Combate de Güepí, y los cañoneros Cartagena y Santa Marta”, Por: Capitán de Navío Carlos A. Prieto Ávila – Cyber-corredera, Página web: https://www.cyber-corredera.de/panoles/Panol-48.htm."


      document.getElementById("Titulocaqueta").innerHTML = "Flotilla de Guerra del Putumayo (1931)"
      document.getElementById("Textcaqueta").innerHTML = "La Flotilla de Guerra del Putumayo fue creada en 1931 mediante el Decreto 1507 del 31 de agosto de ese año..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Flotilla de Guerra del Putumayo (1931)"
     
           document.getElementById("asd").src= ImgPutumayoLink + NumHistory + ".webp"
      break;
    case 4:
      document.getElementById("asd").style.display = "block";
      document.getElementById("HistoryDerechos").innerHTML = "Puesto Avanzado de Monclart. Fuente: Libro La Infantería de Marina en la Historia de Colombia, 2021."


      document.getElementById("Titulocaqueta").innerHTML = "Creación del Puesto Fluvial Avanzado Monclart (1933)"
      document.getElementById("Textcaqueta").innerHTML = "El 20 de enero de 1933, después del conflicto con el Perú fue creado el Puesto Fluvial Avanzado de Monclart, unidad que se entregó en forma oficial a la Armada de Colombia..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación del Puesto Fluvial Avanzado Monclart (1933)"
      document.getElementById("TextPopAmazonas").innerHTML = "“El 20 de enero de 1933, después del conflicto con el Perú fue creado el Puesto Fluvial Avanzado de Monclart, unidad que se entregó en forma oficial a la Armada de Colombia por el Ejército Nacional mediante Decreto 2167 de noviembre de 1943, como parte de las fuerzas de cobertura de la frontera sur del país. Esta unidad militar fue en realidad un traslado del antiguo Puesto de “Chamaco” que estaba situado enfrente del puesto peruano de Güepí” (Libro La Infantería de Marina en la Historia de Colombia, 2021. Capítulo 3 y 5 - P. 37 y 218). Dados los inconvenientes presentados durante el conflicto al tener un puesto extranjero tan cercano, se trasladó 10 kilómetros más abajo hasta el inicio de la vía que comunicaba con Las Delicias, sobre el río Caquetá.  Cabe resaltar que, el Puesto Fluvial Avanzado Monclart fue esencial para asegurar el control del río Putumayo, una vía fluvial fundamental para el comercio y las operaciones militares. Así mismo, este puesto fluvial funcionó como una base de apoyo para proporcionar suministros, alojamiento para las tropas colombianas, y un punto de defensa y vigilancia. Su posición geográfica permitió controlar el tránsito fluvial, prevenir incursiones extranjeras y responder rápidamente a cualquier amenaza en la zona fronteriza. En ese sentido, representó un hito en la consolidación de la presencia militar colombiana en la Amazonía, marcando el compromiso del país con la defensa de su soberanía. "  
            document.getElementById("asd").src= ImgPutumayoLink + NumHistory + ".webp"
      break;
    case 5:
      document.getElementById("asd").style.display = "block";
            document.getElementById("HistoryDerechos").innerHTML = "Botes de la Flotilla “Avispa”. Fuente: Libro La Infantería de Marina en la Historia de Colombia, 2021."

      document.getElementById("Titulocaqueta").innerHTML = "La Flotilla Avispa (1956)"
      document.getElementById("Textcaqueta").innerHTML = "En septiembre de 1956, por iniciativa del señor Capitán de Infantería de Marina Aurelio Castrillón Muñoz y el Teniente de Fragata Rafael Grau Araujo, quienes prestaban..."
      document.getElementById("TituloPopAmazonas").innerHTML = "La Flotilla Avispa (1956)"
      document.getElementById("TextPopAmazonas").innerHTML = "En septiembre de 1956, por iniciativa del señor Capitán de Infantería de Marina Aurelio Castrillón Muñoz y el Teniente de Fragata Rafael Grau Araujo, quienes prestaban sus servicios en Puerto Leguízamo, se creó la “Flotilla Avispa” la cual realizó una demostración ante el alto mando militar en aguas del río Putumayo con botes armados y tripulados por Infantes de Marina, en una contundente exhibición de velocidad y maniobrabilidad superiores a los cañoneros ARC Cartagena y ARC Santa Marta. La organización inicial contemplaba 7 botes artillados: 6 que llevaban la Fuerza de Tarea Fluvial y 1 bote de Comando y Control. La “Flotilla Avispa” quedó bajo mando operacional de la Compañía Kilo de Puerto Leguízamo. Los botes utilizados eran de 13 pies de eslora y 1,5 pies de calado con una capacidad de carga de 800 kilos y tripulado por 6 hombres cada uno; organización que se mantuvo hasta 1971, cuando el Capitán de Infantería de Marina Alejandro Pimiento le dio un nuevo impulso con la creación de los Comandos de Selva (Apartes tomados textualmente de la Organización Operativa de la Flotilla Avispa septiembre de 1956).  Para el funcionamiento de la Flotilla Avispa, se creó un manual el cual presentó un proyecto de organización en el que se resaltaban las necesidades tácticas de esta unidad. Cada grupo de tarea estaba conformado por nueve botes, cada uno de ellos tripulado por cuatro hombres acompañados por un pelotón, el cual tenía la organización administrativa de un pelotón (Libro La Infantería de Marina en la Historia de Colombia, 2021. Capítulo 3 - P. 58). La creación de la Flotilla Avispa permitió dar a conocer la capacidad de adaptación de las Fuerzas Militares de Colombia a las exigencias del combate en los escenarios fluviales de la región amazónica. Su éxito contribuyó significativamente al esfuerzo bélico de Colombia y a la recuperación de Leticia, demostrando la importancia del poder fluvial en conflictos territoriales fronterizos, fundamental para el desarrollo de las futuras unidades fluviales de la Armada de Colombia, esenciales para la soberanía, seguridad y desarrollo integral de las comunidades de la Amazonía colombiana."  
      
            document.getElementById("asd").src= ImgPutumayoLink + NumHistory + ".webp"
      break;
    case 6:
      document.getElementById("asd").style.display = "block";
            document.getElementById("HistoryDerechos").innerHTML = "ARC Cartagena. Fuente: Libro La Infantería de Marina en la Historia de Colombia, 2021)."

      document.getElementById("TituloPutumayo").innerHTML = "Conflicto Colombo – Peruano, conocido como Conflicto de Leticia (1932-1933 )"
      document.getElementById("TextPutumayo").innerHTML = "En el año 1932, con los vaivenes de la política en los países latinoamericanos, sobrevino el conflicto de Colombia con el Perú. A comienzos de septiembre un grupo de civiles..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Conflicto Colombo – Peruano, conocido como Conflicto de Leticia (1932-1933 )"
      document.getElementById("TextPopAmazonas").innerHTML = "En el año 1932, con los vaivenes de la política en los países latinoamericanos, sobrevino el conflicto de Colombia con el Perú. A comienzos de septiembre un grupo de civiles peruanos se tomó por asalto a Leticia, Amazonas y capturó a todos los moradores colombianos. Es por esto que, la presencia de la Armada de Colombia en el sur del país se remonta cuando a causa del conflicto Colombo – Peruano fueron destinados los cañoneros fluviales ARC “Cartagena” y ARC “Santa Marta” y el Buque Hospital MC “Yamari” y las unidades “Madeira” y “Esmarck”, estas últimas de origen brasileño, las cuales estaban tripuladas en su mayoría por marinos colombianos, conformando así la Flotilla Fluvial del Putumayo, la cual tenía la misión de proteger los ríos fronterizos, realizando múltiples operaciones sobre el río Putumayo, salvaguardando la integridad y soberanía del territorio nacional. “En años anteriores, Colombia se había dedicado a dar solución a diferentes problemas internos y se vio envuelta en un conflicto internacional para lo cual no estaba preparada. Como consecuencia de la ingenuidad e imprevisión, la falta de medios tuvo que ser suplida ante tal emergencia con improvisaciones y patriotismo. En ese sentido, se adquirieron algunas unidades de guerra y el Gobierno Nacional se vio precisado a contratar un grupo de Oficiales de la Real Armada Británica para que organizara y dirigiera la incipiente Armada de Colombia. Los peruanos llamaban la “flota suicida” a nuestra improvisada Armada, que debía operar sobre el trapecio amazónico para la reconquista de Leticia, Amazonas, sin embargo, como resultado de las experiencias del conflicto amazónico, el Gobierno Nacional crea la moderna Marina de Guerra. "  
      
            document.getElementById("asd").src= ImgPutumayoLink + NumHistory + ".webp"
      break;
    case 7:
      document.getElementById("asd").style.display = "block";
            document.getElementById("HistoryDerechos").innerHTML = "Desplazamiento de tropas para el Combate de Guëpí. Fuente: https://www.cyber-corredera.de/panoles/Panol-48.htm"

      document.getElementById("TituloPutumayo").innerHTML = "Batalla de Guëpí (1932-1933)"
      document.getElementById("TextcaquetaPutumayo").innerHTML = "La Batalla de Guëpí fue un enfrentamiento clave durante la Guerra Colombo – Peruana ocurrido el 26 de marzo de 1933, el cual se desarrolló en el contexto de la disputa..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Batalla de Guëpí (1932-1933)"
      document.getElementById("TextPopAmazonas").innerHTML = "La Batalla de Guëpí fue un enfrentamiento clave durante la Guerra Colombo – Peruana ocurrido el 26 de marzo de 1933, el cual se desarrolló en el contexto de la disputa territorial por la soberanía del Puerto de Leticia y las áreas circundantes, ubicadas en el departamento del Amazonas. La batalla fue un ejemplo del papel decisivo de las Fuerzas Militares de Colombia, en la recuperación de territorios ocupados por Perú. Cabe indicar que, está reconocida batalla se generó a causa del inconformismo de los hacendados peruanos por la firma del Tratado de Salomón - Lozano en el año 1922, en donde se redefinieron las fronteras entre Brasil, Colombia y Perú, produciendo la creación de un puesto de aduanas por parte de Colombia en la frontera, el cual dificultaba el transporte de caucho y caña de azúcar hacia Iquitos – Perú, afectando sus finanzas. “El conflicto en Guëpí se desdobló a lo largo de un sector de 15 kilómetros y durante casi nueve horas sin descanso”. (Libro Historia de la Fuerza Naval del Sur en la Amazonía Colombiana, 2017. P. 44). “El 26 de marzo de 1933, durante el conflicto con el Perú, se creó el destacamento del Putumayo y la Flotilla Fluvial. Desde Puerto Leguízamo se lanzó la ofensiva contra la guarnición militar peruana de Güepí, en donde nuestros soldados, con un heroísmo sin precedentes, se trenzaron en feroz combate cuerpo a cuerpo con el enemigo y el Sargento Néstor Ospina Melo arrió la bandera peruana e izó la bandera de Colombia y todos los nuestros gritaban “Viva Colombia”. Esta victoria puso fin a la guerra con el Perú, y rescató para nuestro país el honor y la dignidad. La máxima personificación del valor de nuestros soldados, queda reflejada en Juan Bautista Solarte Obando, quien al descubrir la ametralladora del enemigo se lanzó sobre ella para salvar la vida de sus compañeros”. (Libro La Infantería de Marina en la Historia de Colombia, 2021. Capítulo 5, P. 203). Un total de 16 militares ofrendaron su vida, siendo este un acto valeroso y heroico que contribuyó a la victoria de las tropas colombianas quienes garantizaron la soberanía nacional y la legitimidad institucional, mediante el despliegue oportuno y eficiente de las capacidades terrestres, fluviales y aéreas."  
      document.getElementById("asd").src= ImgPutumayoLink + NumHistory.toString() + "1.png"
      break;
    case 8:
      document.getElementById("asd").style.display = "block";
            document.getElementById("HistoryDerechos").innerHTML = "Escuadrilla aérea colombiana, Batalla de Tarapacá. Fuente: https://www.fac.mil.co/es/noticias/batalla-de-tarapaca-hecho-historico-que-marco-la-historia-de-la-aviacion-militar-en - Artículo: Batalla de Tarapacá, hecho histórico que marcó la historia de la aviación militar en Colombia."

      document.getElementById("TituloPutumayo").innerHTML = "La Batalla de Tarapacá (1933)"
      document.getElementById("TextPutumayo").innerHTML = "La Batalla de Tarapacá, también conocido como el Combate de Nuevo Tarapacá o la defensa del Bajo Putumayo, fue un enfrentamiento militar ocurrido el 14 de febrero de 1933 durante..."
      document.getElementById("TituloPopAmazonas").innerHTML = "La Batalla de Tarapacá (1933)"
      document.getElementById("TextPopAmazonas").innerHTML = "La Batalla de Tarapacá, también conocido como el Combate de Nuevo Tarapacá o la defensa del Bajo Putumayo, fue un enfrentamiento militar ocurrido el 14 de febrero de 1933 durante el conflicto Colombo – Peruano (1932-1933), en la cual ambas naciones se disputaban una amplia región que circundaba el río Putumayo. “La batalla inició cuando en horas de la mañana del 14 de febrero de 1933, tropas colombianas sufrieron el ataque de una escuadrilla aérea peruana, lo que provocó la respuesta inmediata de la escuadrilla aérea colombiana que se encontraba fondeada en las proximidades a Tarapacá, Amazonas, sin llegarse a dar un combate directo. Se buscaba con esta maniobra desconcertar a los peruanos sobre las verdaderas intenciones del ataque.  En ese año, el General Alfredo Vásquez Cobo se traslada a bordo del Destructor ARC Córdova y pide la convergencia sobre Tarapacá, Amazonas, de los cañoneros ARC Cartagena y ARC Santa Marta desde el Alto Putumayo, solicitud que no pudo ser atendida debido a que el destacamento del Putumayo adelantaba operaciones en su zona de responsabilidad, que culminarían con el ataque sobre Güepí – Perú.  En horas de la mañana del día 15 de febrero, tuvo lugar el ataque de las unidades fluviales, cuyo desembarco fue dirigido personalmente por el General Efraín Rojas; con sorpresa se encontró que la guarnición peruana había abandonado el fortín. A las nueve de la mañana se izó sobre Tarapacá, Amazonas el pabellón colombiano.  Se restituía a la heredad patria, el primero de los fragmentos que se intentó arrebatar. Con Tarapacá, la proyección del poder aéreo y fluvial colombiano sobre el escenario Amazónico se hizo más evidente.  Se pudo instalar allí una base de apoyo a las operaciones subsiguientes” (Cyber-corredera, Página web: https://www.cyber-corredera.de/panoles/Panol-48.htm. Artículo “Se recupera Tarapacá”). En la Batalla de Tarapacá, las tropas colombianas tomaron el control del bajo Putumayo lo que daría una posición relevante para las operaciones posteriores en donde logran acercarse más a Leticia, Amazonas. Cabe resaltar que, la mediación de la Liga de las Naciones en Ginebra, Suiza puso fin al conflicto, devolviendo Leticia a Colombia en el año 1934."  
      document.getElementById("asd").src= ImgPutumayoLink + NumHistory.toString() + "2.png"
      break;
    case 9:
      document.getElementById("asd").style.display = "block";
            document.getElementById("HistoryDerechos").innerHTML = "Estampilla que conmemora la Intendencia del Amazonas, Archivo Banco de la República de Colombia. Fuente: https://sinchi.org.co/galeria-de-fotos"

      document.getElementById("TituloPutumayo").innerHTML = "Creación de la Intendencia Nacional del Amazonas (1951)"
      document.getElementById("TextPutumayo").innerHTML = "La Intendencia Nacional del Amazonas fue establecida mediante el Decreto Ley 963 de fecha 14 de marzo de 1951, esta medida reforzó la presencia de la Armada de Colombia, fortaleció..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación de la Intendencia Nacional del Amazonas (1951)"
      document.getElementById("TextPopAmazonas").innerHTML = "La Intendencia Nacional del Amazonas fue establecida mediante el Decreto Ley 963 de fecha 14 de marzo de 1951, esta medida reforzó la presencia de la Armada de Colombia, fortaleció la infraestructura naval y reafirmó el dominio colombiano sobre el territorio amazónico. La Intendencia del Amazonas había sido previamente una entidad territorial creada en 1931 para consolidar la soberanía colombiana en la región tras los conflictos con Perú y Brasil. La creación de la Intendencia Nacional del Amazonas formó parte de un esfuerzo más amplío por parte del gobierno colombiano para fortalecer su control sobre la región amazónica, la cual había sido objeto de disputas territoriales con Perú y Brasil. La región del Amazonas, conocida como el “Trapecio Amazónico”, es una zona estratégica debido a su riqueza en recursos naturales junto con su posición geográfica. El establecimiento de la Intendencia Nacional del Amazonas permitió una mayor presencia militar y naval en la región, facilitando la protección de las fronteras y la navegación fluvial, fortaleciendo la lucha contra el narcotráfico y sus delitos conexos transnacionales."  
      break;
    case 10:
      document.getElementById("asd").style.display = "block";
            document.getElementById("HistoryDerechos").innerHTML = "Tropas peruanas marchan hacia La Pedrera. Fuente: Libro La Fuerza Naval del Sur en la Amazonía colombiana, 2017)."

      document.getElementById("TituloPutumayo").innerHTML = "Conflicto en La Pedrera (1911)"
      document.getElementById("TextPutumayo").innerHTML = "“El conflicto de La Pedrera fue un enfrentamiento armado entre Colombia y Perú que tuvo lugar en el año 1911 en el Puesto Fronterizo de La Pedrera, una pequeña localidad ubicada a..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Conflicto en La Pedrera (1911)"
      document.getElementById("TextPopAmazonas").innerHTML = "“El conflicto de La Pedrera fue un enfrentamiento armado entre Colombia y Perú que tuvo lugar en el año 1911 en el Puesto Fronterizo de La Pedrera, una pequeña localidad ubicada a orillas del río Caquetá, en la región amazónica. Este conflicto surgió por las disputas territoriales no resueltas entre ambos países en la cuenca amazónica, en donde la delimitación de las fronteras eran imprecisas y los intereses económicos en la extracción de caucho intensificaban las tensiones. La disputa en el territorio, inició el 10 de julio de 1911, y después de dos días de intensa lucha por parte de las tropas colombianas, estas se retiraron con arrojo y valentía hacia una localidad de Brasil dadas las condiciones de inferioridad en las que se encontraban; sin embargo, esta confrontación fue el preludio de lo que veinte años después se convertiría en el conflicto Colombo – Peruano”. (Revista Putumayo, 2012. P. 19). “El conflicto terminó en el año 1911 con la firma del Tratado Tezanos Pinto-Larrea que reafirmó el compromiso de Colombia y Perú de resolver sus diferencias a través del diálogo y la negociación diplomática. Aunque no resolvió definitivamente la situación fronteriza, este tratado ayudó a mantener la paz temporal entre ambos países” (Libro Historia de la Fuerza Naval del Sur en la Amazonía Colombiana, 2017. P. 37-38)."  
      break;
    case 11:
      document.getElementById("asd").style.display = "block";
            document.getElementById("HistoryDerechos").innerHTML = "Conmemoración aniversario No. 72 de la Base Naval ARC Leguízamo. Fuente: Archivo Armada Nacional, año 2015."

      document.getElementById("TituloGuaviare").innerHTML = "Auge de la extracción de quina, tigrillos, caucho y madera (1920-1950)"
      document.getElementById("TextGuaviare").innerHTML = "Durante el auge de la extracción de quina, tigrillos, caucho y madera entre 1920 y 1950, la Armada de Colombia desempeñó un papel fundamental en el territorio que actualmente compone..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Auge de la extracción de quina, tigrillos, caucho y madera (1920-1950)"
      document.getElementById("TextPopAmazonas").innerHTML = "Durante el auge de la extracción de quina, tigrillos, caucho y madera entre 1920 y 1950, la Armada de Colombia desempeñó un papel fundamental en el territorio que actualmente compone el departamento de Guaviare, llevando a cabo operaciones de control territorial en los afluentes y zonas de extracción para asegurar que no se presentaran infiltraciones ni actividades ilegales que amenazaran la estabilidad y seguridad de la región. Así mismo, la Armada de Colombia facilitó el transporte de materiales y personal hacia y desde las áreas de extracción, asegurando que las operaciones pudieran llevarse a cabo de manera eficiente y segura. En ese sentido, también se ayudó a salvaguardar las fronteras, evitar conflictos con países vecinos, asegurar la soberanía colombiana y proporcionar asistencia a las comunidades locales, con el fin de adaptarse a los cambios económicos y sociales provocados por la extracción de recursos naturales. Finalmente, la Institución Naval desempeñó un papel en la regulación y control de las actividades extractivas para minimizar el impacto ambiental, aunque la explotación de recursos naturales durante este período tuvo efectos significativos en el medio ambiente."  
      break;
    case 12:
      document.getElementById("asd").style.display = "none";
            document.getElementById("HistoryDerechos").innerHTML = ""

      document.getElementById("TituloGuaviare").innerHTML = "Militar para la Consolidación de la soberanía en la Frontera Amazónica (1930-1940)"
      document.getElementById("TextGuaviare").innerHTML = "En la década de 1930, luego del conflicto Colombo – Peruano (1932-1933), Colombia fortaleció su presencia militar en los territorios amazónicos, incluyendo lo que ahora es el..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Militar para la Consolidación de la soberanía en la Frontera Amazónica (1930-1940)"
      document.getElementById("TextPopAmazonas").innerHTML = "En la década de 1930, luego del conflicto Colombo – Peruano (1932-1933), Colombia fortaleció su presencia militar en los territorios amazónicos, incluyendo lo que ahora es el departamento de Guaviare, para asegurar las fronteras definidas por el Tratado Salomón-Lozano (1922). La Armada de Colombia ejerció su presencia mediante exploraciones, patrullajes fluviales y operaciones coordinadas con el Ejército Nacional, con el fin de consolidar la soberanía del territorio en los ríos Guaviare y sus afluentes. Finalmente, la Institución Naval contribuyó a establecer puestos de control fluvial y asegurar la estabilidad en la región, demostrando un alto nivel de alistamiento e importante capacidad operacional y logística para la consolidación territorial."  
      break;
    case 13:
      document.getElementById("asd").style.display = "none";
            document.getElementById("HistoryDerechos").innerHTML = ""

      document.getElementById("TituloGuaviare").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Ferza Naval de la Amazonía (1991)"
      document.getElementById("TextGuaviare").innerHTML = "En 1991, con la promulgación de la nueva Constitución Política de Colombia, el Guaviare fue elevado a la categoría de departamento, en el marco de la redistribución territorial..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Ferza Naval de la Amazonía (1991)"
      document.getElementById("TextPopAmazonas").innerHTML = "En 1991, con la promulgación de la nueva Constitución Política de Colombia, el Guaviare fue elevado a la categoría de departamento, en el marco de la redistribución territorial que buscaba mejorar la administración y el desarrollo de las regiones más alejadas del país. Antes del año 1991, el Guaviare era considerado una Comisaría Especial, una entidad administrativa que no tenía la misma autonomía ni recursos. En ese sentido, la creación del departamento de Guaviare consolidó la presencia de la Fuerza Naval de la Amazonía en la región, la cual, desempeñó un rol fundamental en la protección de las zonas fronterizas, la lucha frontal contra el narcotráfico, así como, la defensa de los recursos naturales. Adicionalmente, la nueva administración permitió una mejor distribución de recursos y una mayor atención a las necesidades de la población. Es importante mencionar que, desde su creación el departamento de Guaviare ha enfrentado varios desafíos, incluyendo la preservación del medio ambiente y la protección de los derechos de las comunidades indígenas, sin embargo, la Fuerza Naval de la Amazonía ha continuado de manera irrestricta cumpliendo con su misión de proteger a la población civil, garantizar la soberanía y el control territorial, contrarrestar las actividades ilícitas y delitos conexos trasnacionales, así como, coadyuvar al desarrollo sostenible de la región amazónica. "  
      break;
      //
    //case 14:
    //  document.getElementById("TituloGuaviare").innerHTML = "Historia4"
     // document.getElementById("TextGuaviare").innerHTML = ""
    //  document.getElementById("TituloPopAmazonas").innerHTML = "Historia4"
     // document.getElementById("TextPopAmazonas").innerHTML = ""  
     // break;
      
    //case 15:
      //document.getElementById("TituloGuaviare").innerHTML = "Historia5"
      //document.getElementById("TextGuaviare").innerHTML = ""
      //document.getElementById("TituloPopAmazonas").innerHTML = "Historia4"
      //document.getElementById("TextPopAmazonas").innerHTML = ""  
      //break;
    case 16:
      document.getElementById("asd").style.display = "none";

      document.getElementById("TituloBaupez").innerHTML = "Inclusión en el Territorio Nacional del Caquetá (1858)"
      document.getElementById("TextBaupez").innerHTML = "En 1958, el Caquetá fue incluido como Territorio Nacional de Colombia, y la Armada de Colombia desempeñó un rol determinante en contribuir a la navegación y el control de las rutas..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Inclusión en el Territorio Nacional del Caquetá (1858)"
      document.getElementById("TextPopAmazonas").innerHTML = "En 1958, el Caquetá fue incluido como Territorio Nacional de Colombia, y la Armada de Colombia desempeñó un rol determinante en contribuir a la navegación y el control de las rutas fluviales que comprenden este departamento. En ese sentido, la Armada de Colombia facilitó el desarrollo de la región y tuvo varias responsabilidades durante este proceso de reorganización territorial, entre ellas: 1.	Desarrollar patrullajes fluviales en las zonas estratégicas de la región, asegurando que no se produjeran actividades ilícitas que amenazaran la estabilidad y seguridad de las comunidades autóctonas del departamento. 2.	Se facilitó el transporte del personal militar y civil, suministros, medicamentos, alimentos, entre otros, esenciales para la región, manteniendo el orden y control territorial. 3.	Se garantizó la protección de las fronteras del departamento del Caquetá, evitando conflictos con países vecinos y asegurando la soberanía colombiana en la zona. 4.	Se proporcionó asistencia a las comunidades locales, brindándoles atención oportuna, bienestar y seguridad. "  
      break;
    case 17:
      document.getElementById("asd").style.display = "none";

      document.getElementById("TituloBaupez").innerHTML = "Honor y valentía de un héroe de la Armada de Colombia, CP Filigonio Hichamón Kuegajima (Q.E.P.D) (1981)"
      document.getElementById("TextBaupez").innerHTML = "“El Cabo Primero de Infantería de Marina Filogonio Hichamón Kuegajima (Q.E.P.D), desempeñó un papel crucial en la Fuerza de Tarea “Leopardo” de la Armada de Colombia, su misión..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Honor y valentía de un héroe de la Armada de Colombia, CP Filigonio Hichamón Kuegajima (Q.E.P.D) (1981)"
      document.getElementById("TextPopAmazonas").innerHTML = "“El Cabo Primero de Infantería de Marina Filogonio Hichamón Kuegajima (Q.E.P.D), desempeñó un papel crucial en la Fuerza de Tarea “Leopardo” de la Armada de Colombia, su misión consistía en recopilar información estratégica del grupo armado ilegal de ese entonces, liderado por Jairo Capera Díaz. Lamentablemente, su identidad fue descubierta, y el 31 de octubre de 1981 en el sector de Peñas Blancas (Caquetá), fue capturado, torturado y finalmente ejecutado con un tiro de gracia a orillas del río Caquetá. Antes de su muerte, Hichamón manifestó a Capera: “Yo hice mi trabajo mejor que usted”. En reconocimiento a su valentía y sacrificio, la Armada de Colombia incorporó en 1993 una unidad a flote Patrullera de Apoyo Fluvial denominada ARC “CP Filigonio Hichamón” (El Boletím – Medio de difusión de la Infantería de Marina de Colombia. Edición No. 50 – Año 2020. Artículo Fuerza Naval del Sur, unidad de memoria histórica, por Teniente de Navío Wilmar Raúl Amaya Plata – Asesor Jurídico Operacional Fuerza Naval del Sur. P. 100-101). "  
      break;
    case 18:
      document.getElementById("asd").style.display = "none";

      document.getElementById("TituloBaupez").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)"
      document.getElementById("TextBaupez").innerHTML = "“El 18 de febrero de 1905, mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)"
      document.getElementById("TextPopAmazonas").innerHTML = "“El 18 de febrero de 1905, mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización buscaba una mejor administración de las regiones amazónicas”  (Hacia la departamentalización. Instituto Geográfico Agustín Codazzi IGAC - Diccionario Geográfico. Gobernación del Departamento del Caquetá). De su extenso territorio, que inicialmente cubría toda la región al sur del río Guaviare se desprendieron sucesivamente las intendencias y comisarías amazónicas. La colonización del Caquetá se inició en realidad en 1930 con motivo del conflicto Colombo – Peruano, y se destaca que la extracción del caucho era el eje fundamental de la economía en este periodo. Elevación a departamento (1981) El 15 de diciembre de 1981, mediante la Ley 78 se erige en Departamento la Intendencia Nacional del Caquetá, consolidando su estructura administrativa actual y ratificando a Florencia como su capital. Estos eventos reflejan la evolución administrativa del Caquetá, desde sus inicios como territorio nacional hasta su consolidación como departamento, destacando la importancia estratégica y geográfica de la región en el contexto colombiano. La creación del departamento del Caquetá consolidó la presencia de la Fuerza Naval de la Amazonía en la región, desempeñando un papel fundamental en la lucha frontal contra el narcotráfico y sus delitos conexos, la defensa de los intereses fluviales y recursos naturales, así como, la asistencia y protección de las comunidades y población civil de la cuenca amazónica."  
      break;
    //case 19:
      //document.getElementById("TituloBaupez").innerHTML = "Historia4"
     // document.getElementById("TextBaupez").innerHTML = ""
      //document.getElementById("TituloPopAmazonas").innerHTML = "Historia4"
      //document.getElementById("TextPopAmazonas").innerHTML = ""  
      //break;
   // case 20:
     // document.getElementById("TituloBaupez").innerHTML = "Historia5"
     // document.getElementById("TextBaupez").innerHTML = ""
      //document.getElementById("TituloPopAmazonas").innerHTML = "Historia4"
      //document.getElementById("TextPopAmazonas").innerHTML = ""  
      //break;
    case 21:
      document.getElementById("asd").style.display = "none";

      document.getElementById("TituloAmazonas").innerHTML = "Creación de la Intendencia del Vaupés (1910)"
      document.getElementById("TextAmazonas").innerHTML = "El territorio del Vaupés fue reconocido como parte de la Intendencia del Caquetá en 1910. Posteriormente, en 1913, se creó la Intendencia del Vaupés como una entidad administrativa..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación de la Intendencia del Vaupés (1910)"
      document.getElementById("TextPopAmazonas").innerHTML = "El territorio del Vaupés fue reconocido como parte de la Intendencia del Caquetá en 1910. Posteriormente, en 1913, se creó la Intendencia del Vaupés como una entidad administrativa propia, bajo el gobierno central. Esto marcó el inicio del reconocimiento de la región como una unidad político-administrativa. Transformación en Comisaría Especial (1943) En 1943, el Vaupés dejó de ser una intendencia para convertirse en una Comisaría Especial. Esto implicó un cambio en el modelo administrativo, aumentando la supervisión directa del gobierno nacional sobre la región debido a su importancia geoestratégica, su diversidad cultural y su riqueza natural. Elevación a departamento (1991) Con la promulgación de la Constitución Política de Colombia en 1991, el Vaupés fue elevado a la categoría de departamento. Este cambio fortaleció su autonomía administrativa y política, permitiendo mayor participación en el desarrollo regional y en la protección de sus comunidades indígenas y su biodiversidad. La intervención de la Armada de Colombia contribuyó a la oportuna creación de la Intendencia y Comisaría del Vaupés, dado que su aporte estratégico-operacional consolidó la estabilidad de la región, en lo concerniente al control territorial, soberanía en las zonas fronterizas y desarrollo integral de las comunidades."  
      break;
    case 22:
      document.getElementById("asd").style.display = "none";

      document.getElementById("TituloAmazonas").innerHTML = "Gran migración debido a la violencia política en Colombia (1948-1958)"
      document.getElementById("TextAmazonas").innerHTML = "Durante la gran migración debido a la violencia política en Colombia en el año de 1968, en el departamento del Vaupés el conflicto adoptó una dinámica particular debido a su condición..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Gran migración debido a la violencia política en Colombia (1948-1958)"
      document.getElementById("TextPopAmazonas").innerHTML = "Durante la gran migración debido a la violencia política en Colombia en el año de 1968, en el departamento del Vaupés el conflicto adoptó una dinámica particular debido a su condición de territorio selvático y de difícil acceso. Esta región, habitada en su mayoría por comunidades indígenas, fue escenario de abusos y enfrentamientos entre los grupos armados que buscaban imponer su control político y territorial. La violencia política durante la década de 1960, conocida como “La Violencia”, llevó a una migración masiva de personas que huían de sus hogares en busca de seguridad. Esta situación generó una crisis humanitaria que requería una respuesta coordinada y efectiva. En ese sentido, la Armada de Colombia desempeñó un rol fundamental en la protección y asistencia de los desplazados, toda vez que, la geografía era atravesada por los ríos Apaporis y el Vaupés. Al ser una zona selvática, la navegación fluvial era la principal forma de transporte y comunicación, lo que hizo que la Institución Naval tuviera un rol estratégico."  
      break;
    case 23:
      document.getElementById("asd").style.display = "none";

      document.getElementById("TituloAmazonas").innerHTML = "Impacto de la explotación cauchera (1960-1970)"
      document.getElementById("TextAmazonas").innerHTML = "La industria del caucho tuvo una influencia significativa en la dinámica migratoria del Vaupés. Durante las décadas de 1960 y 1970, la explotación cauchera afectó las estructuras sociales..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Impacto de la explotación cauchera (1960-1970)"
      document.getElementById("TextPopAmazonas").innerHTML = "La industria del caucho tuvo una influencia significativa en la dinámica migratoria del Vaupés. Durante las décadas de 1960 y 1970, la explotación cauchera afectó las estructuras sociales y económicas de las comunidades indígenas, generando tensiones y disputas sobre la regulación del trabajo indígena entre caucheros, misioneros y funcionarios. Estas tensiones contribuyeron a que algunas comunidades indígenas buscaran establecerse en nuevas regiones (Revista Colombiana de Antropología. Volumen 46 (2), julio-diciembre 2010. P. 331)."  
      break;
    case 24:
      document.getElementById("asd").style.display = "none";

      document.getElementById("TituloAmazonas").innerHTML = "Toma de Mitú – Vaupés (1998)"
      document.getElementById("TextAmazonas").innerHTML = "La toma de Mitú – Vaupés, el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP, que dejó como resultado 24 militares, 16 policías..."      
      document.getElementById("TituloPopAmazonas").innerHTML = "Toma de Mitú – Vaupés (1998) VERIFICAR VIABLIDAD DE INCLUIR ESTE HECHO"
      document.getElementById("TextPopAmazonas").innerHTML = "La toma de Mitú – Vaupés, el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP, que dejó como resultado 24 militares, 16 policías, 11 civiles muertos, 47 uniformados heridos y más de 60 secuestrados. Durante 72 horas, la población de Mitú estuvo sometida a crímenes de guerra y de lesa humanidad, una muestra de la violación a los Derechos Humanos y el Derecho Internacional Humanitario. Sin embargo, las Fuerzas Militares de Colombia desplegaron todas sus capacidades aéreas, fluviales y terrestres para consolidar el territorio y proteger a la población civil de las acciones violentas, en donde más de 1200 uniformados de la Fuerza Pública enfrentaron entre 900 y 1500 guerrilleros que participaron en el ataque. (Diferentes fuentes de información)"  
      break;
    //case 25:
     // document.getElementById("TituloAmazonas").innerHTML = "Historia1"
     // document.getElementById("TextAmazonas").innerHTML = ""
    //  document.getElementById("TituloPopAmazonas").innerHTML = "Historia4"
     // document.getElementById("TextPopAmazonas").innerHTML = ""  
    //  break;
    default:

  }
        document.getElementById("asd").src= ImgPutumayoLink + NumHistory + ".webp"
}
//console.log(puntosRojosX)



