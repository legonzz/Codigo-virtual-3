//EJERCICIO 3.11

//Se les dará un bono por antigüedad a los empleados de una tienda.
//Si tienen un año, se les dará $100; si tienen 2 años, $200, y así
//sucesivamente hasta los 5 años. Para los que tengan más de 5, el
//bono será de $1000. Realice un algoritmo y represéntelo mediante
//el diagrama de flujo, el pseudocódigo y diagrama N/S que permita
//determinar el bono que recibirá un trabajador.

let tiempo = +prompt("Ingresar años trabajando con nosotros");
let bono = 0;


console.log(`Cantidad de tiempo trabajando = ${1}`);
console.log(`Cantidad recibida por el bono de tiempo = ${100}`);


if (tiempo <= 5) {
    bono = tiempo * 100;
} else if(tiempo > 5){
    bono = 1000;
}
console.log(`Usted recibirá un bono de ${bono} por ${tiempo} años de trabajo`);


