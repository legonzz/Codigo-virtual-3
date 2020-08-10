//WHILE
let c = 0;

console.log(`Valor inicial de c =${c}`);

while (c < 8){
    //código a ejecutar mientras la
    //condición se cumpla
    console.log(`C= ${c}`);
    
    c = c + 1;
}

console.log(`Valor de C= ${c}`);

console.log("-------------------------");

//TABLA DE MULTIPLICAR DE UN NÚMERO

let base = +prompt("Ingrese el número para obtener la tabla de multiplicar");
let contador = 0;

while(contador < 12){
    //Por lo general el contador no se modifica, sólo se utiliza
    contador = contador + 1;
    console.log(`${base} x ${contador} = ${base * contador}`);
    
}
