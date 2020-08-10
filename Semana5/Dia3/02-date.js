//Date() clase cuyos objetos trabajan con fechas
let hoy = new Date();
console.log(hoy);

//getFullYear() retorna el año de una variable de tipo fecha
let anioActual = hoy.getFullYear();
console.log(`Año actual`);

console.log(anioActual);


let mesActual = hoy.getMonth();
//Ojo: enero empieza con el valor "0", Diciembre 11
console.log(`Mes Actual`);
console.log(mesActual);


//getDate() : retorna el día calendario de una variable Date
let diaCalendarioActual = hoy.getDate();
console.log(`El día de hoy es:`);
console.log(diaCalendarioActual);


let stringFecha = `${diaCalendarioActual}-${mesActual + 1}-${anioActual}`;
console.log(`Fecha Stirng`);
console.log(stringFecha);

/**
 * Función que retorna el número del día de la semana empezando el 0 
 * desde el domingo
 */
let diaSemana = hoy.getDay();
console.log(`Día de la semana`);
console.log(diaSemana);


let horaActual = hoy.getHours();
let minutoActual = hoy.getMinutes();
let segundoActual = hoy.getSeconds();
let milisegundoActual = hoy.getMilliseconds();

console.log(`Hora actual: ${horaActual}`);
console.log(`Minuto actual: ${minutoActual}`);
console.log(`segundo actual: ${segundoActual}`);
console.log(`Milisegundo actual: ${milisegundoActual}`);

//Iniciar una variable de tipo fecha 
//Ubicando navidad por ejemplo
//new Date(); Puede recibir año, mes, día, horas, minutos y segundos;

let navidad2020 = new Date(2020,11,25);
console.log(navidad2020);

//La diferencia de las fechas en miliseundos
let navidadMenosHoy = navidad2020 - hoy;
console.log(navidadMenosHoy);

let semanasParaNavidad = ((((navidadMenosHoy/1000)/60)/60)/24)/7;
console.log(semanasParaNavidad);









