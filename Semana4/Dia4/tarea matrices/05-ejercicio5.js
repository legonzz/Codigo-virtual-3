//Una compañía de transporte cuenta con cinco choferes, de los cuales
//se conoce: nombre, horas trabajadas cada día de la semana (seis días)
//y sueldo por hora. Realice un algoritmo que:
//a) Calcule el total de horas trabajadas a la semana para cada trabajador.
//b) Calcule el sueldo semanal para cada uno de ellos.
//c) Calcule el total que pagará la empresa.
//d) Indique el nombre del trabajador que labora más horas el día lunes.
//e) Imprima un reporte con todos los datos anteriores.

let nombres = 
  ["a", "b", "c", "d", "e"];

let horas = [8,3,5,7,8,3];

let dia = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]

let pago =[240,90,150,210,240,90]

let buscar = prompt("nombre del chofer")

for (let i = 0; i < nombres.length; i++) {
    for (let j = 0; j < horas.length; j++) {
        for (let k = 0; k < dia.length; k++) {
            sum = horas.reduce((pv, cv) => pv + cv, 0);
            console.log(`El chofer ${buscar} trabajó ${sum} horas en la semana`);
            break;
        }
    }
}

for (let i = 0; i < nombres.length; i++) {
    for (let j = 0; j < pago.length; j++) {
        sum2 = pago.reduce((pv, cv) => pv + cv, 0);
        console.log(`El chofer ${buscar} ganó ${sum2} esta semana`);
    }
    
}