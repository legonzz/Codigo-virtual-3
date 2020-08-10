// window.document --> se puede dejar de escribir window
// document => Objeto que sirve para manipular el DOM

/**
 * //Propiedades más importantes
 * document.get ElementById("id_del_elemento") : Obtiene
 * en una variable la referencia del DOM.
 */

let header = document.getElementById("header");
//Es un objeto de la clase element
console.log(header);


/**
 * getElementByClassName("nombre_de_la_clase"):
 * retorna un HTMLCollection(similar a un arreglo) 
 * de elementos que tengan la clase como parámetro
 */
let secciones = document.getElementsByClassName("miseccion");
console.log(secciones);
console.log("Cantidad de secciones");
console.log(secciones.length);

//Transformas el HTMLCollection a un array

let seccionesArreglo = Array.from(secciones);
console.log(seccionesArreglo);
seccionesArreglo.forEach((seccion)=>{
    console.log(seccion);
})

/**
 * document.querySelector("selector_de_un_elemento")
 * Retorna un elemento del DOM dado un selector al estilo CSS
 * Por ejemplo .rojo => un elemento clase "rojo"
 * Por ejemplo #seccion1 => un elemento con el id seccion1
 * OJO: querySelector devuelve sólo un elemento
 */

 let footerApp = document.querySelector("#footerApp")
console.log(footerApp);


/**
 * querySelecetorAll("selector_de_uno_o_más_elementos");
 * Retorna una colección de elementos del DOM dado un selector
 * como en CSS
 */
let divsFooter = document.querySelectorAll(".footerApp__seccion")
console.log(divsFooter);

divsFooter.forEach((div)=>{
    console.log(div);
    
})

let navegacion = document.querySelector("#navegacion")
console.log(navegacion);






