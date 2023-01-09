function valNombre() {
    const reg = new RegExp('[A-Za-z]');
    let nombre = document.getElementById("nombre").value;
    let ap1 = document.getElementById("ap1").value;
    let ap2 = document.getElementById("ap2").value;
    if (reg.test(nombre)) {
        if (reg.test(ap1)) {
            if (reg.test(ap2)) {
                document.getElementById("nombre").style.borderColor = "green";
                document.getElementById("ap1").style.borderColor = "green";
                document.getElementById("ap2").style.borderColor = "green";
            } else {
                //alert("El segundo apellido es incorrecto");
                document.getElementById("ap2").style.borderColor = "red";
            }
        } else {
            //alert("El primer apellido es incorrecto");
            document.getElementById("ap1").style.borderColor = "red";
        }
    } else {
        //alert("El nombre es incorrecto");
        document.getElementById("nombre").style.borderColor = "red";
    }
}
document.getElementById("ap2").addEventListener("blur", valNombre);

function valIdent() {
    let ident = "";
    if (document.getElementById("dni").checked) ident = "dni";
    else if (document.getElementById("nie").checked) ident = "nie";
    else if (document.getElementById("pass").checked) ident = "pass";
    else alert("No has elegido nada");
    return ident;
}
function valDocu() {
    const dni = new RegExp('[0-9]{8}[A-Za-z]{1}');
    const nie = new RegExp('[A-Za-z]{1}[0-9]{8}[A-Za-z]{1}');
    const pass = new RegExp('[A-Za-z]{3}[0-9]{6}');
    let ident = valIdent();
    let documento = document.getElementById("documento").value;
    switch (ident) {
        case "dni":
            if (dni.test(documento)) {
                document.getElementById("documento").style.borderColor = "green";
                break;
            } else {
                alert("El documento no está bien formado");
                document.getElementById("documento").style.borderColor = "red";
                break;
            }
            break;
        case "nie":
            if (nie.test(documento)) {
                document.getElementById("documento").style.borderColor = "green";
                break;
            } else {
                alert("El documento no está bien formado");
                document.getElementById("documento").style.borderColor = "red";
                break;
            }
        case "pass":
            if (pass.test(documento)) {
                document.getElementById("documento").style.borderColor = "green";
                break;
            } else {
                alert("El documento no está bien formado");
                document.getElementById("documento").style.borderColor = "red";
                break;
            }
        default:
            alert("Hay que elegir una opción");
            break;
    }
}
document.getElementById("documento").addEventListener("blur", valDocu);

function valCorreo() {
    const ML = new RegExp('[A-Za-z0-9]@[A-Za-z].[a-z]');
    let mail = document.getElementById("email").value;
    if (ML.test(mail)) {
        document.getElementById("email").style.borderColor = "green";
    } else {
        alert("El correo no está bien formado");
        document.getElementById("email").style.borderColor = "red";
    }
}
document.getElementById("email").addEventListener("blur", valCorreo);

function valDireccion() {
    const dir = new RegExp('[A-Za-z]+');
    const num = new RegExp('[0-9]');
    const puerta = new RegExp('[A-Za-z]*[0-9]+')
    const CP = new RegExp('[0-9]{5}');
    let dire = document.getElementById("direc").value;
    let nume = document.getElementById("numcasa").value;
    let esc = document.getElementById("esca").value;
    let dirPis = document.getElementById("piso").value;
    let puer = document.getElementById("port").value;
    let mun = document.getElementById("muni").value;
    let pro = document.getElementById("prov").value;
    let codigo = document.getElementById("cp").value;
    if (dir.test(dire)) {
        if (num.test(nume)) {
            if (puerta.test(esc)) {
                if (num.test(dirPis)) {
                    if (puerta.test(puer)) {
                        if (dir.test(mun)) {
                            if (dir.test(pro)) {
                                if (CP.test(codigo)) {
                                    document.getElementById("direc").style.borderColor = "green";
                                    ldocument.getElementById("numcasa").style.borderColor = "green";
                                    document.getElementById("esca").style.borderColor = "green";
                                    document.getElementById("piso").style.borderColor = "green";
                                    document.getElementById("port").style.borderColor = "green";
                                    document.getElementById("muni").style.borderColor = "green";
                                    document.getElementById("prov").style.borderColor = "green";
                                    document.getElementById("cp").style.borderColor = "green";
                                } else {
                                    document.getElementById("cp").style.borderColor = "red";
                                }
                            } else {
                                document.getElementById("prov").style.borderColor = "red";
                            }
                        } else {
                            document.getElementById("muni").style.borderColor = "red";
                        }
                    } else {
                        document.getElementById("port").style.borderColor = "red";
                    }
                } else {
                    document.getElementById("piso").style.borderColor = "red";
                }
            } else {
                document.getElementById("esca").style.borderColor = "red";
            }
        } else {
            document.getElementById("numcasa").style.borderColor = "red";
        }
    } else {
        document.getElementById("direc").style.borderColor = "red";
    }
}
document.getElementById("cp").addEventListener("blur", valDireccion);