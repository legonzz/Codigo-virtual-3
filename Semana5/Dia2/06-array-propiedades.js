//arreglo.forEach(()=>{})
/**
 * El callback se ejecuta tantas veces como elementos
 * tenga el arreglo
 */

/* peliculas.forEach((peli)=>{
  console.log(peli);
  
}) */

/**
 * elemento-iteración-copia de todo el arreglo
 */

let arreglo = ["Gonzalo", "Jose", "Roberta", "Renata"];

const iteracion = (elemento, i, z) => {
  console.log(z);
  
  console.log(`${i} => ${elemento}`);
}

arreglo.forEach(iteracion)


peliculas.forEach((objPelicula, i) => {
  console.log(`${i} : ${objPelicula.title}`);
  //desventaja, no se puede retornar elementos de la función
  //forEach((elemento,x,z)=>{})
  //elemento = elemento_actual, x = iteración y z = copia del arreglo
  //El signo de interrogación en la programación es un parámetro opcional
});

//filter
console.log("/////Filter//////");

/**
 * Función de los arreglos que recibe un callback en el cual
 * se pueden RETORNAR un arreglo de elementos de acuerdo a ciertas 
 * condiciones. Sirve como un filtro de elementos. Se ejecuta el
 * callback por cuantos elementos tenga. Es muy parecido al forEach
 * recibe los mismos parámetros. Siempre va a retornar todos los parámetros
 * independientemente de lo que se retorne (objPelicula.title --> siempre 
 * retorna todo el parámetro)
 */

 let numero = [20,48,-1,22,11,-55,2,8,10,99];

 let mayoresQueDiez = numero.filter((elemento, i, arreglo)=>{
   if (elemento >= 10) {
     return elemento;
   }
 });

 console.table(mayoresQueDiez);

 let peliculasExtranjeras = peliculas.filter((objPelicula)=> {
   if (objPelicula.original_language !== "en"){
     return objPelicula;
   }
 });

 console.log(peliculasExtranjeras);


 
 
 