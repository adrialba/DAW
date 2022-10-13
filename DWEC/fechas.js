let fecha = new Date();
let dia = ["Domingo", "Lunes", "Martes", "Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado"];
let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
document.write("Estamos en el año "+ fecha.getFullYear() + " y hoy es " + dia[fecha.getDay()] + " " +fecha.getDate() + " de " + mes[fecha.getMonth()]);
let nac = window.prompt("Introduce tu año de nacimiento:");
if((fecha.getFullYear-nac)>= 18){
} else {
    document.write("No tiene la edad suficiente para votar");
}