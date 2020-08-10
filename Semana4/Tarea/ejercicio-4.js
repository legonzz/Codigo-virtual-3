//EJERCICIO 3.4

//El dueño de un estacionamiento requiere un diagrama de flujo con
//el algoritmo que le permita determinar cuánto debe cobrar por el
//uso del estacionamiento a sus clientes. Las tarifas que se tienen son
//las siguientes:
//Las dos primeras horas a $5.00 c/u.
//Las siguientes tres a $4.00 c/u.
//Las cinco siguientes a $3.00 c/u.
//Después de diez horas el costo por cada una es de dos pesos.


let tiempo = +prompt("¿Cuánto tiempo estuvo estacionado?");
let tarifa1 = tiempo <= 2;
let tarifa2 = tiempo <= 5;
let tarifa3 = tiempo <= 9;
let tarifa4 = tiempo >= 10;

if (tarifa1 && tiempo > 0) {
  tarifa1 = tiempo * 5;
  console.log(`Su recibo es de: ${(tarifa1 = tiempo * 5)}`);
} else if (tarifa2 && tiempo > 0) {
  tarifa2 = 10 + (tiempo - 3) * 4;
  console.log(`Su recibo es de: ${(tarifa2 = 10 + (tiempo - 3) * 4)}`);
} else if (tarifa3 && tiempo > 0) {
  tarifa3 = 17 + (tiempo - 5) * 3;
  console.log(`Su recibo es de: ${(tarifa3 = 17 + (tiempo - 5) * 3)}`);
} else if (tarifa4 && tiempo > 0) {
  tarifa4 = tiempo * 2;
  console.log(`Su recibo es de: ${(tarifa4 = tiempo * 2)}`);
} else {
  console.log(`Te crees chistonto`);
}


