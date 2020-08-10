let btnTitulo1 = document.querySelector("#btnTitulo1");
let btnTitulo2 = document.querySelector("#btnTitulo2");
let h1 = document.querySelector("h1");
let selectPeliculas = document.getElementById("selectPeliculas");
let btnSelect = document.getElementById("btnSelect");


btnTitulo1.onclick = ()=>{
  /**
   * elemento.innerText : setea el contenido de una etiqueta
   * OJO: se debe considerar sólo el contenido a nivel de texto
   * y no de HTML.
   */

   h1.innerText = "Nuevo <strong>Titulo</strong> 1";
};

btnTitulo2.onclick = ()=> {
  /**
   * elemento.innerHTML : setea el contenido de una etiqueta a
   * nivel de texto y reconoce etiquetas HTML
   */
  h1.innerHTML = "Nuevo <strong>Titulo</strong> 2"
};


const llenarSelect = () =>{
  let contenido = "";
  peliculas.forEach((objPelicula)=>{
    contenido = contenido +`<option value ="${objPelicula.id}">${objPelicula.title}</option>`
  });
  selectPeliculas.innerHTML = contenido;
}


btnSelect.onclick = ()=>{
  //llenar el select
  llenarSelect();
}