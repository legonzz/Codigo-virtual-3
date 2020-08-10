/**
 * Devuelve un arreglo de la misma cantidad de
 * elementos del arreglo ariginal con las
 * transformaciones que se le haga a cada elemento
 * La función map no puede retornar más elementos
 */
console.log("/////MAP/////");
let nombres = ["Joaquin", "Maria", "Erika", "Renzo", "Alejandra"];
let nombresMayusculas = nombres.map((name) => {
  return {
    original: name,
    minuscula: name.toLowerCase(),
    mayuscula: name.toUpperCase(),
  };
});
console.log(nombresMayusculas);

//------------------------
console.log("///SPLICE///");
//array.splice(posicion_inicial,elementos_a_eliminar,elementos_a_insertar)

let productos = [
  "TV Samsung",
  "Tablet Android",
  "Laptop Razer",
  "Smarthphone Xiomi",
];

//A partir de la posición 1, se elimna un elemento
productos.splice(1, 1);
console.log(productos);

//A partir de la posición 1, eliminar 1 elemento
//e insertar otro elemento "PC GAMER"
productos.splice(0, 1, "PC Gamer");
console.log(productos);

//A partir de la posición 2, no eliminar elementos
// e insertar 2 elementos
productos.splice(2, 0, "Mouse Hyper x", "Audifonos Razer");
console.log(productos);

//-----indexOf-------
console.log("////indexOf////");
let posicionMouse = productos.indexOf("Mouse Hyper x")
console.log("posicionMouse");
console.log(posicionMouse);

//------pop-------
console.log("////pop////");
//Sirve para extraer el último elemento de un arreglo
//la función además retorna dicho elemento

let elementoEliminado = productos.pop();
console.log(`Elemento eliminado: ${elementoEliminado}`);

console.log(productos);







