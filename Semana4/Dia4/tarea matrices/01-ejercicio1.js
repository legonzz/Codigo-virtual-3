//Ejercicio 5.6
//Realice y represente mediante diagrama de flujo y pseudocódigo un
//algoritmo que lea los nombres y las edades de diez alumnos, y que los
//datos se almacenen en dos vectores, y con base en esto se determine
//el nombre del alumno con la edad mayor del arreglo.

let nombres = ["juan", "julia","sandra","ruben","john", "salomon","renzo","claudia","diana","ignacio"];
let edades = [39,10,13,48,29,58,18,26,47,11];

for (let i = 0; i < nombres.length; i++) {
    for (let j = 0; j < edades.length; j++) {
        if (edades [i] < 57) {
            continue;
        }  
        console.log(`${nombres[i]} tiene ${edades[i]} años`);
    }
}