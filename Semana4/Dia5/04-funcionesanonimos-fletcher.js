// 1. LAS FUNCIONES ANÓNIMAS SON FUNCIONES
// CUYO VALOR SE GUARDA EN UNA VARIABLE

const sumar = function(a,b){
    return a+b;
};

let rpta = sumar(7,8);
console.log(rpta);

//FUNCIÓN FLECHA

const sumarFlecha = (a,b) => {
    return a+b;
};

console.log(sumarFlecha(500,20));


