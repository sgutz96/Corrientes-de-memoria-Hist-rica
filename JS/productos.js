document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function() {
        const apkUrl = this.getAttribute("data-apk"); 
        if (apkUrl) {
            const a = document.createElement("a");
            a.href = apkUrl;
            a.setAttribute("download", apkUrl);
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            alert("No hay un archivo disponible para descargar");
        }
    });
});
