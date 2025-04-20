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
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p>En el año 1904, la compañía denominada <strong>Peruvian Amazon Company</strong>, con sede central en Londres, se encontraba en la Amazonía colombiana. Allí estableció relaciones con <strong>Julio César Arana</strong>, las cuales terminaron en una fusión en 1907, asegurando la viabilidad y el futuro de la empresa, a la que él mismo le dio el nombre de <strong>Casa Arana</strong>.</p>
    
      <p>La Casa Arana se estableció en 1912 en <strong>La Chorrera</strong>, a orillas del río Igaraparaná, departamento de Amazonas. Contaba con una estructura colonial, con características típicas de la arquitectura adaptada a la región amazónica, donde predominaban el uso de materiales locales como madera y techos de palma.</p>
    
      <p>Sin embargo, el sitio es tristemente célebre por ser uno de los principales centros de explotación y abuso de los pueblos indígenas de la región, particularmente de las comunidades <strong>Huitoto</strong>, <strong>Bora</strong> y <strong>Ocaína</strong>, sometidas a trabajos forzados para la extracción de caucho, el cual era fuente de riqueza y de transformaciones culturales y sociales en la Amazonía.</p>
    
      <p>"Funcionaba como centro de acopio y escenario de castigos para aquellos que no cumplían con las cuotas impuestas. La Casa Arana estaba organizada en torno a dos centros de acopio: <strong>La Chorrera</strong>, para la zona del río Igaraparaná, y <strong>El Encanto</strong>, para la región del río Caraparaná, desde donde se embarcaba el caucho a Iquitos, Perú, y de allí al exterior. Ambas se subdividían en secciones de acuerdo con los diferentes asentamientos indígenas: quince para La Chorrera y ocho para El Encanto."</p>
      <p><em>(El libro rojo del Putumayo, Norman Thomson - Roberto Pineda Camacho, pp. 13-14)</em></p>
    
      <p>Los indígenas eran sometidos a un sistema de "endeude", donde se les entregaban herramientas como machetes a cambio de cantidades desproporcionadas de caucho, creando deudas impagables que perpetuaban su esclavitud.</p>
      <p><em>(Artículo BBC.com – “El Paraíso del diablo: las atrocidades del 'holocausto del caucho' en la Amazonía de Colombia”, por Andrea Díaz Cardona, 26 de agosto de 2022. <a href="https://www.bbc.com/mundo/noticias-america-latina-60922508" target="_blank">bbc.com</a>)</em></p>
    
      <p>Actualmente, la Casa Arana es un <strong>“Centro de Conocimiento”</strong> para jóvenes indígenas de la región del Putumayo, y es considerada un símbolo del recuerdo y la memoria histórica en la lucha por los derechos indígenas durante los años de desarrollo económico en el sur de Colombia. En ese sentido, se ha convertido en un lugar de reflexión y, en algunos casos, en un destino para dignificar a las víctimas del conflicto armado acaecido en el pasado.</p>
      <p><em>(Libro “La Historia de la Fuerza Naval del Sur en la Amazonía Colombia”, 2017. Capítulo 5, pp. 30-32)</em></p>
    `;
    
      //
      break;
    case 2:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Archivo fotográfico del ICANH. Fuente: <a href='https://colecciones.icanh.gov.co/articulos/expeEtnologica.php#undefined' target='_blank'>Expedición Etnológica a la Intendencia del Putumayo (1945-1946)</a>.";
      document.getElementById("Titulocaqueta").innerHTML = "Creación de la Intendencia del Putumayo (1905)";
      document.getElementById("Textcaqueta").innerHTML = "La reorganización territorial de 1905, bajo la presidencia de Rafael Reyes Prieto, tenía como objetivo debilitar las grandes unidades territoriales y frenar los intentos separatistas...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación de la Intendencia del Putumayo (1905)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p>La reorganización territorial de 1905, bajo la presidencia de <strong>Rafael Reyes Prieto</strong>, buscaba debilitar las grandes unidades territoriales y frenar los intentos separatistas. Por ello, la creación de la <strong>Intendencia del Putumayo</strong> fue parte de este esfuerzo por consolidar el control colombiano sobre la región amazónica.</p>
    
      <p>La <strong>Armada de Colombia</strong> fue fundamental en la seguridad de la región durante este proceso. A continuación, se describen algunas de las funciones que dieron lugar al eficiente control territorial:</p>
    
      <ul>
        <li><strong>Patrullaje fluvial:</strong> Se realizaron despliegues constantes en los ríos de la región, asegurando que no hubiera infiltraciones ni actividades ilegales que pudieran amenazar la estabilidad.</li>
        <li><strong>Transporte de Fuerzas:</strong> Facilitó el transporte de tropas y suministros a la nueva Intendencia del Putumayo, asegurando que las autoridades civiles y militares pudieran establecerse rápidamente.</li>
        <li><strong>Protección de fronteras:</strong> La Armada de Colombia ayudó a proteger las fronteras de la región, evitando conflictos con países vecinos y asegurando la soberanía colombiana en la zona.</li>
        <li><strong>Asistencia a la población local:</strong> Proporcionó asistencia a las comunidades locales, ayudándoles a adaptarse a los cambios administrativos y asegurando su seguridad y bienestar.</li>
      </ul>
    
      <p>La contribución de la Armada de Colombia fue vital para el éxito de la reorganización territorial y para la estabilidad del Putumayo. Su presencia ayudó a consolidar el control colombiano y a garantizar la seguridad y el desarrollo de la región.</p>
    `;
    
  
        //
      break;
    case 3:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Formación de la Flotilla de Guerra del Putumayo. Fuente: *Pañol de la Historia*, “El Combate de Güepí, y los cañoneros Cartagena y Santa Marta”, por: Capitán de Navío Carlos A. Prieto Ávila – Cyber-corredera. Página web: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>.";
      document.getElementById("Titulocaqueta").innerHTML = "Flotilla de Guerra del Putumayo (1931)";
      document.getElementById("Textcaqueta").innerHTML = "La Flotilla de Guerra del Putumayo fue creada en 1931 mediante el Decreto 1507 del 31 de agosto de ese año, como una medida para fortalecer la presencia colombiana en la región amazónica ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Flotilla de Guerra del Putumayo (1931)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p>La <strong>Flotilla de Guerra del Putumayo</strong> fue creada mediante el <strong>Decreto 1507 del 31 de agosto de 1931</strong>. Esta decisión se tomó en respuesta a la necesidad de fortalecer la presencia militar en la región amazónica y proteger la soberanía nacional en el área del río Putumayo.</p>
    
      <p>Estaba conformada por los cañoneros <strong>ARC “Cartagena”</strong> y <strong>ARC “Santa Marta”</strong>, que fueron trasladados desde Santa Cruz en el río Magdalena hasta el <strong>Puerto de Caucayá</strong>, sobre el río Putumayo.</p>
    
      <p><em>“Pañol de la Historia, ‘El Combate de Güepí, y los cañoneros Cartagena y Santa Marta’, por Capitán de Navío Carlos A. Prieto Ávila – <a href="https://www.cyber-corredera.de/panoles/Panol-48.htm" target="_blank">Cyber-corredera</a></em>)</p>
    
      <p>La creación de esta flotilla fue una medida estratégica para reforzar la presencia estatal en esta zona. Además, desempeñó un papel crucial durante el <strong>conflicto Colombo–Peruano (1932–1933)</strong>, al desplegar de manera permanente unidades para efectuar operaciones de patrullaje y control fluvial en la región.</p>
    
      <h4>Creación de la Base Fluvial del Putumayo (1940)</h4>
    
      <p>El <strong>8 de marzo de 1940</strong> se creó la <strong>Base Fluvial del Putumayo</strong>, mediante el <strong>Decreto 0487</strong> del mismo día. Este reorganizó en su momento a la <strong>Infantería de Marina</strong> y, dada la experiencia vivida en el conflicto con el Perú, estableció que la <strong>Compañía de Infantería de Marina</strong> y la <strong>Flotilla Fluvial</strong> quedarían bajo órdenes del <strong>Ejército Nacional</strong>.</p>
    
      <p><em>(Libro "La Infantería de Marina en la Historia de Colombia", 2021. Capítulo 5, p. 204)</em></p>
    `;    
  
      //
      break;
    case 4:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Puesto Avanzado de Monclart. Fuente: *Libro La Infantería de Marina en la Historia de Colombia*, 2021.";
      document.getElementById("Titulocaqueta").innerHTML = "Creación del Puesto Fluvial Avanzado Monclart (1933)";
      document.getElementById("Textcaqueta").innerHTML = "El 20 de enero de 1933, después del conflicto con el Perú, fue creado el Puesto Fluvial Avanzado de Monclart, unidad que se entregó en forma oficial a la Armada de Colombia ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación del Puesto Fluvial Avanzado Monclart (1933)";
  document.getElementById("TextPopAmazonas").innerHTML = `
  <p><strong>“El 20 de enero de 1933</strong>, después del conflicto con el Perú, fue creado el <strong>Puesto Fluvial Avanzado de Monclart</strong>, unidad que se entregó en forma oficial a la Armada de Colombia por el Ejército Nacional mediante el <strong>Decreto 2167 de noviembre de 1943</strong>, como parte de las fuerzas de cobertura de la frontera sur del país.</p>

  <p>Esta unidad militar fue, en realidad, un traslado del antiguo <strong>Puesto de “Chamaco”</strong>, que estaba situado enfrente del puesto peruano de Güepí.</p>

  <p><em>(Libro "La Infantería de Marina en la Historia de Colombia", 2021. Capítulos 3 y 5, pp. 37 y 218)</em></p>

  <p>Dados los inconvenientes presentados durante el conflicto, al tener un puesto extranjero tan cercano, se trasladó 10 kilómetros más abajo, hasta el inicio de la vía que comunicaba con <strong>Las Delicias</strong>, sobre el <strong>río Caquetá</strong>.</p>

  <p>El <strong>Puesto Fluvial Avanzado Monclart</strong> fue esencial para asegurar el control del <strong>río Putumayo</strong>, una vía fluvial fundamental para el comercio y las operaciones militares. Asimismo, este puesto fluvial funcionó como una base de apoyo para proporcionar suministros, alojamiento para las tropas colombianas, y un punto de defensa y vigilancia.</p>

  <p>Su posición geográfica permitió controlar el tránsito fluvial, prevenir incursiones extranjeras y responder rápidamente a cualquier amenaza en la zona fronteriza. En ese sentido, representó un hito en la consolidación de la presencia militar colombiana en la Amazonía, marcando el compromiso del país con la defensa de su soberanía.</p>
