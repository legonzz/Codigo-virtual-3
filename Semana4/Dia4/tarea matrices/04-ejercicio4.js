//Se tiene en un arreglo QUINCE elementos representando calificaciones de
//los estudiantes de una escuela. Realice un algoritmo que lea el arreglo
//y calcule la calificación promedio del grupo, además, que cuente los estudiantes
//que obtuvieron calificaciones arriba del promedio del grupo.
//Represéntelo mediante diagrama de flujo, diagrama N/S y pseudocódigo.

let alumnos = ["abel", "gerson", "raquel", "claudia", "carla", "juan", "andres","olenka","justin", "eros","leonardo","samantha","erika","homero", "pepe"];
let notas = [11,19,20,05,10,13,18,15,15,16,12,13,13,13,20];
let encontrado = true;

let nombre = prompt("Ingrese el nombre del alumno");

for (let i = 0; i < alumnos.length; i++) {
    /* console.log(`i = ${i}`); */
    if (alumnos[i]===nombre){
        console.log(`${nombre}`);
        console.log(`notas: ${notas[i]}`);
        encontrado = true;
        break;
    }
}

if (!encontrado){
    console.log("Alumno no encontrado");
}

for (let i = 0; i < notas.length; i++) {
    sum = notas.reduce((pv, cv) => pv + cv, 0);
    if (notas[i] <= sum/15) {
        continue;
    }
    console.log(`${alumnos[i]} tienen ${notas[i]} de nota`);
    
}