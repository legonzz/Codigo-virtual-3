//EJERCICIO 3.3: El 14 de febrero una persona desea comprarle un regalo al ser querido
//que más aprecia en ese momento, su dilema radica en qué regalo
//puede hacerle, las alternativas que tiene son las siguientes: ...
//Se requiere un diagrama de flujo con el algoritmo que ayude a determinar
//qué regalo se le puede comprar a ese ser tan especial por el
//día del amor y la amistad.

let tipoRegalo = prompt("Ingresar el precio del regalo en $.");
let anillo = tipoRegalo > 251 ;
let flores =tipoRegalo > 100;


if(tipoRegalo > 251) {
    console.log(`El regalo es un anillo`);
} else {
    console.log("El regalo cuesta menos de $251");
} if( tipoRegalo > 100 && tipoRegalo < 250){
    console.log(`El regalo es un ramo de flores`);
} else {
    console.log(`El regalo cuesta menos de $100`);
} if (tipoRegalo > 11) {
    console.log( `El regalo es una caja de chocolates`);
} else {
    console.log(`El regalo cuesta menos de $10`);
} if (tipoRegalo <= 10 && tipoRegalo >= 0.1){
    console.log(`El regalo es una tarjeta`);
} else {
    console.log(`Amiga date cuenta`);
}
