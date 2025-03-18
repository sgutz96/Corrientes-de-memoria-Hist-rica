document.getElementById("descargarBtn").addEventListener("click", function() {

    
    const apkUrl = "URL_DEL_APK";
    const a = document.createElement("a");
    a.href = apkUrl;
    a.download = "Juego.apk";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);


});
