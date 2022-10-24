window.addEventListener("resize", infoAlto);
window.addEventListener("resize", infoAncho);
infoAlto();
infoAncho();
function infoAlto() {
    document.getElementById("alto").innerHTML = window.innerHeight;
}
function infoAncho() {
    document.getElementById("ancho").innerHTML = window.innerWidth;
}