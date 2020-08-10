//EJERCICIO 3.9

//Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura
//amplia (A) y daños a terceros (B). Para el plan A, la cuota
//base es de $1,200, y para el B, de $950. A ambos planes se les carga
//10% del costo si la persona que conduce tiene por hábito beber alcohol,
//5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia
//cardiaca o diabetes–, y si tiene más de 40 años, se le carga
//20%, de lo contrario sólo 10%. Todos estos cargos se realizan sobre
//el costo base. Realice diagrama de flujo y diagrama N/S que represente
//el algoritmo para determinar cuánto le cuesta a una persona
//contratar una póliza.

let antiguedad = +prompt("¿Cuántos años lleva trabajando con nosotros?");
let sueldo = +prompt("Cuánto gana mensualmente?");
let bonoTiempo;
let bonoSueldo;

if(antiguedad > 2 && antiguedad < 5){
    bonoTiempo = sueldo * 20/100;
    /* console.log(`El bono que corresponde es de: ${sueldo * 20/100}`); */
} else{
    bonoTiempo = sueldo * 30/100;
    /* console.log(`El bono que corresponde es de: ${sueldo * 30/100}`); */
}

if(sueldo < 1000){
    bonoSueldo = sueldo * 25/100;
    /* console.log(`El bono que corresponde es de: ${sueldo * 25/100}`); */
} else if(sueldo > 1000 && sueldo < 3500){
    bonoSueldo = sueldo *15/100
    /* console.log(`El bono que corresponde es de: ${sueldo * 15/100}`); */
} else if(sueldo > 3500){
    bonoSueldo = sueldo * 10/100;
    /* console.log(`El bono que corresponde es de: ${sueldo * 10/100}`); */
}

if(bonoTiempo > bonoSueldo){
    console.log(`El bono mensual que le corresponde es: ${bonoTiempo}`);
} else {
    console.log(`El bono mensual que le corresponde es: ${bonoSueldo}`);
}