`;


      //
      break;
    case 5:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Botes de la Flotilla “Avispa”. Fuente: *Libro La Infantería de Marina en la Historia de Colombia*, 2021.";
      document.getElementById("Titulocaqueta").innerHTML = "La Flotilla Avispa (1956)";
      document.getElementById("Textcaqueta").innerHTML = "En septiembre de 1956, por iniciativa del Capitán de Infantería de Marina Aurelio Castrillón Muñoz y el Teniente de Fragata Rafael Grau Araujo, quienes prestaban sus servicios ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "La Flotilla Avispa (1956)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p>En <strong>septiembre de 1956</strong>, por iniciativa del Capitán de Infantería de Marina <strong>Aurelio Castrillón Muñoz</strong> y el Teniente de Fragata <strong>Rafael Grau Araujo</strong>, quienes prestaban sus servicios en <strong>Puerto Leguízamo (Putumayo)</strong>, se creó la <strong>“Flotilla Avispa”</strong>.</p>
    
      <p>Esta unidad realizó una demostración ante el alto mando militar en aguas del <strong>río Putumayo</strong> con botes armados y tripulados por Infantes de Marina, en una contundente exhibición de velocidad y maniobrabilidad superiores a los cañoneros <strong>ARC “Cartagena”</strong> y <strong>ARC “Santa Marta”</strong>.</p>
    
      <p>La organización inicial contemplaba siete botes artillados: seis destinados a la <strong>Fuerza de Tarea Fluvial</strong> y uno como <strong>bote de Comando y Control</strong>. La Flotilla quedó bajo el mando operacional de la <strong>Compañía Kilo</strong> de Puerto Leguízamo. Los botes tenían 13 pies de eslora, 1,5 pies de calado, capacidad de carga de 800 kilos y eran tripulados por seis hombres cada uno.</p>
    
      <p>Esta organización se mantuvo hasta <strong>1971</strong>, cuando el Capitán de Infantería de Marina <strong>Alejandro Pimiento</strong> le dio un nuevo impulso con la creación de los <strong>Comandos de Selva</strong>.</p>
    
      <p><em>(Apartes tomados textualmente de la “Organización Operativa de la Flotilla Avispa”, septiembre de 1956)</em></p>
    
      <p>Para el funcionamiento de la Flotilla Avispa, se creó un manual con un proyecto de organización en el que se resaltaban las necesidades tácticas de esta unidad. Cada grupo de tarea estaba conformado por <strong>nueve botes</strong>, cada uno tripulado por <strong>cuatro hombres</strong>, acompañados por un pelotón con la estructura administrativa correspondiente.</p>
    
      <p><em>(Libro "La Infantería de Marina en la Historia de Colombia", 2021. Capítulo 3, p. 58)</em></p>
    
      <p>La creación de la Flotilla Avispa demostró la capacidad de adaptación de las <strong>Fuerzas Militares de Colombia</strong> a las exigencias del combate en escenarios fluviales amazónicos. Su éxito contribuyó significativamente al esfuerzo bélico nacional y a la <strong>recuperación de Leticia</strong>, destacando la importancia del poder fluvial en los conflictos fronterizos y su papel esencial en la soberanía, seguridad y desarrollo de las comunidades de la Amazonía colombiana.</p>
    `;
    
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
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p>En el año <strong>1932</strong>, con los vaivenes de la política en los países latinoamericanos, sobrevino el <strong>conflicto de Colombia con el Perú</strong>. A comienzos de septiembre, un grupo de civiles peruanos tomó por asalto <strong>Leticia (Amazonas)</strong> y capturó a todos los moradores colombianos.</p>
    
      <p>Es por esto que la <strong>presencia de la Armada de Colombia</strong> en el sur del país se remonta a este conflicto. Como respuesta, fueron destinados los cañoneros fluviales <strong>ARC “Cartagena”</strong> y <strong>ARC “Santa Marta”</strong>, el <strong>Buque Hospital MC “Yamari”</strong> y las unidades <strong>“Madeira”</strong> y <strong>“Esmarck”</strong> (de origen brasileño, pero tripuladas mayormente por marinos colombianos). Así se conformó la <strong>Flotilla Fluvial del Putumayo</strong>, con la misión de proteger los ríos fronterizos y realizar múltiples operaciones en el río Putumayo, salvaguardando la integridad y soberanía del territorio nacional.</p>
    
      <blockquote>
        <p>“En años anteriores, Colombia se había dedicado a dar solución a diferentes problemas internos y se vio envuelta en un conflicto internacional para lo cual no estaba preparada. Como consecuencia de la ingenuidad e imprevisión, la falta de medios tuvo que ser suplida ante tal emergencia con improvisaciones y patriotismo.</p>
    
        <p>En ese sentido, se adquirieron algunas unidades de guerra y el Gobierno Nacional se vio precisado a contratar un grupo de Oficiales de la Real Armada Británica para que organizara y dirigiera la incipiente Armada de Colombia.</p>
    
        <p>Los peruanos llamaban la <strong>“flota suicida”</strong> a nuestra improvisada Armada, que debía operar sobre el trapecio amazónico para la reconquista de Leticia (Amazonas). Sin embargo, como resultado de las experiencias del conflicto amazónico, el Gobierno Nacional crea la moderna <strong>Marina de Guerra</strong>.</p>
    
        <p>La <strong>Misión Inglesa</strong>, dirigida por el Almirante <strong>Bell O. Salter</strong>, organizó al respecto nuestra actual moderna <strong>Armada de Colombia</strong>, orgullo de todos e insomne vigilante de la soberanía en nuestros mares y ríos limítrofes.</p>
    
        <p>En primer lugar, se creó la <strong>Escuela Naval de Cadetes</strong>, por cuanto la anterior Escuela Naval Nacional, creada por el General Rafael Reyes en 1907, había sido abolida. La Escuela Naval inició labores a bordo del improvisado <strong>Buque Escuela M. G. Cúcuta</strong> el 3 de julio de 1935, con una planta de profesores entre ingleses y colombianos procedentes de la extinguida Escuela Reyes. Con la colaboración de Oficiales y Suboficiales del Ejército, se adelantaron las respectivas instrucciones de tierra para la marinería, y más tarde algunos de ellos ingresaron con entusiasmo a la Armada Nacional y se escalafonaron en la <strong>Infantería de Marina</strong>.”</p>
    
        <p><em>(Libro "La Infantería de Marina en la Historia de Colombia", 2021. Capítulo 3, p. 37)</em></p>
      </blockquote>
    `;
    

      //
      break;
    case 7:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "1.png"

      document.getElementById("HistoryDerechos").innerHTML = "Desplazamiento de tropas para el Combate de Guëpí. Fuente: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm' target='_blank'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>";
      document.getElementById("TituloPutumayo").innerHTML = "Batalla de Guëpí (1932-1933)";
      document.getElementById("TextPutumayo").innerHTML = "La Batalla de Guëpí fue un enfrentamiento clave durante la Guerra Colombo – Peruana, ocurrido el 26 de marzo de 1933. Este combate se desarrolló en el contexto de la disputa territorial...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Batalla de Guëpí (1932-1933)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p><strong>La Batalla de Güepí</strong> fue un enfrentamiento clave durante la <strong>Guerra Colombo–Peruana</strong>, ocurrido el <strong>26 de marzo de 1933</strong>. Este se desarrolló en el contexto de la disputa territorial por la soberanía del <strong>Puerto de Leticia</strong> y las áreas circundantes, ubicadas en el departamento del Amazonas. La batalla evidenció el papel decisivo de las Fuerzas Militares de Colombia en la recuperación de territorios ocupados por Perú.</p>
    
      <p>Esta reconocida batalla se originó debido al inconformismo de los hacendados peruanos tras la firma del <strong>Tratado Salomón-Lozano</strong> en 1922, mediante el cual se redefinieron las fronteras entre Brasil, Colombia y Perú. Como resultado, Colombia estableció un puesto de aduanas en la frontera que dificultaba el transporte de caucho y caña de azúcar hacia <strong>Iquitos (Perú)</strong>, afectando las finanzas peruanas.</p>
    
      <blockquote>
        <p>“El conflicto en Güepí se desdobló a lo largo de un sector de 15 kilómetros y durante casi nueve horas sin descanso.”</p>
        <p><em>(Libro "Historia de la Fuerza Naval del Sur en la Amazonía Colombiana", 2017. P. 44)</em></p>
      </blockquote>
    
      <blockquote>
        <p>“El 26 de marzo de 1933, durante el conflicto con el Perú, se creó el destacamento del Putumayo y la Flotilla Fluvial. Desde Puerto Leguízamo se lanzó la ofensiva contra la guarnición militar peruana de Güepí, en donde nuestros soldados, con un heroísmo sin precedentes, se trenzaron en feroz combate cuerpo a cuerpo con el enemigo y el <strong>Sargento Néstor Ospina Melo</strong> arrió la bandera peruana e izó la bandera de Colombia y todos los nuestros gritaban ‘<strong>¡Viva Colombia!</strong>’. Esta victoria puso fin a la guerra con el Perú, y rescató para nuestro país el honor y la dignidad.</p>
        
        <p>La máxima personificación del valor de nuestros soldados queda reflejada en <strong>Juan Bautista Solarte Obando</strong>, quien al descubrir la ametralladora del enemigo se lanzó sobre ella para salvar la vida de sus compañeros.”</p>
        <p><em>(Libro "La Infantería de Marina en la Historia de Colombia", 2021. Capítulo 5, P. 203)</em></p>
      </blockquote>
    
      <p>Un total de <strong>16 militares ofrendaron su vida</strong> en esta batalla, siendo este un acto valeroso y heroico que contribuyó a la victoria de las tropas colombianas, quienes garantizaron la soberanía nacional y la legitimidad institucional, mediante el despliegue oportuno y eficiente de las capacidades terrestres, fluviales y aéreas.</p>
    `;
    
      //
      break;
    case 8:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Escuadrilla aérea colombiana, Batalla de Tarapacá. Fuente: <a href='https://www.fac.mil.co/es/noticias/batalla-de-tarapaca-hecho-historico-que-marco-la-historia-de-la-aviacion-militar-en' target='_blank'>Artículo: Batalla de Tarapacá, hecho histórico que marcó la historia de la aviación militar en Colombia</a>";
      document.getElementById("TituloPutumayo").innerHTML = "La Batalla de Tarapacá (1933)";
      document.getElementById("TextPutumayo").innerHTML = "La Batalla de Tarapacá, también conocida como el Combate de Nuevo Tarapacá o la defensa del Bajo Putumayo, fue un enfrentamiento militar ocurrido el 14 de febrero de 1933 durante el conflicto Colombo – Peruano (1932-1933)...";
      document.getElementById("TituloPopAmazonas").innerHTML = "La Batalla de Tarapacá (1933)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p><strong>La Batalla de Tarapacá</strong>, también conocida como el <strong>Combate de Nuevo Tarapacá</strong> o la <strong>defensa del Bajo Putumayo</strong>, fue un enfrentamiento militar ocurrido el <strong>14 de febrero de 1933</strong> durante el conflicto <strong>Colombo–Peruano (1932–1933)</strong>, en el cual ambas naciones se disputaban una amplia región que circundaba el río Putumayo.</p>
    
      <blockquote>
        <p>“La batalla inició cuando en horas de la mañana del 14 de febrero de 1933, tropas colombianas sufrieron el ataque de una escuadrilla aérea peruana, lo que provocó la respuesta inmediata de la escuadrilla aérea colombiana que se encontraba fondeada en las proximidades a Tarapacá (Amazonas), sin llegarse a dar un combate directo. Se buscaba con esta maniobra desconcertar a los peruanos sobre las verdaderas intenciones del ataque.</p>
    
        <p>En ese año, el General Alfredo Vásquez Cobo se traslada a bordo del Destructor ARC “Córdoba” y pide la convergencia sobre Tarapacá (Amazonas), de los cañoneros ARC “Cartagena” y ARC “Santa Marta” desde el Alto Putumayo, solicitud que no pudo ser atendida debido a que el destacamento del Putumayo adelantaba operaciones en su zona de responsabilidad, que culminarían con el ataque sobre Güepí (Perú).</p>
    
        <p>En horas de la mañana del día 15 de febrero, tuvo lugar el ataque de las unidades fluviales, cuyo desembarco fue dirigido personalmente por el General Efraín Rojas; con sorpresa se encontró que la guarnición peruana había abandonado el fortín. A las nueve de la mañana se izó sobre Tarapacá (Amazonas) el pabellón colombiano.</p>
    
        <p>Se restituía a la heredad patria, el primero de los fragmentos que se intentó arrebatar. Con Tarapacá, la proyección del poder aéreo y fluvial colombiano sobre el escenario Amazónico se hizo más evidente. Se pudo instalar allí una base de apoyo a las operaciones subsiguientes.”</p>
        <p><em>(Cyber-corredera, Artículo “Se recupera Tarapacá”, https://www.cyber-corredera.de/panoles/Panol-48.htm)</em></p>
      </blockquote>
    
      <p>En la <strong>Batalla de Tarapacá</strong>, las tropas colombianas tomaron el control del Bajo Putumayo, obteniendo una posición estratégica que facilitaría las operaciones posteriores hacia <strong>Leticia (Amazonas)</strong>.</p>
    
      <p>Cabe resaltar que la <strong>mediación de la Liga de las Naciones</strong> en Ginebra, Suiza, fue fundamental para poner fin al conflicto, devolviendo Leticia a Colombia en el año <strong>1934</strong>.</p>
    `;
    
      //
      break;
    case 9:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Estampilla que conmemora la Intendencia del Amazonas, Archivo Banco de la República de Colombia. Fuente: <a href='https://sinchi.org.co/galeria-de-fotos' target='_blank'>https://sinchi.org.co/galeria-de-fotos</a>";
      document.getElementById("TituloPutumayo").innerHTML = "Creación de la Intendencia Nacional del Amazonas (1951)";
      document.getElementById("TextPutumayo").innerHTML = "La Intendencia Nacional del Amazonas fue establecida mediante el Decreto Ley 963 de fecha 14 de marzo de 1951. Esta medida reforzó la presencia de la Armada de Colombia, fortaleció la infraestructura naval y reafirmó el...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación de la Intendencia Nacional del Amazonas (1951)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p><strong>La Intendencia Nacional del Amazonas</strong> fue establecida mediante el <strong>Decreto Ley 963 del 14 de marzo de 1951</strong>. Esta medida reforzó la presencia de la Armada de Colombia, fortaleció la infraestructura y reafirmó el dominio colombiano sobre el territorio amazónico.</p>
    
      <p>La Intendencia del Amazonas había sido previamente una entidad territorial creada en <strong>1931</strong> para consolidar la soberanía colombiana en la región tras los conflictos con <strong>Perú y Brasil</strong>.</p>
    
      <p>La creación de la Intendencia Nacional del Amazonas formó parte de un esfuerzo más amplio por parte del gobierno colombiano para fortalecer su control sobre la región amazónica, conocida como el <strong>“Trapecio Amazónico”</strong>, una zona estratégica debido a su riqueza en recursos naturales y su posición geográfica.</p>
    
      <p>El establecimiento de esta intendencia permitió una mayor presencia <strong>militar y naval</strong> en la región, facilitando la protección de las fronteras y la navegación fluvial, así como fortaleciendo la lucha contra el <strong>narcotráfico y sus delitos conexos transnacionales</strong>.</p>
    `;
    
       
      //
      break;
    case 10:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Tropas peruanas marchan hacia La Pedrera. Fuente: Libro La Fuerza Naval del Sur en la Amazonía colombiana, 2017.";
      document.getElementById("TituloPutumayo").innerHTML = "Conflicto en La Pedrera (1911)";
      document.getElementById("TextPutumayo").innerHTML = "El conflicto de La Pedrera fue un enfrentamiento armado entre Colombia y Perú que tuvo lugar en el año 1911 en el Puesto Fronterizo de La Pedrera, una pequeña localidad ubicada a orillas del río Caquetá, en la región amazónica...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Conflicto en La Pedrera (1911)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p><strong>El conflicto de La Pedrera</strong> fue un enfrentamiento armado entre Colombia y Perú que tuvo lugar en el año <strong>1911</strong> en el Puesto Fronterizo de La Pedrera, una pequeña localidad ubicada a orillas del río Caquetá, en la región amazónica.</p>
    
      <p>Este conflicto surgió por las <strong>disputas territoriales no resueltas</strong> entre ambos países en la cuenca amazónica, donde la delimitación de fronteras era imprecisa y los intereses económicos en la extracción de caucho intensificaban las tensiones.</p>
    
      <p>La disputa en el territorio inició el <strong>10 de julio de 1911</strong>, y después de dos días de intensa lucha por parte de las tropas colombianas, estas se retiraron con arrojo y valentía hacia una localidad de Brasil, dadas las condiciones de inferioridad en las que se encontraban. Sin embargo, esta confrontación fue el preludio de lo que veinte años después se convertiría en el <strong>conflicto Colombo – Peruano</strong>.” 
      <br><em>(Revista Putumayo, 2012. P. 19)</em></p>
    
      <p>“El conflicto terminó en el año <strong>1911</strong> con la firma del <strong>Tratado Tezanos Pinto-Larrea</strong>, que reafirmó el compromiso de Colombia y Perú de resolver sus diferencias a través del diálogo y la negociación diplomática. Aunque no resolvió definitivamente la situación fronteriza, este tratado ayudó a mantener la paz temporal entre ambos países.” 
      <br><em>(Libro Historia de la Fuerza Naval del Sur en la Amazonía Colombiana, 2017. P. 37-38)</em></p>
    `;
    
      //
      break;
//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE//GUAVIARE      

    case 11:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Conmemoración del 72º aniversario de la Base Naval ARC Leguízamo. Fuente: Archivo de la Armada Nacional, año 2015.";
      document.getElementById("TituloGuaviare").innerHTML = "Auge de la extracción de quina, tigrillos, caucho y madera (1920-1950)";
      document.getElementById("TextGuaviare").innerHTML = "Durante el auge de la extracción de quina, tigrillos, caucho y madera, entre 1920 y 1950, la Armada de Colombia desempeñó un papel fundamental en el territorio que actualmente corresponde a...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Auge de la extracción de quina, tigrillos, caucho y madera (1920-1950)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p>Durante el auge de la extracción de <strong>quina</strong>, <strong>tigrillos</strong>, <strong>caucho</strong> y <strong>madera</strong> entre <strong>1920 y 1950</strong>, la <strong>Armada de Colombia</strong> desempeñó un papel fundamental en el territorio que actualmente compone el departamento de <strong>Guaviare</strong>, llevando a cabo operaciones de <strong>control territorial</strong> en los afluentes y zonas de extracción para asegurar que no se presentaran <strong>infiltraciones</strong> ni <strong>actividades ilegales</strong> que amenazaran la <strong>estabilidad</strong> y <strong>seguridad</strong> de la región.</p>
    
      <p>Así mismo, la <strong>Armada de Colombia</strong> facilitó el <strong>transporte de materiales y personal</strong> hacia y desde las áreas de extracción, asegurando que las operaciones pudieran llevarse a cabo de manera <strong>eficiente</strong> y <strong>segura</strong>. En ese sentido, también ayudó a <strong>salvaguardar las fronteras</strong>, <strong>evitar conflictos</strong> con países vecinos, asegurar la <strong>soberanía colombiana</strong> y proporcionar <strong>asistencia a las comunidades locales</strong>, con el fin de adaptarse a los <strong>cambios económicos y sociales</strong> provocados por la extracción de recursos naturales.</p>
    
      <p>Finalmente, la <strong>Institución Naval</strong> desempeñó un papel en la <strong>regulación y control</strong> de las actividades extractivas para minimizar el <strong>impacto ambiental</strong>, aunque la explotación de recursos naturales durante este período tuvo efectos significativos en el <strong>medio ambiente</strong>.</p>
    `;
    
      //
      break;
      case 12:
        document.getElementById("asd").style.display = "block";
        document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"
  
        document.getElementById("HistoryDerechos").innerHTML = "Conmemoración del 72º aniversario de la Base Naval ARC Leguízamo. Fuente: Archivo de la Armada Nacional, año 2015.";
        document.getElementById("TituloGuaviare").innerHTML = "Auge de la extracción de quina, tigrillos, caucho y madera (1920-1950)";
        document.getElementById("TextGuaviare").innerHTML = "Durante el auge de la extracción de quina, tigrillos, caucho y madera, entre 1920 y 1950, la Armada de Colombia desempeñó un papel fundamental en el territorio que actualmente corresponde a...";
        document.getElementById("TituloPopAmazonas").innerHTML = "Auge de la extracción de quina, tigrillos, caucho y madera (1920-1950)";
        document.getElementById("TextPopAmazonas").innerHTML = `
        <p>Durante el auge de la extracción de <strong>quina</strong>, <strong>tigrillos</strong>, <strong>caucho</strong> y <strong>madera</strong> entre <strong>1920 y 1950</strong>, la <strong>Armada de Colombia</strong> desempeñó un papel fundamental en el territorio que actualmente compone el departamento de <strong>Guaviare</strong>, llevando a cabo operaciones de <strong>control territorial</strong> en los afluentes y zonas de extracción para asegurar que no se presentaran <strong>infiltraciones</strong> ni <strong>actividades ilegales</strong> que amenazaran la <strong>estabilidad</strong> y <strong>seguridad</strong> de la región.</p>
      
        <p>Así mismo, la <strong>Armada de Colombia</strong> facilitó el <strong>transporte de materiales y personal</strong> hacia y desde las áreas de extracción, asegurando que las operaciones pudieran llevarse a cabo de manera <strong>eficiente</strong> y <strong>segura</strong>. En ese sentido, también ayudó a <strong>salvaguardar las fronteras</strong>, <strong>evitar conflictos</strong> con países vecinos, asegurar la <strong>soberanía colombiana</strong> y proporcionar <strong>asistencia a las comunidades locales</strong>, con el fin de adaptarse a los <strong>cambios económicos y sociales</strong> provocados por la extracción de recursos naturales.</p>
      
        <p>Finalmente, la <strong>Institución Naval</strong> desempeñó un papel en la <strong>regulación y control</strong> de las actividades extractivas para minimizar el <strong>impacto ambiental</strong>, aunque la explotación de recursos naturales durante este período tuvo efectos significativos en el <strong>medio ambiente</strong>.</p>
      `;
      
        //
        break;
    case 13:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloGuaviare").innerHTML = "Expedición Militar para la Consolidación de la soberanía en la Frontera Amazónica (1930-1940)";
      document.getElementById("TextGuaviare").innerHTML = "En 1991, con la promulgación de la nueva Constitución Política de Colombia, Guaviare fue elevado a la categoría de departamento, en el marco de la redistribución territorial que buscaba mejorar la administración y el desarrollo...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Expedición Militar para la Consolidación de la soberanía en la Frontera Amazónica (1930-1940)";
      document.getElementById("TextPopAmazonas").innerHTML = `
  <p>En la <strong>década de 1930</strong>, luego del conflicto <strong>Colombo – Peruano</strong> (1932-1933), <strong>Colombia</strong> fortaleció su presencia militar en los territorios <strong>amazónicos</strong>, incluyendo lo que ahora es el departamento de <strong>Guaviare</strong>, para asegurar las fronteras definidas por el <strong>Tratado Salomón-Lozano</strong> (1922).</p>

  <p>La <strong>Armada de Colombia</strong> ejerció su presencia mediante <strong>exploraciones</strong>, <strong>patrullajes fluviales</strong> y <strong>operaciones coordinadas</strong> con el <strong>Ejército Nacional</strong>, con el fin de consolidar la <strong>soberanía</strong> del territorio en los ríos <strong>Guaviare</strong> y sus afluentes.</p>

  <p>Finalmente, la <strong>Institución Naval</strong> contribuyó a establecer <strong>puestos de control fluvial</strong> y asegurar la <strong>estabilidad</strong> en la región, demostrando un alto nivel de <strong>alistamiento</strong> e importante capacidad <strong>operacional y logística</strong> para la <strong>consolidación territorial</strong>.</p>
`;

    
      //
      break;
    case 14:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloGuaviare").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Fuerza Naval de la Amazonía (1991)";
      document.getElementById("TextGuaviare").innerHTML = "En 1991, con la promulgación de la nueva Constitución Política de Colombia, Guaviare fue elevado a la categoría de departamento, en el marco de la redistribución territorial que buscaba mejorar la administración y el desarrollo...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Fuerza Naval de la Amazonía (1991)";
      document.getElementById("TextPopAmazonas").innerHTML = `
  <p>En <strong>1991</strong>, con la promulgación de la nueva <strong>Constitución Política de Colombia</strong>, <strong>Guaviare</strong> fue elevado a la categoría de <strong>departamento</strong>, en el marco de la <strong>redistribución territorial</strong> que buscaba mejorar la administración y el desarrollo de las regiones más alejadas del país. Antes del año <strong>1991</strong>, Guaviare era considerado una <strong>Comisaría Especial</strong>, una entidad administrativa que no tenía la misma autonomía ni recursos.</p>

  <p>En ese sentido, la creación del departamento de <strong>Guaviare</strong> consolidó la presencia de la <strong>Fuerza Naval de la Amazonía</strong> en la región, la cual desempeñó un rol fundamental en la <strong>protección de las zonas fronterizas</strong>, la <strong>lucha frontal contra el narcotráfico</strong> y la <strong>defensa de los recursos naturales</strong>. Adicionalmente, la nueva administración permitió una mejor <strong>distribución de recursos</strong> y una mayor atención a las <strong>necesidades de la población</strong>.</p>

  <p>Es importante mencionar que, desde su creación, el departamento de <strong>Guaviare</strong> ha enfrentado varios desafíos, incluyendo la <strong>preservación del medio ambiente</strong> y la <strong>protección de los derechos de las comunidades indígenas</strong>. Sin embargo, la <strong>Fuerza Naval de la Amazonía</strong> ha continuado de manera irrestricta cumpliendo con su misión de <strong>proteger a la población civil</strong>, garantizar la <strong>soberanía</strong> y el <strong>control territorial</strong>, contrarrestar las <strong>actividades ilícitas</strong> y delitos conexos <strong>trasnacionales</strong>, así como <strong>coadyuvar al desarrollo sostenible</strong> de la región amazónica.</p>
`;

    
      //
      break;

      case 15:
      ///Repetir el caso 14
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloGuaviare").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Fuerza Naval de la Amazonía (1991)";
      document.getElementById("TextGuaviare").innerHTML = "En 1991, con la promulgación de la nueva Constitución Política de Colombia, Guaviare fue elevado a la categoría de departamento, en el marco de la redistribución territorial que buscaba mejorar la administración y el desarrollo...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Creación del departamento de Guaviare, consolidando la presencia de la Fuerza Naval de la Amazonía (1991)";
      document.getElementById("TextPopAmazonas").innerHTML = `
  <p>En <strong>1991</strong>, con la promulgación de la nueva <strong>Constitución Política de Colombia</strong>, <strong>Guaviare</strong> fue elevado a la categoría de <strong>departamento</strong>, en el marco de la <strong>redistribución territorial</strong> que buscaba mejorar la administración y el desarrollo de las regiones más alejadas del país. Antes del año <strong>1991</strong>, Guaviare era considerado una <strong>Comisaría Especial</strong>, una entidad administrativa que no tenía la misma autonomía ni recursos.</p>

  <p>En ese sentido, la creación del departamento de <strong>Guaviare</strong> consolidó la presencia de la <strong>Fuerza Naval de la Amazonía</strong> en la región, la cual desempeñó un rol fundamental en la <strong>protección de las zonas fronterizas</strong>, la <strong>lucha frontal contra el narcotráfico</strong> y la <strong>defensa de los recursos naturales</strong>. Adicionalmente, la nueva administración permitió una mejor <strong>distribución de recursos</strong> y una mayor atención a las <strong>necesidades de la población</strong>.</p>

  <p>Es importante mencionar que, desde su creación, el departamento de <strong>Guaviare</strong> ha enfrentado varios desafíos, incluyendo la <strong>preservación del medio ambiente</strong> y la <strong>protección de los derechos de las comunidades indígenas</strong>. Sin embargo, la <strong>Fuerza Naval de la Amazonía</strong> ha continuado de manera irrestricta cumpliendo con su misión de <strong>proteger a la población civil</strong>, garantizar la <strong>soberanía</strong> y el <strong>control territorial</strong>, contrarrestar las <strong>actividades ilícitas</strong> y delitos conexos <strong>trasnacionales</strong>, así como <strong>coadyuvar al desarrollo sostenible</strong> de la región amazónica.</p>
`;

      //
      break;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
case 16:
  document.getElementById("asd").style.display = "none";
  //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

  document.getElementById("HistoryDerechos").innerHTML = ""
  document.getElementById("TituloBaupez").innerHTML = "Inclusión en el Territorio Nacional del Caquetá (1858)";
  document.getElementById("TextBaupez").innerHTML = "El Cabo Primero de Infantería de Marina Filogonio Hichamón Kuegajima (Q.E.P.D.) desempeñó un papel crucial en la Fuerza de Tarea 'Leopardo' de la Armada de Colombia. Su misión consistía en recopilar información estratégica...";
  document.getElementById("TextBaupez").innerHTML = "En 1958, el Caquetá fue incluido como Territorio Nacional de Colombia, y la Armada de Colombia desempeñó un rol determinante en contribuir a la navegación y el control de las rutas fluviales que comprenden este departamento...";
  document.getElementById("TituloPopAmazonas").innerHTML = "Inclusión en el Territorio Nacional del Caquetá (1858)";
  document.getElementById("TextPopAmazonas").innerHTML = `
  En 1958, el Caquetá fue incluido como Territorio Nacional de Colombia, y la Armada de Colombia desempeñó un rol determinante en contribuir a la navegación y el control de las rutas fluviales que comprenden este departamento.

  En ese sentido, la Armada de Colombia facilitó el desarrollo de la región y tuvo varias responsabilidades durante este proceso de reorganización territorial, entre ellas:

  <ol>
    <li>Desarrollar patrullajes fluviales en las zonas estratégicas de la región, asegurando que no se produjeran actividades ilícitas que amenazaran la estabilidad y seguridad de las comunidades autóctonas del departamento.</li>
    <li>Se facilitó el transporte del personal militar y civil, suministros, medicamentos, alimentos, entre otros, esenciales para la región, manteniendo el orden y control territorial.</li>
    <li>Se garantizó la protección de las fronteras del departamento del Caquetá, evitando conflictos con países vecinos y asegurando la soberanía colombiana en la zona.</li>
    <li>Se proporcionó asistencia a las comunidades locales, brindándoles atención oportuna, bienestar y seguridad.</li>
  </ol>
`;

  //
  break;
      case 17:
        document.getElementById("asd").style.display = "none";
        //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"
  
        document.getElementById("HistoryDerechos").innerHTML = ""
        document.getElementById("TituloBaupez").innerHTML = "Inclusión en el Territorio Nacional del Caquetá (1858)";
        document.getElementById("TextBaupez").innerHTML = "El Cabo Primero de Infantería de Marina Filogonio Hichamón Kuegajima (Q.E.P.D.) desempeñó un papel crucial en la Fuerza de Tarea 'Leopardo' de la Armada de Colombia. Su misión consistía en recopilar información estratégica...";
        document.getElementById("TextBaupez").innerHTML = "En 1958, el Caquetá fue incluido como Territorio Nacional de Colombia, y la Armada de Colombia desempeñó un rol determinante en contribuir a la navegación y el control de las rutas fluviales que comprenden este departamento...";
        document.getElementById("TituloPopAmazonas").innerHTML = "Inclusión en el Territorio Nacional del Caquetá (1858)";
        document.getElementById("TextPopAmazonas").innerHTML = `
        En 1958, el Caquetá fue incluido como Territorio Nacional de Colombia, y la Armada de Colombia desempeñó un rol determinante en contribuir a la navegación y el control de las rutas fluviales que comprenden este departamento.
      
        En ese sentido, la Armada de Colombia facilitó el desarrollo de la región y tuvo varias responsabilidades durante este proceso de reorganización territorial, entre ellas:
      
        <ol>
          <li>Desarrollar patrullajes fluviales en las zonas estratégicas de la región, asegurando que no se produjeran actividades ilícitas que amenazaran la estabilidad y seguridad de las comunidades autóctonas del departamento.</li>
          <li>Se facilitó el transporte del personal militar y civil, suministros, medicamentos, alimentos, entre otros, esenciales para la región, manteniendo el orden y control territorial.</li>
          <li>Se garantizó la protección de las fronteras del departamento del Caquetá, evitando conflictos con países vecinos y asegurando la soberanía colombiana en la zona.</li>
          <li>Se proporcionó asistencia a las comunidades locales, brindándoles atención oportuna, bienestar y seguridad.</li>
        </ol>
      `;
  
        //
        break;
        case 18:
          document.getElementById("asd").style.display = "none";
          //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"
    
          document.getElementById("HistoryDerechos").innerHTML = ""
          document.getElementById("TituloBaupez").innerHTML = "Honor y valentía de un héroe de la Armada de Colombia, CP Filogonio Hichamón Kuegajima (Q.E.P.D) (1981)";
          document.getElementById("TextBaupez").innerHTML = `“El Cabo Primero de Infantería de Marina Filogonio Hichamón Kuegajima (Q.E.P.D), desempeñó un papel crucial en la Fuerza de Tarea “Leopardo” de la Armada de Colombia, su misión consistía en recopilar información estratégica del grupo armado ilegal de...`;
          document.getElementById("TituloPopAmazonas").innerHTML = "Honor y valentía de un héroe de la Armada de Colombia, CP Filogonio Hichamón Kuegajima (Q.E.P.D) (1981)";
          document.getElementById("TextPopAmazonas").innerHTML =
            `“El Cabo Primero de Infantería de Marina Filogonio Hichamón Kuegajima (Q.E.P.D), desempeñó un papel crucial en la Fuerza de Tarea “Leopardo” de la Armada de Colombia, su misión consistía en recopilar información estratégica del grupo armado ilegal de ese entonces, liderado por Jairo Capera Díaz.
        
          Lamentablemente, su identidad fue descubierta y el 31 de octubre de 1981 en el sector de Peñas Blancas (Caquetá), fue capturado, torturado y finalmente ejecutado con un tiro de gracia a orillas del río Caquetá. Antes de su muerte, Hichamón manifestó a Capera: “Yo hice mi trabajo mejor que usted”.
        
          En reconocimiento a su valentía y sacrificio, la Armada de Colombia incorporó en 1993 una unidad a flote Patrullera de Apoyo Fluvial denominada ARC “CP Filigonio Hichamón” 
          <em>(El Boletín – Medio de difusión de la Infantería de Marina de Colombia. Edición No. 50 – Año 2020. Artículo Fuerza Naval del Sur, unidad de memoria histórica, por Teniente de Navío Wilmar Raúl Amaya Plata – Asesor Jurídico Operacional Fuerza Naval del Sur. P. 100-101).</em>
        `;
    
          //
          break;
          case 19:
            ///Repetir el caso 18
            document.getElementById("asd").style.display = "none";
            //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"
      
            document.getElementById("HistoryDerechos").innerHTML = ""
            document.getElementById("TituloBaupez").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)";
            document.getElementById("TextBaupez").innerHTML = `“El 18 de febrero de 1905 mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización buscaba una mejor administración de las regiones amazónicas”...`;
            document.getElementById("TituloPopAmazonas").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)";
            document.getElementById("TextPopAmazonas").innerHTML = `
        “El 18 de febrero de 1905 mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización buscaba una mejor administración de las regiones amazónicas” 
        (Hacia la departamentalización. Instituto Geográfico Agustín Codazzi IGAC - Diccionario Geográfico. Gobernación del Departamento del Caquetá).
      
        De su extenso territorio, que inicialmente cubría toda la región al sur del río Guaviare se desprendieron sucesivamente las intendencias y comisarías amazónicas. La colonización del Caquetá se inició en realidad en 1930 con motivo del conflicto Colombo – Peruano, y se destaca que la extracción del caucho era el eje fundamental de la economía en este periodo.
      
        <strong>Elevación a departamento (1981)</strong>
      
        El 15 de diciembre de 1981, mediante la Ley 78 se erige en departamento la Intendencia Nacional del Caquetá, consolidando su estructura administrativa actual y ratificando a Florencia como su capital.
      
        Estos eventos reflejan la evolución administrativa del Caquetá, desde sus inicios como territorio nacional hasta su consolidación como departamento, destacando la importancia estratégica y geográfica de la región en el contexto colombiano.
      
        La creación del departamento del Caquetá consolidó la presencia de la Fuerza Naval de la Amazonía en la región, desempeñando un papel fundamental en la lucha frontal contra el narcotráfico y sus delitos conexos, la defensa de los intereses fluviales y recursos naturales, así como, la asistencia y protección de las comunidades y población civil de la cuenca amazónica.
      `;
            //
            break;
            case 20:
              ///Repetir el caso 18
              document.getElementById("asd").style.display = "none";
              //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"
        
              document.getElementById("HistoryDerechos").innerHTML = ""
              document.getElementById("TituloBaupez").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)";
              document.getElementById("TextBaupez").innerHTML = `“El 18 de febrero de 1905 mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización buscaba una mejor administración de las regiones amazónicas”...`;
              document.getElementById("TituloPopAmazonas").innerHTML = "Establecimiento de la Intendencia del Alto Caquetá (1905)";
              document.getElementById("TextPopAmazonas").innerHTML = `
          “El 18 de febrero de 1905 mediante el Decreto 167, se reorganizaron varias intendencias y se creó la Intendencia del Alto Caquetá, con capital en Florencia. Esta reorganización buscaba una mejor administración de las regiones amazónicas” 
          (Hacia la departamentalización. Instituto Geográfico Agustín Codazzi IGAC - Diccionario Geográfico. Gobernación del Departamento del Caquetá).
        
          De su extenso territorio, que inicialmente cubría toda la región al sur del río Guaviare se desprendieron sucesivamente las intendencias y comisarías amazónicas. La colonización del Caquetá se inició en realidad en 1930 con motivo del conflicto Colombo – Peruano, y se destaca que la extracción del caucho era el eje fundamental de la economía en este periodo.
        
          <strong>Elevación a departamento (1981)</strong>
        
          El 15 de diciembre de 1981, mediante la Ley 78 se erige en departamento la Intendencia Nacional del Caquetá, consolidando su estructura administrativa actual y ratificando a Florencia como su capital.
        
          Estos eventos reflejan la evolución administrativa del Caquetá, desde sus inicios como territorio nacional hasta su consolidación como departamento, destacando la importancia estratégica y geográfica de la región en el contexto colombiano.
        
          La creación del departamento del Caquetá consolidó la presencia de la Fuerza Naval de la Amazonía en la región, desempeñando un papel fundamental en la lucha frontal contra el narcotráfico y sus delitos conexos, la defensa de los intereses fluviales y recursos naturales, así como, la asistencia y protección de las comunidades y población civil de la cuenca amazónica.
        `;
              //
              break;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    case 21:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloAmazonas").innerHTML = "Gran migración debido a la violencia política en Colombia (1948-1958)";
      document.getElementById("TextAmazonas").innerHTML = "Durante la gran migración debido a la violencia política en Colombia, en 1968, el conflicto adoptó una dinámica particular en el departamento del Vaupés, debido a su condición..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Gran migración debido a la violencia política en Colombia (1948-1958)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      Durante la gran migración debido a la violencia política en Colombia, en 1968, el conflicto adoptó una dinámica particular en el departamento del Vaupés, debido a su condición de territorio selvático y de difícil acceso. Esta región, habitada en su mayoría por comunidades indígenas, fue escenario de abusos y enfrentamientos entre los grupos armados que buscaban imponer su control político y territorial. 
      
      La violencia política de la década de 1960, conocida como ‘La Violencia’, provocó una migración masiva de personas que huían de sus hogares en busca de seguridad. Esta situación generó una crisis humanitaria que requería una respuesta coordinada y efectiva. En ese contexto, la Armada de Colombia desempeñó un papel fundamental en la protección y asistencia de los desplazados, dada la geografía de la región, atravesada por los ríos Apaporis y Vaupés. Al ser una zona selvática, la navegación fluvial era la principal forma de transporte y comunicación, lo que le otorgó a la Institución Naval un papel estratégico en la región.
    `;
    
      //
      break;
    case 22:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloAmazonas").innerHTML = "Gran migración debido a la violencia política en Colombia (1948-1958)";
      document.getElementById("TextAmazonas").innerHTML = "Durante la gran migración debido a la violencia política en Colombia, en 1968, el conflicto adoptó una dinámica particular en el departamento del Vaupés, debido a su condición..."
      document.getElementById("TituloPopAmazonas").innerHTML = "Gran migración debido a la violencia política en Colombia (1948-1958)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      Durante la gran migración debido a la violencia política en Colombia, en 1968, el conflicto adoptó una dinámica particular en el departamento del Vaupés, debido a su condición de territorio selvático y de difícil acceso. Esta región, habitada en su mayoría por comunidades indígenas, fue escenario de abusos y enfrentamientos entre los grupos armados que buscaban imponer su control político y territorial. 
      
      La violencia política de la década de 1960, conocida como ‘La Violencia’, provocó una migración masiva de personas que huían de sus hogares en busca de seguridad. Esta situación generó una crisis humanitaria que requería una respuesta coordinada y efectiva. En ese contexto, la Armada de Colombia desempeñó un papel fundamental en la protección y asistencia de los desplazados, dada la geografía de la región, atravesada por los ríos Apaporis y Vaupés. Al ser una zona selvática, la navegación fluvial era la principal forma de transporte y comunicación, lo que le otorgó a la Institución Naval un papel estratégico en la región.
    `;
    
      //
      break;
    case 23:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloAmazonas").innerHTML = "Impacto de la explotación cauchera (1960-1970)";
      document.getElementById("TextAmazonas").innerHTML = "La industria del caucho tuvo una influencia significativa en la dinámica migratoria del Vaupés. Durante las décadas de 1960 y 1970, la explotación cauchera afectó las estructuras sociales y económicas de la región...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Impacto de la explotación cauchera (1960-1970)";
      document.getElementById("TextPopAmazonas").innerHTML = 
      "La industria del caucho tuvo una influencia significativa en la dinámica migratoria del Vaupés. Durante las décadas de 1960 y 1970, la explotación cauchera afectó las estructuras sociales y económicas de las comunidades indígenas, generando tensiones y disputas sobre la regulación del trabajo indígena entre caucheros, misioneros y funcionarios. Estas tensiones contribuyeron a que algunas comunidades indígenas buscaran establecerse en nuevas regiones (Revista Colombiana de Antropología. Volumen 46 (2), julio-diciembre 2010, p. 331).";

      //
      break;
    case 24:
      ///
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloAmazonas").innerHTML = "Toma de Mitú – Vaupés (1998)";
      document.getElementById("TextAmazonas").innerHTML = "La toma de Mitú – Vaupés, ocurrida el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP, dejando como saldo 24 militares, 16 policías...";
      document.getElementById("TextAmazonas").innerHTML = "La toma de Mitú – Vaupés, el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP. El ataque resultó en la muerte de 24 militares, 16 ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Toma de Mitú – Vaupés (1998) VERIFICAR VIABILIDAD DE INCLUIR ESTE HECHO";
      document.getElementById("TextPopAmazonas").innerHTML = 
      "La toma de Mitú – Vaupés, el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP. El ataque resultó en la muerte de 24 militares, 16 policías, 11 civiles y dejó 47 uniformados heridos, además de más de 60 secuestrados. Durante 72 horas, la población de Mitú estuvo sometida a crímenes de guerra y violaciones de los derechos humanos, constituyendo una flagrante transgresión del Derecho Internacional Humanitario. No obstante, las Fuerzas Militares de Colombia desplegaron todas sus capacidades aéreas, fluviales y terrestres para consolidar el control territorial y proteger a la población civil. Más de 1,200 uniformados de la Fuerza Pública enfrentaron entre 900 y 1,500 guerrilleros que participaron en el ataque (Diferentes fuentes de información).";
      
      //
      break;
    case 25:
      ///Repetir el caso 24
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = ""
      document.getElementById("TituloAmazonas").innerHTML = "Toma de Mitú – Vaupés (1998)";
      document.getElementById("TextAmazonas").innerHTML = "La toma de Mitú – Vaupés, ocurrida el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP, dejando como saldo 24 militares, 16 policías...";
      document.getElementById("TextAmazonas").innerHTML = "La toma de Mitú – Vaupés, el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP. El ataque resultó en la muerte de 24 militares, 16 ...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Toma de Mitú – Vaupés (1998) VERIFICAR VIABILIDAD DE INCLUIR ESTE HECHO";
      document.getElementById("TextPopAmazonas").innerHTML = 
      "La toma de Mitú – Vaupés, el 1 de noviembre de 1998, fue considerada la acción bélica más sangrienta ejecutada por las extintas FARC-EP. El ataque resultó en la muerte de 24 militares, 16 policías, 11 civiles y dejó 47 uniformados heridos, además de más de 60 secuestrados. Durante 72 horas, la población de Mitú estuvo sometida a crímenes de guerra y violaciones de los derechos humanos, constituyendo una flagrante transgresión del Derecho Internacional Humanitario. No obstante, las Fuerzas Militares de Colombia desplegaron todas sus capacidades aéreas, fluviales y terrestres para consolidar el control territorial y proteger a la población civil. Más de 1,200 uniformados de la Fuerza Pública enfrentaron entre 900 y 1,500 guerrilleros que participaron en el ataque (Diferentes fuentes de información).";
      
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

      document.getElementById("HistoryDerechos").innerHTML = "The empire known as Casa Arana exploited rubber in the Amazon region. Source: Book *The Southern Naval Force in the Colombian Amazon*, 2017.";
      document.getElementById("Titulocaqueta").innerHTML = "Casa Arana: The Rubber Rebellion (1904–1907)";
      document.getElementById("Textcaqueta").innerHTML = "Casa Arana has a colonial structure with features typical of architecture adapted to the Amazon region, where local materials such as wood dominate...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Casa Arana: The Rubber Rebellion (1904–1907)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p>In 1904, the company known as the <strong>Peruvian Amazon Company</strong>, based in London, was operating in the Colombian Amazon. It established relations with <strong>Julio César Arana</strong>, which led to a merger in 1907, ensuring the company's viability and future under the name <strong>Casa Arana</strong>.</p>
      
      <p>Casa Arana was established in 1912 in <strong>La Chorrera</strong>, on the banks of the Igaraparaná River, Amazonas department. It featured a colonial structure with typical architecture adapted to the Amazon region, using local materials such as wood and palm roofs.</p>
      
      <p>However, this site is infamously known as a center of exploitation and abuse of indigenous peoples, particularly the <strong>Huitoto</strong>, <strong>Bora</strong>, and <strong>Ocaína</strong> communities, who were subjected to forced labor for rubber extraction—then a source of wealth and cultural transformation in the Amazon.</p>
      
      <p>"It functioned as a collection center and a place of punishment for those who failed to meet rubber quotas. Casa Arana was organized around two collection centers: <strong>La Chorrera</strong>, for the Igaraparaná River area, and <strong>El Encanto</strong>, for the Caraparaná River, from where rubber was shipped to Iquitos, Peru, and then abroad. These were subdivided into sections corresponding to different indigenous settlements: fifteen for La Chorrera and eight for El Encanto."</p>
      <p><em>(The Red Book of Putumayo, Norman Thomson - Roberto Pineda Camacho, pp. 13–14)</em></p>
      
      <p>Indigenous people were subjected to a "debt bondage" system, receiving tools like machetes in exchange for disproportionate amounts of rubber, creating unpayable debts that perpetuated their enslavement.</p>
      <p><em>(BBC.com article – “The Devil's Paradise: Atrocities of the 'Rubber Holocaust' in the Colombian Amazon,” by Andrea Díaz Cardona, August 26, 2022. <a href="https://www.bbc.com/mundo/noticias-america-latina-60922508" target="_blank">bbc.com</a>)</em></p>
      
      <p>Today, Casa Arana is a <strong>“Knowledge Center”</strong> for indigenous youth in the Putumayo region and is considered a symbol of remembrance and historical memory in the fight for indigenous rights during Colombia’s economic development in the south. It has become a place for reflection and, in some cases, a destination to dignify the victims of past armed conflict.</p>
      <p><em>(Book “The History of the Southern Naval Force in the Colombian Amazon”, 2017. Chapter 5, pp. 30–32)</em></p>
      `;
      
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

      document.getElementById("HistoryDerechos").innerHTML = "Formation of the Putumayo War Flotilla. Source: *Historical Locker*, “The Battle of Güepí and the gunboats Cartagena and Santa Marta”, by: Naval Captain Carlos A. Prieto Ávila – Cyber-corredera. Website: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>.";
      document.getElementById("Titulocaqueta").innerHTML = "Putumayo War Flotilla (1931)";
      document.getElementById("Textcaqueta").innerHTML = "The Putumayo War Flotilla was created in 1931 under Decree 1507 of August 31 that year, as a measure to strengthen Colombian presence in the Amazon region...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Putumayo War Flotilla (1931)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p>The <strong>Putumayo War Flotilla</strong> was created by <strong>Decree 1507 of August 31, 1931</strong>. This decision was in response to the need to strengthen military presence in the Amazon and protect national sovereignty along the Putumayo River.</p>
      
      <p>It consisted of the gunboats <strong>ARC “Cartagena”</strong> and <strong>ARC “Santa Marta”</strong>, which were transferred from Santa Cruz on the Magdalena River to <strong>Puerto de Caucayá</strong> on the Putumayo River.</p>
      
      <p><em>“Historical Locker, ‘The Battle of Güepí and the gunboats Cartagena and Santa Marta’, by Naval Captain Carlos A. Prieto Ávila – <a href="https://www.cyber-corredera.de/panoles/Panol-48.htm" target="_blank">Cyber-corredera</a></em>)</p>
      
      <p>This flotilla was a strategic measure to reinforce state presence in the region. It played a key role during the <strong>Colombian–Peruvian conflict (1932–1933)</strong>, with permanent patrol and control operations in the area.</p>
      
      <h4>Creation of the Putumayo River Base (1940)</h4>
      
      <p>On <strong>March 8, 1940</strong>, the <strong>Putumayo River Base</strong> was established by <strong>Decree 0487</strong>. This decree reorganized the <strong>Marine Infantry</strong> and, based on experiences from the conflict with Peru, placed the <strong>Marine Infantry Company</strong> and the <strong>River Flotilla</strong> under the command of the <strong>National Army</strong>.</p>
      
      <p><em>(Book "The Marine Infantry in Colombia's History", 2021. Chapter 5, p. 204)</em></p>
      `;
      

      //
      break;

    case 4:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      ddocument.getElementById("HistoryDerechos").innerHTML = "Formation of the Putumayo War Flotilla. Source: *Historical Locker*, “The Battle of Güepí and the gunboats Cartagena and Santa Marta”, by: Naval Captain Carlos A. Prieto Ávila – Cyber-corredera. Website: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>.";
      document.getElementById("Titulocaqueta").innerHTML = "Putumayo War Flotilla (1931)";
      document.getElementById("Textcaqueta").innerHTML = "The Putumayo War Flotilla was created in 1931 under Decree 1507 of August 31 that year, as a measure to strengthen Colombian presence in the Amazon region...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Putumayo War Flotilla (1931)";
      document.getElementById("TextPopAmazonas").innerHTML = `
      <p>The <strong>Putumayo War Flotilla</strong> was created by <strong>Decree 1507 of August 31, 1931</strong>. This decision was in response to the need to strengthen military presence in the Amazon and protect national sovereignty along the Putumayo River.</p>
      
      <p>It consisted of the gunboats <strong>ARC “Cartagena”</strong> and <strong>ARC “Santa Marta”</strong>, which were transferred from Santa Cruz on the Magdalena River to <strong>Puerto de Caucayá</strong> on the Putumayo River.</p>
      
      <p><em>“Historical Locker, ‘The Battle of Güepí and the gunboats Cartagena and Santa Marta’, by Naval Captain Carlos A. Prieto Ávila – <a href="https://www.cyber-corredera.de/panoles/Panol-48.htm" target="_blank">Cyber-corredera</a></em>)</p>
      
      <p>This flotilla was a strategic measure to reinforce state presence in the region. It played a key role during the <strong>Colombian–Peruvian conflict (1932–1933)</strong>, with permanent patrol and control operations in the area.</p>
      
      <h4>Creation of the Putumayo River Base (1940)</h4>
      
      <p>On <strong>March 8, 1940</strong>, the <strong>Putumayo River Base</strong> was established by <strong>Decree 0487</strong>. This decree reorganized the <strong>Marine Infantry</strong> and, based on experiences from the conflict with Peru, placed the <strong>Marine Infantry Company</strong> and the <strong>River Flotilla</strong> under the command of the <strong>National Army</strong>.</p>
      
      <p><em>(Book "The Marine Infantry in Colombia's History", 2021. Chapter 5, p. 204)</em></p>
      `;
      
      //
      break;

    case 5:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "Boats of the 'Avispa' Flotilla. Source: *Book The Marine Infantry in Colombia's History*, 2021.";
document.getElementById("Titulocaqueta").innerHTML = "The Avispa Flotilla (1956)";
document.getElementById("Textcaqueta").innerHTML = "In September 1956, thanks to the initiative of Marine Captain Aurelio Castrillón Muñoz and Lieutenant Rafael Grau Araujo, who were serving...";
document.getElementById("TituloPopAmazonas").innerHTML = "The Avispa Flotilla (1956)";
document.getElementById("TextPopAmazonas").innerHTML = `
<p>In <strong>September 1956</strong>, by initiative of Marine Captain <strong>Aurelio Castrillón Muñoz</strong> and Lieutenant <strong>Rafael Grau Araujo</strong>, who were serving in <strong>Puerto Leguízamo (Putumayo)</strong>, the <strong>“Avispa Flotilla”</strong> was created.</p>

<p>This unit held a demonstration before the military high command on the <strong>Putumayo River</strong> using armed boats manned by Marines, showcasing superior speed and maneuverability compared to the gunboats <strong>ARC “Cartagena”</strong> and <strong>ARC “Santa Marta”</strong>.</p>

<p>The initial organization included seven armed boats: six assigned to the <strong>River Task Force</strong> and one as a <strong>Command and Control boat</strong>. The flotilla came under the operational command of <strong>Company Kilo</strong> in Puerto Leguízamo. Each boat was 13 feet long, had a 1.5-foot draft, could carry up to 800 kilograms, and had a crew of six men.</p>

<p>This structure remained until <strong>1971</strong>, when Marine Captain <strong>Alejandro Pimiento</strong> revitalized the unit by creating the <strong>Jungle Commandos</strong>.</p>

<p><em>(Extracts taken verbatim from the “Operational Organization of the Avispa Flotilla”, September 1956)</em></p>

<p>For its operation, a manual was created with a proposed organization plan highlighting the tactical needs of this unit. Each task group consisted of <strong>nine boats</strong>, each crewed by <strong>four men</strong>, accompanied by a platoon with the corresponding administrative structure.</p>

<p><em>(Book "The Marine Infantry in Colombia's History", 2021. Chapter 3, p. 58)</em></p>

<p>The creation of the Avispa Flotilla demonstrated the adaptability of the <strong>Colombian Armed Forces</strong> to the demands of combat in Amazonian river environments. Its success significantly contributed to the national war effort and the <strong>recovery of Leticia</strong>, highlighting the importance of riverine power in border conflicts and its essential role in sovereignty, security, and the development of communities in the Colombian Amazon.</p>
`;

      //
      break;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
    case 6:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "ARC Cartagena. Source: *Book The Marine Infantry in Colombia's History*, 2021.";
document.getElementById("TituloPutumayo").innerHTML = "Colombian–Peruvian Conflict, also known as the Leticia Conflict (1932–1933)";
document.getElementById("TextPutumayo").innerHTML = "In 1932, due to political fluctuations in Latin American countries, the conflict between Colombia and Peru arose. In early September, a group of Peruvian civilians...";
document.getElementById("TituloPopAmazonas").innerHTML = "Colombian–Peruvian Conflict, also known as the Leticia Conflict (1932–1933)";
document.getElementById("TextPopAmazonas").innerHTML = `
<p>In <strong>1932</strong>, due to political fluctuations in Latin America, the <strong>conflict between Colombia and Peru</strong> broke out. In early September, a group of Peruvian civilians stormed <strong>Leticia (Amazonas)</strong> and took all Colombian residents hostage.</p>

<p>This event prompted the <strong>deployment of the Colombian Navy</strong> to the south of the country. In response, river gunboats <strong>ARC “Cartagena”</strong> and <strong>ARC “Santa Marta”</strong>, the <strong>Hospital Ship MC “Yamari”</strong>, and the <strong>“Madeira”</strong> and <strong>“Esmarck”</strong> units (Brazilian in origin but crewed mostly by Colombian sailors) were dispatched. This formed the <strong>Putumayo River Flotilla</strong>, tasked with protecting border rivers and conducting operations to defend national sovereignty.</p>

<blockquote>
  <p>“In prior years, Colombia had focused on solving internal issues and was not prepared for an international conflict. Due to lack of resources, improvisation and patriotism became necessary.</p>

  <p>As a result, warships were acquired, and the National Government hired British Royal Navy officers to organize and lead the fledgling Colombian Navy.</p>

  <p>The Peruvians called our improvised fleet the <strong>‘suicide squad’</strong>, operating in the Amazon Trapezium to reclaim Leticia. Yet, the conflict led to the creation of a modern <strong>Colombian Navy</strong>.</p>

  <p>Led by Admiral <strong>Bell O. Salter</strong>, the <strong>British Naval Mission</strong> reorganized what is now the modern <strong>Colombian Navy</strong>, a source of national pride and a vigilant defender of our maritime and riverine borders.</p>

  <p>The <strong>Naval Cadet School</strong> was also created, replacing the old school abolished earlier. It began operations on the training ship <strong>M. G. Cúcuta</strong> on July 3, 1935, staffed by both British and Colombian professors. With support from Army officers and non-commissioned officers, the necessary ground training for sailors was conducted, and many joined the Navy and became part of the <strong>Marine Infantry</strong>.”</p>

  <p><em>(Book "The Marine Infantry in Colombia's History", 2021. Chapter 3, p. 37)</em></p>
</blockquote>
`;

      //
      break;
    case 7:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "1.png"

      document.getElementById("HistoryDerechos").innerHTML = "Troop movement to the Battle of Güepí. Source: <a href='https://www.cyber-corredera.de/panoles/Panol-48.htm' target='_blank'>https://www.cyber-corredera.de/panoles/Panol-48.htm</a>";
document.getElementById("TituloPutumayo").innerHTML = "Battle of Güepí (1932–1933)";
document.getElementById("TextPutumayo").innerHTML = "The Battle of Güepí was a key confrontation during the Colombian–Peruvian War, occurring on March 26, 1933...";
document.getElementById("TituloPopAmazonas").innerHTML = "Battle of Güepí (1932–1933)";
document.getElementById("TextPopAmazonas").innerHTML = `
<p><strong>The Battle of Güepí</strong> was a pivotal confrontation during the <strong>Colombian–Peruvian War</strong>, occurring on <strong>March 26, 1933</strong>. It took place amid the territorial dispute over the sovereignty of <strong>Leticia Port</strong> and its surrounding areas in the Amazon department.</p>

<p>This notable battle stemmed from dissatisfaction among Peruvian landowners following the signing of the <strong>Salomón-Lozano Treaty</strong> in 1922, which redefined the borders between Brazil, Colombia, and Peru. Colombia’s establishment of a customs post at the border hindered the flow of rubber and sugarcane to <strong>Iquitos, Peru</strong>, affecting Peruvian trade interests.</p>

<blockquote>
  <p>“The conflict at Güepí unfolded along a 15-kilometer stretch and lasted nearly nine uninterrupted hours.”</p>
  <p><em>(Book "History of the Southern Naval Force in the Colombian Amazon", 2017, p. 44)</em></p>
</blockquote>

<blockquote>
  <p>“On March 26, 1933, during the conflict with Peru, the Putumayo detachment and River Flotilla were created. From Puerto Leguízamo, an offensive was launched against the Peruvian garrison in Güepí. In fierce hand-to-hand combat, <strong>Sergeant Néstor Ospina Melo</strong> lowered the Peruvian flag and raised the Colombian flag, while troops shouted ‘<strong>¡Viva Colombia!</strong>’. This victory ended the war with Peru and restored Colombia's honor and dignity.</p>

  <p><strong>Juan Bautista Solarte Obando</strong> exemplified soldierly valor by throwing himself onto the enemy machine gun to save his comrades’ lives.”</p>
  <p><em>(Book "The Marine Infantry in Colombia's History", 2021. Chapter 5, p. 203)</em></p>
</blockquote>

<p>A total of <strong>16 soldiers sacrificed their lives</strong> in this battle—an act of bravery that ensured the nation’s sovereignty and institutional legitimacy through effective deployment of ground, river, and air capabilities.</p>
`;

      //
      break;
    case 8:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Colombian air squadron, Battle of Tarapacá. Source: <a href='https://www.fac.mil.co/es/noticias/batalla-de-tarapaca-hecho-historico-que-marco-la-historia-de-la-aviacion-militar-en' target='_blank'>FAC Article</a>";
document.getElementById("TituloPutumayo").innerHTML = "Battle of Tarapacá (1933)";
document.getElementById("TextPutumayo").innerHTML = "The Battle of Tarapacá, also known as the Battle of Nuevo Tarapacá or the defense of Lower Putumayo, took place on February 14, 1933...";
document.getElementById("TituloPopAmazonas").innerHTML = "Battle of Tarapacá (1933)";
document.getElementById("TextPopAmazonas").innerHTML = `
<p><strong>The Battle of Tarapacá</strong>, also known as the <strong>Battle of Nuevo Tarapacá</strong> or the <strong>Defense of Lower Putumayo</strong>, was fought on <strong>February 14, 1933</strong> during the <strong>Colombian–Peruvian conflict (1932–1933)</strong>.</p>

<blockquote>
  <p>“The battle began in the morning when Peruvian aircraft attacked Colombian troops, prompting an immediate response from the Colombian air squadron stationed near Tarapacá. No direct air combat ensued, as the goal was to confuse the Peruvians about the true target.</p>

  <p>General Alfredo Vásquez Cobo ordered the convergence of gunboats ARC ‘Cartagena’ and ARC ‘Santa Marta’ toward Tarapacá, but due to active operations in the Putumayo region, they were unavailable.</p>

  <p>On the morning of February 15, the river assault led by General Efraín Rojas found that the Peruvian fort had been abandoned. At 9:00 AM, the Colombian flag was raised over Tarapacá.</p>

  <p>This marked the recovery of the first lost territory. Tarapacá symbolized the growing projection of Colombian air and riverine power in the Amazon, becoming a base for further operations.”</p>
  <p><em>(Cyber-corredera, Article “Tarapacá Recovered”)</em></p>
</blockquote>

<p>The battle secured strategic control of the Lower Putumayo and paved the way for Colombia’s advance toward <strong>Leticia</strong>.</p>

<p>The <strong>League of Nations</strong> mediation in Geneva, Switzerland, was instrumental in ending the conflict and returning Leticia to Colombia in <strong>1934</strong>.</p>
`;

      //
      break;
    case 9:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Stamp commemorating the Amazon Intendancy. Source: <a href='https://sinchi.org.co/galeria-de-fotos' target='_blank'>Banco de la República Photo Archive</a>";
document.getElementById("TituloPutumayo").innerHTML = "Creation of the National Intendancy of the Amazon (1951)";
document.getElementById("TextPutumayo").innerHTML = "The National Intendancy of the Amazon was established by Decree Law 963 on March 14, 1951...";
document.getElementById("TituloPopAmazonas").innerHTML = "Creation of the National Intendancy of the Amazon (1951)";
document.getElementById("TextPopAmazonas").innerHTML = `
<p>The <strong>National Intendancy of the Amazon</strong> was established through <strong>Decree Law 963 on March 14, 1951</strong>. This move strengthened Colombia's naval presence and reinforced national sovereignty over the Amazon territory.</p>

<p>The Intendancy had initially been created in <strong>1931</strong> to consolidate Colombia’s claim following conflicts with <strong>Peru and Brazil</strong>.</p>

<p>This measure was part of a broader effort by the Colombian government to assert control over the <strong>Amazon Trapezium</strong>, a strategically important area rich in natural resources.</p>

<p>The establishment of the Intendancy allowed for increased <strong>military and naval presence</strong>, improved border protection, enhanced river navigation, and better support for the fight against <strong>drug trafficking and related transnational crimes</strong>.</p>
`;

      //
      break;
    case 10:
      document.getElementById("asd").style.display = "block";
      document.getElementById("asd").src = ImgPutumayoLink + NumHistory.toString() + "2.png"

      document.getElementById("HistoryDerechos").innerHTML = "Peruvian troops marching to La Pedrera. Source: Book *History of the Southern Naval Force in the Colombian Amazon*, 2017.";
document.getElementById("TituloPutumayo").innerHTML = "Conflict in La Pedrera (1911)";
document.getElementById("TextPutumayo").innerHTML = "The La Pedrera conflict was an armed confrontation between Colombia and Peru in 1911, taking place at the border post of La Pedrera on the Caquetá River...";
document.getElementById("TituloPopAmazonas").innerHTML = "Conflict in La Pedrera (1911)";
document.getElementById("TextPopAmazonas").innerHTML = `
<p><strong>The La Pedrera Conflict</strong> was an armed confrontation between Colombia and Peru in <strong>1911</strong> at the border post of La Pedrera, located on the <strong>Caquetá River</strong> in the Amazon region.</p>

<p>The conflict arose due to <strong>unresolved territorial disputes</strong> in the Amazon Basin, where imprecise borders and competing economic interests in rubber extraction escalated tensions.</p>

<p>The hostilities began on <strong>July 10, 1911</strong>. After two days of intense combat, Colombian troops withdrew to Brazil due to overwhelming disadvantage, yet the clash marked a prelude to the <strong>Colombian–Peruvian War</strong> two decades later.</p>

<p><em>(Putumayo Magazine, 2012. p. 19)</em></p>

<p>“The conflict ended in <strong>1911</strong> with the signing of the <strong>Tezanos Pinto–Larrea Treaty</strong>, where Colombia and Peru agreed to resolve their disputes through diplomatic negotiation. Though not a final solution, the treaty helped maintain temporary peace.”</p>
<p><em>(Book "History of the Southern Naval Force in the Colombian Amazon", 2017. pp. 37–38)</em></p>
`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////      
      //
      break;
    case 11:
      document.getElementById("asd").style.display = "block";
        document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp";
      
        document.getElementById("HistoryDerechos").innerHTML = "Commemoration of the 72nd anniversary of the ARC Leguízamo Naval Base. Source: National Navy Archive, 2015.";
        document.getElementById("TituloGuaviare").innerHTML = "Rise of the extraction of quinine, jaguars, rubber, and timber (1920-1950)";
        document.getElementById("TextGuaviare").innerHTML = "During the rise of the extraction of quinine, jaguars, rubber, and timber between 1920 and 1950, the Colombian Navy played a crucial role in the territory that now corresponds to...";
        document.getElementById("TituloPopAmazonas").innerHTML = "Rise of the extraction of quinine, jaguars, rubber, and timber (1920-1950)";
        document.getElementById("TextPopAmazonas").innerHTML = `
          <p>During the rise of the extraction of <strong>quinine</strong>, <strong>jaguars</strong>, <strong>rubber</strong>, and <strong>timber</strong> between <strong>1920 and 1950</strong>, the <strong>Colombian Navy</strong> played a fundamental role in the territory now part of the <strong>Guaviare</strong> department, conducting <strong>territorial control</strong> operations in the tributaries and extraction areas to ensure that no <strong>infiltrations</strong> or <strong>illegal activities</strong> that threatened the region’s <strong>stability</strong> and <strong>security</strong> occurred.</p>
        
          <p>Likewise, the <strong>Colombian Navy</strong> facilitated the <strong>transport of materials and personnel</strong> to and from the extraction areas, ensuring that operations could be carried out <strong>efficiently</strong> and <strong>safely</strong>. In this sense, it also helped to <strong>protect the borders</strong>, <strong>avoid conflicts</strong> with neighboring countries, ensure <strong>Colombian sovereignty</strong>, and provide <strong>assistance to local communities</strong>, adapting to the <strong>economic and social changes</strong> brought about by the extraction of natural resources.</p>
        
          <p>Finally, the <strong>Naval Institution</strong> played a role in the <strong>regulation and control</strong> of extraction activities to minimize <strong>environmental impact</strong>, although the exploitation of natural resources during this period had significant effects on the <strong>environment</strong>.</p>
        `;
      
        //
        break;
      case 12:
        document.getElementById("asd").style.display = "block";
        document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp";
      
        document.getElementById("HistoryDerechos").innerHTML = "Commemoration of the 72nd anniversary of the ARC Leguízamo Naval Base. Source: National Navy Archive, 2015.";
        document.getElementById("TituloGuaviare").innerHTML = "Rise of the extraction of quinine, jaguars, rubber, and timber (1920-1950)";
        document.getElementById("TextGuaviare").innerHTML = "During the rise of the extraction of quinine, jaguars, rubber, and timber between 1920 and 1950, the Colombian Navy played a crucial role in the territory that now corresponds to...";
        document.getElementById("TituloPopAmazonas").innerHTML = "Rise of the extraction of quinine, jaguars, rubber, and timber (1920-1950)";
        document.getElementById("TextPopAmazonas").innerHTML = `
          <p>During the rise of the extraction of <strong>quinine</strong>, <strong>jaguars</strong>, <strong>rubber</strong>, and <strong>timber</strong> between <strong>1920 and 1950</strong>, the <strong>Colombian Navy</strong> played a fundamental role in the territory now part of the <strong>Guaviare</strong> department, conducting <strong>territorial control</strong> operations in the tributaries and extraction areas to ensure that no <strong>infiltrations</strong> or <strong>illegal activities</strong> that threatened the region’s <strong>stability</strong> and <strong>security</strong> occurred.</p>
        
          <p>Likewise, the <strong>Colombian Navy</strong> facilitated the <strong>transport of materials and personnel</strong> to and from the extraction areas, ensuring that operations could be carried out <strong>efficiently</strong> and <strong>safely</strong>. In this sense, it also helped to <strong>protect the borders</strong>, <strong>avoid conflicts</strong> with neighboring countries, ensure <strong>Colombian sovereignty</strong>, and provide <strong>assistance to local communities</strong>, adapting to the <strong>economic and social changes</strong> brought about by the extraction of natural resources.</p>
        
          <p>Finally, the <strong>Naval Institution</strong> played a role in the <strong>regulation and control</strong> of extraction activities to minimize <strong>environmental impact</strong>, although the exploitation of natural resources during this period had significant effects on the <strong>environment</strong>.</p>
        `;
      
        //
        break;
      case 13:
        document.getElementById("asd").style.display = "none";
        //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp";
      
        document.getElementById("HistoryDerechos").innerHTML = "";
        document.getElementById("TituloGuaviare").innerHTML = "Military Expedition for the Consolidation of Sovereignty in the Amazon Border (1930-1940)";
        document.getElementById("TextGuaviare").innerHTML = "In 1991, with the promulgation of the new Political Constitution of Colombia, Guaviare was elevated to the category of department, within the framework of territorial redistribution aimed at improving administration and development...";
        document.getElementById("TituloPopAmazonas").innerHTML = "Military Expedition for the Consolidation of Sovereignty in the Amazon Border (1930-1940)";
        document.getElementById("TextPopAmazonas").innerHTML = `
          <p>In the <strong>1930s</strong>, after the <strong>Colombo-Peruvian</strong> conflict (1932-1933), <strong>Colombia</strong> strengthened its military presence in the <strong>Amazon</strong> territories, including what is now the <strong>Guaviare</strong> department, to secure the borders defined by the <strong>Salomón-Lozano Treaty</strong> (1922).</p>
      
          <p>The <strong>Colombian Navy</strong> maintained its presence through <strong>explorations</strong>, <strong>river patrols</strong>, and <strong>coordinated operations</strong> with the <strong>National Army</strong>, to consolidate sovereignty in the <strong>Guaviare</strong> River and its tributaries.</p>
      
          <p>Finally, the <strong>Naval Institution</strong> helped establish <strong>river control posts</strong> and ensure the <strong>stability</strong> of the region, demonstrating a high level of <strong>preparedness</strong> and significant <strong>operational and logistical</strong> capacity for <strong>territorial consolidation</strong>.</p>
        `;
      
        //
        break;
      case 14:
        document.getElementById("asd").style.display = "none";
        //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp";
      
        document.getElementById("HistoryDerechos").innerHTML = "";
        document.getElementById("TituloGuaviare").innerHTML = "Creation of the Guaviare Department, Consolidating the Presence of the Amazon Naval Force (1991)";
        document.getElementById("TextGuaviare").innerHTML = "In 1991, with the promulgation of the new Political Constitution of Colombia, Guaviare was elevated to the category of department, within the framework of territorial redistribution aimed at improving administration and development...";
        document.getElementById("TituloPopAmazonas").innerHTML = "Creation of the Guaviare Department, Consolidating the Presence of the Amazon Naval Force (1991)";
        document.getElementById("TextPopAmazonas").innerHTML = `
          <p>In <strong>1991</strong>, with the promulgation of the new <strong>Political Constitution of Colombia</strong>, <strong>Guaviare</strong> was elevated to the category of <strong>department</strong>, as part of the <strong>territorial redistribution</strong> aimed at improving the administration and development of the country’s more remote regions. Prior to <strong>1991</strong>, Guaviare was considered a <strong>Special Commissariat</strong>, an administrative entity that did not have the same autonomy or resources.</p>
      
          <p>In this context, the creation of the <strong>Guaviare</strong> department consolidated the presence of the <strong>Amazon Naval Force</strong> in the region, which played a fundamental role in <strong>protecting border areas</strong>, <strong>fighting drug trafficking</strong>, and <strong>defending natural resources</strong>. Additionally, the new administration allowed for better <strong>resource distribution</strong> and greater attention to the <strong>needs of the population</strong>.</p>
      
          <p>It is important to mention that, since its creation, the <strong>Guaviare</strong> department has faced several challenges, including <strong>environmental preservation</strong> and <strong>protection of indigenous communities' rights</strong>. However, the <strong>Amazon Naval Force</strong> has continued to fulfill its mission to <strong>protect civilians</strong>, ensure <strong>sovereignty</strong> and <strong>territorial control</strong>, counter <strong>illicit activities</strong> and <strong>transnational crimes</strong>, and promote the <strong>sustainable development</strong> of the Amazon region.</p>
        `;
        break;document.getElementById("asd").style.display = "none";
        //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp";
      
        document.getElementById("HistoryDerechos").innerHTML = "";
        document.getElementById("TituloGuaviare").innerHTML = "Creation of the Guaviare Department, Consolidating the Presence of the Amazon Naval Force (1991)";
        document.getElementById("TextGuaviare").innerHTML = "In 1991, with the promulgation of the new Political Constitution of Colombia, Guaviare was elevated to the category of department, within the framework of territorial redistribution aimed at improving administration and development...";
        document.getElementById("TituloPopAmazonas").innerHTML = "Creation of the Guaviare Department, Consolidating the Presence of the Amazon Naval Force (1991)";
        document.getElementById("TextPopAmazonas").innerHTML = `
          <p>In <strong>1991</strong>, with the promulgation of the new <strong>Political Constitution of Colombia</strong>, <strong>Guaviare</strong> was elevated to the category of <strong>department</strong>, as part of the <strong>territorial redistribution</strong> aimed at improving the administration and development of the country’s more remote regions. Prior to <strong>1991</strong>, Guaviare was considered a <strong>Special Commissariat</strong>, an administrative entity that did not have the same autonomy or resources.</p>
      
          <p>In this context, the creation of the <strong>Guaviare</strong> department consolidated the presence of the <strong>Amazon Naval Force</strong> in the region, which played a fundamental role in <strong>protecting border areas</strong>, <strong>fighting drug trafficking</strong>, and <strong>defending natural resources</strong>. Additionally, the new administration allowed for better <strong>resource distribution</strong> and greater attention to the <strong>needs of the population</strong>.</p>
      
          <p>It is important to mention that, since its creation, the <strong>Guaviare</strong> department has faced several challenges, including <strong>environmental preservation</strong> and <strong>protection of indigenous communities' rights</strong>. However, the <strong>Amazon Naval Force</strong> has continued to fulfill its mission to <strong>protect civilians</strong>, ensure <strong>sovereignty</strong> and <strong>territorial control</strong>, counter <strong>illicit activities</strong> and <strong>transnational crimes</strong>, and promote the <strong>sustainable development</strong> of the Amazon region.</p>
        `;
        break;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
case 16:
  document.getElementById("asd").style.display = "none";

  document.getElementById("HistoryDerechos").innerHTML = "";
  document.getElementById("TituloBaupez").innerHTML = "Inclusion of Caquetá into the National Territory (1858)";
  document.getElementById("TextBaupez").innerHTML = "In 1958, Caquetá was included as a National Territory of Colombia, and the Colombian Navy played a decisive role in contributing to navigation and control of the river routes that make up this department...";
  document.getElementById("TituloPopAmazonas").innerHTML = "Inclusion of Caquetá into the National Territory (1858)";
  document.getElementById("TextPopAmazonas").innerHTML = `
    In 1958, Caquetá was included as a National Territory of Colombia, and the Colombian Navy played a decisive role in contributing to navigation and control of the river routes that make up this department.

    In this regard, the Colombian Navy facilitated the development of the region and had several responsibilities during this territorial reorganization process, including:

    <ol>
      <li>Conducting river patrols in strategic areas of the region to ensure that no illegal activities threatened the stability and safety of the native communities of the department.</li>
      <li>Facilitating the transportation of military and civilian personnel, supplies, medicine, food, among others, which were essential for the region, maintaining order and territorial control.</li>
      <li>Guaranteeing the protection of Caquetá’s borders, preventing conflicts with neighboring countries, and ensuring Colombian sovereignty in the area.</li>
      <li>Providing assistance to local communities, offering timely care, well-being, and safety.</li>
    </ol>
  `;
  break;

  case 17:
    document.getElementById("asd").style.display = "none";
  
    document.getElementById("HistoryDerechos").innerHTML = "";
    document.getElementById("TituloBaupez").innerHTML = "Inclusion of Caquetá into the National Territory (1858)";
    document.getElementById("TextBaupez").innerHTML = "In 1958, Caquetá was included as a National Territory of Colombia, and the Colombian Navy played a decisive role in contributing to navigation and control of the river routes that make up this department...";
    document.getElementById("TituloPopAmazonas").innerHTML = "Inclusion of Caquetá into the National Territory (1858)";
    document.getElementById("TextPopAmazonas").innerHTML = `
      In 1958, Caquetá was included as a National Territory of Colombia, and the Colombian Navy played a decisive role in contributing to navigation and control of the river routes that make up this department.
  
      In this regard, the Colombian Navy facilitated the development of the region and had several responsibilities during this territorial reorganization process, including:
  
      <ol>
        <li>Conducting river patrols in strategic areas of the region to ensure that no illegal activities threatened the stability and safety of the native communities of the department.</li>
        <li>Facilitating the transportation of military and civilian personnel, supplies, medicine, food, among others, which were essential for the region, maintaining order and territorial control.</li>
        <li>Guaranteeing the protection of Caquetá’s borders, preventing conflicts with neighboring countries, and ensuring Colombian sovereignty in the area.</li>
        <li>Providing assistance to local communities, offering timely care, well-being, and safety.</li>
      </ol>
    `;
    break;
  
    case 18:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
  document.getElementById("TituloBaupez").innerHTML = "Honor and bravery of a hero of the Colombian Navy, CP Filogonio Hichamón Kuegajima (R.I.P.) (1981)";
  document.getElementById("TextBaupez").innerHTML = `Corporal First Class of the Marine Infantry Filogonio Hichamón Kuegajima (R.I.P.) played a crucial role in the 'Leopardo' Task Force of the Colombian Navy. His mission was to gather strategic information about the illegal armed group of...`;
  document.getElementById("TituloPopAmazonas").innerHTML = "Honor and bravery of a hero of the Colombian Navy, CP Filogonio Hichamón Kuegajima (R.I.P.) (1981)";
  document.getElementById("TextPopAmazonas").innerHTML = `
    Corporal First Class of the Marine Infantry Filogonio Hichamón Kuegajima (R.I.P.) played a crucial role in the “Leopardo” Task Force of the Colombian Navy. His mission was to gather strategic information about the illegal armed group at the time, led by Jairo Capera Díaz.

    Unfortunately, his identity was discovered, and on October 31, 1981, in the Peñas Blancas area (Caquetá), he was captured, tortured, and finally executed with a coup de grâce on the banks of the Caquetá River. Before his death, Hichamón told Capera: “I did my job better than you.”

    In recognition of his bravery and sacrifice, in 1993 the Colombian Navy named a River Support Patrol Vessel the ARC “CP Filogonio Hichamón”.
    <em>(El Boletín – Publication of the Colombian Marine Infantry. Issue No. 50 – Year 2020. Article by the Southern Naval Force, historical memory unit, by Lieutenant Wilmar Raúl Amaya Plata – Legal Advisor, Southern Naval Force. Pp. 100-101).</em>
  `;
  break;
    case 19:
      //repet case 18
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
  document.getElementById("TituloBaupez").innerHTML = "Establishment of the Intendancy of Alto Caquetá (1905)";
  document.getElementById("TextBaupez").innerHTML = `On February 18, 1905, through Decree 167, several intendancies were reorganized and the Intendancy of Alto Caquetá was created, with its capital in Florencia. This reorganization aimed at better administration of the Amazonian regions...`;
  document.getElementById("TituloPopAmazonas").innerHTML = "Establishment of the Intendancy of Alto Caquetá (1905)";
  document.getElementById("TextPopAmazonas").innerHTML = `
    “On February 18, 1905, through Decree 167, several intendancies were reorganized and the Intendancy of Alto Caquetá was created, with its capital in Florencia. This reorganization aimed at better administration of the Amazonian regions.”
    (Toward departmentalization. Agustín Codazzi Geographic Institute IGAC – Geographic Dictionary. Government of the Department of Caquetá).

    From its extensive territory, which initially covered the entire region south of the Guaviare River, several Amazonian intendancies and commissariats were later formed. Colonization of Caquetá effectively began in 1930 due to the Colombo–Peruvian conflict, and rubber extraction was the main economic activity during this period.

    <strong>Elevation to department (1981)</strong>

    On December 15, 1981, through Law 78, the National Intendancy of Caquetá was elevated to department status, consolidating its current administrative structure and reaffirming Florencia as its capital.

    These events reflect the administrative evolution of Caquetá, from its beginnings as a national territory to its consolidation as a department, highlighting the region's strategic and geographical importance in the Colombian context.

    The creation of the Caquetá department consolidated the presence of the Amazon Naval Force in the region, playing a key role in the fight against drug trafficking and its related crimes, the defense of river interests and natural resources, and the assistance and protection of communities and the civilian population of the Amazon basin.
  `;
  break;
    case 20:
      //repetition of case 18
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
  document.getElementById("TituloBaupez").innerHTML = "Establishment of the Intendancy of Alto Caquetá (1905)";
  document.getElementById("TextBaupez").innerHTML = `On February 18, 1905, through Decree 167, several intendancies were reorganized and the Intendancy of Alto Caquetá was created, with its capital in Florencia. This reorganization aimed at better administration of the Amazonian regions...`;
  document.getElementById("TituloPopAmazonas").innerHTML = "Establishment of the Intendancy of Alto Caquetá (1905)";
  document.getElementById("TextPopAmazonas").innerHTML = `
    “On February 18, 1905, through Decree 167, several intendancies were reorganized and the Intendancy of Alto Caquetá was created, with its capital in Florencia. This reorganization aimed at better administration of the Amazonian regions.”
    (Toward departmentalization. Agustín Codazzi Geographic Institute IGAC – Geographic Dictionary. Government of the Department of Caquetá).

    From its extensive territory, which initially covered the entire region south of the Guaviare River, several Amazonian intendancies and commissariats were later formed. Colonization of Caquetá effectively began in 1930 due to the Colombo–Peruvian conflict, and rubber extraction was the main economic activity during this period.

    <strong>Elevation to department (1981)</strong>

    On December 15, 1981, through Law 78, the National Intendancy of Caquetá was elevated to department status, consolidating its current administrative structure and reaffirming Florencia as its capital.

    These events reflect the administrative evolution of Caquetá, from its beginnings as a national territory to its consolidation as a department, highlighting the region's strategic and geographical importance in the Colombian context.

    The creation of the Caquetá department consolidated the presence of the Amazon Naval Force in the region, playing a key role in the fight against drug trafficking and its related crimes, the defense of river interests and natural resources, and the assistance and protection of communities and the civilian population of the Amazon basin.
  `;
  break;

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    case 21:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloAmazonas").innerHTML = "Mass migration due to political violence in Colombia (1948–1958)";
      document.getElementById("TextAmazonas").innerHTML = "During the mass migration caused by political violence in Colombia, in 1968, the conflict took on a particular dynamic in the department of Vaupés due to its jungle condition...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Mass migration due to political violence in Colombia (1948–1958)";
      document.getElementById("TextPopAmazonas").innerHTML = `
        During the mass migration caused by political violence in Colombia, in 1968, the conflict took on a particular dynamic in the department of Vaupés due to its jungle and hard-to-access condition. This region, mostly inhabited by Indigenous communities, became a stage for abuses and clashes between armed groups seeking to impose political and territorial control.
    
        The political violence of the 1960s, known as 'La Violencia', caused a massive migration of people fleeing their homes in search of safety. This situation generated a humanitarian crisis that required a coordinated and effective response. In this context, the Colombian Navy played a fundamental role in the protection and assistance of displaced people, given the region’s geography, crossed by the Apaporis and Vaupés rivers. Being a jungle area, river navigation was the main means of transport and communication, which gave the Naval Institution a strategic role in the region.
      `;
      break;
    case 22:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
  document.getElementById("TituloAmazonas").innerHTML = "Mass migration due to political violence in Colombia (1948–1958)";
  document.getElementById("TextAmazonas").innerHTML = "During the mass migration caused by political violence in Colombia, in 1968, the conflict took on a particular dynamic in the department of Vaupés due to its jungle condition...";
  document.getElementById("TituloPopAmazonas").innerHTML = "Mass migration due to political violence in Colombia (1948–1958)";
  document.getElementById("TextPopAmazonas").innerHTML = `
    During the mass migration caused by political violence in Colombia, in 1968, the conflict took on a particular dynamic in the department of Vaupés due to its jungle and hard-to-access condition. This region, mostly inhabited by Indigenous communities, became a stage for abuses and clashes between armed groups seeking to impose political and territorial control.

    The political violence of the 1960s, known as 'La Violencia', caused a massive migration of people fleeing their homes in search of safety. This situation generated a humanitarian crisis that required a coordinated and effective response. In this context, the Colombian Navy played a fundamental role in the protection and assistance of displaced people, given the region’s geography, crossed by the Apaporis and Vaupés rivers. Being a jungle area, river navigation was the main means of transport and communication, which gave the Naval Institution a strategic role in the region.
  `;
  break;
    case 23:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
  document.getElementById("TituloAmazonas").innerHTML = "Impact of rubber exploitation (1960–1970)";
  document.getElementById("TextAmazonas").innerHTML = "The rubber industry had a significant influence on migratory dynamics in Vaupés. During the 1960s and 1970s, rubber exploitation affected the social and economic structures of the region...";
  document.getElementById("TituloPopAmazonas").innerHTML = "Impact of rubber exploitation (1960–1970)";
  document.getElementById("TextPopAmazonas").innerHTML = 
    "The rubber industry had a significant influence on migratory dynamics in Vaupés. During the 1960s and 1970s, rubber exploitation affected the social and economic structures of Indigenous communities, generating tensions and disputes over the regulation of Indigenous labor among rubber tappers, missionaries, and government officials. These tensions contributed to some Indigenous communities seeking to settle in new regions (Colombian Journal of Anthropology. Volume 46 (2), July–December 2010, p. 331).";
  break;
  
    case 24:
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
      document.getElementById("TituloAmazonas").innerHTML = "Impact of rubber exploitation (1960–1970)";
      document.getElementById("TextAmazonas").innerHTML = "The rubber industry had a significant influence on migratory dynamics in Vaupés. During the 1960s and 1970s, rubber exploitation affected the social and economic structures of the region...";
      document.getElementById("TituloPopAmazonas").innerHTML = "Impact of rubber exploitation (1960–1970)";
      document.getElementById("TextPopAmazonas").innerHTML = 
        "The rubber industry had a significant influence on migratory dynamics in Vaupés. During the 1960s and 1970s, rubber exploitation affected the social and economic structures of Indigenous communities, generating tensions and disputes over the regulation of Indigenous labor among rubber tappers, missionaries, and government officials. These tensions contributed to some Indigenous communities seeking to settle in new regions (Colombian Journal of Anthropology. Volume 46 (2), July–December 2010, p. 331).";
      break;
    case 25:
      //Repeat of case 24
      document.getElementById("asd").style.display = "none";
      //document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"

      document.getElementById("HistoryDerechos").innerHTML = "";
  document.getElementById("TituloAmazonas").innerHTML = "Impact of rubber exploitation (1960–1970)";
  document.getElementById("TextAmazonas").innerHTML = "The rubber industry had a significant influence on migratory dynamics in Vaupés. During the 1960s and 1970s, rubber exploitation affected the social and economic structures of the region...";
  document.getElementById("TituloPopAmazonas").innerHTML = "Impact of rubber exploitation (1960–1970)";
  document.getElementById("TextPopAmazonas").innerHTML = 
    "The rubber industry had a significant influence on migratory dynamics in Vaupés. During the 1960s and 1970s, rubber exploitation affected the social and economic structures of Indigenous communities, generating tensions and disputes over the regulation of Indigenous labor among rubber tappers, missionaries, and government officials. These tensions contributed to some Indigenous communities seeking to settle in new regions (Colombian Journal of Anthropology. Volume 46 (2), July–December 2010, p. 331).";
  break;
  }
  document.getElementById("asd").src = ImgPutumayoLink + NumHistory + ".webp"
}
//console.log(puntosRojosX)



