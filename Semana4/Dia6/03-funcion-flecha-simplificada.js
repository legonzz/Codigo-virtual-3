//Regla 1: si la función sólo tiene una línea de ejecución, se puede omitir las llaves


const suma = (a,b) => console.log(a+b);

suma(52,11);

//Regla 2: si la función recibe un parámetro solamente, se pueden omitir los paréntesis

const cuadrado = numero => console.log(numero * numero);
cuadrado(12)

//Regla 3: Si la función sólo tiene una línea de ejecución y a suv vez retorna un valor
//se puede obviar la palabra recerbada return y en su lugar encerrar el retorno en un paréntesis
const cubo = n => (n*n*n)
console.log(cubo(4));
