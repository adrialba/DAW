function setCookie(cname, cvalue, expdays) {
    let d = new Date();
    d.setTime(d.getTime() + (expdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookies() {
    let valor = window.prompt("Introduce el nombre a buscar");
    document.cookie("Nombre=" + valor);
}

function deleteCookie(cname) {
    document.cookie(cname, )
}