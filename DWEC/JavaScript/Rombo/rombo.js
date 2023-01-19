let dimension1 = 4
let dimension2 = 10
let total = "";
let space = dimension1 - 1;

// Creamos la parte superior desde dimension1 hasta dimension2, pero incrementamos de 2 en 2
for (let i = dimension1; i <= (dimension2); i += 2){
        // Dibujamos los espacios en cada ciclo
        for (let j = 0; j < space; j++){
            total += ' ';
    }
    // Decrementamos la variable de espacios
    space--;
    // Dibujamos los "+" desde 0 hasta el valor actual de i, que sería desde dimension1 hasta dimension2
    for (let j = 0; j < i; j++){
            total += '+';
    }
    // Insertamos un salto de línea
    total += '\n'
}
// Inicializamos la variable de espacios en 1 ya que la parte inferior requiere un espacio en el ciclo inicial
space = 1;
// Dibujamos la parte inferior desde dimension2-2 hasta dimension1 pero decrementamos de 2 en 2
for (let i = dimension2-2; i >= (dimension1); i -= 2){
        // Dibujamos los espacios en cada ciclo
        for (let j = 0; j < space; j++){
            total += ' ';
    }
    // Incrementamos la variable de espacios
    space++;
    // Dibujamos los "+" desde 0 hasta el valor actual de i, que sería desde dimension2 hasta dimension1
    for (let j = 0; j < i; j++){
            total += '+';
    }
    total += '\n'
}
// Dibujamos el rombo
alert(total);