// Cargar la API de YouTube de forma asíncrona
function loadYouTubeAPI() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  
  // Crear el reproductor de YouTube y establecer funciones de control
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
  
  // Cuando el reproductor esté listo, activar los botones
  function onPlayerReady(event) {
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
  
    // Mostrar el botón de play al inicio
    playBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
  
    // Play Button
    playBtn.addEventListener('click', function() {
      player.playVideo();
      playBtn.style.display = 'none'; // Ocultar play
      pauseBtn.style.display = 'block'; // Mostrar pausa
    });
  
    // Pause Button
    pauseBtn.addEventListener('click', function() {
      player.pauseVideo();
      playBtn.style.display = 'block'; // Mostrar play
      pauseBtn.style.display = 'none'; // Ocultar pausa
    });
  }
  
  // Escuchar cambios en el estado del reproductor (reproducción, pausa)
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      console.log("Video is playing");
      // Mostrar el botón de pausa cuando el video esté en reproducción
    } else if (event.data == YT.PlayerState.PAUSED) {
      console.log("Video is paused");
      // Mostrar el botón de play cuando el video esté pausado
    }
  }
  
  // Llamar a la función para cargar la API de YouTube
  loadYouTubeAPI();
  