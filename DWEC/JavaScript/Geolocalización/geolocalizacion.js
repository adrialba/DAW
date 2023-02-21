var loc = document.getElementById("loc");
var locGoogle = document.getElementById("locg");
var locOpen = document.getAnimations("locop");
window.addEventListener("load", function () {
    if (this.navigator.geolocation){
        this.navigator.geolocation.getCurrentPosition(function(pos){
            var lat = pos.coords.latitude;
            var long = pos.coords.longitude;
            loc.innerHTML = lat + " " + long;
            locGoogle.href = "https://www.google.es/maps/@" + lat + " " + long;
            locGoogle.innerHTML = "Pulsa para ir a la ubicación en el mapa de google";
            // locOpen.href = "https://www.openstreetmap.org/#map=9/" + lat + "/" + long;
            // locOpen.innerHTML = "Pulsa para ir a la ubicación en el mapa de Open Street";
        }, function(err){
            console.warn(err.message);
            switch(err.code){
                case err.PERMISSION_DENIED:
                    loc.innerHTML = "No tenemos los permisos suficientes";
                    break;
                case err.POSITION_UNAVAILABLE:
                    loc.innerHTML = "No ha sido posible encontrar la ubicación";
                    break;
                case err.TIMEOUT:
                    loc.innerHTML = "Tu ubicación no está disponible";
                    break;
                default:
                    loc.innerHTML = "Error desconocido";
                    break;
            }
        })
    } else {
        loc.innerHTML = "El navegador no soporta la geolocalización";
    }
})