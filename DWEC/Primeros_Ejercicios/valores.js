        //Comparamos dos numeros introducidos por pantalla
/*dato1 = window.prompt("Introduce un número");
dato2 = window.prompt("Introduce el segundo número");
if (dato1 > dato2) {
    document.write("El número mayor es: " + dato1);
} else {
    document.write("El número mayor es: " + dato2);
}*/
        //Hacemos dos comprobaciones de condicion en la misma consulta IF
/*const dto1 = 5;
const dto2 = 10;
marca = window.prompt("Introduce una marca de coche: ");
modelo = window.prompt("Introduce un modelo de coche: ");
if (marca == "Ford" && modelo == "Focus"){
    document.write("Tienes un descuento del " + dto1 + " por ciento");
} else if (marca == "Ford" && modelo == "Fiesta"){
    document.write("Tienes un descuento del " + dto2 + " por ciento");
} else {
    document.write("No tienes descuento");
}
        //Hacemos IF anidado dentro de una condición afirmativa
/*if(marca == "Ford"){
    if(modelo == "Fiesta"){
        document.write("Tienes un descuento del " + dto2 + " por ciento");
    }
    if(modelo == "Focus"){
        document.write("Tienes un descuento del " + dto1 + " por ciento");
    }
} else {
    document.write("No tenemos esa marca");
}*/
//Comprueba el mes e indica los días que hay en ese mes
mes = window.prompt("Introduce un mes de 1 al 12");
if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12){
    document.write("Este mes tiene 31 días");
} else if (mes == 4 || mes == 6 || mes == 9 || mes ==11){
    document.write("Este mes tiene 30 días");
} else {
    document.write("Este mes tiene 28 días");
}

