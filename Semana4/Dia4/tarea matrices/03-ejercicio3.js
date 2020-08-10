//Realice un algoritmo que lea dos vectores de DIEZ elementos y que calcule
//la suma de éstos guardando su resultado en otro vector, el cual se
//debe presentar en forma impresa.

let arreglo = [1,2,3,4,5,6,7,8,9,10];
let arreglo_dos = [11,12,13,14,15,16,17,18,19,20];
let arreglo_tres= []



for (let i = 9; i < arreglo.length; i++) {
    for (let j = 9; j < arreglo_dos.length; j++) {
        sum = arreglo.reduce((pv, cv) => pv + cv, 0);
        sum1 = arreglo_dos.reduce((pv, cv) => pv + cv, 0);
        arreglo_tres[0]= sum+sum1;
        console.log(arreglo);
        console.log(arreglo_dos);
        console.log(arreglo_tres); 
    }
}


  
  