document.getElementById("cabecera").addEventListener("mouseover", manejador());
document.getElementById("cabecera").addEventListener("mouseout", manejador());

function manejador(e) {
    if(e.type===mouseover){
        document.getElementById("cabecera").innerHTML = "<style = 'color:red'>";
    }

    if(e.type===mouseout){
        document.getElementById("cabecera").innerHTML = "<style = 'color:black'>";
    }
}
