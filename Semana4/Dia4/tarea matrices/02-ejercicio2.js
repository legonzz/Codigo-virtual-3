// EJERCICIO 5.8
//Realice un algoritmo que lea un vector y a partir de él forme un segundo
//vector, de tal forma que el primer elemento pase a ser el segundo,
//el segundo pase a ser el tercero, el último pase a ser el primero, y así
//sucesivamente. Represéntelo mediante un diagrama de flujo.

let arreglo = [1, 2, 3, 4];
let arreglo_dos = [];
let arreglo_tres = [];

for (let i = 3; i < arreglo.length; i++) {
  arreglo_dos[0] = 4;
  arreglo_dos[1] = 1;
  arreglo_dos[2] = 2;
  arreglo_dos[3] = 3;
  arreglo_tres[0] = 3;
  arreglo_tres[1] = 4;
  arreglo_tres[2] = 1;
  arreglo_tres[3] = 2;
  console.log(arreglo);
  console.log(arreglo_dos);
  console.log(arreglo_tres);
  
}

/* for (let j = 3; j < arreglo_tres.length; j++) {
  arreglo_tres[0] = 3;
  arreglo_tres[1] = 4;
  arreglo_tres[2] = 1;
  arreglo_tres[3] = 2;
  console.log(arreglo_tres);
} */

/* while (
  arreglo.length > arreglo_segundo.length &&
  arreglo.length > arreglo_tercero
) {
  arreglo_segundo.push(arreglo[3], arreglo[0], arreglo[1], arreglo[2]);
  arreglo_tercero.push(arreglo[2], arreglo[3], arreglo[1], arreglo[0]);
}
console.log(arreglo);

console.log(arreglo_segundo);

console.log(arreglo_tercero); */
