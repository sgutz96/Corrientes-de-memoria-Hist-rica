var isEspanish = true; // Variable para determinar el idioma actual
document.getElementById("isEng-img").style.filter = "grayscale(60%)"; // Eliminar el filtro en 'isEng'
document.getElementById("isEsp-img").style.filter = "grayscale(0%)"; // Mostrar el filtro en 'isEsp'

// Seleccionamos los elementos <a> usando su ID
document.getElementById("isEng").addEventListener("click", function(event) {
    // Prevenir que el enlace redirija a otra página
    event.preventDefault();
    
    // Cambiar el idioma a inglés
    isEspanish = false;
    
    // Aplicar el filtro grayscale al enlace 'isEng' y quitarlo del 'isEsp'
    document.getElementById("isEng-img").style.filter = "grayscale(0%)";
    document.getElementById("isEsp-img").style.filter = "grayscale(60%)"; // Eliminar el filtro en 'isEsp'
    cambiarIdioma(); // Llamar a la función para cambiar el idioma
});

document.getElementById("isEsp").addEventListener("click", function(event) {
    // Prevenir que el enlace redirija a otra página
    event.preventDefault();
    
    // Cambiar el idioma a español
    isEspanish = true;
    
    // Aplicar el filtro grayscale al enlace 'isEsp' y quitarlo del 'isEng'
    document.getElementById("isEng-img").style.filter = "grayscale(60%)"; // Eliminar el filtro en 'isEng'
    document.getElementById("isEsp-img").style.filter = "grayscale(0%)";
    cambiarIdioma(); // Llamar a la función para cambiar el idioma
});
function cambiarIdioma() {
    // Cambiar el idioma de los textos según el valor de isEspanish
    if (isEspanish) {
        // Menú en la versión de escritorio
        document.querySelector("a[href='#banner']").textContent = "INICIO";
        document.querySelector("a[href='#exp']").textContent = "EXPERIENCIAS";
        document.querySelector("a[href='#contexto']").textContent = "ACERCA";
        
        // Menú en la versión móvil
        document.querySelector("#mobile-menupopup a[href='#banner']").textContent = "INICIO";
        document.querySelector("#mobile-menupopup a[href='#exp']").textContent = "EXPERIENCIAS";
        document.querySelector("#mobile-menupopup a[href='#contexto']").textContent = "ACERCA";
        
        // Botones
        document.querySelector(".banner-content .buttons .btn-primary").textContent = "Experiencias";
        document.querySelector(".banner-content .buttons .btn-transparent").textContent = "Trailers";
        
        // Sección About
        document.querySelector(".Aboutcontextosection h2").textContent = "CONTEXTO";
        document.querySelector(".Aboutleft-section h3").textContent = "CORRIENTES DE MEMORIA";
        document.querySelector(".Aboutleft-section p").textContent = "El proyecto de contexto “Corrientes de memoria: narrativa transmedia del Amazonas”, es un trabajo investigativo con alto rigor académico realizado entre la Armada de Colombia y la Universidad San Buenaventura, el cual tiene como propósito dar a conocer la labor de los Marinos de Colombia que se encuentran desplegados en las áreas de responsabilidad de la Fuerza Naval de la Amazonía.";
        document.getElementById("AboutleerMasBtn").textContent = "Leer más";
        
        // Popup About
        document.querySelector(".Aboutpopup-content h3").textContent = "CORRIENTES DE MEMORIA";
        document.querySelector(".Aboutpopup-content p").textContent = "El proyecto de contexto “Corrientes de memoria: narrativa transmedia del Amazonas”, es un trabajo investigativo con alto rigor académico realizado entre la Armada de Colombia y la Universidad San Buenaventura, el cual tiene como propósito dar a conocer la labor de los Marinos de Colombia que se encuentran desplegados en las áreas de responsabilidad de la Fuerza Naval de la Amazonía, así como, visibilizar los hechos históricos que han perdurado en el tiempo y han marcado la memoria del país, toda vez que, se narran sucesos y acontecimientos desde la perspectiva de las comunidades autóctonas de los departamentos de Putumayo, Caquetá, Guaviare, Vaupés y Amazonas, y del personal militar que cumple con la misión de proteger las bonanzas y las costumbres intrínsecas de esta región de Colombia.";
   
         // Cambiar el texto del teaser en español
         document.querySelector("#teaser h2 .color1").textContent = "DOCUMENTAL";
         document.querySelector("#teaser h2 .color2").textContent = "CORRIENTES";
         document.querySelector("#teaser h2 .color1:last-child").textContent = "DE MEMORIA";

    
    // Cambiar el texto de la sección Experiencias
    document.querySelector("#exp h2 .color1").textContent = "EXPERIENCIAS";
    document.querySelector("#exp h2 .color2").textContent = "VIRTUALES";
    document.querySelector("#exp h2 .color1:last-child").textContent = "DEL AMAZONAS";

    // Cambiar el texto de las tarjetas de Experiencias
    document.querySelectorAll(".card .title")[0].textContent = "VR ARC “TECIM REYES HOLGUÍN”";
    document.querySelectorAll(".card .experienciasdescription")[0].textContent = "Vive una inmersión total en la Patrullera de Apoyo Fluvial “TECIM Eddic Cristian Reyes Holguín” de la Armada de Colombia con esta experiencia de realidad virtual.";

    document.querySelectorAll(".card .title")[1].textContent = "RESCATA EL AMAZONAS";
    document.querySelectorAll(".card .experienciasdescription")[1].textContent = "Navega por misiones estratégicas para proteger el territorio marítimo y fluvial del país, a través de un videojuego que ofrece una experiencia virtual basada en las operaciones de esfuerzo armado y no armado de la Armada de Colombia.";

    document.querySelectorAll(".card .title")[2].textContent = "AR BONGO HOSPITAL";
    document.querySelectorAll(".card .experienciasdescription")[2].textContent = "Sumérgete en una experiencia interactiva que te llevará a bordo del bongo hospital de la Armada de Colombia.";

    document.querySelectorAll(".card .title")[3].textContent = "DOCUMENTAL";
    document.querySelectorAll(".card .experienciasdescription")[3].textContent = "Se estructuraron 12 documentales de contexto y memoria histórica de la Amazonía colombiana, en donde se relatan y se dan a conocer hechos históricos, bonanzas y costumbres de las comunidades indígenas.";

    document.querySelectorAll(".card .title")[4].textContent = "LIBRO";
    document.querySelectorAll(".card .experienciasdescription")[4].textContent = "Conoce este importante trabajo de investigación que evoca historias y experiencias de las comunidades locales de la Amazonía, así cómo, el contexto de memoria e información estratégica que se fundamenta en el rol fundamental que desempeña la Armada de Colombia en esta región del país.";
    
    
        } else {
        // Inglés
        // Menú en la versión de escritorio
        document.querySelector("a[href='#banner']").textContent = "HOME";
        document.querySelector("a[href='#exp']").textContent = "EXPERIENCES";
        document.querySelector("a[href='#contexto']").textContent = "ABOUT";
        
        // Menú en la versión móvil
        document.querySelector("#mobile-menupopup a[href='#banner']").textContent = "HOME";
        document.querySelector("#mobile-menupopup a[href='#exp']").textContent = "EXPERIENCES";
        document.querySelector("#mobile-menupopup a[href='#contexto']").textContent = "ABOUT";
        
        // Botones
        document.querySelector(".banner-content .buttons .btn-primary").textContent = "Experiences";
        document.querySelector(".banner-content .buttons .btn-transparent").textContent = "Trailers";
        
        // Sección About
        document.querySelector(".Aboutcontextosection h2").textContent = "CONTEXT";
        document.querySelector(".Aboutleft-section h3").textContent = "MEMORY STREAMS";
        document.querySelector(".Aboutleft-section p").textContent = "The project “Memory Streams: Transmedia Narrative of the Amazon” is a highly academic research work carried out between the Colombian Navy and the San Buenaventura University, which aims to publicize the work of Colombian sailors deployed in the areas of responsibility of the Amazon Navy Force.";
        document.getElementById("AboutleerMasBtn").textContent = "Read more";
        
        // Popup About
        document.querySelector(".Aboutpopup-content h3").textContent = "MEMORY STREAMS";
        document.querySelector(".Aboutpopup-content p").textContent = "The project “Memory Streams: Transmedia Narrative of the Amazon” is a highly academic research work carried out between the Colombian Navy and the San Buenaventura University, which aims to publicize the work of Colombian sailors deployed in the areas of responsibility of the Amazon Navy Force, as well as to make visible the historical events that have endured over time and marked the country’s memory. This narrative is told from the perspective of the indigenous communities of the departments of Putumayo, Caquetá, Guaviare, Vaupés, and Amazonas, and of the military personnel who are tasked with protecting the resources and customs intrinsic to this region of Colombia.";
        
        // Cambiar el texto del teaser en inglés
        document.querySelector("#teaser h2 .color1").textContent = "DOCUMENTARY";
        document.querySelector("#teaser h2 .color2").textContent = "STREAMS";
        document.querySelector("#teaser h2 .color1:last-child").textContent = "OF MEMORY";
    
        // Cambiar el texto de la sección Experiencias en inglés
        document.querySelector("#exp h2 .color1").textContent = "EXPERIENCES";
        document.querySelector("#exp h2 .color2").textContent = "VIRTUAL";
        document.querySelector("#exp h2 .color1:last-child").textContent = "OF THE AMAZON";

        // Cambiar el texto de las tarjetas de Experiencias en inglés
        document.querySelectorAll(".card .title")[0].textContent = "VR ARC “TECIM REYES HOLGUÍN”";
        document.querySelectorAll(".card .experienciasdescription")[0].textContent = "Experience total immersion on the Fluvial Support Patrol “TECIM Eddic Cristian Reyes Holguín” of the Colombian Navy with this virtual reality experience.";

        document.querySelectorAll(".card .title")[1].textContent = "RESCUE THE AMAZON";
        document.querySelectorAll(".card .experienciasdescription")[1].textContent = "Navigate through strategic missions to protect the country’s maritime and fluvial territory, through a video game that offers a virtual experience based on the Colombian Navy's armed and unarmed operations.";

        document.querySelectorAll(".card .title")[2].textContent = "AR BONGO HOSPITAL";
        document.querySelectorAll(".card .experienciasdescription")[2].textContent = "Immerse yourself in an interactive experience that will take you aboard the Colombian Navy's hospital barge.";

        document.querySelectorAll(".card .title")[3].textContent = "DOCUMENTARY";
        document.querySelectorAll(".card .experienciasdescription")[3].textContent = "Twelve documentaries of context and historical memory of the Colombian Amazon were created, narrating and revealing historical facts, bonanzas, and customs of indigenous communities.";

        document.querySelectorAll(".card .title")[4].textContent = "BOOK";
        document.querySelectorAll(".card .experienciasdescription")[4].textContent = "Learn about this important research work that evokes stories and experiences from local Amazon communities, as well as the context of memory and strategic information based on the fundamental role of the Colombian Navy in this region.";
            
    
    
    }
}