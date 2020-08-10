//FUNCIONES
// 1. Funciones que no delvuelven valor ni retornan resultado

function imprimirFecha() {
  //COMO CREAR UNA FECHA Y HORA GUARDADA DEL ORDENADOR
  let fecha = new Date();
  console.log(fecha);
}

// 2.Funciones que retornan valor y no reciben parámetros
function retornarFecha (){
    let fecha = new Date();
    return fecha;
}

// 3. Funciones que retornan valor y reciben parámetros
/**
 * Función que retorna dos umeros
 * @param {number} a primer número
 * @param {number} b segundo número
 * @return {number} el resultado
 */
function retornarBinomio(a,b){
    let rpta = (a*a )+ (2*a*b) + (b*b);
    return rpta;
}

// 4.Funciones que no retornan valor y reciben parámetros
function imprimirPares(numeros){
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]%2===0){
            console.log(numeros[i]);
            
        }
    }
}

//LLAMANDO O INVOCANDO A EJECUTAR UNA FUNCIÓN

imprimirFecha();

//INVOCANDO A UNA FUNCIÓN QUE RETORNA VALOR
console.log( retornarFecha());

//INVOCANDO A LA FUNCIÓN QUE RETORNAN VALOR Y RECIBEN PARÁMETROS
let resultadoBinomio = retornarBinomio(4,9);
console.log(resultadoBinomio);

//INVOCANDO A LA FUNCIÓNQUE NO RETORNA VALOR Y RECIBEN PARÁMETROS
let arreglo = [19,24,6,32,32,56,87,1,67]
imprimirPares(arreglo);



