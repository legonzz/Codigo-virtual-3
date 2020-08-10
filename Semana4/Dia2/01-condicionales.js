//CONDICIONALES

debugger;

let edad = +prompt("Ingrese su edad");
let indiceMasaCorporal = 0;

/* let rpta = edad > 17; */
//comparadores aritméticos
// > mayor
// < menor
// >= mayor igual
// <= menor igual
// !==diferente
// === igual

if (edad > 17) {
  let peso = +prompt("¿Cuánto pesa usted (Kgs.)?");
  let altura = +prompt("Cuánto pesa usted (mts.)?");
  indiceMasaCorporal = peso / (altura * altura);
  if (indiceMasaCorporal > 30) {
    console.log(`No hay pase laboral #quedateencasa`);
    console.log(`Esta usted en riesgo`);
  } else {
    console.log(`Si hay pase laboral`);
  }
  console.log(`Su indice de masa corporal (IMC) es ${indiceMasaCorporal}`);
} else {
  console.log(`No hay pase laboral #quedateencasa`);
  console.log(`Esta usted muy moco`);
}
console.log("Fin del programa, hasta pronto!");




