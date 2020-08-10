//window => objeto que representa al navegador 
//y todas sus propiedades internas.
// es un objeto global
//Obtener altura y ancho del viewport

let alto = window.innerHeight;
let ancho = window.innerWidth;

console.log(`Ancho : ${ancho}`);
console.log(`Alto : ${alto}`);

//Window.location tiene un objeto con la direccion que se 
//está visitando a través del navegador
let navegacion = window.location;
console.log(navegacion);

let url = navegacion.href;
console.log(url);


console.log(`${navegacion}`);

//window.document => objeto que tiene toda la información del DOM

console.log(window.document);



console.log(window);


