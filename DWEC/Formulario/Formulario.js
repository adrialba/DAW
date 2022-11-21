function valNombre() {
    const reg = new RegExp('/[A-Za-z]/');
    let nombre = document.getElementById("nombre").value;
    let ap1 = document.getElementById("ap1").value;
    let ap2 = document.getElementById("ap2").value;
    if (reg.test(nombre)) {
        if (reg.test(ap1)) {
            if (reg.test(ap2)) {
                document.getElementById("nombre").style.borderColor = green;
                document.getElementById("ap1").style.borderColor = green;
                document.getElementById("ap2").style.borderColor = green;
            } else {
                //alert("El segundo apellido es incorrecto");
                document.getElementById("ap2").style.borderColor = red;
            }
        } else {
            //alert("El primer apellido es incorrecto");
            document.getElementById("ap1").style.borderColor = red;
        }
    } else {
        //alert("El nombre es incorrecto");
        document.getElementById("nombre").style.borderColor = red;
    }
}
document.getElementById("ap2").addEventListener("blur",valNombre);
function valIdent() {
    const dni = new RegExp('[0-9]{8}[A-Za-z]{1}');
    const nie = new RegExp('[A-Za-z]{1}[0-9]{8}[A-Za-z]{1}');
    const pass = new RegExp('[A-Za-z]{3}[0-9]{6}');
    let ident = document.getElementsByName("ident").value;
    let documento = document.getElementById("documento");
    switch (ident) {
        case "dni":
            if (dni.text(documento)) {
                document.getElementById("documento").style.borderColor = green;
                break;
            } else {
                alert("El documento no está bien formado");
                document.getElementById("documento").style.borderColor = red;
                break;
            }
            break;
        case "nie":
            if (nie.test(documento)) {
                document.getElementById("documento").style.borderColor = green;
                break;
            } else {
                alert("El documento no está bien formado");
                document.getElementById("documento").style.borderColor = red;
                break;
            }
        case "pass":
            if (pass.test(documento)) {
                document.getElementById("documento").style.borderColor = green;
                break;
            } else {
                alert("El documento no está bien formado");
                document.getElementById("documento").style.borderColor = red;
                break;
            }
        default:
            document.write("Hay que elegir una opción");
            break;
    }
}
document.getElementById("documento").addEventListener("blur", valIdent);
function valCorreo(){
    const ML = new RegExp('[A-Za-z0-9]@[A-Za-z].[a-z]');
    let mail = document.getElementById("email").value;
    if(ML.test(mail)){
        document.getElementById("email").style.borderColor = green;
    } else {
        alert("El correo no está bien formado");
        document.getElementById("email").style.borderColor = red;
    }
}

function valCP() {
    const CP = new RegExp('[0-9]{5}');
    let codigo = document.getElementById("cp").value;
    if (CP.test(codigo)) {
        document.getElementById("cp").style.borderColor = green;
    } else {
        alert("El codigo postal no es correcto")
        document.getElementById("cp").style.borderColor = red;
    }
}