//do while
//Hacer un programa para que se ingrese "n" notas
//para calcular el promedip de todas ellas
//El usuario ingresa todas las notas hasta que ingresa
//el numero = -1, el cual es el indicador del fin del ingreso

let semaforo = true;
let notas = [];
let suma = 0;

do {
  let nota = +prompt("Ingrese una nueva nota");
  if (nota === -1){
      semaforo = false;
  } else { 
  notas.push (nota);
  suma += nota;
}
} while (semaforo === true);

console.log(`Promedio de notas: ${suma / notas.length}`);

