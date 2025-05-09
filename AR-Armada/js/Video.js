function controlarVideoConMarcador(videoId, marcadorId) {
    // Obtener el elemento del video
    const videoElement = document.getElementById(videoId);

    // Obtener el marcador
    const markerVideo = document.getElementById(marcadorId);

    // Event listener cuando el marcador se detecta
    markerVideo.addEventListener('markerFound', () => {
        videoElement.play(); // Reproducir el video
    });

    // Event listener cuando el marcador se pierde
    markerVideo.addEventListener('markerLost', () => {
        videoElement.pause(); // Pausar el video
    });
}

controlarVideoConMarcador("video_VBo", "markerVideo_VBo");
controlarVideoConMarcador("video_VBi", "markervideo_VBi");
controlarVideoConMarcador("video_DBi", "markerVideo_DBi");
