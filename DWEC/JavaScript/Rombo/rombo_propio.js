/*Declaración de variables
    - Se indica el alto y el largo de lo que mide el rombo
    - Se inicializa la varible que va a contener el resultado de la ejecución
    - Se utiliza la variable space como contador para ir restando las filas de alto que tiene el rombo
*/
let alto = 4;
let largo = 10;
let total = "";
let space = alto - 1;
/*Inicio de las primeras iteraciones para gestionar la primera mitad del rombo 
    - En el primer bucle encontramos la inicialización del rombo, es decir, la primera linea. Para dibujarla,
      iniciamos el bucle en el alto que ocupará el rombo, y se ejecutará dicho bucle hasta que el alto sea mayor o igual al largo,
      incrementando la altura de dos en dos.
    - Dentro del primer bucle for,se añade otro que introduce los espacios en blanco a los lados de cada linea que se dbuja.
    - 
*/

for (let i = alto; i <= largo; i+=2){
    for (let j = 0; j < space;j++){
        total += '&nbsp;&nbsp;';
    }
    space--;
    for(let j = 0;j < i;j++){
        total += '*';
    }
    total += '</br>';
}
//Se inicializa de nuevo la variable de space para indicarle la altura que queda por dibujar del rombo
space = 1;
/*Inicio de las segundas iteraciones para gestionar la segunda mitad del rombo
    - En el primer bucle encontramos la continuación del rombo, es decir, a partir de la línea del medio. Para dibujarla, 
      iniciamos el bucle en el largo que ha de tener el rombo y se ejecutará dicho bucle hasta que el largo sea mayor o igual que el alto,
      decrementando la altura de dos en dos
    - Dentro del primer bucle for, se añade otro que introduce los espacios en blanco que ha de dibujar a los lados de cada linea que se ejecute
    - 
*/
for(let i = largo-2; i>= alto;i -=2){
    for(let j = 0; j<space;j++){
        total += '&nbsp;&nbsp;';
    }
    space++;
    for(let j= 0;j<i;j++){
        total +='*';
    }
    total +='</br>';
}
//Se muestra por pantalla la ejecución final del programa
document.write(total);