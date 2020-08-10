let body = document.querySelector("body");
body.style.backgroundColor = "#444444"

//elemento.classlist

//classList es un Atributo que permite trabajar con las clases de un elemento
//como añadir clase, listar elemento que tiene
//y quitar clase y hasta agregar/quitar clase como interruptor 

let header =  document.querySelector("header");
console.log("Lista de clases del elemeto");
console.log(header.classList);

/**
 * elemento.classList.add ("nombre_de_la_clase")
 * Añade un elemento a una clase del DOM
 * TODO : remove contains
 */

 header.classList.add("header");

 /**
  * elemento.clientWidth = Devuelve el ancho del elemento;
  * elemento.clientHeight
  */

  let seccion1 = document.querySelector(".seccion1");
  console.log(`Ancho de .seccion1: ${seccion1.clientWidth}`);
  console.log(`Ancho de .seccion1: ${seccion1.clientHeight}`);

  //elemento.offsetOff = devuelve la cantidad de pixeles que el elemento
  //dista con la parte superior del viewport


  //elemento.offsetLeft = devuelve la cantidad de pixeles que el elemento
  //dista con la parte izquierda del viewport

  console.log(`Pixeles desde top de .seccion1: ${seccion1.offsetTop}`);
  console.log(`Pixeles desde la izquierda de .seccion1: ${seccion1.offsetLeft}`);

  //elemento .scrollTop => Devuelve la cantidad de pixeles que el elemento 
  //lleva como scroll interno
  console.log(`Seccion scrollTop: ${seccion1.scrollTop}`);

  let html = document.querySelector("html");

  console.log(`html scrollTop: ${(html.scrollTop)}`);


  let imagen = document.querySelector("img");

/*   let altoPantalla = window.innerHeight; */

  body.onscroll = (e) =>{
    let scrollAbajo = html.scrollTop;

    if (scrollAbajo > 200) {
        imagen.style.height = "200px"
    } else{
        imagen.style.height = scrollAbajo + "px";
    }
    

  }
  
  
  
  