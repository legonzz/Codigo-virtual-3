// Write a JavaScript program to find the area of a triangle
// where lengths of the three of its sides are 5, 6, 7.  

let lado1 = 5;
let lado2 = 6;
let lado3 = 7;

const altura = (lado1 + lado2 + lado3)/2;

const area =  Math.sqrt(altura*(altura - lado1)*(altura - lado2)*(altura - lado3));

console.log(area);

