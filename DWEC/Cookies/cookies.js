function create(cname, cvalue, expdays) {
    let d = new Date();
    d.setTime(d.getTime() + (expdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function retreiveAll() {
    /*let valor = window.prompt("Introduce el nombre a buscar");
    document.cookie("Nombre=" + valor);*/
    let cookies = document.cookie;
    cookies.forEach(cookie => {
        document.write(cookie);
    });
}
function retrieve() {
    let nombre = prompt("Introduce el nombre a buscar");
    nombre+="=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(nombre) == 0) {
        return c.substring(nombre.length, c.length);
      }
    }
    return "";
}
function check() {
    let nombre = retrieve("nombre");
    if(nombre != ""){
        alert("Bienvenido de nuevo" + nombre);
    } else {
        username = prompt("Intrduce tu nombre");
        if(username != "" && username !=null){
            create("nombre", username, 365);
        }
    }
}
function update() {
    
}
function deleteCookie(cname) {
    let d = new Date();
    document.cookie =  "Nombre=" + cname + "; expires=" + d + ";path=/"; 
}