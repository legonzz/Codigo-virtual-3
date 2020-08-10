//EJERCICIO 3.9

//Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura
//amplia (A) y daños a terceros (B). Para el plan A, la cuota
//base es de $1,200, y para el B, de $950. A ambos planes se les carga
//10% del costo si la persona que conduce tiene por hábito beber alcohol,
//5% si utiliza lentes, 5% si padece alguna enfermedad –como deficiencia
//cardiaca o diabetes–, y si tiene más de 40 años, se le carga
//20%, de lo contrario sólo 10%. Todos estos cargos se realizan sobre
//el costo base. Realice diagrama de flujo y diagrama N/S que represente
//el algoritmo para determinar cuánto le cuesta a una persona
//contratar una póliza.


console.log(`Elegir Opción:
1. Plan A
2. Plan B`);

let poliza = +prompt("Ingresar el número (1 o 2) del plan que desea adquirir");
let edad = +prompt("Ingresar edad");
let alcohol = +prompt("Usted suele beber alcohol 1 vez por semana (marque 1 para indicar que sí y 2 para indicar que no)")
let lentes = +prompt ("Usted usa lentes a medidad (marque 1 para indicar que sí y 2 para indicar que no)")
let enfermedad = +prompt("Usted padece de alguna enfermedad cardia o diabetes (marque 1 para indicar que sí y 2 para indicar que no)")
let planA = 1200;
let planB = 950;
let total = 0;

switch(poliza){
  case 1: 
  console.log(`Usted escogió la opción 1: el plan de Cobertura Amplia`);
  break;
  case 2:
  console.log(`Usted escogió la opción 2: el plan de Daños a terceros`);
  break;
}

if( poliza == 1){
  console.log(`Su tarifa inicial es de: ${planA}`);
} else {
  console.log(`Su tarifa inicial es de: ${planB}`);
} if (edad >= 40 ){
  console.log(`Recargo por edad: ${(20*1200)/100}`);
} else {
  console.log(`Recargo preventivo: ${(10*1200)/100}`);
} if (alcohol == 1){
  console.log(`Recargo por tomar alcohol: ${(5*1200)/100}`);
} if (lentes == 1){
  console.log(`Recargo por usar lentes: ${(5*1200)/100}`);
} else{
  console.log(`No aplica: ${0}`);
} if (enfermedad == 1){
  console.log(`Recargo por enfermedades de riesgo: ${(5*1200)/100}`);
} else{
  console.log(`No aplica: ${0}`);
}  if (edad >= 40){
  console.log(`Recargo por edad: ${(20*950)/100}`);
} else {
  console.log(`Recargo preventivo: ${(10*950)/100}`);
} if (alcohol == 2){
  console.log(`Recargo por tomar alcohol: ${(5*950)/100}`);
} if (lentes == 2){
  console.log(`Recargo por usar lentes: ${(5*950)/100}`);
} else{
  console.log(`No aplica: ${0}`);
} if (enfermedad == 2){
  console.log(`Recargo por enfermedades de riesgo: ${(5*950)/100}`);
} else{
  console.log(`No aplica: ${0}`);
} if (poliza == 1){
  console.log(`Su recargo total es: ${planA + edad + alcohol + lentes + enfermedad}`);
}


//////////////////////




