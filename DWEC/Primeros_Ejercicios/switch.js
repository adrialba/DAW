document.write("Selecciona una opción: </br>",
"Opción 1</br>",
"Opción 2</br>",
"Opción 3</br>");
dato = parseInt(window.prompt("Introduce tu elección:"));
switch (dato) {
    case 1:
        document.write("Has elegido la opción 1");
        break;
    case 2:
        document.write("Has elegido la opción 2");
        break;
    case 3:
        document.write("Has elegido la opción 3");
        break;
    default:
        document.write("No has elegido una opción correcta");
        break;
}
document.write("</br>");
operacion = window.prompt("¿Qué operación quieres hacer?");
dato1 = parseInt(window.prompt("Introduce el primer número"));
dato2 = parseInt(window.prompt("Introduce el segundo número"));
switch (operacion) {
    case "suma":
        document.write(dato1 + dato2);
        break;
    case "resta":
        document.write(dato1 - dato2);
        break;    
    case "multiplicacion":
        document.write(dato1 * dato2);
        break;    
    case "division":
        document.write(dato1 / dato2);
        break;    
    case "modulo":
        document.write(dato1 % dato2);
        break;
    default:
        document.write("No has introducido una operación correcta");
        break;
}