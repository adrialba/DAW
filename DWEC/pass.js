let fechaAct = new Date(2023, 12, 28);
let fechaExp = new Date(fechaAct.getFullYear(), (fechaAct.getMonth()+3), fechaAct.getDate());
let milisec = fechaExp.getTime()-fechaAct.getTime();
let diasRestantes = new Date(milisec);

if(milisec<7889238000){
    document.write("Tu contraseña va a caducar<br />");
    document.write("Faltan " + diasRestantes.getDate() + " d&iacute;as para que caduque la contraseña");
} else {
    document.write("Tienes la contraseña en orden");
}