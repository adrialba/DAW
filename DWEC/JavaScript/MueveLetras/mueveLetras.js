function mueve(texto) {
    //document.getElementById("final").innerHTML = texto.split("").reverse().join("");
    if (texto === "")
        return "";
    else
        document.getElementById("final").innerHTML = mueve(texto.substr(1)) + texto.charAt(0);
}