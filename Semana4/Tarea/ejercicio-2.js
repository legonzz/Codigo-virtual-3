//EJERCICIO 3.2

//Realice un algoritmo para determinar el sueldo semanal de un trabajador
//con base en las horas trabajadas y el pago por hora, considerando
//que después de las 40 horas cada hora se considera como
//excedente y se paga el doble. Construya el diagrama de flujo, el
//pseudocódigo y el diagrama N/S.

let horas = +prompt("¿Cuántas horas trabajo esta semana?");
let pagoHora = +prompt("Indicar su sueldo por hora")
let sueldo = 0;

if (horas <= 40){
    sueldo = pagoHora * horas;
    console.log(`Su sueldo es de: ${(pagoHora * horas) }`);
} else{
    console.log(`Su sueldo más las horas extras es de: ${ pagoHora * horas + 2 *(horas - 40)}`);
}


