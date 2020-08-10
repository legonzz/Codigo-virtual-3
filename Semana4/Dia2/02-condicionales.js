//CONDICIONALES

let edad = +prompt("Ingrese su edad");
let peso = +prompt("¿Cuánto pesa usted (Kgs.)?");
let altura = +prompt("Cuánto pesa usted (mts.)?");
let indiceMasaCorporal = 0;

/* let rpta = edad > 17; */
//comparadores aritméticos
// > mayor
// < menor
// >= mayor igual
// <= menor igual
// !==diferente
// === igual

//Comparadores lógicos

// Y : &&
// O : ||
// not : !
indiceMasaCorporal = peso / (altura * altura);

if (edad > 17 && indiceMasaCorporal <= 30) {
  console.log(`Si hay pase laboral`);
} else {
  console.log(`No hay pase laboral #quedateencasa`);
  console.log(`Esta usted muy moco o el IMC excede el valor de 30`);
}
console.log(`Su indice de masa corporal (IMC) es ${indiceMasaCorporal}`);
console.log("Fin del programa, hasta pronto!");}