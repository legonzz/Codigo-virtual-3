//FUNCIONES CON PARÁMETROS POR DEFECTO

function trinomioCuadrado(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    let rpta = a * a * a + b * b * b + c * c * c;
    return rpta;
  } else {
    console.error("los datos proporcionados no son correctos");
    return 0;
  }
}

let resultado = trinomioCuadrado(2, 4, 8);
console.log(resultado);



/**
 * Función que recibe un arreglo de nombres y un nombres a buscar
 * si el algoritmo encuentra el nombre buscado dentro del arreglo,
 *  retorna true, en caso contrario, retorna false
 * @param {array} nombres 
 * @param {string} busqueda 
 * @return {boolean}
 */
function buscarNombre(nombres = [], busqueda = ""){
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i]===busqueda){
            //La sentencia RETURN en una función, no solo retorna un valor
            //sino que también hace que la función deje de ejecutarse en ese momento
            //sentencia no importa si está dentro de un for, while if, etc
            return true;
        }
        
    }
    return false;
}

let nombres = ["martin","jaime","anita","paola","daniel"];
let resultadoBusqueda = buscarNombre();
console.log(resultadoBusqueda);


//FUNCTION isNaN
//ES UNA FUNCIÓN QUE DEVUELVE TRUE SI EL VALOR QUE TIENE DENTRO NO ES UN NÚMERO
//ES UNA FUNCIÓN QUE DEVUELVE FALSE SI EL VALOR QUE TIENE DENTRO ES UN NÚMERO

console.log(isNaN(5));
console.log(isNaN("TEXTO"));




