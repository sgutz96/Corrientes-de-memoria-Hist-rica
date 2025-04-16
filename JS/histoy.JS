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

  // Calcular la posición Y del punto azul
  const poimt1 = mitadViewport2 - primerPuntoY;
  const poimt2 = mitadViewport2 - segundPuntoY;

  if (poimt1 >= 0 && poimt2 <= 0) {
    console.log(NumHistory)
    setElementAbsoluteTop(puntoAzul, mitadViewport2);
    setElementAbsoluteLeft(puntoAzul);
    setElementAbsoluterotate(puntoAzul);
    if (isEspanish) {
      ChangeTextEsp();
    } else {
      ChangeTextEng();
    }

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

// Función para cambiar el texto al español
function ChangeTextEsp() {
  var ImgPutumayoLink = "./Assets/IMG/Hitoria/historias/IMG/his-"
  switch (NumHistory) {
    case 0:
      document.getElementById("").innerHTML = ""
      break;
    case 1:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "El Imperio conocido como Casa Arana explotó el caucho en la región amazónica. Fuente: Libro *La Fuerza Naval del Sur en la Amazonía colombiana*, 2017.";
      document.getElementById("Titulocaqueta").innerHTML = "Casa Arana: La rebelión por el caucho (1904-1907)";
      document.getElementById("Textcaqueta").innerHTML = "La Casa Arana presenta una estructura colonial con características típicas de la arquitectura adaptada a la región amazónica, donde predominan el uso de materiales locales como la madera...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Casa Arana: La rebelión por el caucho (1904-1907)";
      document.getElementById("TextPopAmazonas").innerHTML =
      "En el año 1904, la compañía denominada Peruvian Amazon Company, con sede central en Londres, se encontraba en la Amazonía colombiana, " +
      "y fue allí donde estableció relaciones con Julio César Arana, las cuales terminaron en una fusión en 1907, asegurando la viabilidad y el futuro de la empresa, " +
      "al que él mismo le dio el nombre de Casa Arana.<br><br>" +
  
      "La Casa Arana se estableció en 1912 en La Chorrera, a orillas del río Igaraparaná, departamento de Amazonas; y contaba con una estructura colonial " +
      "con características típicas de la arquitectura adaptada a la región amazónica, en donde predominaban el uso de materiales locales como madera y techos de palma.<br><br>" +
  
      "Sin embargo, el sitio es tristemente célebre por ser uno de los principales centros de explotación y abuso de los pueblos indígenas de la región, " +
      "particularmente de las comunidades Huitoto, Bora y Ocaína, sometidas a trabajos forzados para la extracción de caucho, el cual era fuente de riqueza " +
      "y de transformaciones culturales y sociales en la Amazonía.<br><br>" +
  
      "“Funcionaba como centro de acopio y escenario de castigos para aquellos que no cumplían con las cuotas impuestas. La Casa Arana estaba organizada en torno a dos centros de acopio, " +
      "La Chorrera, para la zona del río Igaraparaná, y El Encanto, para la región del río Caraparaná, desde donde se embarcaba el caucho a Iquitos, Perú y de allí al exterior. " +
      "Ambas se subdividían en secciones de acuerdo con los diferentes asentamientos indígenas: quince para La Chorrera y ocho para El Encanto” " +
      "(<i>El libro rojo del Putumayo</i>, Norman, Thomson - Roberto, Pineda Camacho. P. 13-14).<br><br>" +
  
      "Los indígenas eran sometidos a un sistema de “endeude”, donde se les entregaban herramientas como machetes a cambio de cantidades desproporcionadas de caucho, " +
      "creando deudas impagables que perpetuaban su esclavitud”. " +
      "(Artículo BBC.com – “El Paraíso del diablo: las atrocidades del ‘holocausto del caucho’ en la Amazonía de Colombia”, por: Andrea Díaz Cardona, 26 de agosto 2022. " +
      "Página web: <a href='https://www.bbc.com/mundo/noticias-america-latina-60922508' target='_blank'>https://www.bbc.com/mundo/noticias-america-latina-60922508</a>).<br><br>" +
  
      "Actualmente, la Casa Arana es un “Centro de Conocimiento” para jóvenes indígenas de la región del Putumayo; y es considerada un símbolo del recuerdo y la memoria histórica " +
      "en la lucha por los derechos indígenas durante los años de desarrollo económico en el sur de Colombia. En ese sentido, se ha convertido en un lugar de reflexión y en algunos casos, " +
      "en un destino para dignificar a las víctimas del conflicto armado acaecido en el pasado” " +
      "(<i>Libro La Historia de la Fuerza Naval del Sur en la Amazonía Colombia</i>, 2017. Capítulo 5, P. 30-32).<br><br>";
  
      //
      break;
    case 2:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Archivo fotográfico del ICANH. Fuente: <a href='https://colecciones.icanh.gov.co/articulos/expeEtnologica.php#undefined' target='_blank'>Expedición Etnológica a la Intendencia del Putumayo (1945-1946)</a>.";
      document.getElementById("Titulocaqueta").innerHTML = "Creación de la Intendencia del Putumayo (1905)";
      document.getElementById("Textcaqueta").innerHTML = "La reorganización territorial de 1905, bajo la presidencia de Rafael Reyes Prieto, tenía como objetivo debilitar las grandes unidades territoriales y frenar los intentos separatistas...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación de la Intendencia del Putumayo (1905)";
      document.getElementById("TextPopAmazonas").innerHTML =
      "La reorganización territorial de 1905, bajo la presidencia de Rafael Reyes Prieto, buscaba debilitar las grandes unidades territoriales y frenar los intentos separatistas, " +
      "por lo cual, la creación de la Intendencia del Putumayo fue parte de este esfuerzo por consolidar el control colombiano sobre la región amazónica.<br><br>" +
  
      "La Armada de Colombia fue fundamental en la seguridad de la región durante este proceso. A continuación, se describen algunas de las funciones que dieron lugar al eficiente control territorial:<br><br>" +
  
      "<strong>1. Patrullaje fluvial:</strong> Se realizaron despliegues constantes en los ríos de la región, asegurando que no hubiera infiltraciones ni actividades ilegales que pudieran amenazar la estabilidad.<br>" +
      "<strong>2. Transporte de Fuerzas:</strong> Facilitó el transporte de tropas y suministros a la nueva Intendencia del Putumayo, asegurando que las autoridades civiles y militares pudieran establecerse rápidamente.<br>" +
      "<strong>3. Protección de fronteras:</strong> La Armada de Colombia ayudó a proteger las fronteras de la región, evitando conflictos con países vecinos y asegurando la soberanía colombiana en la zona.<br>" +
      "<strong>4. Asistencia a la población local:</strong> Proporcionó asistencia a las comunidades locales, ayudándoles a adaptarse a los cambios administrativos y asegurando su seguridad y bienestar.<br><br>" +
  
      "La contribución de la Armada de Colombia fue vital para el éxito de la reorganización territorial y para la estabilidad del Putumayo. " +
      "Su presencia ayudó a consolidar el control colombiano y a garantizar la seguridad y el desarrollo de la región.<br><br>";
  
        //
      break;
    case 3:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Formación de la Flotilla de Guerra del Putumayo. Fuente: *Pañol de la Historia*, “El Combate de Güepí, y los cañoneros Cartagena y Santa Marta”, por: Capitán de Navío Carlos A. Prieto Ávila – Cyber-corredera. Página web: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>.";
      document.getElementById("Titulocaqueta").innerHTML = "Flotilla de Guerra del Putumayo (1931)";
      document.getElementById("Textcaqueta").innerHTML = "La Flotilla de Guerra del Putumayo fue creada en 1931 mediante el Decreto 1507 del 31 de agosto de ese año, como una medida para fortalecer la presencia colombiana en la región amazónica ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Flotilla de Guerra del Putumayo (1931)";
      document.getElementById("TextPopAmazonas").innerHTML =
      "La Flotilla de Guerra del Putumayo fue creada mediante el Decreto 1507 del 31 de agosto de 1931. " +
      "Esta decisión se tomó en respuesta a la necesidad de fortalecer la presencia militar en la región amazónica y proteger la soberanía nacional en el área del río Putumayo, " +
      "por lo que estaba conformada por los cañoneros ARC “Cartagena” y ARC “Santa Marta”, que fueron trasladados desde Santa Cruz en el río Magdalena hasta el Puerto de Caucayá sobre el río Putumayo” " +
      "(<i>Pañol de la Historia, “El Combate de Güepí, y los cañoneros Cartagena y Santa Marta”</i>, por: Capitán de Navío Carlos A. Prieto Ávila – Cyber-corredera, Página web: " +
      "<a href='https://www.cyber-corredera.de/panoles/Panol-48.htm' target='_blank'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>).<br><br>" +
  
      "La creación de esta flotilla fue una medida estratégica para reforzar la presencia estatal en esta zona. " +
      "Además, desempeñó un papel crucial durante el conflicto Colombo – Peruano (1932-1933), al desplegar de manera permanente unidades para efectuar operaciones de patrullaje y control fluvial en la región.<br><br>" +
  
      "<strong>Creación de la Base Fluvial del Putumayo (1940)</strong><br><br>" +
  
      "“El 8 marzo de 1940 se creó la Base Fluvial del Putumayo, mediante el Decreto 0487 del 8 de marzo de 1940, el cual reorganizó en su momento a la Infantería de Marina y, " +
      "dada la experiencia vivida en el conflicto con el Perú, estableció que la Compañía de Infantería de Marina y la Flotilla Fluvial quedarían bajo órdenes del Ejército Nacional” " +
      "(<i>Libro La Infantería de Marina en la Historia de Colombia</i>, 2021. Capítulo 5, P. 204).<br><br>";
  
      //
      break;
    case 4:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Puesto Avanzado de Monclart. Fuente: *Libro La Infantería de Marina en la Historia de Colombia*, 2021.";
      document.getElementById("Titulocaqueta").innerHTML = "Creación del Puesto Fluvial Avanzado Monclart (1933)";
      document.getElementById("Textcaqueta").innerHTML = "El 20 de enero de 1933, después del conflicto con el Perú, fue creado el Puesto Fluvial Avanzado de Monclart, unidad que se entregó en forma oficial a la Armada de Colombia ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación del Puesto Fluvial Avanzado Monclart (1933)";
      document.getElementById("TextPopAmazonas").innerHTML =
      "“El 20 de enero de 1933, después del conflicto con el Perú fue creado el Puesto Fluvial Avanzado de Monclart, unidad que se entregó en forma oficial a la Armada de Colombia por el Ejército Nacional mediante Decreto 2167 de noviembre de 1943, " +
      "como parte de las fuerzas de cobertura de la frontera sur del país. Esta unidad militar fue en realidad un traslado del antiguo Puesto de “Chamaco” que estaba situado enfrente del puesto peruano de Güepí” " +
      "(<i>Libro La Infantería de Marina en la Historia de Colombia</i>, 2021. Capítulos 3 y 5 - P. 37 y 218).<br><br>" +
  
      "Dados los inconvenientes presentados durante el conflicto, al tener un puesto extranjero tan cercano, se trasladó 10 kilómetros más abajo hasta el inicio de la vía que comunicaba con Las Delicias, sobre el río Caquetá.<br><br>" +
  
      "Cabe resaltar que el Puesto Fluvial Avanzado Monclart fue esencial para asegurar el control del río Putumayo, una vía fluvial fundamental para el comercio y las operaciones militares. " +
      "Así mismo, este puesto fluvial funcionó como una base de apoyo para proporcionar suministros, alojamiento para las tropas colombianas, y un punto de defensa y vigilancia.<br><br>" +
  
      "Su posición geográfica permitió controlar el tránsito fluvial, prevenir incursiones extranjeras y responder rápidamente a cualquier amenaza en la zona fronteriza. " +
      "En ese sentido, representó un hito en la consolidación de la presencia militar colombiana en la Amazonía, marcando el compromiso del país con la defensa de su soberanía.<br><br>";
  

      //
      break;
    case 5:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Botes de la Flotilla “Avispa”. Fuente: *Libro La Infantería de Marina en la Historia de Colombia*, 2021.";
      document.getElementById("Titulocaqueta").innerHTML = "La Flotilla Avispa (1956)";
      document.getElementById("Textcaqueta").innerHTML = "En septiembre de 1956, por iniciativa del Capitán de Infantería de Marina Aurelio Castrillón Muñoz y el Teniente de Fragata Rafael Grau Araujo, quienes prestaban sus servicios ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "La Flotilla Avispa (1956)";
      document.getElementById("TextPopAmazonas").innerHTML =
    "“En septiembre de 1956, por iniciativa del señor Capitán de Infantería de Marina Aurelio Castrillón Muñoz y el Teniente de Fragata Rafael Grau Araujo, quienes prestaban sus servicios en Puerto Leguízamo (Putumayo), " +
    "se creó la “Flotilla Avispa” que realizó una demostración ante el alto mando militar en aguas del río Putumayo con botes armados y tripulados por Infantes de Marina, " +
    "en una contundente exhibición de velocidad y maniobrabilidad superiores a los cañoneros ARC “Cartagena” y ARC “Santa Marta”.<br><br>" +

    "La organización inicial contemplaba 7 botes artillados: 6 que llevaban la Fuerza de Tarea Fluvial y 1 bote de Comando y Control. " +
    "La “Flotilla Avispa” quedó bajo mando operacional de la Compañía Kilo de Puerto Leguízamo. " +
    "Los botes utilizados eran de 13 pies de eslora y 1,5 pies de calado, con una capacidad de carga de 800 kilos y tripulado por 6 hombres cada uno; " +
    "organización que se mantuvo hasta 1971, cuando el Capitán de Infantería de Marina Alejandro Pimiento le dio un nuevo impulso con la creación de los Comandos de Selva " +
    "(Apartes tomados textualmente de la Organización Operativa de la Flotilla Avispa, septiembre de 1956).<br><br>" +

    "Para el funcionamiento de la Flotilla Avispa, se creó un manual el cual presentó un proyecto de organización en el que se resaltaban las necesidades tácticas de esta unidad. " +
    "Cada grupo de tarea estaba conformado por nueve botes, cada uno de ellos tripulado por cuatro hombres, acompañados por un pelotón, " +
    "el cual tenía la organización administrativa de un pelotón " +
    "(<i>Libro La Infantería de Marina en la Historia de Colombia</i>, 2021. Capítulo 3 - P. 58).<br><br>" +

    "La creación de la Flotilla Avispa permitió dar a conocer la capacidad de adaptación de las Fuerzas Militares de Colombia a las exigencias del combate en los escenarios fluviales de la región amazónica. " +
    "Su éxito contribuyó significativamente al esfuerzo bélico de Colombia y a la recuperación de Leticia, demostrando la importancia del poder fluvial en conflictos territoriales fronterizos, " +
    "fundamental para el desarrollo de las futuras unidades fluviales de la Armada de Colombia, esenciales para la soberanía, seguridad y desarrollo integral de las comunidades de la Amazonía colombiana.<br><br>";
      //
      break;
//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas//amazonas
    case 6:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "ARC Cartagena. Fuente: *Libro La Infantería de Marina en la Historia de Colombia*, 2021.";
      document.getElementById("TituloPutumayo").innerHTML = "Conflicto Colombo – Peruano, conocido como Conflicto de Leticia (1932-1933)";
      document.getElementById("TextPutumayo").innerHTML = "En 1932, debido a las fluctuaciones políticas en los países latinoamericanos, surgió el conflicto entre Colombia y Perú. A principios de septiembre, un grupo de civiles peruanos ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Conflicto Colombo – Peruano, conocido como Conflicto de Leticia (1932-1933)";
      document.getElementById("TextPopAmazonas").innerHTML =
    "En el año 1932, con los vaivenes de la política en los países latinoamericanos, sobrevino el conflicto de Colombia con el Perú. " +
    "A comienzos de septiembre, un grupo de civiles peruanos se tomó por asalto a Leticia (Amazonas) y capturó a todos los moradores colombianos.<br><br>" +

    "Es por esto que la presencia de la Armada de Colombia en el sur del país se remonta a cuando, a causa del conflicto Colombo–Peruano, " +
    "fueron destinados los cañoneros fluviales ARC “Cartagena” y ARC “Santa Marta”, el Buque Hospital MC “Yamari” y las unidades “Madeira” y “Esmarck”, estas últimas de origen brasileño, " +
    "las cuales estaban tripuladas en su mayoría por marinos colombianos. Así se conformó la Flotilla Fluvial del Putumayo, que tenía la misión de proteger los ríos fronterizos, " +
    "realizando múltiples operaciones sobre el río Putumayo y salvaguardando la integridad y soberanía del territorio nacional.<br><br>" +

    "“En años anteriores, Colombia se había dedicado a dar solución a diferentes problemas internos y se vio envuelta en un conflicto internacional para lo cual no estaba preparada. " +
    "Como consecuencia de la ingenuidad e imprevisión, la falta de medios tuvo que ser suplida ante tal emergencia con improvisaciones y patriotismo. En ese sentido, se adquirieron algunas unidades de guerra " +
    "y el Gobierno Nacional se vio precisado a contratar un grupo de Oficiales de la Real Armada Británica para que organizara y dirigiera la incipiente Armada de Colombia.<br><br>" +

    "Los peruanos llamaban la “flota suicida” a nuestra improvisada Armada, que debía operar sobre el trapecio amazónico para la reconquista de Leticia (Amazonas), sin embargo, como resultado de las experiencias del conflicto amazónico, " +
    "el Gobierno Nacional crea la moderna Marina de Guerra.<br><br>" +

    "La Misión Inglesa, dirigida por el Almirante Bell O. Salter, organizó al respecto nuestra actual moderna Armada de Colombia, orgullo de todos e insomne vigilante de la soberanía en nuestros mares y ríos limítrofes. " +
    "En primer lugar, se creó la Escuela Naval de Cadetes, por cuanto la anterior Escuela Naval Nacional, creada por el General Rafael Reyes en 1907, había sido abolida. " +
    "La Escuela Naval inició labores a bordo del improvisado Buque Escuela M. G. Cúcuta, el 3 de julio de 1935, con una planta de profesores entre ingleses y colombianos procedentes de la extinguida Escuela Reyes y, " +
    "con la colaboración de Oficiales y Suboficiales del Ejército, adelantaron las respectivas instrucciones de tierra para la marinería y más tarde algunos de ellos ingresaron con mucho entusiasmo a la Armada Nacional " +
    "y se escalafonaron en la Infantería de Marina”.<br><br>" +

    "(<i>Libro La Infantería de Marina en la Historia de Colombia</i>, 2021. Capítulo 3, P. 37)<br><br>";

      //
      break;
    case 7:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "1.png"

      document.getElementById("HistoryDerechos").innerHTML = "Desplazamiento de tropas para el Combate de Guëpí. Fuente: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm' target='_blank'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>";
      document.getElementById("TituloPutumayo").innerHTML = "Batalla de Guëpí (1932-1933)";
      document.getElementById("TextPutumayo").innerHTML = "La Batalla de Guëpí fue un enfrentamiento clave durante la Guerra Colombo – Peruana, ocurrido el 26 de marzo de 1933. Este combate se desarrolló en el contexto de la disputa territorial...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Batalla de Guëpí (1932-1933)";
      document.getElementById("TextPopAmazonas").innerHTML =
      "La Batalla de Güepí fue un enfrentamiento clave durante la Guerra Colombo–Peruana, ocurrido el 26 de marzo de 1933, " +
      "el cual se desarrolló en el contexto de la disputa territorial por la soberanía del Puerto de Leticia y las áreas circundantes, ubicadas en el departamento del Amazonas. " +
      "La batalla fue un ejemplo del papel decisivo de las Fuerzas Militares de Colombia en la recuperación de territorios ocupados por Perú.<br><br>" +
  
      "Cabe indicar que esta reconocida batalla se generó a causa del inconformismo de los hacendados peruanos por la firma del Tratado Salomón–Lozano en el año 1922, " +
      "en donde se redefinieron las fronteras entre Brasil, Colombia y Perú, produciendo la creación de un puesto de aduanas por parte de Colombia en la frontera, " +
      "el cual dificultaba el transporte de caucho y caña de azúcar hacia Iquitos (Perú), afectando sus finanzas.<br><br>" +
  
      "“El conflicto en Güepí se desdobló a lo largo de un sector de 15 kilómetros y durante casi nueve horas sin descanso”.<br>" +
      "(<i>Libro Historia de la Fuerza Naval del Sur en la Amazonía Colombiana</i>, 2017. P. 44).<br><br>" +
  
      "“El 26 de marzo de 1933, durante el conflicto con el Perú, se creó el destacamento del Putumayo y la Flotilla Fluvial. " +
      "Desde Puerto Leguízamo se lanzó la ofensiva contra la guarnición militar peruana de Güepí, en donde nuestros soldados, con un heroísmo sin precedentes, " +
      "se trenzaron en feroz combate cuerpo a cuerpo con el enemigo, y el Sargento Néstor Ospina Melo arrió la bandera peruana e izó la bandera de Colombia, " +
      "y todos los nuestros gritaban “¡Viva Colombia!”. Esta victoria puso fin a la guerra con el Perú y rescató para nuestro país el honor y la dignidad.<br><br>" +
  
      "La máxima personificación del valor de nuestros soldados queda reflejada en Juan Bautista Solarte Obando, quien al descubrir la ametralladora del enemigo " +
      "se lanzó sobre ella para salvar la vida de sus compañeros”.<br>" +
      "(<i>Libro La Infantería de Marina en la Historia de Colombia</i>, 2021. Capítulo 5, P. 203).<br><br>" +
  
      "Un total de 16 militares ofrendaron su vida, siendo este un acto valeroso y heroico que contribuyó a la victoria de las tropas colombianas, " +
      "quienes garantizaron la soberanía nacional y la legitimidad institucional, mediante el despliegue oportuno y eficiente de las capacidades terrestres, fluviales y aéreas.<br><br>";

      //
      break;
    case 8:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Escuadrilla aérea colombiana, Batalla de Tarapacá. Fuente: <a href='https://www.fac.mil.co/es/noticias/batalla-de-tarapaca-hecho-historico-que-marco-la-historia-de-la-aviacion-militar-en' target='_blank'>Artículo: Batalla de Tarapacá, hecho histórico que marcó la historia de la aviación militar en Colombia</a>";
      document.getElementById("TituloPutumayo").innerHTML = "La Batalla de Tarapacá (1933)";
      document.getElementById("TextPutumayo").innerHTML = "La Batalla de Tarapacá, también conocida como el Combate de Nuevo Tarapacá o la defensa del Bajo Putumayo, fue un enfrentamiento militar ocurrido el 14 de febrero de 1933 durante el conflicto Colombo – Peruano (1932-1933)...";
      document.getElementById("TituloPopAmazonas").innerHTML = "La Batalla de Tarapacá (1933)";
      document.getElementById("TextPopAmazonas").innerHTML =
    "La Batalla de Tarapacá, también conocida como el Combate de Nuevo Tarapacá o la defensa del Bajo Putumayo, fue un enfrentamiento militar ocurrido el 14 de febrero de 1933 " +
    "durante el conflicto Colombo–Peruano (1932–1933), en la cual ambas naciones se disputaban una amplia región que circundaba el río Putumayo.<br><br>" +

    "“La batalla inició cuando en horas de la mañana del 14 de febrero de 1933, tropas colombianas sufrieron el ataque de una escuadrilla aérea peruana, " +
    "lo que provocó la respuesta inmediata de la escuadrilla aérea colombiana que se encontraba fondeada en las proximidades a Tarapacá (Amazonas), sin llegarse a dar un combate directo. " +
    "Se buscaba con esta maniobra desconcertar a los peruanos sobre las verdaderas intenciones del ataque.<br><br>" +

    "En ese año, el General Alfredo Vásquez Cobo se traslada a bordo del Destructor ARC “Córdoba” y pide la convergencia sobre Tarapacá (Amazonas), " +
    "de los cañoneros ARC “Cartagena” y ARC “Santa Marta” desde el Alto Putumayo, solicitud que no pudo ser atendida debido a que el destacamento del Putumayo " +
    "adelantaba operaciones en su zona de responsabilidad, que culminarían con el ataque sobre Güepí (Perú).<br><br>" +

    "En horas de la mañana del día 15 de febrero, tuvo lugar el ataque de las unidades fluviales, cuyo desembarco fue dirigido personalmente por el General Efraín Rojas; " +
    "con sorpresa se encontró que la guarnición peruana había abandonado el fortín. A las nueve de la mañana se izó sobre Tarapacá (Amazonas) el pabellón colombiano.<br><br>" +

    "Se restituía a la heredad patria, el primero de los fragmentos que se intentó arrebatar. Con Tarapacá, la proyección del poder aéreo y fluvial colombiano sobre el escenario amazónico " +
    "se hizo más evidente. Se pudo instalar allí una base de apoyo a las operaciones subsiguientes”.<br>" +
    "(<i>Cyber-corredera, Artículo “Se recupera Tarapacá”</i>, Página web: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm' target='_blank'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>).<br><br>" +

    "En la Batalla de Tarapacá, las tropas colombianas tomaron el control del bajo Putumayo, lo que daría una posición relevante para las operaciones posteriores " +
    "en donde logran acercarse más a Leticia (Amazonas). Cabe resaltar que la mediación de la Liga de las Naciones en Ginebra, Suiza puso fin al conflicto, " +
    "devolviendo Leticia a Colombia en el año 1934.<br><br>";

      //
      break;
    case 9:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Estampilla que conmemora la Intendencia del Amazonas, Archivo Banco de la República de Colombia. Fuente: <a href='https://sinchi.org.co/galeria-de-fotos' target='_blank'>https://sinchi.org.co/galeria-de-fotos</a>";
      document.getElementById("TituloPutumayo").innerHTML = "Creación de la Intendencia Nacional del Amazonas (1951)";
      document.getElementById("TextPutumayo").innerHTML = "La Intendencia Nacional del Amazonas fue establecida mediante el Decreto Ley 963 de fecha 14 de marzo de 1951. Esta medida reforzó la presencia de la Armada de Colombia, fortaleció la infraestructura naval y reafirmó el...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación de la Intendencia Nacional del Amazonas (1951)";
      document.getElementById("TextPopAmazonas").innerHTML =
    "La Intendencia Nacional del Amazonas fue establecida mediante el Decreto Ley 963 de fecha 14 de marzo de 1951. " +
    "Esta medida reforzó la presencia de la Armada de Colombia, fortaleció la infraestructura y reafirmó el dominio colombiano sobre el territorio amazónico. " +
    "La Intendencia del Amazonas había sido previamente una entidad territorial creada en 1931 para consolidar la soberanía colombiana en la región tras los conflictos con Perú y Brasil.<br><br>" +

    "La creación de la Intendencia Nacional del Amazonas formó parte de un esfuerzo más amplio por parte del gobierno colombiano para fortalecer su control sobre la región amazónica, " +
    "la cual había sido objeto de disputas territoriales con Perú y Brasil. La región del Amazonas, conocida como el “Trapecio Amazónico”, es una zona estratégica debido a su riqueza en recursos naturales " +
    "junto con su posición geográfica.<br><br>" +

    "El establecimiento de la Intendencia Nacional del Amazonas permitió una mayor presencia militar y naval en la región, facilitando la protección de las fronteras y la navegación fluvial, " +
    "fortaleciendo la lucha contra el narcotráfico y sus delitos conexos transnacionales.<br><br>";

       
      //
      break;
    case 10:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Tropas peruanas marchan hacia La Pedrera. Fuente: Libro La Fuerza Naval del Sur en la Amazonía colombiana, 2017.";
      document.getElementById("TituloPutumayo").innerHTML = "Conflicto en La Pedrera (1911)";
      document.getElementById("TextPutumayo").innerHTML = "El conflicto de La Pedrera fue un enfrentamiento armado entre Colombia y Perú que tuvo lugar en el año 1911 en el Puesto Fronterizo de La Pedrera, una pequeña localidad ubicada a orillas del río Caquetá, en la región amazónica...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Conflicto en La Pedrera (1911)";
      document.getElementById("TextPopAmazonas").innerHTML =
      "“El conflicto de La Pedrera fue un enfrentamiento armado entre Colombia y Perú que tuvo lugar en el año 1911 en el Puesto Fronterizo de La Pedrera, " +
      "una pequeña localidad ubicada a orillas del río Caquetá, en la región amazónica. Este conflicto surgió por las disputas territoriales no resueltas entre ambos países en la cuenca amazónica, " +
      "en donde la delimitación de las fronteras era imprecisa y los intereses económicos en la extracción de caucho intensificaban las tensiones.<br><br>" +
  
      "La disputa en el territorio inició el 10 de julio de 1911, y después de dos días de intensa lucha por parte de las tropas colombianas, " +
      "estas se retiraron con arrojo y valentía hacia una localidad de Brasil dadas las condiciones de inferioridad en las que se encontraban; " +
      "sin embargo, esta confrontación fue el preludio de lo que veinte años después se convertiría en el conflicto Colombo–Peruano”.<br>" +
      "(<i>Revista Putumayo</i>, 2012. P. 19).<br><br>" +
  
      "“El conflicto terminó en el año 1911 con la firma del Tratado Tezanos Pinto-Larrea que reafirmó el compromiso de Colombia y Perú de resolver sus diferencias " +
      "a través del diálogo y la negociación diplomática. Aunque no resolvió definitivamente la situación fronteriza, este tratado ayudó a mantener la paz temporal entre ambos países”.<br>" +
      "(<i>Libro Historia de la Fuerza Naval del Sur en la Amazonía Colombiana</i>, 2017. P. 37-38).<br><br>";
  
      //
      break;
//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE      

    case 11:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Conmemoración del 72º aniversario de la Base Naval ARC Leguízamo. Fuente: Archivo de la Armada Nacional, año 2015.";
      document.getElementById("TituloGuaviare").innerHTML = "Establecimiento de la Flotilla Fluvial del Sur (1929-1930)";
      document.getElementById("TextGuaviare").innerHTML = "Durante el auge de la extracción de quina, tigrillos, caucho y madera, entre 1920 y 1950, la Armada de Colombia desempeñó un papel fundamental en el territorio que actualmente corresponde a...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Establecimiento de la Flotilla Fluvial del Sur (1929-1930)";
      document.getElementById("TextPopAmazonas").innerHTML = 
      "La Flotilla Fluvial del Sur se enmarcó en los esfuerzos de Colombia por fortalecer el control territorial en la cuenca amazónica, salvaguardar las fronteras y ejercer soberanía, especialmente por los conflictos limítrofes con Perú, como el conflicto de La Pedrera (1911) y el conflicto Colombo – Peruano (1932-1933).<br><br>" + 

      "Estos acontecimientos revelaron la necesidad de desarrollar una fuerza naval con capacidades de despliegue fluvial en la región; por lo cual, la flotilla fue formalmente establecida en los inicios de la década de 1930, mediante la ratificación del Protocolo de Río de Janeiro (1934), que reafirmó la soberanía colombiana sobre Leticia y otras zonas disputadas.<br><br>" + 

      "La Armada de Colombia organizó y desplegó unidades fluviales operativas y con alto nivel de alistamiento, entre ellos patrulleras rápidas, lanchas patrulleras de río, cañoneros y remolcadores fluviales, con el fin de efectuar patrullaje sobre los ríos Amazonas, Putumayo y Caquetá, preservando el control y la seguridad de las áreas de responsabilidad asignada, garantizando la legitimidad institucional y la soberanía del territorio colombiano.";
     //
      break;
    case 12:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloGuaviare").innerHTML = "Militar para la consolidación de la soberanía en la frontera amazónica (1930-1940)";
      document.getElementById("TextGuaviare").innerHTML = "En la década de 1930, luego del conflicto colombo-peruano (1932-1933), Colombia fortaleció su presencia militar en los territorios amazónicos, incluyendo lo que actualmente corresponde al...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Militar para la consolidación de la soberanía en la frontera amazónica (1930-1940)";
      document.getElementById("TextPopAmazonas").innerHTML = 
    "Durante el auge de la extracción de quina, tigrillos, caucho y madera entre 1920 y 1950, la Armada de Colombia desempeñó un papel fundamental en el territorio que actualmente compone el departamento de Guaviare, llevando a cabo operaciones de control territorial en los afluentes y zonas de extracción para asegurar que no se presentaran infiltraciones ni actividades ilegales que amenazaran la estabilidad y seguridad de la región.<br><br>" + 

    "Así mismo, la Armada de Colombia facilitó el transporte de materiales y personal hacia y desde las áreas de extracción, asegurando que las operaciones pudieran llevarse a cabo de manera eficiente y segura. En ese sentido, también se ayudó a salvaguardar las fronteras, evitar conflictos con países vecinos, asegurar la soberanía colombiana y proporcionar asistencia a las comunidades locales, con el fin de adaptarse a los cambios económicos y sociales provocados por la extracción de recursos naturales.<br><br>" + 

    "Finalmente, la Institución Naval desempeñó un papel en la regulación y control de las actividades extractivas para minimizar el impacto ambiental, aunque la explotación de recursos naturales durante este período tuvo efectos significativos en el medio ambiente.";

      //
      break;
    case 13:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloGuaviare").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Fuerza Naval de la Amazonía (1991)";
      document.getElementById("TextGuaviare").innerHTML = "En 1991, con la promulgación de la nueva Constitución Política de Colombia, Guaviare fue elevado a la categoría de departamento, en el marco de la redistribución territorial que buscaba mejorar la administración y el desarrollo...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Fuerza Naval de la Amazonía (1991)";
      document.getElementById("TextPopAmazonas").innerHTML =
    "En la década de 1930, luego del conflicto Colombo – Peruano (1932-1933), Colombia fortaleció su presencia militar en los territorios amazónicos, incluyendo lo que ahora es el departamento de Guaviare, para asegurar las fronteras definidas por el Tratado Salomón-Lozano (1922).<br><br>" +

    "La Armada de Colombia ejerció su presencia mediante exploraciones, patrullajes fluviales y operaciones coordinadas con el Ejército Nacional, con el fin de consolidar la soberanía del territorio en los ríos Guaviare y sus afluentes.<br><br>" +

    "Finalmente, la Institución Naval contribuyó a establecer puestos de control fluvial y asegurar la estabilidad en la región, demostrando un alto nivel de alistamiento e importante capacidad operacional y logística para la consolidación territorial.";

      //
      break;
    case 14:
      ///Repetir el caso 13
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloGuaviare").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Fuerza Naval de la Amazonía (1991)";
      document.getElementById("TextGuaviare").innerHTML = "En 1991, con la promulgación de la nueva Constitución Política de Colombia, Guaviare fue elevado a la categoría de departamento, en el marco de la redistribución territorial que buscaba mejorar la administración y el desarrollo...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Fuerza Naval de la Amazonía (1991)";
      document.getElementById("TextPopAmazonas").innerHTML = 
    "En 1991, con la promulgación de la nueva Constitución Política de Colombia, Guaviare fue elevado a la categoría de departamento, en el marco de la redistribución territorial que buscaba mejorar la administración y el desarrollo de las regiones más alejadas del país. Antes del año 1991, Guaviare era considerado una Comisaría Especial, una entidad administrativa que no tenía la misma autonomía ni recursos.<br><br>" +
    
    "En ese sentido, la creación del departamento de Guaviare consolidó la presencia de la Fuerza Naval de la Amazonía en la región, la cual desempeñó un rol fundamental en la protección de las zonas fronterizas, la lucha frontal contra el narcotráfico y la defensa de los recursos naturales. Adicionalmente, la nueva administración permitió una mejor distribución de recursos y una mayor atención a las necesidades de la población.<br><br>" +
    
    "Es importante mencionar que, desde su creación, el departamento de Guaviare ha enfrentado varios desafíos, incluyendo la preservación del medio ambiente y la protección de los derechos de las comunidades indígenas. Sin embargo, la Fuerza Naval de la Amazonía ha continuado de manera irrestricta cumpliendo con su misión de proteger a la población civil, garantizar la soberanía y el control territorial, contrarrestar las actividades ilícitas y delitos conexos transnacionales, así como, coadyuvar al desarrollo sostenible de la región amazónica.";

      //
      break;

      case 15:
      ///Repetir el caso 13
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloGuaviare").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Fuerza Naval de la Amazonía (1991)";
      document.getElementById("TextGuaviare").innerHTML = "En 1991, con la promulgación de la nueva Constitución Política de Colombia, Guaviare fue elevado a la categoría de departamento, en el marco de la redistribución territorial que buscaba mejorar la administración y el desarrollo...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Fuerza Naval de la Amazonía (1991)";
      document.getElementById("TextPopAmazonas").innerHTML = "En 1991, con la promulgación de la nueva Constitución Política de Colombia, Guaviare fue elevado a la categoría de departamento, como parte de una redistribución territorial destinada a mejorar la administración y el desarrollo de las regiones más apartadas del país. Antes de 1991, Guaviare era considerado una Comisaría Especial, una entidad administrativa sin la autonomía ni los recursos de un departamento.\n\n" +
        "En este contexto, la creación del departamento de Guaviare consolidó la presencia de la Fuerza Naval de la Amazonía en la región, que desempeñó un rol fundamental en la protección de las zonas fronterizas, la lucha contra el narcotráfico y la defensa de los recursos naturales. Además, la nueva estructura administrativa permitió una distribución más equitativa de recursos y una mayor atención a las necesidades de la población.\n\n" +
        "Es importante destacar que, desde su creación, el departamento de Guaviare ha enfrentado varios desafíos, como la preservación del medio ambiente y la protección de los derechos de las comunidades indígenas. Sin embargo, la Fuerza Naval de la Amazonía ha continuado, de manera incansable, cumpliendo con su misión de proteger a la población civil, garantizar la soberanía y el control territorial, contrarrestar las actividades ilícitas y los delitos conexos transnacionales, así como contribuir al desarrollo sostenible de la región amazónica.";

      //
      break;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    case 16:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloBaupez").innerHTML = "Inclusión del Caquetá en el Territorio Nacional (1858)";
      document.getElementById("TextBaupez").innerHTML = "En 1858, el Caquetá fue incluido como Territorio Nacional de Colombia, y la Armada de Colombia desempeñó un papel crucial en la navegación y el control de las rutas fluviales que cruzaban este territorio...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Inclusión del Caquetá en el Territorio Nacional (1858)";
      document.getElementById("TextPopAmazonas").innerHTML = "En 1858, el Caquetá fue incluido como Territorio Nacional de Colombia, y la Armada de Colombia desempeñó un rol determinante en la navegación y el control de las rutas fluviales que atraviesan este departamento.\n\n" +
        "En este contexto, la Armada facilitó el desarrollo de la región y asumió varias responsabilidades durante el proceso de reorganización territorial, entre ellas:\n\n" +
        "1. Realizar patrullajes fluviales en las zonas estratégicas del territorio, asegurando que no se produjeran actividades ilícitas que amenazaran la estabilidad y seguridad de las comunidades autóctonas del departamento.\n" +
        "2. Facilitar el transporte de personal militar y civil, así como suministros, medicamentos, alimentos, entre otros, esenciales para el bienestar de la región, manteniendo el orden y control territorial.\n" +
        "3. Garantizar la protección de las fronteras del Caquetá, evitando conflictos con los países vecinos y asegurando la soberanía colombiana en la zona.\n" +
        "4. Brindar asistencia a las comunidades locales, proporcionándoles atención oportuna, bienestar y seguridad.";

      //
      break;
    case 17:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloBaupez").innerHTML = "Honor y valentía de un héroe de la Armada de Colombia, CP Filogonio Hichamón Kuegajima (Q.E.P.D.) (1981)";
      document.getElementById("TextBaupez").innerHTML = "El Cabo Primero de Infantería de Marina Filogonio Hichamón Kuegajima (Q.E.P.D.) desempeñó un papel crucial en la Fuerza de Tarea 'Leopardo' de la Armada de Colombia. Su misión consistía en recopilar información estratégica...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Honor y valentía de un héroe de la Armada de Colombia, CP Filogonio Hichamón Kuegajima (Q.E.P.D.) (1981)";
      document.getElementById("TextPopAmazonas").innerHTML = "El Cabo Primero de Infantería de Marina Filogonio Hichamón Kuegajima (Q.E.P.D.) desempeñó un papel crucial en la Fuerza de Tarea 'Leopardo' de la Armada de Colombia. Su misión consistía en recopilar información estratégica sobre el grupo armado ilegal de ese entonces, liderado por Jairo Capera Díaz.\n\n" +
        "Lamentablemente, su identidad fue descubierta, y el 31 de octubre de 1981, en el sector de Peñas Blancas (Caquetá), fue capturado, torturado y finalmente ejecutado con un tiro de gracia a orillas del río Caquetá. Antes de su muerte, Hichamón le dijo a Capera: 'Yo hice mi trabajo mejor que usted.'\n\n" +
        "En reconocimiento a su valentía y sacrificio, la Armada de Colombia incorporó, en 1993, una unidad a flote, la Patrullera de Apoyo Fluvial ARC 'CP Filogonio Hichamón'. (El Boletín – Medio de difusión de la Infantería de Marina de Colombia, Edición No. 50 – Año 2020. Artículo 'Fuerza Naval del Sur, unidad de memoria histórica', por Teniente de Navío Wilmar Raúl Amaya Plata – Asesor Jurídico Operacional Fuerza Naval del Sur. P. 100-101).";

      //
      break;
    case 18:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloBaupez").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)";
      document.getElementById("TextBaupez").innerHTML = "El 18 de febrero de 1905, mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización tenía como objetivo una mejor administración de las regiones amazónicas...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)";
      document.getElementById("TextPopAmazonas").innerHTML = "El 18 de febrero de 1905, mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización buscaba una mejor administración de las regiones amazónicas. (Hacia la departamentalización. Instituto Geográfico Agustín Codazzi IGAC - Diccionario Geográfico. Gobernación del Departamento del Caquetá).\n\n" +
        "De su extenso territorio, que inicialmente abarcaba toda la región al sur del río Guaviare, se desprendieron sucesivamente las intendencias y comisarías amazónicas. La colonización del Caquetá comenzó en realidad en 1930, como resultado del conflicto Colombo-Peruano. Es importante destacar que la extracción de caucho fue el eje central de la economía en este período.\n\n" +
        "**Elevación a Departamento (1981)**\n\n" +
        "El 15 de diciembre de 1981, mediante la Ley 78, la Intendencia Nacional del Caquetá fue erigida como departamento, consolidando su estructura administrativa actual y ratificando a Florencia como su capital.\n\n" +
        "Estos eventos reflejan la evolución administrativa del Caquetá, desde su inicio como territorio nacional hasta su consolidación como departamento, destacando la importancia estratégica y geográfica de la región en el contexto colombiano.\n\n" +
        "La creación del departamento del Caquetá consolidó la presencia de la Fuerza Naval de la Amazonía en la región, desempeñando un papel fundamental en la lucha frontal contra el narcotráfico y sus delitos conexos, la defensa de los intereses fluviales y los recursos naturales, así como la asistencia y protección de las comunidades y la población civil de la cuenca amazónica.";

      //
      break;
    case 19:
      ///Repetir el caso 18
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloBaupez").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)";
      document.getElementById("TextBaupez").innerHTML = "El 18 de febrero de 1905, mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización tenía como objetivo una mejor administración de las regiones amazónicas...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)";
      document.getElementById("TextPopAmazonas").innerHTML = "El 18 de febrero de 1905, mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización buscaba una mejor administración de las regiones amazónicas. (Hacia la departamentalización. Instituto Geográfico Agustín Codazzi IGAC - Diccionario Geográfico. Gobernación del Departamento del Caquetá).\n\n" +
        "De su extenso territorio, que inicialmente abarcaba toda la región al sur del río Guaviare, se desprendieron sucesivamente las intendencias y comisarías amazónicas. La colonización del Caquetá comenzó en realidad en 1930, como resultado del conflicto Colombo-Peruano. Es importante destacar que la extracción de caucho fue el eje central de la economía en este período.\n\n" +
        "**Elevación a Departamento (1981)**\n\n" +
        "El 15 de diciembre de 1981, mediante la Ley 78, la Intendencia Nacional del Caquetá fue erigida como departamento, consolidando su estructura administrativa actual y ratificando a Florencia como su capital.\n\n" +
        "Estos eventos reflejan la evolución administrativa del Caquetá, desde su inicio como territorio nacional hasta su consolidación como departamento, destacando la importancia estratégica y geográfica de la región en el contexto colombiano.\n\n" +
        "La creación del departamento del Caquetá consolidó la presencia de la Fuerza Naval de la Amazonía en la región, desempeñando un papel fundamental en la lucha frontal contra el narcotráfico y sus delitos conexos, la defensa de los intereses fluviales y los recursos naturales, así como la asistencia y protección de las comunidades y la población civil de la cuenca amazónica.";

      //
      break;
    case 20:
      ///Repetir el caso 18
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloBaupez").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)";
      document.getElementById("TextBaupez").innerHTML = "El 18 de febrero de 1905, mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización tenía como objetivo una mejor administración de las regiones amazónicas...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)";
      document.getElementById("TextPopAmazonas").innerHTML = "El 18 de febrero de 1905, mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización buscaba una mejor administración de las regiones amazónicas. (Hacia la departamentalización. Instituto Geográfico Agustín Codazzi IGAC - Diccionario Geográfico. Gobernación del Departamento del Caquetá).\n\n" +
        "De su extenso territorio, que inicialmente abarcaba toda la región al sur del río Guaviare, se desprendieron sucesivamente las intendencias y comisarías amazónicas. La colonización del Caquetá comenzó en realidad en 1930, como resultado del conflicto Colombo-Peruano. Es importante destacar que la extracción de caucho fue el eje central de la economía en este período.\n\n" +
        "**Elevación a Departamento (1981)**\n\n" +
        "El 15 de diciembre de 1981, mediante la Ley 78, la Intendencia Nacional del Caquetá fue erigida como departamento, consolidando su estructura administrativa actual y ratificando a Florencia como su capital.\n\n" +
        "Estos eventos reflejan la evolución administrativa del Caquetá, desde su inicio como territorio nacional hasta su consolidación como departamento, destacando la importancia estratégica y geográfica de la región en el contexto colombiano.\n\n" +
        "La creación del departamento del Caquetá consolidó la presencia de la Fuerza Naval de la Amazonía en la región, desempeñando un papel fundamental en la lucha frontal contra el narcotráfico y sus delitos conexos, la defensa de los intereses fluviales y los recursos naturales, así como la asistencia y protección de las comunidades y la población civil de la cuenca amazónica.";

      //
      break;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    case 21:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloAmazonas").innerHTML = "Creación de la Intendencia del Vaupés (1910)";
      document.getElementById("TextAmazonas").innerHTML = "El territorio del Vaupés fue reconocido como parte de la Intendencia del Caquetá en 1910. Posteriormente, en 1913, se creó la Intendencia del Vaupés como una entidad administrativa independiente...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación de la Intendencia del Vaupés (1910)";
      document.getElementById("TextPopAmazonas").innerHTML = "El territorio del Vaupés fue reconocido como parte de la Intendencia del Caquetá en 1910. Posteriormente, en 1913, se creó la Intendencia del Vaupés como una entidad administrativa propia, bajo el gobierno central. Esto marcó el inicio del reconocimiento de la región como una unidad político-administrativa.\n\n" +
        "**Transformación en Comisaría Especial (1943)**\n\n" +
        "En 1943, el Vaupés dejó de ser una intendencia para convertirse en una Comisaría Especial. Este cambio implicó una modificación en el modelo administrativo, lo que aumentó la supervisión directa del gobierno nacional sobre la región debido a su importancia geoestratégica, su diversidad cultural y su riqueza natural.\n\n" +
        "**Elevación a Departamento (1991)**\n\n" +
        "Con la promulgación de la Constitución Política de Colombia en 1991, el Vaupés fue elevado a la categoría de departamento. Este cambio fortaleció su autonomía administrativa y política, permitiendo una mayor participación en el desarrollo regional y en la protección de sus comunidades indígenas y su biodiversidad.\n\n" +
        "La intervención de la Armada de Colombia contribuyó significativamente a la creación oportuna de la Intendencia y Comisaría del Vaupés, consolidando la estabilidad de la región, en términos de control territorial, soberanía en las zonas fronterizas y el desarrollo integral de las comunidades.";

      //
      break;
    case 22:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloAmazonas").innerHTML = "Gran migración debido a la violencia política en Colombia (1948-1958)";
      document.getElementById("TextAmazonas").innerHTML = "Durante la gran migración debido a la violencia política en Colombia, en 1968, el conflicto adoptó una dinámica particular en el departamento del Vaupés debido a su condición...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Gran migración debido a la violencia política en Colombia (1948-1958)";
      document.getElementById("TextPopAmazonas").innerHTML = "Durante la gran migración debido a la violencia política en Colombia, en 1968, el conflicto adoptó una dinámica particular en el departamento del Vaupés, debido a su condición de territorio selvático y de difícil acceso. Esta región, habitada en su mayoría por comunidades indígenas, fue escenario de abusos y enfrentamientos entre los grupos armados que buscaban imponer su control político y territorial. La violencia política de la década de 1960, conocida como ‘La Violencia’, provocó una migración masiva de personas que huían de sus hogares en busca de seguridad. Esta situación generó una crisis humanitaria que requería una respuesta coordinada y efectiva. En ese contexto, la Armada de Colombia desempeñó un papel fundamental en la protección y asistencia de los desplazados, dada la geografía de la región, atravesada por los ríos Apaporis y Vaupés. Al ser una zona selvática, la navegación fluvial era la principal forma de transporte y comunicación, lo que le otorgó a la Institución Naval un papel estratégico en la región.";

      //
      break;
    case 23:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloAmazonas").innerHTML = "Impacto de la explotación cauchera (1960-1970)";
      document.getElementById("TextAmazonas").innerHTML = "La industria del caucho tuvo una influencia significativa en la dinámica migratoria del Vaupés. Durante las décadas de 1960 y 1970, la explotación cauchera afectó las estructuras sociales y económicas de la región...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Impacto de la explotación cauchera (1960-1970)";
      document.getElementById("TextPopAmazonas").innerHTML = "La industria del caucho tuvo una influencia significativa en la dinámica migratoria del Vaupés. Durante las décadas de 1960 y 1970, la explotación cauchera afectó las estructuras sociales y económicas de las comunidades indígenas, generando tensiones y disputas sobre la regulación del trabajo indígena entre caucheros, misioneros y funcionarios. Estas tensiones contribuyeron a que algunas comunidades indígenas buscaran establecerse en nuevas regiones (Revista Colombiana de Antropología. Volumen 46 (2), julio-diciembre 2010, p. 331).";

      //
      break;
    case 24:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloAmazonas").innerHTML = "Toma de Mitú – Vaupés (1998)";
      document.getElementById("TextAmazonas").innerHTML = "La toma de Mitú – Vaupés, ocurrida el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP, dejando como saldo 24 militares, 16 policías...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Toma de Mitú – Vaupés (1998) VERIFICAR VIABILIDAD DE INCLUIR ESTE HECHO";
      document.getElementById("TextPopAmazonas").innerHTML = "La toma de Mitú – Vaupés, el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP. El ataque resultó en la muerte de 24 militares, 16 policías, 11 civiles y dejó 47 uniformados heridos, además de más de 60 secuestrados. Durante 72 horas, la población de Mitú estuvo sometida a crímenes de guerra y violaciones de los derechos humanos, constituyendo una flagrante transgresión del Derecho Internacional Humanitario. No obstante, las Fuerzas Militares de Colombia desplegaron todas sus capacidades aéreas, fluviales y terrestres para consolidar el control territorial y proteger a la población civil. Más de 1,200 uniformados de la Fuerza Pública enfrentaron entre 900 y 1,500 guerrilleros que participaron en el ataque (Diferentes fuentes de información).";

      //
      break;
    case 25:
      ///Repetir el caso 24
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloAmazonas").innerHTML = "Toma de Mitú – Vaupés (1998)";
      document.getElementById("TextAmazonas").innerHTML = "La toma de Mitú – Vaupés, ocurrida el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP, dejando como saldo 24 militares, 16 policías...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Toma de Mitú – Vaupés (1998) VERIFICAR VIABILIDAD DE INCLUIR ESTE HECHO";
      document.getElementById("TextPopAmazonas").innerHTML = "La toma de Mitú – Vaupés, el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP. El ataque resultó en la muerte de 24 militares, 16 policías, 11 civiles y dejó 47 uniformados heridos, además de más de 60 secuestrados. Durante 72 horas, la población de Mitú estuvo sometida a crímenes de guerra y violaciones de los derechos humanos, constituyendo una flagrante transgresión del Derecho Internacional Humanitario. No obstante, las Fuerzas Militares de Colombia desplegaron todas sus capacidades aéreas, fluviales y terrestres para consolidar el control territorial y proteger a la población civil. Más de 1,200 uniformados de la Fuerza Pública enfrentaron entre 900 y 1,500 guerrilleros que participaron en el ataque (Diferentes fuentes de información).";

      //
      break;
    default:
      break;

  }
  document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"
}

// This function is called when the user clicks on the "Change to English" button
function ChangeTextEng() {
  var ImgPutumayoLink = "./Assets/IMG/Hitoria/historias/IMG/his-"
  switch (NumHistory) {
    case 0:
      document.getElementById("").innerHTML = ""
      break;
    case 1:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp";

      document.getElementById("HistoryDerechos").innerHTML = "The empire known as Casa Arana exploited rubber in the Amazon region. Source: Book *La Fuerza Naval del Sur en la Amazonía colombiana*, 2017.";
      document.getElementById("Titulocaqueta").innerHTML = "Casa Arana: The Rubber Rebellion (1904-1907)";
      document.getElementById("Textcaqueta").innerHTML = "Casa Arana presents a colonial structure with typical features of architecture adapted to the Amazon region, where the use of local materials like wood predominates...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Casa Arana: The Rubber Rebellion (1904-1907)";
      document.getElementById("TextPopAmazonas").innerHTML =
        "In 1904, the Peruvian Amazon Company, headquartered in London, was in the Colombian Amazon. It was there that it established relationships with Julio César Arana, which culminated in a merger in 1907, ensuring the company's viability and future, which Arana named Casa Arana. Casa Arana was established in 1912 in La Chorrera, on the banks of the Igaraparaná River, in the Amazonas Department, and had a colonial structure with typical features of architecture adapted to the Amazon region, using local materials such as wood and palm roofs. However, the site is sadly infamous as one of the main centers of exploitation and abuse of indigenous peoples in the region, particularly the Huitoto, Bora, and Ocaína communities, who were subjected to forced labor for rubber extraction, which became a source of wealth and a driver of cultural and social transformations in the Amazon. <br><br>" +
        "Casa Arana functioned as a collection center and also as a place for punishment for those who did not meet the imposed quotas. It was organized around two collection centers: La Chorrera, for the Igaraparaná River area, and El Encanto, for the Caraparaná River region, from where the rubber was shipped to Iquitos, Peru, and from there abroad. Both centers were subdivided into sections based on the different indigenous settlements: fifteen for La Chorrera and eight for El Encanto. (Source: *El libro rojo del Putumayo*, Norman Thomson - Roberto Pineda Camacho, P. 13-14).<br><br>" +
        "The indigenous people were subjected to a system of 'debt bondage,' in which they were given tools like machetes in exchange for disproportionate amounts of rubber, creating unpayable debts that perpetuated their slavery. (Source: BBC.com Article – “The Devil's Paradise: The Atrocities of the 'Rubber Holocaust' in the Colombian Amazon,” by Andrea Díaz Cardona, August 26, 2022. Website: <a href='https://www.bbc.com/mundo/noticias-america-latina-60922508' target='_blank'>https://www.bbc.com/mundo/noticias-america-latina-60922508</a>).<br><br>" +
        "Currently, Casa Arana is a 'Knowledge Center' for young indigenous people from the Putumayo region and is considered a symbol of remembrance and historical memory in the struggle for indigenous rights during the years of economic development in southern Colombia. In this sense, it has become a place of reflection and, in some cases, a destination to dignify the victims of the armed conflict that occurred in the past. (Source: *La Historia de la Fuerza Naval del Sur en la Amazonía Colombiana*, 2017, Chapter 5, P. 30-32).";

      //
      break;

    case 2:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp";

      document.getElementById("HistoryDerechos").innerHTML = "Photographic archive of the ICANH. Source: <a href='https://colecciones.icanh.gov.co/articulos/expeEtnologica.php#undefined' target='_blank'>Ethnological Expedition to the Intendancy of Putumayo (1945-1946)</a>.";
      document.getElementById("Titulocaqueta").innerHTML = "Creation of the Intendancy of Putumayo (1905)";
      document.getElementById("Textcaqueta").innerHTML = "The territorial reorganization of 1905, under the presidency of Rafael Reyes Prieto, aimed to weaken large territorial units and curb separatist attempts...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creation of the Intendancy of Putumayo (1905)";
      document.getElementById("TextPopAmazonas").innerHTML =
        "The territorial reorganization of 1905, under the presidency of Rafael Reyes Prieto, sought to weaken large territorial units and curb separatist attempts. In this context, the creation of the Intendancy of Putumayo was part of an effort to consolidate Colombian control over the Amazon region. The Colombian Navy played a crucial role in securing the region during this process, and its functions that contributed to efficient territorial control are described below: <br><br>" +
        "1. <strong>River Patrols:</strong> Constant deployments were made on the rivers in the region to ensure there were no infiltrations or illegal activities that could threaten stability. <br><br>" +
        "2. <strong>Transport of Forces:</strong> The Navy facilitated the transport of troops and supplies to the new Intendancy of Putumayo, ensuring that civil and military authorities could quickly establish themselves. <br><br>" +
        "3. <strong>Protection of Borders:</strong> The Navy helped protect the region's borders, avoiding conflicts with neighboring countries and securing Colombian sovereignty in the area. <br><br>" +
        "4. <strong>Assistance to Local Population:</strong> Assistance was provided to local communities, helping them adapt to administrative changes and ensuring their security and well-being. <br><br>" +
        "The contribution of the Colombian Navy was vital for the success of the territorial reorganization and for the stability of Putumayo. Its presence helped consolidate Colombian control and ensure the security and development of the region.";

      //
      break;

    case 3:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp";

      document.getElementById("HistoryDerechos").innerHTML = "Formation of the Putumayo War Flotilla. Source: *Pañol de la Historia*, 'The Battle of Güepí, and the gunboats Cartagena and Santa Marta,' by: Captain Carlos A. Prieto Ávila – Cyber-corredera. Website: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm' target='_blank'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>.";
      document.getElementById("Titulocaqueta").innerHTML = "Putumayo War Flotilla (1931)";
      document.getElementById("Textcaqueta").innerHTML = "The Putumayo War Flotilla was created in 1931 through Decree 1507 of August 31 of that year, as a measure to strengthen Colombia's presence in the Amazon region...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Putumayo War Flotilla (1931)";
      document.getElementById("TextPopAmazonas").innerHTML =
        "The creation of this flotilla was a strategic measure to consolidate Colombian presence in an area that, at the time, lacked significant state presence. Additionally, the flotilla played a crucial role during the Colombia-Peru conflict (1932-1933), deploying units for constant patrols and river control operations in the region. <br><br>" +
        "The Putumayo War Flotilla was created in 1931 by Decree 1507 of August 31 of that year. This decision was made in response to the need to strengthen the military presence in the Amazon region and protect national sovereignty in the Putumayo River area. It was composed of the gunboats ARC Cartagena and ARC Santa Marta, which were transferred from Santa Cruz on the Magdalena River to the Caucayá Port on the Putumayo River. <br><br>" +
        "(Pañol de la Historia, 'The Battle of Güepí, and the gunboats Cartagena and Santa Marta,' by: Captain Carlos A. Prieto Ávila – Cyber-corredera, Website: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm' target='_blank'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>). <br><br>" +
        "By Decree 2167 of 1944, the Putumayo War Flotilla and the Leguízamo River Base were handed over to the National Navy, whose first commanders were Lieutenant Commander Demetrio Salamanca and Marine Infantry Captain Hernando García Rey. <br><br>" +
        "(Book *Marine Infantry in the History of Colombia*, 2021. Chapter 5 - P. 204). <br><br>" +
        "Creation of the Putumayo River Base (1940): On March 8, 1940, the Putumayo River Base was created through Decree 0487 of March 8, 1940, which reorganized the Marine Infantry. Given the experience during the conflict with Peru, it was established that the Marine Infantry Company and the Fluvial Flotilla would be under the command of the National Army. <br><br>" +
        "(Book *Marine Infantry in the History of Colombia*, 2021. Chapter 5, P. 204).";

      //
      break;

    case 4:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Monclart Advanced Post. Source: *Book The Marine Infantry in the History of Colombia*, 2021.";
      document.getElementById("Titulocaqueta").innerHTML = "Creation of the Monclart Advanced Fluvial Post (1933)";
      document.getElementById("Textcaqueta").innerHTML = "On January 20, 1933, after the conflict with Peru, the Monclart Advanced Fluvial Post was created, a unit that was officially handed over to the Colombian Navy ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creation of the Monclart Advanced Fluvial Post (1933)";
      document.getElementById("TextPopAmazonas").innerHTML =
        "On January 20, 1933, after the conflict with Peru, the Monclart Advanced Fluvial Post was created, a unit that was officially handed over to the Colombian Navy by the National Army through Decree 2167 of November 1943, as part of the covering forces on the southern border of the country. This military unit was actually a relocation of the former “Chamaco” Post, which was located in front of the Peruvian post in Guëpí. <br><br>" +
        "(Book *The Marine Infantry in the History of Colombia*, 2021. Chapter 3 and 5 - P. 37 and 218).<br><br>" +
        "Given the issues during the conflict with such a close foreign post, it was moved 10 kilometers downstream to the beginning of the road that connected with Las Delicias, on the Caquetá River. <br><br>" +
        "It is important to highlight that the Monclart Advanced Fluvial Post was essential for ensuring control of the Putumayo River, a vital waterway for trade and military operations. Additionally, this fluvial post functioned as a support base to provide supplies, accommodation for Colombian troops, and a point of defense and surveillance. <br><br>" +
        "Its geographical position allowed control of river traffic, preventing foreign incursions and responding quickly to any threat in the border area. In this sense, it represented a milestone in the consolidation of Colombia's military presence in the Amazon, marking the country's commitment to defending its sovereignty.";

      //
      break;

    case 5:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Boats of the 'Avispa' Flotilla. Source: *Book The Marine Infantry in the History of Colombia*, 2021.";
      document.getElementById("Titulocaqueta").innerHTML = "The Avispa Flotilla (1956)";
      document.getElementById("Textcaqueta").innerHTML = "In September 1956, at the initiative of Captain Aurelio Castrillón Muñoz of the Marine Infantry and Lieutenant Rafael Grau Araujo, who were serving ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "The Avispa Flotilla (1956)";
      document.getElementById("TextPopAmazonas").innerHTML =
        "In September 1956, at the initiative of Captain Aurelio Castrillón Muñoz of the Marine Infantry and Lieutenant Rafael Grau Araujo, who were serving in Puerto Leguízamo, the ‘Avispa Flotilla’ was created. The flotilla conducted a demonstration before the military high command on the Putumayo River, with armed boats manned by Marines. This demonstration showcased their speed and maneuverability, which surpassed the ARC Cartagena and ARC Santa Marta gunboats. <br><br>" +
        "The initial organization of the Avispa Flotilla consisted of 7 armed boats: 6 for the Fluvial Task Force and 1 for Command and Control. The flotilla was placed under the command of the Kilo Company of Puerto Leguízamo. The boats used were 13 feet long, 1.5 feet in draft, with a load capacity of 800 kilograms and a crew of 6 men per boat. This organization remained in place until 1971 when Captain Alejandro Pimiento of the Marine Infantry promoted the creation of the Jungle Commandos. <br><br>" +
        "To operate the flotilla, a manual was created that presented an organizational plan, emphasizing the tactical needs of the unit. Each task group was composed of 9 boats, each crewed by 4 men, accompanied by a platoon with the administrative organization of a platoon. (Book *The Marine Infantry in the History of Colombia*, 2021. Chapter 3 - P. 58).<br><br>" +
        "The creation of the Avispa Flotilla demonstrated the Colombian Military Forces’ ability to adapt to the fluvial environments of the Amazon region. Its success was crucial in the recovery of Leticia, highlighting the importance of fluvial power in border territorial conflicts. Its legacy was fundamental to the development of future fluvial units of the Colombian Navy, contributing to the sovereignty, security, and comprehensive development of the Amazonian communities of Colombia.";

      //
      break;

    case 6:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "ARC Cartagena. Source: *Book The Marine Infantry in the History of Colombia*, 2021.";
      document.getElementById("TituloPutumayo").innerHTML = "Colombian–Peruvian Conflict, known as the Leticia Conflict (1932-1933)";
      document.getElementById("TextPutumayo").innerHTML = "In 1932, due to political fluctuations in Latin American countries, a conflict arose between Colombia and Peru. In early September, a group of Peruvian civilians ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Colombian–Peruvian Conflict, known as the Leticia Conflict (1932-1933)";
      document.getElementById("TextPopAmazonas").innerHTML =
        "In 1932, due to political changes in Latin America, the conflict between Colombia and Peru broke out. In early September, a group of Peruvian civilians attacked Leticia, Amazonas, and captured all the Colombian inhabitants. In this scenario, the presence of the Colombian Navy in the south of the country became very important, as the conflict led to the deployment of the river gunboats ARC *Cartagena* and ARC *Santa Marta*, along with the Hospital Ship MC *Yamari* and the units *Madeira* and *Esmarck*, which were of Brazilian origin but mainly crewed by Colombian sailors. Together, they formed the Putumayo River Flotilla, whose main objective was to protect the border rivers and conduct multiple operations on the Putumayo River, ensuring Colombia's territorial integrity and sovereignty. <br><br>" +
        "Previously, Colombia had been focused on solving internal problems, and when the conflict with Peru broke out, it was not fully prepared to face it. As a result of lack of preparation and resources, the Colombian government resorted to improvisation and patriotism to handle the emergency. Some military units were acquired, and the government had to hire officers from the Royal British Navy to organize and lead the newly created Colombian Navy. This makeshift navy was known by the Peruvians as the 'suicide fleet', as it had to operate in the complex Amazonian trapezoid to reclaim Leticia. However, thanks to the lessons learned from the conflict, the Colombian government decided to create a modern Navy. The British Mission, led by Admiral Bell O. Salter, was responsible for organizing the National Navy as we know it today, a symbol of pride and relentless vigilance over our sovereignty in seas and border rivers. <br><br>" +
        "The modernization process included the creation of the Naval Cadet School, as the previous National Naval School, established by General Rafael Reyes in 1907, had been dissolved. The new Naval School began its activities on July 3, 1935, aboard the Training Ship *M.G. Cúcuta*, with a team of instructors composed of Colombian and English officers from the defunct Reyes School. Additionally, with the support of officers and non-commissioned officers from the Army, the necessary training for sailors was carried out, and some of these officers later joined the National Navy, ranking within the Marine Infantry. (Book *The Marine Infantry in the History of Colombia*, 2021. Chapter 3, P. 37).";

      //
      break;
    case 7:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "1.png"

      document.getElementById("HistoryDerechos").innerHTML = "Troop deployment for the Battle of Guëpí. Source: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm' target='_blank'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>";
      document.getElementById("TituloPutumayo").innerHTML = "Battle of Guëpí (1932-1933)";
      document.getElementById("TextPutumayo").innerHTML = "The Battle of Guëpí was a key confrontation during the Colombian-Peruvian War, which took place on March 26, 1933. This battle occurred in the context of the territorial dispute...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Battle of Guëpí (1932-1933)";
      document.getElementById("TextPopAmazonas").innerHTML =
        "The Battle of Guëpí, fought on March 26, 1933, was a crucial confrontation during the Colombian-Peruvian War, in the context of the dispute over the sovereignty of the Port of Leticia and the surrounding areas in the Amazon. This battle was a testament to the heroism and courage of the Colombian Armed Forces in recovering territories occupied by Peru. The cause of the battle dates back to the discontent of Peruvian landowners with the signing of the Salomón-Lozano Treaty in 1922, which redefined the borders between Brazil, Colombia, and Peru. The treaty established a Colombian customs post on the border, which made it difficult to transport rubber and sugar cane to Iquitos (Peru) severely affecting the finances of the Peruvian landowners. <br><br>" +
        "The confrontation took place along a 15-kilometer stretch and lasted almost nine hours of uninterrupted combat. During this battle, the bravery and heroism of the Colombian troops stood out. On March 26, 1933, the Putumayo detachment and the River Flotilla launched an offensive from Puerto Leguízamo against the Peruvian military garrison in Guëpí. With unprecedented courage, our soldiers engaged the enemy in hand-to-hand combat. Sergeant Néstor Ospina Melo, in an act of valor, lowered the Peruvian flag and raised the Colombian flag, while the Colombian soldiers celebrated with a unanimous cry: “Long live Colombia!” <br><br>" +
        "The victory at Guëpí not only marked the end of the war with Peru, but also restored honor and dignity to Colombia. The figure of soldier Juan Bautista Solarte Obando represents the courage and sacrifice of the Colombian troops: upon discovering an enemy machine gun, he threw himself on it to save the lives of his comrades. A total of 16 Colombian soldiers gave their lives in this heroic battle, ensuring the victory and guaranteeing national sovereignty through an efficient and timely deployment of land, river, and air forces. (Book *The Marine Infantry in the History of Colombia*, 2021. Chapter 5, P. 203).";

      //
      break;
    case 8:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Colombian air squadron, Battle of Tarapacá. Source: <a href='https://www.fac.mil.co/es/noticias/batalla-de-tarapaca-hecho-historico-que-marco-la-historia-de-la-aviacion-militar-en' target='_blank'>Article: Battle of Tarapacá, a historic event that marked the history of military aviation in Colombia</a>";
      document.getElementById("TituloPutumayo").innerHTML = "The Battle of Tarapacá (1933)";
      document.getElementById("TextPutumayo").innerHTML = "The Battle of Tarapacá, also known as the Combat of Nuevo Tarapacá or the defense of Lower Putumayo, was a military confrontation that occurred on February 14, 1933 during the Colombian-Peruvian conflict (1932-1933)...";
      document.getElementById("TituloPopAmazonas").innerHTML = "The Battle of Tarapacá (1933)";
      document.getElementById("TextPopAmazonas").innerHTML =
        "The Battle of Tarapacá, also known as the Combat of Nuevo Tarapacá or the defense of Lower Putumayo, was a military confrontation that took place on February 14, 1933 during the Colombian-Peruvian conflict (1932-1933), in which both nations fought over a vast region around the Putumayo River. The battle began when, on the morning of February 14, 1933, Colombian troops were attacked by a Peruvian air squadron. This attack prompted an immediate response from the Colombian air squadron, which was stationed near Tarapacá, Amazonas. However, no direct combat occurred; the Colombian maneuver aimed to confuse the Peruvian forces about the true intentions of the attack. <br><br>" +
        "In the same year, General Alfredo Vásquez Cobo traveled aboard the Destroyer ARC *Córdova* and requested the convergence of the gunboats ARC *Cartagena* and ARC *Santa Marta* from Upper Putumayo to Tarapacá. However, this request could not be fulfilled as the Putumayo detachment was engaged in other operations in its area of responsibility, which would culminate in the attack on Güepí, Peru. <br><br>" +
        "On February 15, in the morning hours, the Colombian river units launched an attack on the Peruvian forces. The landing was personally led by General Efraín Rojas, but upon reaching the fort in Tarapacá, the Colombian troops found that the Peruvian garrison had abandoned the position. At nine in the morning, the Colombian flag was raised over Tarapacá, Amazonas, restoring one of the territorial fragments that had been disputed. <br><br>" +
        "With the recovery of Tarapacá, the projection of Colombian air and river power over the Amazon region was consolidated, allowing the installation of a support base for subsequent operations. The Battle of Tarapacá marked Colombian control over Lower Putumayo, a strategic position that facilitated subsequent operations toward Leticia, Amazonas. The mediation of the League of Nations in Geneva, Switzerland, was crucial in ending the conflict, achieving the return of Leticia to Colombia in 1934. <br><br>" +
        "(Cyber-corredera, Website: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm' target='_blank'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>, Article “Tarapacá is recovered”).";

      //
      break;
    case 9:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Stamp commemorating the Intendancy of Amazonas, Bank of the Republic of Colombia Archive. Source: <a href='https://sinchi.org.co/galeria-de-fotos' target='_blank'>https://sinchi.org.co/galeria-de-fotos</a>";
      document.getElementById("TituloPutumayo").innerHTML = "Creation of the National Intendancy of Amazonas (1951)";
      document.getElementById("TextPutumayo").innerHTML = "The National Intendancy of Amazonas was established by Decree Law 963 on March 14, 1951. This measure strengthened the presence of the Colombian Navy, enhanced naval infrastructure, and reaffirmed...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creation of the National Intendancy of Amazonas (1951)";
      document.getElementById("TextPopAmazonas").innerHTML =
        "The National Intendancy of Amazonas was established by Decree Law 963 on March 14, 1951. This measure reinforced the presence of the Colombian Navy, strengthened naval infrastructure, and reaffirmed Colombian control over the Amazon territory. The Intendancy of Amazonas had previously been a territorial entity created in 1931 to consolidate Colombian sovereignty in the region after conflicts with Peru and Brazil. <br><br>" +
        "The creation of the National Intendancy of Amazonas was part of a broader effort by the Colombian government to strengthen control over the Amazon region, which had been the subject of territorial disputes with Peru and Brazil. The Amazon region, known as the 'Amazonian Trapezoid,' is a strategic area due to its wealth in natural resources, as well as its crucial geographic position. <br><br>" +
        "The establishment of the National Intendancy of Amazonas allowed for a greater military and naval presence in the region, facilitating border protection and river navigation. It also strengthened the fight against drug trafficking and related transnational crimes, further consolidating national sovereignty in this key territory for the country's security.";

      //
      break;
    case 10:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Peruvian troops march toward La Pedrera. Source: *The Naval Force of the South in the Colombian Amazon*, 2017.";
      document.getElementById("TituloPutumayo").innerHTML = "Conflict at La Pedrera (1911)";
      document.getElementById("TextPutumayo").innerHTML = "The La Pedrera conflict was an armed confrontation between Colombia and Peru that took place in 1911 at the La Pedrera Border Post, a small locality on the banks of the Caquetá River, in the Amazon region...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Conflict at La Pedrera (1911)";
      document.getElementById("TextPopAmazonas").innerHTML =
        "The La Pedrera conflict was an armed confrontation between Colombia and Peru that took place in 1911 at the La Pedrera Border Post, a small locality on the banks of the Caquetá River in the Amazon region. This conflict arose due to unresolved territorial disputes between the two countries in the Amazon Basin, where border delimitation was unclear and economic interests in rubber extraction intensified tensions. <br><br>" +
        "The dispute in the territory began on July 10, 1911. After two days of intense fighting by Colombian troops, they were forced to retreat with honor and bravery to a Brazilian locality due to the inferior conditions they faced. However, this confrontation was just the prelude to what would later become the Colombian-Peruvian conflict twenty years later. (Putumayo Magazine, 2012. P. 19).<br><br>" +
        "The conflict ended in 1911 with the signing of the Tezanos Pinto-Larrea Treaty, which reaffirmed Colombia and Peru's commitment to resolving their differences through dialogue and diplomatic negotiations. Although this treaty did not definitively resolve the border situation, it helped maintain temporary peace between the two countries. (Book *History of the Naval Force of the South in the Colombian Amazon*, 2017. P. 37-38).";

      //
      break;
    case 11:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Commemoration of the 72nd anniversary of the ARC Leguízamo Naval Base. Source: National Navy Archive, 2015.";
      document.getElementById("TituloGuaviare").innerHTML = "Rise of the extraction of quina, jaguars, rubber, and wood (1920-1950)";
      document.getElementById("TextGuaviare").innerHTML = "During the rise of quina, jaguar, rubber, and wood extraction between 1920 and 1950, the Colombian Navy played a key role in the territory that currently...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Rise of the extraction of quina, jaguars, rubber, and wood (1920-1950)";
      document.getElementById("TextPopAmazonas").innerHTML = "During the rise of quina, jaguar, rubber, and wood extraction between 1920 and 1950, the Colombian Navy played a key role in the territory that currently corresponds to the department of Guaviare. The institution carried out territorial control operations in the tributaries and extraction zones to prevent infiltrations and illegal activities that could threaten the stability and security of the region.\n\n" +
        "In addition, the Navy facilitated the transportation of materials and personnel to and from the extraction areas, ensuring that operations were carried out efficiently and safely. In this context, it was also responsible for safeguarding the borders, preventing conflicts with neighboring countries, guaranteeing Colombian sovereignty, and providing assistance to local communities in order to adapt to the economic and social changes generated by the extraction of natural resources.\n\n" +
        "Finally, the Naval Institution played an important role in regulating and controlling extractive activities to minimize environmental impact, although resource exploitation during this period had significant effects on the environment.";

      //
      break;
    case 12:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloGuaviare").innerHTML = "Military for the consolidation of sovereignty in the Amazon border (1930-1940)";
      document.getElementById("TextGuaviare").innerHTML = "In the 1930s, after the Colombia-Peru conflict (1932-1933), Colombia strengthened its military presence in the Amazonian territories...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Military for the consolidation of sovereignty in the Amazon border (1930-1940)";
      document.getElementById("TextPopAmazonas").innerHTML = "In the 1930s, after the Colombia-Peru conflict (1932-1933), Colombia reinforced its military presence in the Amazonian territories, including what today corresponds to the department of Guaviare, in order to guarantee the borders defined by the Salomón-Lozano Treaty (1922).\n\n" +
        "The Colombian Navy consolidated its presence through explorations, river patrols, and operations coordinated with the National Army, with the aim of reinforcing sovereignty over the territory in the Guaviare River and its tributaries.\n\n" +
        "Finally, the Naval Institution contributed to the establishment of river control posts, ensuring stability in the region and demonstrating a high level of readiness and significant operational and logistical capacity for territorial consolidation.";

      //
      break;
    case 13:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloGuaviare").innerHTML = "Creation of the Guaviare Department, consolidating the presence of the Amazon Naval Force (1991)";
      document.getElementById("TextGuaviare").innerHTML = "In 1991, with the promulgation of the new Political Constitution of Colombia, Guaviare was elevated to the status of a department, as part of a territorial...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creation of the Guaviare Department, consolidating the presence of the Amazon Naval Force (1991)";
      document.getElementById("TextPopAmazonas").innerHTML = "In 1991, with the promulgation of the new Political Constitution of Colombia, Guaviare was elevated to the status of a department, as part of a territorial redistribution aimed at improving the administration and development of the country's most remote regions. Before 1991, Guaviare was considered a Special Commissariat, an administrative entity without the autonomy or resources of a department.\n\n" +
        "In this context, the creation of the Guaviare department consolidated the presence of the Amazon Naval Force in the region, which played a fundamental role in the protection of border areas, the fight against drug trafficking, and the defense of natural resources. Additionally, the new administrative structure allowed for a more equitable distribution of resources and greater attention to the needs of the population.\n\n" +
        "It is important to highlight that, since its creation, the Guaviare department has faced several challenges, such as environmental preservation and the protection of indigenous communities' rights. However, the Amazon Naval Force has continued, tirelessly, to fulfill its mission of protecting the civilian population, ensuring sovereignty and territorial control, countering illicit activities and transnational crimes, and contributing to the sustainable development of the Amazon region.";

      //
      break;
    //
    case 14:
      //repetir el caso 13
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloGuaviare").innerHTML = "Creation of the Guaviare Department, consolidating the presence of the Amazon Naval Force (1991)";
      document.getElementById("TextGuaviare").innerHTML = "In 1991, with the promulgation of the new Political Constitution of Colombia, Guaviare was elevated to the status of a department, as part of a territorial...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creation of the Guaviare Department, consolidating the presence of the Amazon Naval Force (1991)";
      document.getElementById("TextPopAmazonas").innerHTML = "In 1991, with the promulgation of the new Political Constitution of Colombia, Guaviare was elevated to the status of a department, as part of a territorial redistribution aimed at improving the administration and development of the country's most remote regions. Before 1991, Guaviare was considered a Special Commissariat, an administrative entity without the autonomy or resources of a department.\n\n" +
        "In this context, the creation of the Guaviare department consolidated the presence of the Amazon Naval Force in the region, which played a fundamental role in the protection of border areas, the fight against drug trafficking, and the defense of natural resources. Additionally, the new administrative structure allowed for a more equitable distribution of resources and greater attention to the needs of the population.\n\n" +
        "It is important to highlight that, since its creation, the Guaviare department has faced several challenges, such as environmental preservation and the protection of indigenous communities' rights. However, the Amazon Naval Force has continued, tirelessly, to fulfill its mission of protecting the civilian population, ensuring sovereignty and territorial control, countering illicit activities and transnational crimes, and contributing to the sustainable development of the Amazon region.";

      //
      break;

    case 15:
      //repetir el caso 13
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloGuaviare").innerHTML = "Creation of the Guaviare Department, consolidating the presence of the Amazon Naval Force (1991)";
      document.getElementById("TextGuaviare").innerHTML = "In 1991, with the promulgation of the new Political Constitution of Colombia, Guaviare was elevated to the status of a department, as part of a territorial...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creation of the Guaviare Department, consolidating the presence of the Amazon Naval Force (1991)";
      document.getElementById("TextPopAmazonas").innerHTML = "In 1991, with the promulgation of the new Political Constitution of Colombia, Guaviare was elevated to the status of a department, as part of a territorial redistribution aimed at improving the administration and development of the country's most remote regions. Before 1991, Guaviare was considered a Special Commissariat, an administrative entity without the autonomy or resources of a department.\n\n" +
        "In this context, the creation of the Guaviare department consolidated the presence of the Amazon Naval Force in the region, which played a fundamental role in the protection of border areas, the fight against drug trafficking, and the defense of natural resources. Additionally, the new administrative structure allowed for a more equitable distribution of resources and greater attention to the needs of the population.\n\n" +
        "It is important to highlight that, since its creation, the Guaviare department has faced several challenges, such as environmental preservation and the protection of indigenous communities' rights. However, the Amazon Naval Force has continued, tirelessly, to fulfill its mission of protecting the civilian population, ensuring sovereignty and territorial control, countering illicit activities and transnational crimes, and contributing to the sustainable development of the Amazon region.";

      //
      break;
    case 16:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloBaupez").innerHTML = "Inclusion of Caquetá in the National Territory (1858)";
      document.getElementById("TextBaupez").innerHTML = "In 1858, Caquetá was included as a National Territory of Colombia, and the Colombian Navy played a crucial role in the navigation and control of the river routes that crossed this territory...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Inclusion of Caquetá in the National Territory (1858)";
      document.getElementById("TextPopAmazonas").innerHTML = "In 1858, Caquetá was included as a National Territory of Colombia, and the Colombian Navy played a decisive role in the navigation and control of the river routes that pass through this department.\n\n" +
        "In this context, the Navy facilitated the development of the region and took on several responsibilities during the territorial reorganization process, including:\n\n" +
        "1. Conducting river patrols in strategic areas of the territory, ensuring that no illicit activities took place that could threaten the stability and security of the indigenous communities in the department.\n" +
        "2. Facilitating the transportation of military and civilian personnel, as well as supplies, medications, food, and other essentials for the well-being of the region, maintaining order and territorial control.\n" +
        "3. Ensuring the protection of Caquetá's borders, preventing conflicts with neighboring countries, and safeguarding Colombian sovereignty in the area.\n" +
        "4. Providing assistance to local communities by offering timely care, well-being, and security.";

      //
      break;
    case 17:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloBaupez").innerHTML = "Honor and bravery of a hero of the Colombian Navy, CP Filogonio Hichamón Kuegajima (R.I.P.) (1981)";
      document.getElementById("TextBaupez").innerHTML = "First Corporal of Marine Infantry Filogonio Hichamón Kuegajima (R.I.P.) played a crucial role in the 'Leopard' Task Force of the Colombian Navy. His mission was to gather strategic information...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Honor and bravery of a hero of the Colombian Navy, CP Filogonio Hichamón Kuegajima (R.I.P.) (1981)";
      document.getElementById("TextPopAmazonas").innerHTML = "First Corporal of Marine Infantry Filogonio Hichamón Kuegajima (R.I.P.) played a crucial role in the 'Leopard' Task Force of the Colombian Navy. His mission was to gather strategic information about the illegal armed group at the time, led by Jairo Capera Díaz.\n\n" +
        "Unfortunately, his identity was discovered, and on October 31, 1981, in the Peñas Blancas area (Caquetá), he was captured, tortured, and finally executed with a bullet to the head on the banks of the Caquetá River. Before his death, Hichamón told Capera: 'I did my job better than you.'\n\n" +
        "In recognition of his bravery and sacrifice, the Colombian Navy incorporated, in 1993, a floating unit, the ARC 'CP Filogonio Hichamón' River Support Patrol. (The Bulletin – Media outlet of the Colombian Marine Infantry, Edition No. 50 – Year 2020. Article 'Naval Force of the South, historical memory unit', by Lieutenant Commander Wilmar Raúl Amaya Plata – Operational Legal Advisor, Naval Force of the South. P. 100-101).";

      //
      break;
    case 18:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloBaupez").innerHTML = "Establishment of the Alto Caquetá Intendency (1905)";
      document.getElementById("TextBaupez").innerHTML = "On February 18, 1905, through Decree 167, several intendencies were reorganized and the Alto Caquetá Intendency was created, with its capital in Florencia. This reorganization aimed at better administration of the Amazonian regions...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Establishment of the Alto Caquetá Intendency (1905)";
      document.getElementById("TextPopAmazonas").innerHTML = "On February 18, 1905, through Decree 167, several intendencies were reorganized and the Alto Caquetá Intendency was created, with its capital in Florencia. This reorganization sought better administration of the Amazonian regions. (Towards departmentalization. Geographical Institute Agustín Codazzi IGAC - Geographical Dictionary. Caquetá Department Government).\n\n" +
        "From its vast territory, which initially covered the entire region south of the Guaviare River, the Amazonian intendencies and commissariats were successively separated. The colonization of Caquetá actually began in 1930, as a result of the Colombia-Peru conflict. It is important to highlight that rubber extraction was the central pillar of the economy during this period.\n\n" +
        "**Elevation to Department (1981)**\n\n" +
        "On December 15, 1981, through Law 78, the National Intendency of Caquetá was established as a department, consolidating its current administrative structure and confirming Florencia as its capital.\n\n" +
        "These events reflect the administrative evolution of Caquetá, from its beginnings as a national territory to its consolidation as a department, highlighting the strategic and geographical importance of the region in the Colombian context.\n\n" +
        "The creation of the Caquetá department consolidated the presence of the Amazon Naval Force in the region, playing a key role in the front-line fight against drug trafficking and related crimes, defending the fluvial interests and natural resources, as well as providing assistance and protection to the communities and civilian population in the Amazon basin.";

      //
      break;
    case 19:
      //repet case 18
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloBaupez").innerHTML = "Establishment of the Alto Caquetá Intendency (1905)";
      document.getElementById("TextBaupez").innerHTML = "On February 18, 1905, through Decree 167, several intendencies were reorganized and the Alto Caquetá Intendency was created, with its capital in Florencia. This reorganization aimed at better administration of the Amazonian regions...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Establishment of the Alto Caquetá Intendency (1905)";
      document.getElementById("TextPopAmazonas").innerHTML = "On February 18, 1905, through Decree 167, several intendencies were reorganized and the Alto Caquetá Intendency was created, with its capital in Florencia. This reorganization sought better administration of the Amazonian regions. (Towards departmentalization. Geographical Institute Agustín Codazzi IGAC - Geographical Dictionary. Caquetá Department Government).\n\n" +
        "From its vast territory, which initially covered the entire region south of the Guaviare River, the Amazonian intendencies and commissariats were successively separated. The colonization of Caquetá actually began in 1930, as a result of the Colombia-Peru conflict. It is important to highlight that rubber extraction was the central pillar of the economy during this period.\n\n" +
        "**Elevation to Department (1981)**\n\n" +
        "On December 15, 1981, through Law 78, the National Intendency of Caquetá was established as a department, consolidating its current administrative structure and confirming Florencia as its capital.\n\n" +
        "These events reflect the administrative evolution of Caquetá, from its beginnings as a national territory to its consolidation as a department, highlighting the strategic and geographical importance of the region in the Colombian context.\n\n" +
        "The creation of the Caquetá department consolidated the presence of the Amazon Naval Force in the region, playing a key role in the front-line fight against drug trafficking and related crimes, defending the fluvial interests and natural resources, as well as providing assistance and protection to the communities and civilian population in the Amazon basin.";

      //
      break;
    case 20:
      //repetition of case 18
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloBaupez").innerHTML = "Establishment of the Alto Caquetá Intendency (1905)";
      document.getElementById("TextBaupez").innerHTML = "On February 18, 1905, through Decree 167, several intendencies were reorganized and the Alto Caquetá Intendency was created, with its capital in Florencia. This reorganization aimed at better administration of the Amazonian regions...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Establishment of the Alto Caquetá Intendency (1905)";
      document.getElementById("TextPopAmazonas").innerHTML = "On February 18, 1905, through Decree 167, several intendencies were reorganized and the Alto Caquetá Intendency was created, with its capital in Florencia. This reorganization sought better administration of the Amazonian regions. (Towards departmentalization. Geographical Institute Agustín Codazzi IGAC - Geographical Dictionary. Caquetá Department Government).\n\n" +
        "From its vast territory, which initially covered the entire region south of the Guaviare River, the Amazonian intendencies and commissariats were successively separated. The colonization of Caquetá actually began in 1930, as a result of the Colombia-Peru conflict. It is important to highlight that rubber extraction was the central pillar of the economy during this period.\n\n" +
        "**Elevation to Department (1981)**\n\n" +
        "On December 15, 1981, through Law 78, the National Intendency of Caquetá was established as a department, consolidating its current administrative structure and confirming Florencia as its capital.\n\n" +
        "These events reflect the administrative evolution of Caquetá, from its beginnings as a national territory to its consolidation as a department, highlighting the strategic and geographical importance of the region in the Colombian context.\n\n" +
        "The creation of the Caquetá department consolidated the presence of the Amazon Naval Force in the region, playing a key role in the front-line fight against drug trafficking and related crimes, defending the fluvial interests and natural resources, as well as providing assistance and protection to the communities and civilian population in the Amazon basin.";

      //
      break;
    case 21:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloAmazonas").innerHTML = "Creation of the Vaupés Intendancy (1910)";
      document.getElementById("TextAmazonas").innerHTML = "The territory of Vaupés was recognized as part of the Caquetá Intendancy in 1910. Subsequently, in 1913, the Vaupés Intendancy was created as an independent administrative entity...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creation of the Vaupés Intendancy (1910)";
      document.getElementById("TextPopAmazonas").innerHTML = "The territory of Vaupés was recognized as part of the Caquetá Intendancy in 1910. Later, in 1913, the Vaupés Intendancy was created as an independent administrative entity under the central government. This marked the beginning of the recognition of the region as a political-administrative unit.\n\n" +
        "**Transformation into Special Commissariat (1943)**\n\n" +
        "In 1943, Vaupés ceased to be an intendancy and became a Special Commissariat. This change implied a modification in the administrative model, which increased the direct supervision of the national government over the region due to its geostrategic importance, cultural diversity, and natural wealth.\n\n" +
        "**Elevation to Department (1991)**\n\n" +
        "With the promulgation of the Political Constitution of Colombia in 1991, Vaupés was elevated to the status of a department. This change strengthened its administrative and political autonomy, allowing for greater participation in regional development and in the protection of its indigenous communities and biodiversity.\n\n" +
        "The intervention of the Colombian Navy significantly contributed to the timely creation of the Vaupés Intendancy and Commissariat, consolidating the stability of the region in terms of territorial control, sovereignty in border areas, and the comprehensive development of the communities.";

      //
      break;
    case 22:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloAmazonas").innerHTML = "Great migration due to political violence in Colombia (1948-1958)";
      document.getElementById("TextAmazonas").innerHTML = "During the great migration due to political violence in Colombia, in 1968, the conflict adopted a particular dynamic in the department of Vaupés due to its condition...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Great migration due to political violence in Colombia (1948-1958)";
      document.getElementById("TextPopAmazonas").innerHTML = "During the great migration due to political violence in Colombia, in 1968, the conflict adopted a particular dynamic in the department of Vaupés due to its condition as a jungle territory with difficult access. This region, mostly inhabited by indigenous communities, became the scene of abuses and clashes between armed groups seeking to impose their political and territorial control. The political violence of the 1960s, known as 'La Violencia,' caused a massive migration of people fleeing their homes in search of safety. This situation generated a humanitarian crisis that required a coordinated and effective response. In this context, the Colombian Navy played a fundamental role in the protection and assistance of the displaced people, given the geography of the region, crossed by the Apaporis and Vaupés rivers. Being a jungle area, river navigation was the main form of transportation and communication, which gave the Naval Institution a strategic role in the region.";

      //
      break;
    case 23:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloAmazonas").innerHTML = "Impact of rubber extraction (1960-1970)";
      document.getElementById("TextAmazonas").innerHTML = "The rubber industry had a significant influence on the migratory dynamics of Vaupés. During the 1960s and 1970s, rubber extraction affected the social and economic structures of the region...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Impact of rubber extraction (1960-1970)";
      document.getElementById("TextPopAmazonas").innerHTML = "The rubber industry had a significant influence on the migratory dynamics of Vaupés. During the 1960s and 1970s, rubber extraction affected the social and economic structures of indigenous communities, generating tensions and disputes over the regulation of indigenous labor between rubber gatherers, missionaries, and officials. These tensions contributed to some indigenous communities seeking to settle in new regions (Colombian Journal of Anthropology. Volume 46 (2), July-December 2010, p. 331).";

      //
      break;
    case 24:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloAmazonas").innerHTML = "Takeover of Mitú – Vaupés (1998)";
      document.getElementById("TextAmazonas").innerHTML = "The takeover of Mitú – Vaupés, which occurred on November 1, 1998, was considered the bloodiest military action executed by the now-defunct FARC-EP, resulting in 24 military personnel, 16 police officers...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Takeover of Mitú – Vaupés (1998) VERIFY VIABILITY OF INCLUDING THIS EVENT";
      document.getElementById("TextPopAmazonas").innerHTML = "The takeover of Mitú – Vaupés, on November 1, 1998, was considered the bloodiest military action executed by the now-defunct FARC-EP. The attack resulted in the death of 24 military personnel, 16 police officers, 11 civilians, and left 47 soldiers injured, in addition to more than 60 hostages taken. For 72 hours, the population of Mitú was subjected to war crimes and human rights violations, constituting a blatant violation of International Humanitarian Law. However, the Colombian Armed Forces deployed all their air, river, and land capabilities to consolidate territorial control and protect the civilian population. Over 1,200 uniformed members of the Public Force faced between 900 and 1,500 guerrillas who participated in the attack (Various information sources).";

      //
      break;
    case 25:
      //Repeat of case 24
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloAmazonas").innerHTML = "Takeover of Mitú – Vaupés (1998)";
      document.getElementById("TextAmazonas").innerHTML = "The takeover of Mitú – Vaupés, which occurred on November 1, 1998, was considered the bloodiest military action executed by the now-defunct FARC-EP, resulting in 24 military personnel, 16 police officers...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Takeover of Mitú – Vaupés (1998) VERIFY VIABILITY OF INCLUDING THIS EVENT";
      document.getElementById("TextPopAmazonas").innerHTML = "The takeover of Mitú – Vaupés, on November 1, 1998, was considered the bloodiest military action executed by the now-defunct FARC-EP. The attack resulted in the death of 24 military personnel, 16 police officers, 11 civilians, and left 47 soldiers injured, in addition to more than 60 hostages taken. For 72 hours, the population of Mitú was subjected to war crimes and human rights violations, constituting a blatant violation of International Humanitarian Law. However, the Colombian Armed Forces deployed all their air, river, and land capabilities to consolidate territorial control and protect the civilian population. Over 1,200 uniformed members of the Public Force faced between 900 and 1,500 guerrillas who participated in the attack (Various information sources).";

      //
      break;
  }
  document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"
}
//console.log(puntosRojosX)



