/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */

let totalNumber = 0;

const multiploDe3y5 =(number)=>{
    for (let i = 0; i < number; i++) {
        let restoDe3 = i % 3;
        let restoDe5 = i % 5;
        if (restoDe3 === 0 || restoDe5 === 0) {
            totalNumber = totalNumber + i;
        }
    }
    return totalNumber
}

let respuesta = multiploDe3y5(1000);
console.log(respuesta);




/* if(a < 1){
    a = a + funcion;
    console.log(a);
} */
 
 





