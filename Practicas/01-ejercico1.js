/**
 * Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
 */

let fechaActual = new Date();

let anioActual = fechaActual.getFullYear();

let mesActual = fechaActual.getMonth();

let diaHoy = fechaActual.getDay();

let horaActual = fechaActual.getHours();

let minutosActual = fechaActual.getMinutes();

let segundos = fechaActual.getSeconds();

const tiempoHoras = ()=>{
    if (horaActual > 12) {
        let horaFraccion = `${horaActual%12} PM`;
        return horaFraccion;
    } else {
        return horaActual;
    }
};

let horas = tiempoHoras();




console.log(`El día de hoy es: ${diaHoy+2}/${mesActual+1}/${anioActual}`);
console.log(`La hora es: ${horas} : ${minutosActual} : ${segundos}`);


 


