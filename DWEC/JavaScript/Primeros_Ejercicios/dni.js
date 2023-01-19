const letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
function calculaDNI(num) {
    parseInt(num);
    if(num<00000000 || num>99999999){
        alert("El número es mayor de 8 d&iacute;gitos");
    } else{
        result = num%23;
        parseInt(result);
        document.getElementById("resultado").innerHTML = num+letras[result];
    }
}